# Ionide-Paket

It's part of [Ionide](http://ionide.io) plugin suite.
[Paket](https://github.com/fsprojects/Paket) is package dependency manager for .NET with support for NuGet packages and GitHub repositories.

## Features

- Syntax highlighting for `paket.dependencies`
- Paket commands available in Atom's Command Palette

[![Join the chat at https://gitter.im/ionide/ionide-project](https://img.shields.io/badge/gitter-join%20chat%20%E2%86%92-brightgreen.svg?style=flat-square)](https://gitter.im/ionide/ionide-project?utm_source=share-link&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge) --  [Need Help? You can find us on Gitter](https://gitter.im/ionide/ionide-project)   

## Build

* Clone this repository
* Checkout `develop` branch
* Run `build.cmd` (for Windows) or `build.sh` (for Linux / Max) to build projects
* Go to `release` folder and run `apm link` to create symbolic link between plugin and Atom's plugins folder
* Run Atom

## Contributing and copyright

The project is hosted on [GitHub](https://github.com/ionide/ionide-paket) where you can [report issues](https://github.com/ionide/ionide-paket/issues), fork
the project and submit pull requests.

The library is available under [MIT license](https://github.com/ionide/ionide-paket/blob/master/LICENSE.md), which allows modification and
redistribution for both commercial and non-commercial purposes.
