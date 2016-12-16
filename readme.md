## Cloning

The auto adoption can get a little tricky.  To begin, I think using a special Mod that uses the adoption feature is a good idea, so its easy to turn on/off.

Rather than just auto-adopt everything, there could be an .orphan = true flag set to all Mod.Subs.  You could then just turn orphan: false if you were extending a Sub module, but wanted to treat it as a floating/permanent orphan.

Or maybe you set orphan: true, in order to convert it to an orphan - a module that intentionally has no parent (and specifically is set to ignore adoption attempts);


Until I finalize the different recipes, it might not be a bad idea to build them incrementally.

How about:

Mod1:  most basic, probably starts with a Base, and adds something



var Base = require("base42") --> pick the most useful "base" module recipe
Base.Base1
Base.Base2
Base.Base3 ...

Maybe the exported "chosen"/default class isn't even the last one...
If you need more features, you can use one of the later verisons:

Base === Base.Base3, for example
Base.Base4, Base5, or BaseWhatever are the additional versions



Then, for Mod, we do the same thing

Mod1 = probably the default Base.extend, but it doesn't really matter...

then Mod2 = Mod1.extend



+++++++++++++

Mfn, SetMfn, and ExtendMfn are all part of the Module, and their functionality is intertwined.

Can we make sub-folders for Mod1, Mod2, etc?
And have a "set.js" that exports a SetMfn.make({}); ??
