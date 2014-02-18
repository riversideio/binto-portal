define('creditcardReady', [ 'jquery' ], function ( $ ) {
	return function ( ) {
		app.form.handler({}, app.binto.users.updateCard, function ( ) {
			app.binto.users.show({
				id : app.user.id
			}, function ( err, res ) {
				if ( err ) return console.warn( err );
				var user = res.user;
				for( var i = 0; i < app.plans.plans.length; i += 1 ) {
					var plan = app.plans.plans[ i ];
					if ( plan.id === user.plan_id ) {
						user.plan = plan;
					}
				}
				app.user = user;
				var payload = app.user;
				payload.message = "Thanks for joining!";
				app.gotoStep( 'dashboard', app.user );
			});
		}, app.form.errors )
	}
})
