var app = app || {};

require.config({
	paths : {
		'jquery' : '//ajax.googleapis.com/ajax/libs/jquery/2.0.0/jquery.min',
		'handlebars' : '/javascripts/libs/handlebars',
		'moment' : '/javascripts/libs/moment',
		'__tmp' : '/javascripts/templates',
		'form' : '/javascripts/form',
		'io' : '/javascripts/sdk',
		'validate' : '/javascripts/validate',
		'ready' : '/javascripts/views/index'
	}
});

if ( "_signup" in window ) {

	require(['jquery', 'io', 'form', '__tmp', 'ready'], function ( $, io, form, __tmp, ready ) {

		app.$el = $('.main');
		app.io = io;
		app.form = form;
		app.$switch = $('.login-switch');
		app.ready = ready;		

		function gotoStep( template, payload ) {
			var _html = __tmp[ template ]( payload );
			app.$el.html( _html );
			setTimeout( function ( ) {
				app.currentStep = template;
				stepReady( template );
			}, 0)
		}

		function stepReady( template ) {
			if ( typeof app.ready[ template ] === 'function' ) {
				return app.ready[ template ]( );
			}
		}

		function formError ( err ) {
			form.errors.apply( form, arguments );
		}

		function formHandler( ) {
			form.handler.apply( form, arguments );
		}

		gotoStep('signup', _signup || {});

		app.gotoStep = gotoStep;
		// preload plans
		io.plans.all( function ( err, res ) {
			if ( err ) console.warn( err );
			for( var i = 0; i < res.plans.length; i += 1 ) {
				res.plans[ i ].amount = res.plans[ i ].amount / 100; 
			}
			app.plans = res;
			if ( typeof app.plansReady === 'function' ) {
				app.plansReady();
			}
		});

		app.$switch.on('click', function ( e ) {
			e.preventDefault( );
			var values = form.compile( $('input:not([type="submit"])') );
			if ( app.currentStep === 'signup'){
				app.$switch.text('Create a Account')
				return gotoStep( 'login', values || {} );
			}
			app.$switch.text('Already have an Account?');
			gotoStep( 'signup', values || {} );
		} )

	});
}

