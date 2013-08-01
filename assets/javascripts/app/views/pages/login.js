var app = app || {};
app.pages = app.pages || {};

(function(){

	"use stict";

	app.pages.login = app.PageBase.extend({
		className : "login_page",
		tagName : "div",
		template : "login",
		events : {
			"click .login_submit" : "login"
		},
		postRender : function(){
			this.$submit = this.$('.login_submit');
			this.$email = this.$('#email');
			this.$password = this.$('#password');
		},
		defaults : function(){
			this.$submit.removeClass('pure-button-disabled');
		},
		_tryAuth : function( email, password ){
			var 
			_this = this, 
			payload = {
				email : email,
				password : password
			};

			app.Router.trigger('loading');

			$.ajax({
				url : app.get("api") + 'sessions.json',
				data : payload,
				type : 'POST',
				success : function( res ){
					if( 
						res.success &&
						typeof res.user.id === 'string' &&
						typeof res.user.session_token === 'string'
					 ){ 
						app.set("session", res.user.session_token );
						app.set("id", res.user.id );

						app.Router.navigate('/_', { trigger : true });
					}else{
						app.Router.trigger('done');
						console.log("failure");
					}
					_this.defaults();
				},
				error : function( err ){
					_this.defaults();
					console.log( err.message );
				}
			});
		},
		login : function(e){
			e.preventDefault();
			this.$submit.addClass('pure-button-disabled');

			var
			email = this.$email.val(),
			password = this.$password.val();

			console.log( email, password );

			if( email && password ){
				this._tryAuth( email, password );
			}

			console.log("logging in");
		}
	});

}());