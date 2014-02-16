var app = app || {};

require.config({
	paths : {
		'jquery' : '//ajax.googleapis.com/ajax/libs/jquery/2.0.0/jquery.min',
		'handlebars' : '/javascripts/libs/handlebars',
		'moment' : '/javascripts/libs/moment',
		'pikaday' : '/javascripts/libs/pikaday',
		'__tmp' : '/javascripts/templates',
		'form' : '/javascripts/form',
		'io' : '/javascripts/sdk',
		'validate' : '/javascripts/validate',
		'ready' : '/javascripts/views/index',
	}
});

if ( "_options" in window ) {

	require(['jquery', 'io', 'form', '__tmp', 'ready'], function ( $, io, form, __tmp, ready ) {

		var done,	
			user,
			plans,
			supportSessions = 'sessionStorage' in window,
			supportPushState = 'pushState' in history &&
				'replaceState' in history,
			back;

		app.$el = $('.main');
		app.io = io;
		app.form = form;
		app.$switch = $('.login-switch');
		io.setUrl( _options.api );
		app.ready = ready;

		app.logout = function ( ) {
			app.user = null;
			sessionStorage.clear();
		};

		window.onpopstate = function ( ) {
			var view = location.pathname.replace('/', '');
			back = true;
			app.gotoView( view );
		};

		function gotoStep( template, payload ) {
			var _html = __tmp[ template ]( payload );
			app.$el.html( _html );
			setTimeout( function ( ) {
				app.currentStep = template;
				stepReady( template );
			}, 0)
			if ( supportPushState ) {
				if ( back ) {
					back = null;
					return;
				}
				history.pushState({}, template, template);
			}
		}

		function gotoView( view ) {
			if ( view === 'dashboard' ) {
				if ( !app.user ) { 
					back = null;
					app.gotoView('login');
				}
				return app.gotoStep( view, app.user );
			}
			app.gotoStep( view, _options );
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
		// checks for view creates a message if view is present
		if ( _options.view ) {
			switch ( _options.view ) { 
				case 'createevent' :
					_options.message = "Once you signup or login you" +
						" will be taken to the create event page.";
					break;
				case 'donate' :
					_options.message = "Please create an account to donate" +
						" and you are a beautiful person.";
					break;
				default : 
					// just remove for now to avoid issues
					_options.view = null;
			}
		}

		if ( supportSessions ) {
			try { 
				user = JSON.parse( sessionStorage.getItem( 'user' ) );
				plans = JSON.parse( sessionStorage.getItem( 'plans' ) ) 
			} catch ( e ) {
				sessionStorage.removeItem( 'user' );
				sessionStorage.removeItem( 'plans' );
				user = null;
				plans = null;
			}
			if ( user && plans ) {
				app.$switch.remove();
				done = function ( ) {
					if ( _options.view ) return gotoView( _options.view );
					gotoStep('dashboard', user );
				};
				app.user = user;
				app.plans = plans;
				io.setUser( user );
				if ( app.plans ) done();
			} else {
				gotoStep('signup', _options || {});
			}
		}		

		app.gotoStep = gotoStep;
		app.gotoView = gotoView;
		// preload plans
		io.plans.all( function ( err, res ) {
			if ( err ) console.warn( err );
			for( var i = 0; i < res.plans.length; i += 1 ) {
				res.plans[ i ].amount = res.plans[ i ].amount / 100; 
			}
			app.plans = res;
			if ( supportSessions ){
				sessionStorage.setItem('plans', JSON.stringify(app.plans) );
			}
			if ( typeof done === 'function' ) done();
			if ( typeof app.plansReady === 'function' ) {
				app.plansReady();
			}
		});

		app.$switch.on('click', function ( e ) {
			e.preventDefault( );
			var values = form.compile( $('input:not([type="submit"])') ) || {};
			if ( _options.message ){
				values.message = _options.message;
			}
			if ( app.currentStep === 'signup'){
				app.$switch.text('Create a Account')
				return gotoStep( 'login', values );
			}
			app.$switch.text('Already have an Account?');
			gotoStep( 'signup', values );
		} )

	});
}

