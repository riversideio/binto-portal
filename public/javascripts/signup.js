var site = site || {};

require.config({
	paths : {
		'jquery' : '//ajax.googleapis.com/ajax/libs/jquery/2.0.0/jquery.min',
		'handlebars' : '/javascripts/libs/handlebars',
		'moment' : '/javascripts/libs/moment',
		'__tmp' : '/javascripts/templatesSignup',
		'form' : '/javascripts/form',
		'io' : '/javascripts/sdk',
		'validate' : '/javascripts/validate',
		'ready' : '/javascripts/views/index'
	}
});

if ( "_signup" in window ) {

	require(['jquery', 'io', 'form', '__tmp'], function ( $, io, form, __tmp ) {

		site.$el = $('.main');
		site.io = io;
		site.form = form;
		site.$switch = $('.login-switch');

		function gotoStep( template, payload ) {
			var _html = __tmp[ 'signup/' + template ]( payload );
			site.$el.html( _html );
			setTimeout( function ( ) {
				site.currentStep = template;
				stepReady( template );
			}, 0)
		}

		function stepReady( template ) {
			if ( typeof site.ready[ template ] === 'function' ) {
				return site.ready[ template ]( );
			}
		}

		function formError ( err ) {
			form.errors.apply( form, arguments );
		}

		function formHandler( ) {
			form.handler.apply( form, arguments );
		}

		require(['ready'], function( ready ) {
			site.ready = ready;		
			gotoStep('signup', _signup || {});
		})

		site.gotoStep = gotoStep;
		// preload plans
		io.plans.all( function ( err, res ) {
			if ( err ) console.warn( err );
			for( var i = 0; i < res.plans.length; i += 1 ) {
				res.plans[ i ].amount = res.plans[ i ].amount / 100; 
			}
			site.plans = res;
		});

		site.$switch.on('click', function ( e ) {
			e.preventDefault( );
			var values = form.compile( $('input:not([type="submit"])') );
			if ( site.currentStep === 'signup'){
				site.$switch.text('Create a Account')
				return gotoStep( 'login', values || {} );
			}
			site.$switch.text('Already have an Account?');
			gotoStep( 'signup', values || {} );
		} )

	});
}

