var app = app || {};

(function(){

	var appModel = Backbone.Model.extend({
		defaults : function(){
			// for testing
			if( /localhost/.test(window.location.origin) ){
				return { 'api' : 'http://127.0.0.1:3000/api/v0/' };
			}else{
				return { 'api' : 'https://victoria-club.herokuapp.com/api/v0/' };
			}
		}
	
	});

	_.extend( app, new appModel( { } ) );

}());