var app = app || {};
app.pages = app.pages || {};

(function(){
	"use stict";
	app.pages.memberList = app.PageBase.extend({
		className : "riversideio-list",
		tagName : "nav",
		template : "memberList"
	});

}());