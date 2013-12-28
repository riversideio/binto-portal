define('updatepaymentReady', [ 'jquery' ], function ( $ ) {
	return function ( ) {
		var $cancel = $('.update-payment-cancel')

		site.form.handler({}, site.io.users.updateCard, function ( ) {
			site.gotoStep( 'updatethanks', {} );
		}, site.form.errors );

		$cancel.on('click', function ( ) {
			site.user.message = null;
			site.gotoStep('dashboard', site.user);
		});
	}
})