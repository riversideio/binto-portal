var app = app || {};

(function(){

	"use stict";

	var Workspace = Backbone.Router.extend({
		routes: {
			'' : 'landing',
			'members' : 'memberList',
			'members/:id' : 'memberProfile',
			'login' : 'login',
			'logout' : 'logout',
			'signup' : 'signup',
			'_' : 'me',
			'_/:method' : 'meMethod',
			'_/:method/edit' : 'meMethodEdit'
		},
		loading : function(){
			app.Router.trigger('loading');

			if( !(app.has('nav')) ){
				app.content.render({
					nav : "publicNav"
				});
				app.set('nav', 'public');
			}
		},
		errorHandler : function( status, message ){
			if( "console" in window ){
				console.log( status, message );
			}
			app.content.render( err.status , err.message );
		},
		landing : function ( param ){
			this.loading();
			//app.content.render("landing");
		},
		_isLoggedIn : function( callback, context ){
			if( app.has( 'id' ) && app.has( 'session' ) ){
				callback.call( context || this );
			}else{
				app.Router.navigate( "/login", { trigger : true } );
			}
		},
		me : function(){
			this.loading();
			this._isLoggedIn(function(){
				app.content.render({
					list : 'userMethods',
					nav : 'userNav'
				});	
				app.set('nav', 'user');
			});
		},
		__account_info_edit : function(){

			if( app.has('_user') ){
				app.content.render({
					main : 'accountInfoEdit'
				},{
					main : app.get('_user')
				});
			}
		},
		__account_info : function(){
			var user = new app.User();
			user.url = app.get("api") + "users/" + app.get("id") + "/show.json";

			app.set( '_user', user );

			user.fetch({
				success : function( res ){
					console.log( res );
					app.content.render({
						main : 'accountInfo'
					},{
						main : res
					});
				}
			})
		},
		__update_card : function(){

			var year = new Date().getFullYear(),
				years = [];

			for( var i = 0; i < 12; i += 1 ){
				years.push( year + i );
			}
			// this is dumb but nessasary
			years = new app.User( { years : years } );

			this.loading();
			this._isLoggedIn(function(){
				app.content.render({
				 	main : 'updateCard' 
				},{
					main : years
				});
			});

		},
		meMethod : function( method ){
			this.loading();
			this._isLoggedIn(function(){

				if( typeof this[ "__" + method ] === "function" ){
					this[ "__" + method ]();
				}

			}, this );
		},
		meMethodEdit : function( method ){
			this.loading();
			this._isLoggedIn(function(){
				if( typeof this[ "__" + method + '_edit' ] === "function" ){
					this[ "__" + method + '_edit' ]();
				}

			}, this );
		},
		memberList : function( flag, callback ){
			this.loading();
			//create users set
			var users = new app.Users([]);

			users.fetch({
				success : function ( res ){
					if( !flag ){
						app.members = res;
						app.content.render({
							list : 'memberList'
						},{
							list : res
						})
					}else{
						callback( res );
					}
				}
			});
		},
		memberProfile : function( param ){
			this.loading();
			var getMember = function( id ){
				return member = app.members.
					findWhere({ objectId : id })
			};

			if( app.members ){
				
				app.content.render({
					main : 'memberProfile'
				},{
					main : getMember( param )
				});

			}else{
				this.memberList( true, function( res ){

					app.members = res;
					var member = getMember( param ); 

					app.content.render({
						main : ( member ) ? 'memberProfile' : '404' ,
						list : 'memberList'
					},{
						list : res,
						main : member
					});
				})
			}

		},
		login : function( param ){
			this.loading();
			app.content.render({
				list : 'login',
				main : 'landing'
			})
		},
		logout : function( param ){
			app.set({
				session : null,
				id : null,
				nav : null
			});
			this.loading();
			app.Router.navigate( '/login', { trigger : true } );
		},
		signup: function( param ){
			this.loading();
			app.content.render("signup")
		}
	});

	app.Workspace = Workspace;

}());