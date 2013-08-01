var app = app || {};
app.pages = app.pages || {};

(function(){
	"use stict";
	app.pages.userNav = app.PageBase.extend({
		className : "riversideio-nav",
		template : "userNav"
	});
}());