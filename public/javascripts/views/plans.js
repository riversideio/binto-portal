define('plansReady', [ 'jquery' ], function ( $ ) {
	return function ( ) {
		var $submit = $('.submit-plan');

		$submit.on('click', function ( e ) {
			var $selected = $('input[type="radio"]:checked'),
				planId = $selected.data('id');
			if ( planId ) {
				site.user.plan_id = planId;
				return site.gotoStep('creditcard', { planId : planId });
			}

			if ( $selected.data('none') ) {
				return site.gotoStep( 'dashboard', site.user );
			}
			site.form.errors({
				error : {
					message : "Please select a plan."
				}
			})
		})
	}
})