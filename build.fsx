// --------------------------------------------------------------------------------------
// FAKE build script
// --------------------------------------------------------------------------------------

#I "packages/FAKE/tools"
#r "packages/FAKE/tools/FakeLib.dll"
open System
open System.IO
open Fake
open Fake.Git
open Fake.ProcessHelper
open Fake.ReleaseNotesHelper
open Fake.ZipHelper

#if MONO
#else
#load "src/atom-bindings.fsx"
#load "src/atom-extra.fs"
#load "src/paket.fs"
#load "src/main.fs"

#endif

// Git configuration (used for publishing documentation in gh-pages branch)
// The profile where the project is posted
let gitOwner = "Ionide"
let gitHome = "https://github.com/" + gitOwner

// The name of the project on GitHub
let gitName = "ionide-paket"

// The url for the raw files hosted
let gitRaw = environVarOrDefault "gitRaw" "https://raw.github.com/Ionide"

let tempReleaseDir = "temp/release"

// Read additional information from the release notes document
let releaseNotesData =
    File.ReadAllLines "RELEASE_NOTES.md"
    |> parseAllReleaseNotes

let release = List.head releaseNotesData

let run cmd args dir =
    if execProcess( fun info ->
        info.FileName <- cmd
        if not( String.IsNullOrWhiteSpace dir) then
            info.WorkingDirectory <- dir
        info.Arguments <- args
    ) System.TimeSpan.MaxValue = false then
        traceError <| sprintf "Error while running '%s' with args: %s" cmd args

let apmTool =
    #if MONO
        "apm"
    #else
        Environment.GetFolderPath(Environment.SpecialFolder.LocalApplicationData) </> "atom" </> "bin" </> "apm.cmd"
    #endif

let atomTool =
    #if MONO
        "atom"
    #else
        Environment.GetFolderPath(Environment.SpecialFolder.LocalApplicationData) </> "atom" </> "bin" </> "atom.cmd"
    #endif


Target "TryPackage"( fun _ ->
    killProcess "atom"
    run apmTool "uninstall ionide-paket" ""
    run apmTool "link" "release"
    run atomTool __SOURCE_DIRECTORY__ ""
)


// --------------------------------------------------------------------------------------
// Build the Generator project and run it
// --------------------------------------------------------------------------------------

Target "Clean" (fun _ ->
    CleanDir "temp/release"
)

Target "BuildGenerator" (fun () ->
    [ __SOURCE_DIRECTORY__ @@ "src" @@ "Ionide.Paket.fsproj" ]
    |> MSBuildDebug "" "Rebuild"
    |> Log "AppBuild-Output: "
)

Target "RunGenerator" (fun () ->

        (TimeSpan.FromMinutes 5.0)
        |> ProcessHelper.ExecProcess (fun p ->
            p.FileName <- __SOURCE_DIRECTORY__ @@ "src" @@ "bin" @@ "Debug" @@ "Ionide.Paket.exe" )
        |> ignore
)
#if MONO
#else
Target "RunScript" (fun () ->
    Ionide.Paket.Generator.translateModules "../release/lib/paket.js"
)
#endif

Target "InstallDependencies" (fun _ ->
    let args = "install"

    let srcDir = "release"
    let result =
        ExecProcess (fun info ->
            info.FileName <- apmTool
            info.WorkingDirectory <- srcDir
            info.Arguments <- args) System.TimeSpan.MaxValue
    if result <> 0 then failwithf "Error during running apm with %s" args
)



Target "TagDevelopBranch" (fun _ ->
    StageAll ""
    Git.Commit.Commit "" (sprintf "Bump version to %s" release.NugetVersion)
    Branches.pushBranch "" "origin" "develop"

    let tagName = "develop-" + release.NugetVersion
    Branches.tag "" tagName
    Branches.pushTag "" "origin" tagName
)


Target "PushToMaster" (fun _ ->
    CleanDir tempReleaseDir
    Repository.cloneSingleBranch "" (gitHome + "/" + gitName + ".git") "master" tempReleaseDir

    let cleanEverythingFromLastCheckout() =
        let tempGitDir = Path.GetTempPath() </> "gitrelease"
        CleanDir tempGitDir
        CopyRecursive (tempReleaseDir </> ".git") tempGitDir true |> ignore
        CleanDir tempReleaseDir
        CopyRecursive tempGitDir (tempReleaseDir  </> ".git") true |> ignore

    cleanEverythingFromLastCheckout()
    CopyRecursive "release" tempReleaseDir true |> tracefn "%A"
    CopyFiles tempReleaseDir ["README.md"; "RELEASE_NOTES.md"; "LICENSE" ]

    StageAll tempReleaseDir
    Git.Commit.Commit tempReleaseDir (sprintf "Release %s" release.NugetVersion)
    Branches.push tempReleaseDir
)

Target "Release" (fun _ ->
    let args = sprintf "publish %s" release.NugetVersion
    let result =
        ExecProcess (fun info ->
            info.FileName <- apmTool
            info.WorkingDirectory <- tempReleaseDir
            info.Arguments <- args) System.TimeSpan.MaxValue
    if result <> 0 then failwithf "Error during running apm with %s" args
    DeleteDir "temp/release"
)

// --------------------------------------------------------------------------------------
// Run generator by default. Invoke 'build <Target>' to override
// --------------------------------------------------------------------------------------

Target "Default" DoNothing

#if MONO
"Clean"
  ==> "BuildGenerator"
  ==> "RunGenerator"
  ==> "InstallDependencies"
#else
"Clean"
  ==> "RunScript"
  ==> "InstallDependencies"
#endif

"InstallDependencies"
  ==> "Default"
  ==> "TagDevelopBranch"
  ==> "PushToMaster"
  ==> "Release"

"InstallDependencies"
    ==> "TryPackage"


RunTargetOrDefault "Default"
