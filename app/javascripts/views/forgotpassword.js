define('forgotpasswordReady', [ 'jquery' ], function ( $ ) {
	return function ( ) {
		site.form.handler({
			buttonProccessing : 'Requesting...',
		}, site.io.users.resetPassword, function ( res ) {
			var email = $('[name="email"]').val();
			site.gotoStep( 'login', { 
				email : email,
				reset : true
			});
		}, site.form.errors );
	}
})