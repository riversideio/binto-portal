define('updateplanReady', [ 'jquery' ], function ( $ ) {
	return function ( ) {
		var $submit = $('.submit-plan'),
			$cancel = $('.cancel-plan');

		$submit.on('click', function ( e ) {
			var $selected = $('input[type="radio"]:checked'),
				planId = $selected.data('id');

			if ( !app.user.stripe_customer_id && planId ) {
				return app.gotoStep( 'creditcard', {
					planId : planId
				});
			}


			if ( planId ) {
				$submit.text('Updating...');
				return app.io.users.updatePlan({
					id : app.user.id,
					plan : planId
				}, function ( err, res ) {
					$submit.text('Ok');
					if ( err ) return console.warn( err );
					app.user.plan = res.message.plan;
					app.user.plan.amount = app.user.plan.amount / 100;
					var payload = app.user;
					payload.message = "Your plan has been updated.";
					app.gotoStep( 'dashboard', payload );
				})
			}
			app.form.errors({
				error : {
					message : "Please select a plan."
				}
			})
		});

		$cancel.on('click', function ( ) {
			app.user.message = null;
			app.gotoStep('dashboard', app.user);
		})
	}
})