var app = app || {};

// it might be good to expose this
// so we can pass it variables from server side
$(function( ){
	"use stict";
	app.content = new app.AppView();
	app.Router = new app.Workspace();
	Backbone.history.start( { pushState : true } );	
	// i dont know why i have to do this

	app.Router.on("loading", function(){
		app.set("loading", true);
		app.content.$body.addClass("loading");
	}, this)

	app.Router.on("done", function(){
		app.set("loading", false);
		app.content.$body.removeClass("loading");
		app.content.setState();
	}, this)


	$("body").on("click", "a", function(e){
		var 
		origin = window.location.origin,
		location = e.target.href.replace( origin, '' );
		e.preventDefault();
		app.Router.navigate( location, { trigger : true } );
	})
});