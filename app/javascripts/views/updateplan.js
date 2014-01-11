define('updateplanReady', [ 'jquery' ], function ( $ ) {
	return function ( ) {
		var $submit = $('.submit-plan'),
			$cancel = $('.cancel-plan');

		$submit.on('click', function ( e ) {
			var $selected = $('input[type="radio"]:checked'),
				planId = $selected.data('id');

			if ( !site.user.stripe_customer_id && planId ) {
				return site.gotoStep( 'creditcard', {
					planId : planId
				});
			}


			if ( planId ) {
				$submit.text('Updating...');
				return site.io.users.updatePlan({
					id : site.user.id,
					plan : planId
				}, function ( err, res ) {
					$submit.text('Ok');
					if ( err ) return console.warn( err );
					site.user.plan = res.message.plan;
					site.user.plan.amount = site.user.plan.amount / 100;
					var payload = site.user;
					payload.message = "Your plan has been updated.";
					site.gotoStep( 'dashboard', payload );
				})
			}
			site.form.errors({
				error : {
					message : "Please select a plan."
				}
			})
		});

		$cancel.on('click', function ( ) {
			site.user.message = null;
			site.gotoStep('dashboard', site.user);
		})
	}
})