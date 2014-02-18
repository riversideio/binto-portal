define('cancelplanReady', [ 'jquery' ], function ( $ ) {
	return function ( ) {
		var $yes = $('.yes-plan'),
			$no = $('.no-plan');

		$yes.on('click', function ( e ) {
			$yes.text('Canceling...');
			app.binto.users.cancelPlan({
				id : app.user.id
			}, function ( err, res ) {
				if ( err ) return console.warn( err );
				app.user.plan = null;
				app.user.plan_id = "0";
				var payload = app.user;
				payload.message = "Sorry to see you go";
				app.gotoStep('dashboard', payload );
			})
		});

		$no.on('click', function ( ) {
			app.user.message = null;
			app.gotoStep('dashboard', app.user);
		})
	}
})
