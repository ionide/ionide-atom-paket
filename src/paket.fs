[<ReflectedDefinition; CompilationRepresentation(CompilationRepresentationFlags.ModuleSuffix)>]
module Ionide.Paket

open System
open FunScript
open FunScript.TypeScript
open FunScript.TypeScript.child_process
open FunScript.TypeScript.AtomCore
open Atom

module PaketService =
    type Options = {cwd : string}

    let mutable currentNotification : Notification option = None

    let location =
        if Globals._process.platform.StartsWith("win") then
            Globals.atom.packages.packageDirPaths.[0] + @"\ionide-paket\bin\paket.exe"
        else
            Globals.atom.packages.packageDirPaths.[0] + @"/ionide-paket/bin/paket.exe"


    let bootstrapperLocation =
        if Globals._process.platform.StartsWith("win") then
            Globals.atom.packages.packageDirPaths.[0] + @"\ionide-paket\bin\paket.bootstrapper.exe"
        else
            Globals.atom.packages.packageDirPaths.[0] + @"/ionide-paket/bin/paket.bootstrapper.exe"

    let jq (selector : string) = Globals.Dollar.Invoke selector
    let jq'(selector : Element) = Globals.Dollar.Invoke selector

    let jqC (context: Element) (selector : string) = Globals.Dollar.Invoke (selector,context)


    let notice isError text details =
        match currentNotification with
        | Some n -> let view = Globals.atom.views.getView (n)
                    let t = ".content .detail .detail-content" |> jqC view
                    let line = "<div class='line'>" + details + "</div>"
                    t.append(line) |> ignore
                    ()
        | None -> let n = if isError then
                            Globals.atom.notifications.addError(text, { detail = details; dismissable = true })
                          else
                            Globals.atom.notifications.addInfo(text, { detail = details; dismissable = true })
                  currentNotification <- Some n



    let handle error input =
        let output = input.ToString()
        Globals.console.log(output)
        if error then
            notice true "Paket error" output
        else
            notice false "" output
        ()

    let handleSilent input =
        if input <> null then
            let output = input.ToString()
            Globals.console.log(output)

    let handleExit (code:string) =
        currentNotification |> Option.iter (fun n ->
            let view = Globals.atom.views.getView (n) |> jq'
            view.removeClass("info") |> ignore
            view.removeClass("icon-info") |> ignore
            if code = "0" && view.hasClass("error") |> not then
                view.addClass("success") |> ignore
                view.addClass("icon-check") |> ignore
            else
                view.addClass("error") |> ignore
                view.addClass("icon-flame") |> ignore
        )

    let spawn location (cmd : string) =
        let cmd' = cmd.Split(' ');
        let options = {cwd = Globals.atom.project.getPaths().[0]} |> unbox<AnonymousType599>
        let procs = if Globals._process.platform.StartsWith("win") then
                        Globals.spawn(location, cmd', options)
                    else
                        let prms = Array.concat [ [|location|]; cmd']
                        let path = Globals.atom.config.get("ionide-paket.MonoPath") |> unbox<string>
                        Globals.spawn(path + "/mono", prms, options)

        currentNotification <- None
        procs.on("exit",unbox<Function>(handleExit)) |> ignore
        procs.stdout.on("data", unbox<Function>(handle false )) |> ignore
        procs.stderr.on("data", unbox<Function>(handle true )) |> ignore
        ()

    let spawnSilent location (cmd : string) =
        let cmd' = cmd.Split(' ');
        let options = {cwd = Globals.atom.project.getPaths().[0]} |> unbox<AnonymousType599>
        let procs = if Globals._process.platform.StartsWith("win") then
                        Globals.spawn(location, cmd', options)
                    else
                        let prms = Array.concat [ [|location|]; cmd']
                        let path = Globals.atom.config.get("ionide-paket.MonoPath") |> unbox<string>
                        Globals.spawn(path + "/mono", prms, options)
        procs.on("exit",unbox<Function>(handleSilent)) |> ignore
        procs.stdout.on("data", unbox<Function>(handleSilent )) |> ignore
        procs.stderr.on("data", unbox<Function>(handleSilent )) |> ignore
        ()



    let exec location cmd handler =
        let options = {cwd = Globals.atom.project.getPaths().[0]} |> unbox<AnonymousType600>

        let child =
            if Globals._process.platform.StartsWith("win") then
                Globals.exec(location + " " + cmd, options, handler )
            else
                Globals.exec("mono " + location + " " + cmd, options, handler )
        ()

    let execPaket cmd handler = exec location cmd handler
    let spawnPaket cmd = spawn location cmd

    type PackageAddSettings = {
        Versioned : bool
        AddToCurrentProject : bool
    }

    module PackageView =
        let mutable name = "";
        let mutable group = "";
        let mutable settings = { Versioned =  false; AddToCurrentProject = false }
        let mutable packagesListView : (atom.SelectListView * IPanel) option = None
        let mutable versionsListView : (atom.SelectListView * IPanel) option = None
        let mutable removeListView : (atom.SelectListView * IPanel) option = None
        let mutable updatePackageListView : (atom.SelectListView * IPanel) option = None
        let mutable updateGroupListView : (atom.SelectListView * IPanel) option = None
        let mutable inCurrentProject = false

        type ItemDescription = {
            data : string
        }

        let handlerAddItems (lv : atom.SelectListView) (error : Error) (stdout : Buffer) (stderr : Buffer) =
            if(stdout.toString() = "") then
                [||]
            else
                stdout.toString().Split('\n')
                |> Array.map(fun n -> {data = n} :> obj)
            |> lv.setItems
            |> ignore

        let viewForItem desc =
            if JS.isDefined desc then
                sprintf "<li>%s</li>" desc.data |> jq
            else
                "<li></li>" |> jq

        let registerListView stopChangingCallback cancelledCallback confirmedCallback removeFiler=
            let listView = SelectListViewCtor ()
            let editorView =
                listView
                |> unbox<JQuery>
                |> fun t' -> t'.[0].firstChild
                |> unbox<FunScript.TypeScript.atom.EditorView>
                |> fun n -> n.getModel()

            editorView.getBuffer().stoppedChangingDelay <- 200.
            editorView.getBuffer().onDidStopChanging(stopChangingCallback editorView listView )

            let panel =
                { PanelOptions.item = unbox<JQuery> (listView)
                  PanelOptions.priority = 100
                  PanelOptions.visible = false }
                |> Globals.atom.workspace.addModalPanel

            do listView.``getFilterKey <-``(Func<_>(fun _ -> "name" :> obj))
            if removeFiler then listView.``getFilterQuery <-``(Func<_>(fun _ -> ""))
            do listView.``viewForItem <-``(unbox<Func<_,_>>(viewForItem) )
            do listView.``cancelled <-``(cancelledCallback)
            do listView.``confirmed <-`` (confirmedCallback)

            listView,panel

        let registerPackagesListView () =
            let stopChangingCallback (ev : IEditor) lv = fun () ->
                let txt = ev.getText()
                if txt.Length > 2 then
                    let cmd = "find-packages searchtext " + txt + " -s"
                    execPaket cmd (Func<_,_,_,_>(handlerAddItems lv))

            let cancelledCallback = Func<_>(fun _ -> packagesListView |> Option.iter(fun (model, view) ->  view.hide()) :> obj)

            let confirmedCallback = unbox<Func<_, _>> (fun (packageDescription : ItemDescription) ->
                                        name <- packageDescription.data.Trim()
                                        group <- ""

                                        packagesListView |> Option.iter (fun (model, view) -> view.hide())
                                        if settings.Versioned then
                                            versionsListView |> Option.iter ( fun (model, view) ->
                                                view.show()
                                                model.focusFilterEditor() |> ignore
                                                let cmd = "find-package-versions nuget " + name + " -s"
                                                execPaket cmd (Func<_,_,_,_>(handlerAddItems model))


                                            ) :> obj
                                        else
                                            let projectStr =
                                                if not settings.AddToCurrentProject then "" else
                                                try
                                                    let path = Globals.atom.workspace.getActiveTextEditor().buffer.file.path
                                                    " project \"" + path + "\""
                                                with
                                                | _ ->
                                                    notice true "Paket error" ".*proj file needs to be open"
                                                    ""

                                            "add nuget " + name + projectStr |> spawnPaket :> obj)

            registerListView stopChangingCallback cancelledCallback confirmedCallback true

        let registerVersionListView () =
            let stopChangingCallback (ev : IEditor) (lv : atom.SelectListView) = fun () -> ()
            let cancelledCallback = Func<_>(fun _ -> versionsListView |> Option.iter(fun (model, view) ->  view.hide()) :> obj)
            let confirmedCallback = unbox<Func<_, _>> (fun (packageDescription : ItemDescription) ->
                                        versionsListView |> Option.iter (fun (model, view) -> view.hide())
                                        "add nuget " + name + " version " + packageDescription.data |> spawnPaket :> obj
                )
            registerListView stopChangingCallback cancelledCallback confirmedCallback false

        let registerRemoveListView () =
            let stopChangingCallback (ev : IEditor) (lv : atom.SelectListView) = fun () -> ()

            let cancelledCallback = Func<_>(fun _ -> removeListView |> Option.iter(fun (model, view) ->  view.hide()) :> obj)

            let confirmedCallback = unbox<Func<_, _>> (fun (packageDescription : ItemDescription) ->
                                        group <- packageDescription.data.Split(' ').[0].Trim()
                                        name <- packageDescription.data.Split(' ').[1].Trim()
                                        removeListView |> Option.iter (fun (model, view) -> view.hide())
                                        if inCurrentProject |> not then
                                            "remove nuget " + name |> spawnPaket :> obj
                                        else
                                            let projectStr =
                                                if not settings.AddToCurrentProject then "" else
                                                try
                                                    let path = Globals.atom.workspace.getActiveTextEditor().buffer.file.path
                                                    " project \"" + path + "\""
                                                with
                                                | _ ->
                                                    notice true "Paket error" ".*proj file needs to be open"
                                                    ""

                                            "remove nuget " + name + projectStr |> spawnPaket :> obj)

            registerListView stopChangingCallback cancelledCallback confirmedCallback false

        let registerUpdatePackageListView () =
            let stopChangingCallback (ev : IEditor) (lv : atom.SelectListView) = fun () -> ()

            let cancelledCallback = Func<_>(fun _ -> updatePackageListView |> Option.iter(fun (model, view) ->  view.hide()) :> obj)

            let confirmedCallback = unbox<Func<_, _>> (fun (packageDescription : ItemDescription) ->
                                        group <- packageDescription.data.Split(' ').[0].Trim()
                                        name <- packageDescription.data.Split(' ').[1].Trim()
                                        updatePackageListView |> Option.iter (fun (model, view) -> view.hide())
                                        if inCurrentProject |> not then
                                            "update nuget " + name |> spawnPaket :> obj
                                        else
                                            let projectStr =
                                                if not settings.AddToCurrentProject then "" else
                                                try
                                                    let path = Globals.atom.workspace.getActiveTextEditor().buffer.file.path
                                                    " project \"" + path + "\""
                                                with
                                                | _ ->
                                                    notice true "Paket error" ".*proj file needs to be open"
                                                    ""

                                            "update nuget " + name + projectStr |> spawnPaket :> obj)

            registerListView stopChangingCallback cancelledCallback confirmedCallback false

        let registerUpdateGroupListView () =
            let stopChangingCallback (ev : IEditor) (lv : atom.SelectListView) = fun () -> ()

            let cancelledCallback = Func<_>(fun _ -> updateGroupListView |> Option.iter(fun (model, view) ->  view.hide()) :> obj)

            let confirmedCallback = unbox<Func<_, _>> (fun (packageGroup: ItemDescription) ->
                                        group <- packageGroup.data.Split(' ').[0].Trim()
                                        updateGroupListView |> Option.iter (fun (model, view) -> view.hide())
                                        "update group " + group |> spawnPaket :> obj)

            registerListView stopChangingCallback cancelledCallback confirmedCallback false



    let UpdatePaket () = spawn bootstrapperLocation ""
    let UpdatePaketSilent () = spawnSilent bootstrapperLocation ""
    let Init () = "init" |> spawnPaket
    let Install () = "install" |> spawnPaket
    let Update () = "update" |> spawnPaket
    let Outdated () = "outdated" |> spawnPaket
    let Restore () = "restore" |> spawnPaket
    let AutoRestoreOn () = "auto-restore on" |> spawnPaket
    let AutoRestoreOff () = "auto-restore off" |> spawnPaket
    let ConvertFromNuget () = "convert-from-nuget" |> spawnPaket
    let Simplify () = "simplify" |> spawnPaket

    let Add settings () =
        PackageView.settings <- settings
        PackageView.packagesListView |> Option.iter(fun (model, view) ->
        view.show()
        model.focusFilterEditor() |> ignore)

    let Remove inCurrentProject () =
        PackageView.inCurrentProject <- inCurrentProject
        PackageView.removeListView |> Option.iter(fun (model, view) ->
        let cmd = if inCurrentProject |> not then
                        "show-installed-packages -s"
                  else
                        let projectStr =
                            let path = Globals.atom.workspace.getActiveTextEditor().buffer.file.path
                            " project \"" + path + "\""
                        "show-installed-packages" + projectStr + " -s"
        execPaket cmd (Func<_,_,_,_>(PackageView.handlerAddItems model))
        view.show()
        model.focusFilterEditor() |> ignore

        )

    let UpdatePackage inCurrentProject () =
        PackageView.inCurrentProject <- inCurrentProject
        PackageView.updatePackageListView |> Option.iter(fun (model, view) ->
        let cmd = if inCurrentProject |> not then
                        "show-installed-packages -s"
                  else
                        let projectStr =
                            let path = Globals.atom.workspace.getActiveTextEditor().buffer.file.path
                            " project \"" + path + "\""
                        "show-installed-packages" + projectStr + " -s"
        execPaket cmd (Func<_,_,_,_>(PackageView.handlerAddItems model))
        view.show()
        model.focusFilterEditor() |> ignore

        )

    let UpdateGroup () =
        PackageView.inCurrentProject <- false
        PackageView.updateGroupListView |> Option.iter(fun (model, view) ->
        let cmd = "show-groups -s"
        execPaket cmd (Func<_,_,_,_>(PackageView.handlerAddItems model))
        view.show()
        model.focusFilterEditor() |> ignore

        )


type Paket() =


    member x.activate(state:obj) =
        PaketService.PackageView.packagesListView <- PaketService.PackageView.registerPackagesListView () |> Some
        PaketService.PackageView.versionsListView <- PaketService.PackageView.registerVersionListView () |> Some
        PaketService.PackageView.removeListView <- PaketService.PackageView.registerRemoveListView () |> Some
        PaketService.PackageView.updatePackageListView <- PaketService.PackageView.registerUpdatePackageListView () |> Some
        PaketService.PackageView.updateGroupListView <- PaketService.PackageView.registerUpdateGroupListView () |> Some
        PaketService.UpdatePaketSilent()
        Atom.addCommand("atom-workspace", "Paket: Update Paket.exe", PaketService.UpdatePaket)
        Atom.addCommand("atom-workspace", "Paket: Init", PaketService.Init)
        Atom.addCommand("atom-workspace", "Paket: Install", PaketService.Install)
        Atom.addCommand("atom-workspace", "Paket: Update", PaketService.Update)
        Atom.addCommand("atom-workspace", "Paket: Restore", PaketService.Restore)
        Atom.addCommand("atom-workspace", "Paket: Outdated", PaketService.Outdated)
        Atom.addCommand("atom-workspace", "Paket: Add NuGet Package", PaketService.Add { Versioned =  false; AddToCurrentProject = false })
        Atom.addCommand("atom-workspace", "Paket: Add NuGet Package (to current project)", PaketService.Add { Versioned =  false; AddToCurrentProject = true })
        Atom.addCommand("atom-workspace", "Paket: Add NuGet Package Version", PaketService.Add { Versioned =  true; AddToCurrentProject = false })
        Atom.addCommand("atom-workspace", "Paket: Remove NuGet Package", PaketService.Remove false)
        Atom.addCommand("atom-workspace", "Paket: Remove NuGet Package (from current project)", PaketService.Remove true )
        Atom.addCommand("atom-workspace", "Paket: Update Group", PaketService.UpdateGroup)
        Atom.addCommand("atom-workspace", "Paket: Update NuGet Package", PaketService.UpdatePackage false)
        Atom.addCommand("atom-workspace", "Paket: Update NuGet Package (from current project)", PaketService.UpdatePackage true )
        Atom.addCommand("atom-workspace", "Paket: Auto Restore On", PaketService.AutoRestoreOn)
        Atom.addCommand("atom-workspace", "Paket: Auto Restore Off", PaketService.AutoRestoreOff)
        Atom.addCommand("atom-workspace", "Paket: Simplify", PaketService.Simplify)
        Atom.addCommand("atom-workspace", "Paket: Convert From Nuget", PaketService.ConvertFromNuget)

        ()

    member x.deactivate() =
        ()
