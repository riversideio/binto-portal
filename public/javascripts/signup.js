var site = site || {};

require.config({
	paths : {
		'jquery' : '//ajax.googleapis.com/ajax/libs/jquery/2.0.0/jquery.min',
		'handlebars' : '/javascripts/libs/handlebars',
		'moment' : '/javascripts/libs/moment',
		'__tmp' : '/javascripts/templatesSignup',
		'form' : '/javascripts/form',
		'io' : '/javascripts/sdk',
		'validate' : '/javascripts/validate'
	}
});

if ( "_signup" in window ) {

	require(['jquery', 'io', 'form', '__tmp', 'validate'], function ( $, io, form, __tmp, validate ) {

		site.$el = $('.main');
		site.io = io;
		var $switch = $('.login-switch');

		function gotoStep( template, payload ) {
			var _html = __tmp[ 'signup/' + template ]( payload );
			site.$el.html( _html );
			setTimeout( function ( ) {
				site.currentStep = template;
				stepReady( template );
			}, 0)
		}

		function stepReady( template ) {
			if ( template === 'creditcard' ){
				return ccReady();
			}

			if ( template === 'updatepayment' ){
				return ccUpdate();
			}

			if ( template === 'signup' ) {
				return signupReady( );
			}

			if( template === 'login' ) {
				return loginReady();
			}

			if ( template === 'forgotpassword' ) {
				return forgotReady();
			}
		}

		function formError ( err ) {
			var msg = "Darn.. there was an unexpected error";
			if ( err.error ) {
				msg = err.error.message;
			}
			var $el = $('<div/>')
					.text( msg )
					.attr('href', '#')
					.addClass('error_message'),
				$form = $('form');
			$('.error_message').remove();
			$form.prepend( $el );
		}

		function formHandler( options, method, next, error ) {
			var $inputs = $('input:not([type="submit"])'),
				$submit = $('input[type="submit"]'),
				submitState = $submit.val();

			$submit.on('click', function ( e ) {
				console.log("click")
				var _errors = [];
				e.preventDefault( );
				$submit.val( options.buttonProccessing || "Submiting...");
				var values = form.compile( $inputs );
				if ( values ) {
					// client side validation
					for ( var key in values ) {
						var value = values[ key ],
							bad = validate ( key, value );
						if ( bad ) {
							_errors.push( bad ); 
						}
					}

					if ( _errors.length ) {
						$submit.val(submitState || "Submit" );
						return error ({
							error : {
								message : _errors.join(' ')
							}
						})
					}
					// end client side validation
					method( values, function ( err, res ) {
						$submit.val(submitState || "Submit" );
						if ( err ) {
							if ( error ) error( err );		
							return;				
						}
						if ( next ) next ( res );
					})
				}
			})
		}

		function forgotReady ( ) {
			formHandler({
				buttonProccessing : 'Requesting...',
			}, io.users.resetPassword, function ( res ) {
				var email = $('[name="email"]').val();
				gotoStep( 'login', { 
					email : email,
					reset : true
				} );
			}, formError )
		}

		function signupReady( ) {
			formHandler({
				buttonProccessing : 'Creating...'
			}, io.users.create, function ( res ) {
				$switch.remove();
				gotoStep( 'creditcard', {} );
			}, formError );
		}

		function ccReady ( ) {
			formHandler({}, io.users.updateCard, function ( ) {
				
			}, formError )
		}

		function ccUpdate ( ) {
			formHandler({}, io.users.updateCard, function ( ) {
				gotoStep( 'updatethanks', {} );
			}, formError )
		}

		function loginReady( ) {
			formHandler({
				buttonProccessing : 'Logging In...'
			}, io.users.login, function ( ) {
				$switch.remove();
				gotoStep( 'updatepayment', {} );
			}, function ( err ) {
				formError( err );
				var $el = $('<a/>')
						.text('Forgot your password?')
						.attr('href', '#')
						.addClass('forgot-link'),
					$form = $('form');
				$('.forgot-link').remove();
				$el.on('click', function ( ) {
					var email = $('[name="email"]').val();
					gotoStep('forgotpassword', {
						email : email
					})
				});
				$form.append( $el );
			})
		}

		gotoStep('signup', _signup || {});

		site.gotoStep = gotoStep;

		$switch.on('click', function ( e ) {
			e.preventDefault( );
			var values = form.compile( $('input:not([type="submit"])') );
			if ( site.currentStep === 'signup'){
				$switch.text('Create a Account')
				return gotoStep( 'login', values || {} );
			}
			$switch.text('Already have an Account?');
			gotoStep( 'signup', values || {} );
		} )

	});
}

