var is = require("util42").is;
var Mod1 = require("./Mod1");

var logger = require("log42");
var log = logger();

log.groupc("Property.js");

var Property = Mod1.extend({
	name: "Property",
	value: undefined,
	init: function(){
		this.init_define();
		// this.init_attach();
	},
	init_define: function(){
		var name = this.name;
		var property = this;

		Object.defineProperty(this.parent, this.name, {
			get: function(){
				// return this.props[name].getter();
				return property.getter();
			},
			set: function(value){
				if (this.hasOwnProperty(name)){
					// this.props[name].setter(value);
					property.setter(value);
				} else {
					new Property({
						name: name,
						parent: this,
						value: value
					});
				}
			},
			configurable: true
		});
	},
	init_attach: function(){
		this.parent.props = this.parent.props || {};
		this.parent.props[this.name] = this;
	},
	getter: function(){
		// if (this.name === "name" || this.name === "id"){
		// 	console.trace("name or id -->", this.value);
		// } else {
		// 	console.log(this.parent.name + "{" + this.parent.id + "}" + "." + this.name + " -->", this.value);
		// }
		return this.value;
	},
	setter: function(value){
		// console.log(this.parent.name + "." + this.name + " =", value);
		this.value = value;
	}
});

module.exports = Property;

log.end();