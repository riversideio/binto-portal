define('forgotpasswordReady', [ 'jquery' ], function ( $ ) {
	return function ( ) {
		app.form.handler({
			buttonProccessing : 'Requesting...',
		}, app.io.users.resetPassword, function ( res ) {
			var email = $('[name="email"]').val();
			app.gotoStep( 'login', { 
				email : email,
				reset : true
			});
		}, app.form.errors );
	}
})