var CompositeDisposable = require('atom').CompositeDisposable;
var child_process = require('child_process');
window.$ = require('jquery');
var atomSpaceView = require('atom-space-pen-views');

function wrappedFunScript() { 
var list_1_String____NilString___, list_1_String____ConsString___, UnfoldEnumerator_2_Int32__String_____ctor$Int32_String___, UnfoldEnumerator_2_FSharpList_1_String____String_____ctor$FSharpList_1_String____String___, TupleString____Int32, TupleString____FSharpList_1_String___, TupleSelectListView__IPanel_, String__StartsWith$, String__SplitWithoutOptions$, String__PrintFormatToString$, Seq__Unfold$Int32__String___Int32_String___, Seq__Unfold$FSharpList_1_String____String___FSharpList_1_String____String___, Seq__ToArray$String___String___, Seq__OfList$String___String___, Seq__OfArray$String___String___, Seq__IterateIndexed$String___String___, Seq__FromFactory$String___String___, Seq__FoldIndexedAux$Unit__String___Unit__String___, Seq__FoldIndexed$String____Unit_String____Unit_, Seq__Enumerator$String___String___, PanelOptions___ctor$, Paket__deactivate$, Paket__activate$, Paket___ctor$, PaketService__spawnSilent$, PaketService__spawnPaket$, PaketService__spawn$, PaketService__notice$, PaketService__location, PaketService__jq_$, PaketService__jqC$, PaketService__jq$, PaketService__handleSilent$Object_Object_, PaketService__handleExit$, PaketService__handle$Object_Object_, PaketService__get_location$, PaketService__get_currentNotification$, PaketService__get_bootstrapperLocation$, PaketService__execPaket$, PaketService__exec$, PaketService__currentNotification, PaketService__bootstrapperLocation, PaketService__UpdatePaketSilent$, PaketService__UpdatePaket$, PaketService__UpdatePackage$, PaketService__UpdateGroup$, PaketService__Update$, PaketService__Simplify$, PaketService__Restore$, PaketService__Remove$, PaketService__Outdated$, PaketService__Install$, PaketService__Init$, PaketService__ConvertFromNuget$, PaketService__AutoRestoreOn$, PaketService__AutoRestoreOff$, PaketService__Add$, PackageView__viewForItem$, PackageView__versionsListView, PackageView__updatePackageListView, PackageView__updateGroupListView, PackageView__settings, PackageView__removeListView, PackageView__registerVersionListView$, PackageView__registerUpdatePackageListView$, PackageView__registerUpdateGroupListView$, PackageView__registerRemoveListView$, PackageView__registerPackagesListView$, PackageView__registerListView$, PackageView__packagesListView, PackageView__name, PackageView__inCurrentProject, PackageView__handlerAddItems$, PackageView__group, PackageView__get_versionsListView$, PackageView__get_updatePackageListView$, PackageView__get_updateGroupListView$, PackageView__get_settings$, PackageView__get_removeListView$, PackageView__get_packagesListView$, PackageView__get_name$, PackageView__get_inCurrentProject$, PackageView__get_group$, PackageAddSettings___ctor$, Options___ctor$, Option__Iterate$Tuple_2_SelectListView__IPanel_Tuple_2_SelectListView__IPanel_, Option__Iterate$Notification_Notification_, Option__IsSome$Int32_Int32, Option__IsSome$FSharpList_1_String___FSharpList_1_String___, Option__GetValue$Tuple_2_String____Int32_Tuple_2_String____Int32_, Option__GetValue$Tuple_2_String____FSharpList_1_String___Tuple_2_String____FSharpList_1_String___, Option__GetValue$Tuple_2_SelectListView__IPanel_Tuple_2_SelectListView__IPanel_, Option__GetValue$Notification_Notification_, Option__GetValue$Int32_Int32, Option__GetValue$FSharpList_1_String___FSharpList_1_String___, NotificationsOptions___ctor$, List__Tail$String___String___, List__Head$String___String___, List__Empty$String___String___, List__CreateCons$String___String___, ItemDescription___ctor$, CreateEnumerable_1_String_____ctor$String___, Atom__addCommand$Unit_Unit_, Array__ZeroCreate$String___String___, Array__ZeroCreate$Object_Object_, Array__MapIndexed$String_1_String___String_String___, Array__MapIndexed$String_1_Object_String_Object_, Array__Map$String_1_String___String_String___, Array__Map$String_1_Object_String_Object_, Array__Length$String_1String, Array__FoldIndexed$String____String_1String____String, Array__Fold$String_1_String___String_String___, Array__ConcatImpl$String_1String, Array__Concat$String_1String, Array__BoxedLength$;
Array__BoxedLength$ = (function(xs)
{
    return xs.length;;
});
Array__Concat$String_1String = (function(xs)
{
    return Array__ConcatImpl$String_1String(Seq__ToArray$String___String___(xs));
});
Array__ConcatImpl$String_1String = (function(xss)
{
    return [].concat.apply([], xss);;
});
Array__Fold$String_1_String___String_String___ = (function(f,seed,xs)
{
    return Array__FoldIndexed$String____String_1String____String((function(_arg1)
    {
      return (function(acc)
      {
        return (function(x)
        {
          return f(acc)(x);
        });
      });
    }), seed, xs);
});
Array__FoldIndexed$String____String_1String____String = (function(f,seed,xs)
{
    var acc = seed;
    for (var i = 0; i <= (Array__Length$String_1String(xs) - 1); i++)
    {
      acc = f(i)(acc)(xs[i]);
      null;
    };
    return acc;
});
Array__Length$String_1String = (function(xs)
{
    return xs.length;;
});
Array__Map$String_1_Object_String_Object_ = (function(f,xs)
{
    return Array__MapIndexed$String_1_Object_String_Object_((function(_arg1)
    {
      return (function(x)
      {
        return f(x);
      });
    }), xs);
});
Array__Map$String_1_String___String_String___ = (function(f,xs)
{
    return Array__MapIndexed$String_1_String___String_String___((function(_arg1)
    {
      return (function(x)
      {
        return f(x);
      });
    }), xs);
});
Array__MapIndexed$String_1_Object_String_Object_ = (function(f,xs)
{
    var ys = Array__ZeroCreate$Object_Object_(Array__Length$String_1String(xs));
    for (var i = 0; i <= (Array__Length$String_1String(xs) - 1); i++)
    {
      ys[i] = f(i)(xs[i]);
      null;
    };
    return ys;
});
Array__MapIndexed$String_1_String___String_String___ = (function(f,xs)
{
    var ys = Array__ZeroCreate$String___String___(Array__Length$String_1String(xs));
    for (var i = 0; i <= (Array__Length$String_1String(xs) - 1); i++)
    {
      ys[i] = f(i)(xs[i]);
      null;
    };
    return ys;
});
Array__ZeroCreate$Object_Object_ = (function(size)
{
    return new Array(size);;
});
Array__ZeroCreate$String___String___ = (function(size)
{
    return new Array(size);;
});
Atom__addCommand$Unit_Unit_ = (function(name,cmdName,func)
{
    var cmd = {}; cmd[cmdName]=function() { return func(); }; return atom.commands.add(name, cmd);;
});
CreateEnumerable_1_String_____ctor$String___ = (function(factory)
{
    var __this = this;
    {};
    __this.factory = factory;
});
ItemDescription___ctor$ = (function(data)
{
    var __this = this;
    __this.data = data;
});
List__CreateCons$String___String___ = (function(x,xs)
{
    return (new list_1_String____ConsString___(x, xs));
});
List__Empty$String___String___ = (function()
{
    return (new list_1_String____NilString___());
});
List__Head$String___String___ = (function(_arg1)
{
    if ((_arg1.Tag == 1.000000)) 
    {
      var xs = _arg1.Item2;
      var x = _arg1.Item1;
      return x;
    }
    else
    {
      throw ("List was empty");
      return null;
    };
});
List__Tail$String___String___ = (function(_arg1)
{
    if ((_arg1.Tag == 1.000000)) 
    {
      var xs = _arg1.Item2;
      var x = _arg1.Item1;
      return xs;
    }
    else
    {
      throw ("List was empty");
      return null;
    };
});
NotificationsOptions___ctor$ = (function(detail,dismissable)
{
    var __this = this;
    __this.detail = detail;
    __this.dismissable = dismissable;
});
Option__GetValue$FSharpList_1_String___FSharpList_1_String___ = (function(option)
{
    return option.Value;;
});
Option__GetValue$Int32_Int32 = (function(option)
{
    return option.Value;;
});
Option__GetValue$Notification_Notification_ = (function(option)
{
    return option.Value;;
});
Option__GetValue$Tuple_2_SelectListView__IPanel_Tuple_2_SelectListView__IPanel_ = (function(option)
{
    return option.Value;;
});
Option__GetValue$Tuple_2_String____FSharpList_1_String___Tuple_2_String____FSharpList_1_String___ = (function(option)
{
    return option.Value;;
});
Option__GetValue$Tuple_2_String____Int32_Tuple_2_String____Int32_ = (function(option)
{
    return option.Value;;
});
Option__IsSome$FSharpList_1_String___FSharpList_1_String___ = (function(option)
{
    return ((option.Tag == 1.000000) && true);
});
Option__IsSome$Int32_Int32 = (function(option)
{
    return ((option.Tag == 1.000000) && true);
});
Option__Iterate$Notification_Notification_ = (function(f,inp)
{
    if ((inp.Tag == 1.000000)) 
    {
      var x = Option__GetValue$Notification_Notification_(inp);
      return f(x);
    }
    else
    {
      ;
    };
});
Option__Iterate$Tuple_2_SelectListView__IPanel_Tuple_2_SelectListView__IPanel_ = (function(f,inp)
{
    if ((inp.Tag == 1.000000)) 
    {
      var x = Option__GetValue$Tuple_2_SelectListView__IPanel_Tuple_2_SelectListView__IPanel_(inp);
      return f(x);
    }
    else
    {
      ;
    };
});
Options___ctor$ = (function(cwd)
{
    var __this = this;
    __this.cwd = cwd;
});
PackageAddSettings___ctor$ = (function(Versioned,AddToCurrentProject)
{
    var __this = this;
    __this.Versioned = Versioned;
    __this.AddToCurrentProject = AddToCurrentProject;
});
PackageView__get_group$ = (function()
{
    return "";
});
PackageView__get_inCurrentProject$ = (function()
{
    return false;
});
PackageView__get_name$ = (function()
{
    return "";
});
PackageView__get_packagesListView$ = (function()
{
    return {Tag: 0.000000};
});
PackageView__get_removeListView$ = (function()
{
    return {Tag: 0.000000};
});
PackageView__get_settings$ = (function()
{
    return (new PackageAddSettings___ctor$(false, false));
});
PackageView__get_updateGroupListView$ = (function()
{
    return {Tag: 0.000000};
});
PackageView__get_updatePackageListView$ = (function()
{
    return {Tag: 0.000000};
});
PackageView__get_versionsListView$ = (function()
{
    return {Tag: 0.000000};
});
PackageView__handlerAddItems$ = (function(lv,error,stdout,stderr)
{
    var _35;
    if (((stdout.toString()) == "")) 
    {
      _35 = [];
    }
    else
    {
      _35 = Array__Map$String_1_Object_String_Object_((function(n)
      {
        return (new ItemDescription___ctor$(n));
      }), String__SplitWithoutOptions$((stdout.toString()), ["\n"]));
    };
    var ignored0 = (lv.setItems(_35));
});
PackageView__registerListView$ = (function(stopChangingCallback,cancelledCallback,confirmedCallback,removeFiler)
{
    var listView = new atomSpaceView.SelectListView();
    var editorView = (((listView[0]).firstChild).getModel());
    ((editorView.getBuffer()).stoppedChangingDelay) = 200.000000;
    null;
    ((editorView.getBuffer()).onDidStopChanging(stopChangingCallback(editorView)(listView)));
    var item = listView;
    var priority = 100;
    var panel = ((window.atom).workspace).addModalPanel((new PanelOptions___ctor$(item, false, priority)));
    (listView.getFilterKey = (function()
    {
      var _722;
      return (function(_arg1)
      {
        return "name";
      })(_722);
    }));
    if (removeFiler) 
    {
      (listView.getFilterQuery = (function()
      {
        var _727;
        return (function(_arg2)
        {
          return "";
        })(_727);
      }));
    }
    else
    {
      ;
    };
    (listView.viewForItem = (function(desc)
    {
      return PackageView__viewForItem$(desc);
    }));
    (listView.cancelled = cancelledCallback);
    (listView.confirmed = confirmedCallback);
    return (new TupleSelectListView__IPanel_(listView, panel));
});
PackageView__registerPackagesListView$ = (function(unitVar0)
{
    var stopChangingCallback = (function(ev)
    {
      return (function(lv)
      {
        return (function(_unitVar0)
        {
          var txt = (ev.getText());
          if ((txt.length > 2)) 
          {
            var cmd = (("find-packages searchtext " + txt) + " -s");
            return PaketService__execPaket$(cmd, (function(delegateArg,_delegateArg,__delegateArg)
            {
              return (function(error)
              {
                return (function(stdout)
                {
                  return (function(stderr)
                  {
                    return PackageView__handlerAddItems$(lv, error, stdout, stderr);
                  });
                });
              })(delegateArg)(_delegateArg)(__delegateArg);
            }));
          }
          else
          {
            ;
          };
        });
      });
    });
    var cancelledCallback = (function()
    {
      var _356;
      return (function(_arg1)
      {
        return Option__Iterate$Tuple_2_SelectListView__IPanel_Tuple_2_SelectListView__IPanel_((function(tupledArg)
        {
          var model = tupledArg.Items[0.000000];
          var view = tupledArg.Items[1.000000];
          return (view.hide());
        }), PackageView__packagesListView);
      })(_356);
    });
    var confirmedCallback = (function(packageDescription)
    {
      PackageView__name = packageDescription.data.trim();
      PackageView__group = "";
      Option__Iterate$Tuple_2_SelectListView__IPanel_Tuple_2_SelectListView__IPanel_((function(tupledArg)
      {
        var model = tupledArg.Items[0.000000];
        var view = tupledArg.Items[1.000000];
        return (view.hide());
      }), PackageView__packagesListView);
      if (PackageView__settings.Versioned) 
      {
        return Option__Iterate$Tuple_2_SelectListView__IPanel_Tuple_2_SelectListView__IPanel_((function(tupledArg)
        {
          var model = tupledArg.Items[0.000000];
          var view = tupledArg.Items[1.000000];
          (view.show());
          var ignored0 = (model.focusFilterEditor());
          var cmd = (("find-package-versions nuget " + PackageView__name) + " -s");
          return PaketService__execPaket$(cmd, (function(delegateArg,_delegateArg,__delegateArg)
          {
            return (function(error)
            {
              return (function(stdout)
              {
                return (function(stderr)
                {
                  return PackageView__handlerAddItems$(model, error, stdout, stderr);
                });
              });
            })(delegateArg)(_delegateArg)(__delegateArg);
          }));
        }), PackageView__versionsListView);
      }
      else
      {
        var _407;
        if ((!PackageView__settings.AddToCurrentProject)) 
        {
          _407 = "";
        }
        else
        {
          try
          {
            var path = ((((((window.atom).workspace).getActiveTextEditor()).buffer).file).path);
            _407 = ((" project \"" + path) + "\"");
          }
          catch(matchValue){
            PaketService__notice$(true, "Paket error", ".*proj file needs to be open");
            _407 = "";
          };
        };
        var projectStr = _407;
        return PaketService__spawnPaket$((("add nuget " + PackageView__name) + projectStr));
      };
    });
    return PackageView__registerListView$(stopChangingCallback, cancelledCallback, confirmedCallback, true);
});
PackageView__registerRemoveListView$ = (function(unitVar0)
{
    var stopChangingCallback = (function(ev)
    {
      return (function(lv)
      {
        return (function(_unitVar0)
        {
          ;
        });
      });
    });
    var cancelledCallback = (function()
    {
      var _810;
      return (function(_arg1)
      {
        return Option__Iterate$Tuple_2_SelectListView__IPanel_Tuple_2_SelectListView__IPanel_((function(tupledArg)
        {
          var model = tupledArg.Items[0.000000];
          var view = tupledArg.Items[1.000000];
          return (view.hide());
        }), PackageView__removeListView);
      })(_810);
    });
    var confirmedCallback = (function(packageDescription)
    {
      PackageView__group = String__SplitWithoutOptions$(packageDescription.data, [" "])[0].trim();
      PackageView__name = String__SplitWithoutOptions$(packageDescription.data, [" "])[1].trim();
      Option__Iterate$Tuple_2_SelectListView__IPanel_Tuple_2_SelectListView__IPanel_((function(tupledArg)
      {
        var model = tupledArg.Items[0.000000];
        var view = tupledArg.Items[1.000000];
        return (view.hide());
      }), PackageView__removeListView);
      if ((!PackageView__inCurrentProject)) 
      {
        return PaketService__spawnPaket$(("remove nuget " + PackageView__name));
      }
      else
      {
        var _851;
        if ((!PackageView__settings.AddToCurrentProject)) 
        {
          _851 = "";
        }
        else
        {
          try
          {
            var path = ((((((window.atom).workspace).getActiveTextEditor()).buffer).file).path);
            _851 = ((" project \"" + path) + "\"");
          }
          catch(matchValue){
            PaketService__notice$(true, "Paket error", ".*proj file needs to be open");
            _851 = "";
          };
        };
        var projectStr = _851;
        return PaketService__spawnPaket$((("remove nuget " + PackageView__name) + projectStr));
      };
    });
    return PackageView__registerListView$(stopChangingCallback, cancelledCallback, confirmedCallback, false);
});
PackageView__registerUpdateGroupListView$ = (function(unitVar0)
{
    var stopChangingCallback = (function(ev)
    {
      return (function(lv)
      {
        return (function(_unitVar0)
        {
          ;
        });
      });
    });
    var cancelledCallback = (function()
    {
      var _978;
      return (function(_arg1)
      {
        return Option__Iterate$Tuple_2_SelectListView__IPanel_Tuple_2_SelectListView__IPanel_((function(tupledArg)
        {
          var model = tupledArg.Items[0.000000];
          var view = tupledArg.Items[1.000000];
          return (view.hide());
        }), PackageView__updateGroupListView);
      })(_978);
    });
    var confirmedCallback = (function(packageGroup)
    {
      PackageView__group = String__SplitWithoutOptions$(packageGroup.data, [" "])[0].trim();
      Option__Iterate$Tuple_2_SelectListView__IPanel_Tuple_2_SelectListView__IPanel_((function(tupledArg)
      {
        var model = tupledArg.Items[0.000000];
        var view = tupledArg.Items[1.000000];
        return (view.hide());
      }), PackageView__updateGroupListView);
      return PaketService__spawnPaket$(("update group " + PackageView__group));
    });
    return PackageView__registerListView$(stopChangingCallback, cancelledCallback, confirmedCallback, false);
});
PackageView__registerUpdatePackageListView$ = (function(unitVar0)
{
    var stopChangingCallback = (function(ev)
    {
      return (function(lv)
      {
        return (function(_unitVar0)
        {
          ;
        });
      });
    });
    var cancelledCallback = (function()
    {
      var _894;
      return (function(_arg1)
      {
        return Option__Iterate$Tuple_2_SelectListView__IPanel_Tuple_2_SelectListView__IPanel_((function(tupledArg)
        {
          var model = tupledArg.Items[0.000000];
          var view = tupledArg.Items[1.000000];
          return (view.hide());
        }), PackageView__updatePackageListView);
      })(_894);
    });
    var confirmedCallback = (function(packageDescription)
    {
      PackageView__group = String__SplitWithoutOptions$(packageDescription.data, [" "])[0].trim();
      PackageView__name = String__SplitWithoutOptions$(packageDescription.data, [" "])[1].trim();
      Option__Iterate$Tuple_2_SelectListView__IPanel_Tuple_2_SelectListView__IPanel_((function(tupledArg)
      {
        var model = tupledArg.Items[0.000000];
        var view = tupledArg.Items[1.000000];
        return (view.hide());
      }), PackageView__updatePackageListView);
      if ((!PackageView__inCurrentProject)) 
      {
        return PaketService__spawnPaket$(("update nuget " + PackageView__name));
      }
      else
      {
        var _935;
        if ((!PackageView__settings.AddToCurrentProject)) 
        {
          _935 = "";
        }
        else
        {
          try
          {
            var path = ((((((window.atom).workspace).getActiveTextEditor()).buffer).file).path);
            _935 = ((" project \"" + path) + "\"");
          }
          catch(matchValue){
            PaketService__notice$(true, "Paket error", ".*proj file needs to be open");
            _935 = "";
          };
        };
        var projectStr = _935;
        return PaketService__spawnPaket$((("update nuget " + PackageView__name) + projectStr));
      };
    });
    return PackageView__registerListView$(stopChangingCallback, cancelledCallback, confirmedCallback, false);
});
PackageView__registerVersionListView$ = (function(unitVar0)
{
    var stopChangingCallback = (function(ev)
    {
      return (function(lv)
      {
        return (function(_unitVar0)
        {
          ;
        });
      });
    });
    var cancelledCallback = (function()
    {
      var _769;
      return (function(_arg1)
      {
        return Option__Iterate$Tuple_2_SelectListView__IPanel_Tuple_2_SelectListView__IPanel_((function(tupledArg)
        {
          var model = tupledArg.Items[0.000000];
          var view = tupledArg.Items[1.000000];
          return (view.hide());
        }), PackageView__versionsListView);
      })(_769);
    });
    var confirmedCallback = (function(packageDescription)
    {
      Option__Iterate$Tuple_2_SelectListView__IPanel_Tuple_2_SelectListView__IPanel_((function(tupledArg)
      {
        var model = tupledArg.Items[0.000000];
        var view = tupledArg.Items[1.000000];
        return (view.hide());
      }), PackageView__versionsListView);
      return PaketService__spawnPaket$(((("add nuget " + PackageView__name) + " version ") + packageDescription.data));
    });
    return PackageView__registerListView$(stopChangingCallback, cancelledCallback, confirmedCallback, false);
});
PackageView__viewForItem$ = (function(desc)
{
    if ((desc != undefined)) 
    {
      var clo1 = String__PrintFormatToString$("\u003cli\u003e%s\u003c/li\u003e");
      return PaketService__jq$((function(arg10)
      {
        return clo1(arg10);
      })(desc.data));
    }
    else
    {
      return PaketService__jq$("\u003cli\u003e\u003c/li\u003e");
    };
});
PaketService__Add$ = (function(settings,unitVar1)
{
    PackageView__settings = settings;
    return Option__Iterate$Tuple_2_SelectListView__IPanel_Tuple_2_SelectListView__IPanel_((function(tupledArg)
    {
      var model = tupledArg.Items[0.000000];
      var view = tupledArg.Items[1.000000];
      (view.show());
      var ignored0 = (model.focusFilterEditor());
    }), PackageView__packagesListView);
});
PaketService__AutoRestoreOff$ = (function(unitVar0)
{
    return PaketService__spawnPaket$("auto-restore off");
});
PaketService__AutoRestoreOn$ = (function(unitVar0)
{
    return PaketService__spawnPaket$("auto-restore on");
});
PaketService__ConvertFromNuget$ = (function(unitVar0)
{
    return PaketService__spawnPaket$("convert-from-nuget");
});
PaketService__Init$ = (function(unitVar0)
{
    return PaketService__spawnPaket$("init");
});
PaketService__Install$ = (function(unitVar0)
{
    return PaketService__spawnPaket$("install");
});
PaketService__Outdated$ = (function(unitVar0)
{
    return PaketService__spawnPaket$("outdated");
});
PaketService__Remove$ = (function(inCurrentProject,unitVar1)
{
    PackageView__inCurrentProject = inCurrentProject;
    return Option__Iterate$Tuple_2_SelectListView__IPanel_Tuple_2_SelectListView__IPanel_((function(tupledArg)
    {
      var model = tupledArg.Items[0.000000];
      var view = tupledArg.Items[1.000000];
      var _1176;
      if ((!inCurrentProject)) 
      {
        _1176 = "show-installed-packages -s";
      }
      else
      {
        var path = ((((((window.atom).workspace).getActiveTextEditor()).buffer).file).path);
        var projectStr = ((" project \"" + path) + "\"");
        _1176 = (("show-installed-packages" + projectStr) + " -s");
      };
      var cmd = _1176;
      PaketService__execPaket$(cmd, (function(delegateArg,_delegateArg,__delegateArg)
      {
        return (function(error)
        {
          return (function(stdout)
          {
            return (function(stderr)
            {
              return PackageView__handlerAddItems$(model, error, stdout, stderr);
            });
          });
        })(delegateArg)(_delegateArg)(__delegateArg);
      }));
      (view.show());
      var ignored0 = (model.focusFilterEditor());
    }), PackageView__removeListView);
});
PaketService__Restore$ = (function(unitVar0)
{
    return PaketService__spawnPaket$("restore");
});
PaketService__Simplify$ = (function(unitVar0)
{
    return PaketService__spawnPaket$("simplify");
});
PaketService__Update$ = (function(unitVar0)
{
    return PaketService__spawnPaket$("update");
});
PaketService__UpdateGroup$ = (function(unitVar0)
{
    PackageView__inCurrentProject = false;
    return Option__Iterate$Tuple_2_SelectListView__IPanel_Tuple_2_SelectListView__IPanel_((function(tupledArg)
    {
      var model = tupledArg.Items[0.000000];
      var view = tupledArg.Items[1.000000];
      var cmd = "show-groups -s";
      PaketService__execPaket$(cmd, (function(delegateArg,_delegateArg,__delegateArg)
      {
        return (function(error)
        {
          return (function(stdout)
          {
            return (function(stderr)
            {
              return PackageView__handlerAddItems$(model, error, stdout, stderr);
            });
          });
        })(delegateArg)(_delegateArg)(__delegateArg);
      }));
      (view.show());
      var ignored0 = (model.focusFilterEditor());
    }), PackageView__updateGroupListView);
});
PaketService__UpdatePackage$ = (function(inCurrentProject,unitVar1)
{
    PackageView__inCurrentProject = inCurrentProject;
    return Option__Iterate$Tuple_2_SelectListView__IPanel_Tuple_2_SelectListView__IPanel_((function(tupledArg)
    {
      var model = tupledArg.Items[0.000000];
      var view = tupledArg.Items[1.000000];
      var _1258;
      if ((!inCurrentProject)) 
      {
        _1258 = "show-installed-packages -s";
      }
      else
      {
        var path = ((((((window.atom).workspace).getActiveTextEditor()).buffer).file).path);
        var projectStr = ((" project \"" + path) + "\"");
        _1258 = (("show-installed-packages" + projectStr) + " -s");
      };
      var cmd = _1258;
      PaketService__execPaket$(cmd, (function(delegateArg,_delegateArg,__delegateArg)
      {
        return (function(error)
        {
          return (function(stdout)
          {
            return (function(stderr)
            {
              return PackageView__handlerAddItems$(model, error, stdout, stderr);
            });
          });
        })(delegateArg)(_delegateArg)(__delegateArg);
      }));
      (view.show());
      var ignored0 = (model.focusFilterEditor());
    }), PackageView__updatePackageListView);
});
PaketService__UpdatePaket$ = (function(unitVar0)
{
    return PaketService__spawn$(PaketService__bootstrapperLocation, "");
});
PaketService__UpdatePaketSilent$ = (function(unitVar0)
{
    return PaketService__spawnSilent$(PaketService__bootstrapperLocation, "");
});
PaketService__exec$ = (function(location,cmd,handler)
{
    var options = (new Options___ctor$((((window.atom).project).getPaths())[0]));
    var _315;
    if (String__StartsWith$(((window.process).platform), "win")) 
    {
      _315 = (child_process.exec(((location + " ") + cmd), options, handler));
    }
    else
    {
      _315 = (child_process.exec(((("mono " + location) + " ") + cmd), options, handler));
    };
    var child = _315;
});
PaketService__execPaket$ = (function(cmd,handler)
{
    return PaketService__exec$(PaketService__location, cmd, handler);
});
PaketService__get_bootstrapperLocation$ = (function()
{
    if (String__StartsWith$(((window.process).platform), "win")) 
    {
      return ((((window.atom).packages).packageDirPaths)[0] + "\\ionide-paket\\bin\\paket.bootstrapper.exe");
    }
    else
    {
      return ((((window.atom).packages).packageDirPaths)[0] + "/ionide-paket/bin/paket.bootstrapper.exe");
    };
});
PaketService__get_currentNotification$ = (function()
{
    return {Tag: 0.000000};
});
PaketService__get_location$ = (function()
{
    if (String__StartsWith$(((window.process).platform), "win")) 
    {
      return ((((window.atom).packages).packageDirPaths)[0] + "\\ionide-paket\\bin\\paket.exe");
    }
    else
    {
      return ((((window.atom).packages).packageDirPaths)[0] + "/ionide-paket/bin/paket.exe");
    };
});
PaketService__handle$Object_Object_ = (function(error,input)
{
    var output = input.toString();
    ((window.console).log(output));
    if (error) 
    {
      PaketService__notice$(true, "Paket error", output);
    }
    else
    {
      PaketService__notice$(false, "", output);
    };
});
PaketService__handleExit$ = (function(code)
{
    return Option__Iterate$Notification_Notification_((function(n)
    {
      var view = PaketService__jq_$((((window.atom).views).getView(n)));
      var ignored0 = (view.removeClass("info"));
      var _ignored0 = (view.removeClass("icon-info"));
      if (((code == "0") && (!(view.hasClass("error"))))) 
      {
        var __ignored0 = (view.addClass("success"));
        var ___ignored0 = (view.addClass("icon-check"));
      }
      else
      {
        var ____ignored0 = (view.addClass("error"));
        var _____ignored0 = (view.addClass("icon-flame"));
      };
    }), PaketService__currentNotification);
});
PaketService__handleSilent$Object_Object_ = (function(input)
{
    if ((input != false)) 
    {
      var output = input.toString();
      return ((window.console).log(output));
    }
    else
    {
      ;
    };
});
PaketService__jq$ = (function(selector)
{
    return ((window.$)(selector));
});
PaketService__jqC$ = (function(context,selector)
{
    return ((window.$)(selector, context));
});
PaketService__jq_$ = (function(selector)
{
    return ((window.$)(selector));
});
PaketService__notice$ = (function(isError,text,details)
{
    if ((PaketService__currentNotification.Tag == 0.000000)) 
    {
      var _427;
      if (isError) 
      {
        _427 = ((window.atom).notifications).addError(text, (new NotificationsOptions___ctor$(details, true)));
      }
      else
      {
        _427 = ((window.atom).notifications).addInfo(text, (new NotificationsOptions___ctor$(details, true)));
      };
      var n = _427;
      PaketService__currentNotification = {Tag: 1.000000, Value: n};
    }
    else
    {
      var _n = Option__GetValue$Notification_Notification_(PaketService__currentNotification);
      var view = (((window.atom).views).getView(_n));
      var t = PaketService__jqC$(view, ".content .detail .detail-content");
      var line = (("\u003cdiv class=\u0027line\u0027\u003e" + details) + "\u003c/div\u003e");
      var ignored0 = (t.append(line));
    };
});
PaketService__spawn$ = (function(location,cmd)
{
    var cmd_ = String__SplitWithoutOptions$(cmd, [" "]);
    var options = (new Options___ctor$((((window.atom).project).getPaths())[0]));
    var _484;
    if (String__StartsWith$(((window.process).platform), "win")) 
    {
      _484 = (child_process.spawn(location, cmd_, options));
    }
    else
    {
      var prms = Array__Concat$String_1String(Seq__OfList$String___String___(List__CreateCons$String___String___([location], List__CreateCons$String___String___(cmd_, List__Empty$String___String___()))));
      var path = (((window.atom).config).get("ionide-paket.MonoPath"));
      _484 = (child_process.spawn((path + "/mono"), prms, options));
    };
    var procs = _484;
    PaketService__currentNotification = {Tag: 0.000000};
    var ignored0 = (procs.on("exit", (function(code)
    {
      return PaketService__handleExit$(code);
    })));
    var error = false;
    var _ignored0 = ((procs.stdout).on("data", (function(input)
    {
      return PaketService__handle$Object_Object_(error, input);
    })));
    var _error = true;
    var __ignored0 = ((procs.stderr).on("data", (function(input)
    {
      return PaketService__handle$Object_Object_(_error, input);
    })));
});
PaketService__spawnPaket$ = (function(cmd)
{
    return PaketService__spawn$(PaketService__location, cmd);
});
PaketService__spawnSilent$ = (function(location,cmd)
{
    var cmd_ = String__SplitWithoutOptions$(cmd, [" "]);
    var options = (new Options___ctor$((((window.atom).project).getPaths())[0]));
    var _1042;
    if (String__StartsWith$(((window.process).platform), "win")) 
    {
      _1042 = (child_process.spawn(location, cmd_, options));
    }
    else
    {
      var prms = Array__Concat$String_1String(Seq__OfList$String___String___(List__CreateCons$String___String___([location], List__CreateCons$String___String___(cmd_, List__Empty$String___String___()))));
      var path = (((window.atom).config).get("ionide-paket.MonoPath"));
      _1042 = (child_process.spawn((path + "/mono"), prms, options));
    };
    var procs = _1042;
    var ignored0 = (procs.on("exit", (function(input)
    {
      return PaketService__handleSilent$Object_Object_(input);
    })));
    var _ignored0 = ((procs.stdout).on("data", (function(input)
    {
      return PaketService__handleSilent$Object_Object_(input);
    })));
    var __ignored0 = ((procs.stderr).on("data", (function(input)
    {
      return PaketService__handleSilent$Object_Object_(input);
    })));
});
Paket___ctor$ = (function(unitVar0)
{
    {};
});
Paket__activate$ = (function(x,state)
{
    PackageView__packagesListView = (function(arg0)
    {
      return {Tag: 1.000000, Value: arg0};
    })(PackageView__registerPackagesListView$());
    PackageView__versionsListView = (function(arg0)
    {
      return {Tag: 1.000000, Value: arg0};
    })(PackageView__registerVersionListView$());
    PackageView__removeListView = (function(arg0)
    {
      return {Tag: 1.000000, Value: arg0};
    })(PackageView__registerRemoveListView$());
    PackageView__updatePackageListView = (function(arg0)
    {
      return {Tag: 1.000000, Value: arg0};
    })(PackageView__registerUpdatePackageListView$());
    PackageView__updateGroupListView = (function(arg0)
    {
      return {Tag: 1.000000, Value: arg0};
    })(PackageView__registerUpdateGroupListView$());
    PaketService__UpdatePaketSilent$();
    Atom__addCommand$Unit_Unit_("atom-workspace", "Paket: Update Paket.exe", (function(arg00_)
    {
      return PaketService__UpdatePaket$();
    }));
    Atom__addCommand$Unit_Unit_("atom-workspace", "Paket: Init", (function(arg00_)
    {
      return PaketService__Init$();
    }));
    Atom__addCommand$Unit_Unit_("atom-workspace", "Paket: Install", (function(arg00_)
    {
      return PaketService__Install$();
    }));
    Atom__addCommand$Unit_Unit_("atom-workspace", "Paket: Update", (function(arg00_)
    {
      return PaketService__Update$();
    }));
    Atom__addCommand$Unit_Unit_("atom-workspace", "Paket: Restore", (function(arg00_)
    {
      return PaketService__Restore$();
    }));
    Atom__addCommand$Unit_Unit_("atom-workspace", "Paket: Outdated", (function(arg00_)
    {
      return PaketService__Outdated$();
    }));
    var settings = (new PackageAddSettings___ctor$(false, false));
    Atom__addCommand$Unit_Unit_("atom-workspace", "Paket: Add NuGet Package", (function(arg10_)
    {
      return PaketService__Add$(settings, arg10_);
    }));
    var _settings = (new PackageAddSettings___ctor$(false, true));
    Atom__addCommand$Unit_Unit_("atom-workspace", "Paket: Add NuGet Package (to current project)", (function(arg10_)
    {
      return PaketService__Add$(_settings, arg10_);
    }));
    var __settings = (new PackageAddSettings___ctor$(true, false));
    Atom__addCommand$Unit_Unit_("atom-workspace", "Paket: Add NuGet Package Version", (function(arg10_)
    {
      return PaketService__Add$(__settings, arg10_);
    }));
    var inCurrentProject = false;
    Atom__addCommand$Unit_Unit_("atom-workspace", "Paket: Remove NuGet Package", (function(arg10_)
    {
      return PaketService__Remove$(inCurrentProject, arg10_);
    }));
    var _inCurrentProject = true;
    Atom__addCommand$Unit_Unit_("atom-workspace", "Paket: Remove NuGet Package (from current project)", (function(arg10_)
    {
      return PaketService__Remove$(_inCurrentProject, arg10_);
    }));
    Atom__addCommand$Unit_Unit_("atom-workspace", "Paket: Update Group", (function(arg00_)
    {
      return PaketService__UpdateGroup$();
    }));
    var __inCurrentProject = false;
    Atom__addCommand$Unit_Unit_("atom-workspace", "Paket: Update NuGet Package", (function(arg10_)
    {
      return PaketService__UpdatePackage$(__inCurrentProject, arg10_);
    }));
    var ___inCurrentProject = true;
    Atom__addCommand$Unit_Unit_("atom-workspace", "Paket: Update NuGet Package (from current project)", (function(arg10_)
    {
      return PaketService__UpdatePackage$(___inCurrentProject, arg10_);
    }));
    Atom__addCommand$Unit_Unit_("atom-workspace", "Paket: Auto Restore On", (function(arg00_)
    {
      return PaketService__AutoRestoreOn$();
    }));
    Atom__addCommand$Unit_Unit_("atom-workspace", "Paket: Auto Restore Off", (function(arg00_)
    {
      return PaketService__AutoRestoreOff$();
    }));
    Atom__addCommand$Unit_Unit_("atom-workspace", "Paket: Simplify", (function(arg00_)
    {
      return PaketService__Simplify$();
    }));
    Atom__addCommand$Unit_Unit_("atom-workspace", "Paket: Convert From Nuget", (function(arg00_)
    {
      return PaketService__ConvertFromNuget$();
    }));
});
Paket__deactivate$ = (function(x,unitVar1)
{
    ;
});
PanelOptions___ctor$ = (function(item,visible,priority)
{
    var __this = this;
    __this.item = item;
    __this.visible = visible;
    __this.priority = priority;
});
Seq__Enumerator$String___String___ = (function(xs)
{
    return xs.GetEnumerator();
});
Seq__FoldIndexed$String____Unit_String____Unit_ = (function(f,seed,xs)
{
    return Seq__FoldIndexedAux$Unit__String___Unit__String___(f, seed, Seq__Enumerator$String___String___(xs));
});
Seq__FoldIndexedAux$Unit__String___Unit__String___ = (function(f,acc,xs)
{
    var i = {contents: 0};
    var _acc = {contents: acc};
    while (xs.MoveNext())
    {
      _acc.contents = f(i.contents)(_acc.contents)(xs.get_Current());
      null;
      i.contents = (i.contents + 1);
      null;
    };
    return _acc.contents;
});
Seq__FromFactory$String___String___ = (function(f)
{
    var impl;
    impl = (new CreateEnumerable_1_String_____ctor$String___(f));
    return {GetEnumerator: (function(unitVar1)
    {
      return (function(__,unitVar1)
      {
        var _156;
        return __.factory(_156);
      })(impl, unitVar1);
    })};
});
Seq__IterateIndexed$String___String___ = (function(f,xs)
{
    var _176;
    return Seq__FoldIndexed$String____Unit_String____Unit_((function(i)
    {
      return (function(unitVar1)
      {
        return (function(x)
        {
          return f(i)(x);
        });
      });
    }), _176, xs);
});
Seq__OfArray$String___String___ = (function(xs)
{
    return Seq__Unfold$Int32__String___Int32_String___((function(i)
    {
      if ((i < Array__BoxedLength$(xs))) 
      {
        return {Tag: 1.000000, Value: (new TupleString____Int32(xs[i], (i + 1)))};
      }
      else
      {
        return {Tag: 0.000000};
      };
    }), 0);
});
Seq__OfList$String___String___ = (function(xs)
{
    return Seq__Unfold$FSharpList_1_String____String___FSharpList_1_String____String___((function(_arg1)
    {
      if ((_arg1.Tag == 1.000000)) 
      {
        var _xs = List__Tail$String___String___(_arg1);
        var x = List__Head$String___String___(_arg1);
        return {Tag: 1.000000, Value: (new TupleString____FSharpList_1_String___(x, _xs))};
      }
      else
      {
        return {Tag: 0.000000};
      };
    }), xs);
});
Seq__ToArray$String___String___ = (function(xs)
{
    var ys = Array__ZeroCreate$String___String___(0);
    Seq__IterateIndexed$String___String___((function(i)
    {
      return (function(x)
      {
        ys[i] = x;
        return null;
      });
    }), xs);
    return ys;
});
Seq__Unfold$FSharpList_1_String____String___FSharpList_1_String____String___ = (function(f,seed)
{
    return Seq__FromFactory$String___String___((function(unitVar0)
    {
      var impl;
      impl = (new UnfoldEnumerator_2_FSharpList_1_String____String_____ctor$FSharpList_1_String____String___(seed, f));
      return {get_Current: (function(unitVar1)
      {
        return (function(__,unitVar1)
        {
          return __.current;
        })(impl, unitVar1);
      }), Dispose: (function(unitVar1)
      {
        return (function(__,unitVar1)
        {
          ;
        })(impl, unitVar1);
      }), MoveNext: (function(unitVar1)
      {
        return (function(__,unitVar1)
        {
          var next = (function(_unitVar0)
          {
            var currAcc = Option__GetValue$FSharpList_1_String___FSharpList_1_String___(__.acc);
            var x = __.unfold(currAcc);
            if ((x.Tag == 1.000000)) 
            {
              var value = Option__GetValue$Tuple_2_String____FSharpList_1_String___Tuple_2_String____FSharpList_1_String___(x).Items[0.000000];
              var nextAcc = Option__GetValue$Tuple_2_String____FSharpList_1_String___Tuple_2_String____FSharpList_1_String___(x).Items[1.000000];
              __.acc = {Tag: 1.000000, Value: nextAcc};
              __.current = value;
              return true;
            }
            else
            {
              __.acc = {Tag: 0.000000};
              __.current = null;
              return false;
            };
          });
          return (Option__IsSome$FSharpList_1_String___FSharpList_1_String___(__.acc) && (function()
          {
            var _577;
            return next(_577);
          })());
        })(impl, unitVar1);
      }), Reset: (function(unitVar1)
      {
        return (function(__,unitVar1)
        {
          __.acc = {Tag: 1.000000, Value: __.seed};
          __.current = null;
        })(impl, unitVar1);
      })};
    }));
});
Seq__Unfold$Int32__String___Int32_String___ = (function(f,seed)
{
    return Seq__FromFactory$String___String___((function(unitVar0)
    {
      var impl;
      impl = (new UnfoldEnumerator_2_Int32__String_____ctor$Int32_String___(seed, f));
      return {get_Current: (function(unitVar1)
      {
        return (function(__,unitVar1)
        {
          return __.current;
        })(impl, unitVar1);
      }), Dispose: (function(unitVar1)
      {
        return (function(__,unitVar1)
        {
          ;
        })(impl, unitVar1);
      }), MoveNext: (function(unitVar1)
      {
        return (function(__,unitVar1)
        {
          var next = (function(_unitVar0)
          {
            var currAcc = Option__GetValue$Int32_Int32(__.acc);
            var x = __.unfold(currAcc);
            if ((x.Tag == 1.000000)) 
            {
              var value = Option__GetValue$Tuple_2_String____Int32_Tuple_2_String____Int32_(x).Items[0.000000];
              var nextAcc = Option__GetValue$Tuple_2_String____Int32_Tuple_2_String____Int32_(x).Items[1.000000];
              __.acc = {Tag: 1.000000, Value: nextAcc};
              __.current = value;
              return true;
            }
            else
            {
              __.acc = {Tag: 0.000000};
              __.current = null;
              return false;
            };
          });
          return (Option__IsSome$Int32_Int32(__.acc) && (function()
          {
            var _134;
            return next(_134);
          })());
        })(impl, unitVar1);
      }), Reset: (function(unitVar1)
      {
        return (function(__,unitVar1)
        {
          __.acc = {Tag: 1.000000, Value: __.seed};
          __.current = null;
        })(impl, unitVar1);
      })};
    }));
});
String__PrintFormatToString$ = (function(s)
{
    var reg = /%[+\-* ]?\d*(?:\.(\d+))?(\w)/;
    function formatToString(rep) {
        s = s.replace(reg, function(match, precision, format) {
            switch (format) {
                case "f": case "F": return precision ? rep.toFixed(precision) : rep.toFixed(6);
                case "g": case "G": return rep.toPrecision(precision);
                case "e": case "E": return rep.toExponential(precision);
                case "A": return JSON.stringify(rep);
                default:  return rep;
            }
        });
        return reg.test(s) ? formatToString : s;
    }
    return formatToString;
});
String__SplitWithoutOptions$ = (function(s,delimiters)
{
    var folder = (function(inputs)
    {
      return (function(delimiter)
      {
        return Array__Concat$String_1String(Seq__OfArray$String___String___(Array__Map$String_1_String___String_String___((function(inp)
        {
          return inp.split(delimiter);
        }), inputs)));
      });
    });
    var state = [s];
    return (function(array)
    {
      return Array__Fold$String_1_String___String_String___(folder, state, array);
    })(delimiters);
});
String__StartsWith$ = (function(s,search)
{
    return (s.indexOf(search) == 0);
});
TupleSelectListView__IPanel_ = (function(Item0,Item1)
{
    var __this = this;
    __this.Items = [Item0, Item1];
});
TupleString____FSharpList_1_String___ = (function(Item0,Item1)
{
    var __this = this;
    __this.Items = [Item0, Item1];
});
TupleString____Int32 = (function(Item0,Item1)
{
    var __this = this;
    __this.Items = [Item0, Item1];
});
UnfoldEnumerator_2_FSharpList_1_String____String_____ctor$FSharpList_1_String____String___ = (function(seed,unfold)
{
    var __this = this;
    {};
    __this.seed = seed;
    __this.unfold = unfold;
    __this.acc = {Tag: 1.000000, Value: __this.seed};
    __this.current = null;
});
UnfoldEnumerator_2_Int32__String_____ctor$Int32_String___ = (function(seed,unfold)
{
    var __this = this;
    {};
    __this.seed = seed;
    __this.unfold = unfold;
    __this.acc = {Tag: 1.000000, Value: __this.seed};
    __this.current = null;
});
list_1_String____ConsString___ = (function(Item1,Item2)
{
    var __this = this;
    __this.Tag = 1.000000;
    __this._CaseName = "Cons";
    __this.Item1 = Item1;
    __this.Item2 = Item2;
});
list_1_String____NilString___ = (function()
{
    var __this = this;
    __this.Tag = 0.000000;
    __this._CaseName = "Nil";
});
PaketService__location = PaketService__get_location$();
PackageView__packagesListView = PackageView__get_packagesListView$();
PackageView__name = PackageView__get_name$();
PackageView__group = PackageView__get_group$();
PackageView__settings = PackageView__get_settings$();
PackageView__versionsListView = PackageView__get_versionsListView$();
PaketService__currentNotification = PaketService__get_currentNotification$();
PackageView__removeListView = PackageView__get_removeListView$();
PackageView__inCurrentProject = PackageView__get_inCurrentProject$();
PackageView__updatePackageListView = PackageView__get_updatePackageListView$();
PackageView__updateGroupListView = PackageView__get_updateGroupListView$();
PaketService__bootstrapperLocation = PaketService__get_bootstrapperLocation$();
return [(function(ign)
{
    return (new Paket___ctor$());
}), (function(_this)
{
    return Paket__deactivate$(_this);
}), (function(_this)
{
    return (function(p0)
    {
      return Paket__activate$(_this, p0);
    });
})]
 }
var _funcs = wrappedFunScript();
var _self = _funcs[0]();

module.exports = AtomFSharpPaket = {
deactivate: function() {
  return _funcs[1](_self); },
activate: function(p1) {
  return _funcs[2](_self)(p1); },
config:  {
            MonoPath: {type: 'string', 'default': '/usr/bin'} }}