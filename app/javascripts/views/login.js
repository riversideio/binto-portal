define('loginReady', [  ], function ( ) {
	return function ( ) {
		app.form.handler({
			buttonProccessing : 'Logging In...'
		}, app.io.users.login, function ( res ) {
			app.$switch.remove();
			app.key = res.user.session_token;
			app.io.users.show({
				id : res.user.id
			}, function ( err, resp ) {
				if ( err ) return console.warn( err );
				var user = resp.user;
				for( var i = 0; i < app.plans.plans.length; i += 1 ) {
					var plan = app.plans.plans[ i ];
					if ( plan.id === user.plan_id ) {
						user.plan = plan;
					}
				}
				app.user = user;
				// this also needs to be move over to creation
				app.user.session_token = app.key;
				delete app.key;
				if ( 'sessionStorage' in window ) {
					sessionStorage.setItem('user', 
						JSON.stringify( app.user ));
				}
				app.gotoStep( 'dashboard', user );
			});
		}, function ( err ) {
			app.form.errors( err );
			var $el = $('<a/>')
					.text('Forgot your password?')
					.attr('href', '#')
					.addClass('forgot-link'),
				$form = $('form');
			$('.forgot-link').remove();
			$el.on('click', function ( ) {
				var email = $('[name="email"]').val();
				app.gotoStep('forgotpassword', {
					email : email
				})
			});
			$form.append( $el );
		});
	}
})