define('creditcardReady', [ 'jquery' ], function ( $ ) {
	return function ( ) {
		site.form.handler({}, site.io.users.updateCard, function ( ) {
			site.io.users.show({
				id : site.user.id
			}, function ( err, res ) {
				if ( err ) return console.warn( err );
				var user = res.user;
				for( var i = 0; i < site.plans.plans.length; i += 1 ) {
					var plan = site.plans.plans[ i ];
					if ( plan.id === user.plan_id ) {
						user.plan = plan;
					}
				}
				site.user = user;
				var payload = site.user;
				payload.message = "Thanks for joining!";
				site.gotoStep( 'dashboard', site.user );
			});
		}, site.form.errors )
	}
})