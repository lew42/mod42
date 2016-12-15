var test = require("test42");
var assert = test.assert;
var is = require("util42").is;
var $ = require("jquery");

var logger = require("log42");

var Mod1 = require("./Mod1");
var Mod2 = require("./Mod2");
var Mod3 = require("./Mod3");


test("basic", function(){
	var mod = Mod3();
});

test("cloning", function(){
	var parent = Mod3({
		child: Mod3({
			prop: 123,
			autoClone: true
		})
	});

	assert(parent.child instanceof Mod3);

	var parentClone = parent.clone();

	assert(parentClone.child instanceof Mod3);
	assert(parentClone.child.prop === 123);
	assert(parentClone.child !== parent.child);

	assert(parentClone instanceof Mod3);
});