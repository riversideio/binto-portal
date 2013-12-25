var site = site || {};

require.config({
	paths : {
		'jquery' : '//ajax.googleapis.com/ajax/libs/jquery/2.0.0/jquery.min',
		'handlebars' : '/javascripts/libs/handlebars',
		'moment' : '/javascripts/libs/moment',
		'__tmp' : '/javascripts/templatesSignup',
		'form' : '/javascripts/form',
		'io' : '/javascripts/sdk'
	}
});

if ( "_signup" in window ) {

	require(['jquery', 'io', 'form', '__tmp'], function ( $, io, form, __tmp ) {

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
		}

		function formHandler( options, method, next ) {
			var $inputs = $('input:not([type="submit"])'),
				$submit = $('input[type="submit"]'),
				submitState = $submit.val();

			$submit.on('click', function ( e ) {
				e.preventDefault( );
				$submit.val( options.buttonProccessing || "Submiting...");
				var values = form.compile( $inputs );
				if ( values ) {
					method( values, function ( err, res ) {
						$submit.val(submitState || "Submit" );
						if ( err ) return console.log( err );						
						if ( next ) next ( res );
					})
				}
			})
		}

		function signupReady( ) {
			formHandler({
				buttonProccessing : 'Creating...'
			}, io.users.create, function ( res ) {
				$switch.remove();
				gotoStep( 'creditcard', {} );
			});
		}

		function ccReady ( ) {
			formHandler({}, io.users.updateCard, function ( ) {
				
			})
		}

		function ccUpdate ( ) {
			formHandler({}, io.users.updateCard, function ( ) {
				gotoStep( 'updatethanks', {} );
			})
		}

		function loginReady( ) {
			formHandler({
				buttonProccessing : 'Logging In...'
			}, io.users.login, function ( ) {
				$switch.remove();
				gotoStep( 'updatepayment', {} );
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

