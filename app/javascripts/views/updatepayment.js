define('updatepaymentReady', [ 'jquery' ], function ( $ ) {
	return function ( ) {
		var $cancel = $('.update-payment-cancel')

		app.form.handler({}, app.io.users.updateCard, function ( ) {
			var payload = app.user;
			payload.message = "Payment Successfully Updated";
			app.gotoStep('dashboard', payload );
		}, app.form.errors );

		$cancel.on('click', function ( ) {
			app.user.message = null;
			app.gotoStep('dashboard', app.user);
		});
	}
})