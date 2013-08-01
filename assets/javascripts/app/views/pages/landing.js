var app = app || {};
app.pages = app.pages || {};

(function(){

	"use stict";

	app.pages.landing = app.PageBase.extend({
		className : "landing_page",
		tagName : "article",
		template : "landing"
	});

}());