define('plansReady', [ 'jquery' ], function ( $ ) {
	return function ( ) {
		var $submit = $('.submit-plan');

		$submit.on('click', function ( e ) {
			var $selected = $('input[type="radio"]:checked'),
				planId = $selected.data('id');
			if ( planId ) {
				app.user.plan_id = planId;
				return app.gotoStep('creditcard', { planId : planId });
			}

			if ( $selected.data('none') ) {
				return app.gotoStep( 'dashboard', app.user );
			}
			app.form.errors({
				error : {
					message : "Please select a plan."
				}
			})
		})
	}
})