define('signupReady', [  ], function ( ) {
	return function ( ) {
		site.form.handler({
			buttonProccessing : 'Creating...'
		}, site.io.users.create, function ( res ) {
			site.$switch.remove();
			site.user = res.user;
			site.gotoStep( 'plans', site.plans );
		}, site.form.errors );
	}
})