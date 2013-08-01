var app = app || {};
app.pages = app.pages || {};

(function(){
	"use stict";
	app.pages.memberProfile = app.PageBase.extend({
		className : "riversideio-profile",
		template : "memberProfile"
	});
}());