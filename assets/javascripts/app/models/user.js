var app = app || {};

(function(){

	app.User = Backbone.Model.extend({
		idAttribute: "_id",
		url : app.get('api') + "user.json",
		parse : function( data, options ){
			if( data.user ){
				return data.user;
			}
			return data;
		},
		update : function( payload, callback ){
			
			if( !( typeof callback === 'function' ) ){
				callback = function(){};
			}

			if( payload && typeof payload === 'object' ){

				app.Router.trigger('loading');

				this.url = app.get('api') + 'users/' + this.get('objectId') + '/update.json';
				this.set( payload );
				_.extend( payload, { session_token : app.get('session') } );
				$.ajax({
					url : this.url,
					type : 'POST',
					data : payload,
					success : function(){
						app.Router.trigger('done');
						callback( true );
					},
					error : function(){
						callback( false );
						app.Router.trigger('done');
					}
				})
			}
		}
	});

}());