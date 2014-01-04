define('updatepaymentReady', [ 'jquery' ], function ( $ ) {
	return function ( ) {
		var $cancel = $('.update-payment-cancel')

		site.form.handler({}, site.io.users.updateCard, function ( ) {
			var payload = site.user;
			payload.message = "Payment Successfully Updated";
			site.gotoStep('dashboard', payload );
		}, site.form.errors );

		$cancel.on('click', function ( ) {
			site.user.message = null;
			site.gotoStep('dashboard', site.user);
		});
	}
})