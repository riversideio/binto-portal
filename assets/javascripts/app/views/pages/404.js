var app = app || {};
app.pages = app.pages || {};

(function(){

	"use stict";

	app.pages['404'] = app.PageBase.extend({
		className : "404_page",
		tagName : "div",
		template : "404"
	});

}());