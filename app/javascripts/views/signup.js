define('signupReady', [  ], function ( ) {
	return function ( ) {
		app.form.handler({
			buttonProccessing : 'Creating...'
		}, app.io.users.create, function ( res ) {
			app.$switch.remove();
			app.user = res.user;
			if ( 'sessionStorage' in window ) {
				sessionStorage.setItem('user', 
					JSON.stringify( app.user ));
			}
			if ( _options.view ) return app.gotoView( _options.view );
			app.gotoStep( 'plans', app.plans );
		}, app.form.errors );
	}
})