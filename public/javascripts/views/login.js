define('loginReady', [  ], function ( ) {
	return function ( ) {
		site.form.handler({
			buttonProccessing : 'Logging In...'
		}, site.io.users.login, function ( ) {
			site.$switch.remove();
			site.gotoStep( 'dashboard', {} );
		}, function ( err ) {
			site.form.errors( err );
			var $el = $('<a/>')
					.text('Forgot your password?')
					.attr('href', '#')
					.addClass('forgot-link'),
				$form = $('form');
			$('.forgot-link').remove();
			$el.on('click', function ( ) {
				var email = $('[name="email"]').val();
				site.gotoStep('forgotpassword', {
					email : email
				})
			});
			$form.append( $el );
		});
	}
})