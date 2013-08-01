var app = app || {};
app.pages = app.pages || {};

(function(){
	"use stict";
	app.pages.accountInfo = app.PageBase.extend({
		className : "riversideio-profile",
		template : "accountInfo"
	});
}());