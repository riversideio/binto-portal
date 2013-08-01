var app = app || {};

app.Users = Backbone.Collection.extend({
	model : app.User,
	url : app.get("api") + "users.json",
	parse : function ( data ) {
		if( data.users ){
			return data.users;
		}
	}
});