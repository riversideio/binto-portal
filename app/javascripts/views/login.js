define('loginReady', [  ], function ( ) {
	return function ( ) {
		site.form.handler({
			buttonProccessing : 'Logging In...'
		}, site.io.users.login, function ( res ) {
			site.$switch.remove();
			site.io.users.show({
				id : res.user.id
			}, function ( err, res ) {
				if ( err ) return console.warn( err );
				var user = res.user;
				for( var i = 0; i < site.plans.plans.length; i += 1 ) {
					var plan = site.plans.plans[ i ];
					if ( plan.id === user.plan_id ) {
						user.plan = plan;
					}
				}
				site.user = user;
				site.gotoStep( 'dashboard', user );
			});
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