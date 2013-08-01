var app = app || {};
app.pages = app.pages || {};

(function(){
	"use stict";
	app.pages.publicNav = app.PageBase.extend({
		className : "riversideio-nav",
		template : "publicNav"
	});
}());