define('signupReady', [  ], function ( ) {
	return function ( ) {
		app.form.handler({
			buttonProccessing : 'Creating...'
		}, app.io.users.create, function ( res ) {
			app.$switch.remove();
			app.user = res.user;
			app.gotoStep( 'plans', app.plans );
		}, app.form.errors );
	}
})