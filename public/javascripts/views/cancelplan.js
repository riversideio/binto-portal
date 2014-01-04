define('cancelplanReady', [ 'jquery' ], function ( $ ) {
	return function ( ) {
		var $yes = $('.yes-plan'),
			$no = $('.no-plan');

		$yes.on('click', function ( e ) {
			$yes.text('Canceling...');
			site.io.users.cancelPlan({
				id : site.user.id
			}, function ( err, res ) {
				if ( err ) return console.warn( err );
				site.user.plan = null;
				site.user.plan_id = "0";
				var payload = site.user;
				payload.message = "Sorry to see you go";
				site.gotoStep('dashboard', payload );
			})
		});

		$no.on('click', function ( ) {
			site.user.message = null;
			site.gotoStep('dashboard', site.user);
		})
	}
})