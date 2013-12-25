

var site = site || {};

//= require libs/require.js

require.config({
	paths : {
		'jquery' : '//ajax.googleapis.com/ajax/libs/jquery/2.0.0/jquery.min'
		'__tmp' : '/javascripts/templatesSignup',
		'handlebars' : '/javascripts/libs/handlebars',
		'moment' : '/javascripts/libs/moment'
	}
})

if ( "_signup" in window ) {
	require(['jquery'], function ( $ ) {
		var processing;
		function _compileValues ( $inputs ) {
			var payload = {},
				errors = [];
			$inputs.each( function ( ) {
				var key = this.name,
					value = this.value;
					console.log( key, value );
/*					bad = validate( key, value );
				if ( bad ) {
					errors.push( err)
				}
*/
				payload[ key ] = value;
			})

			if ( errors.length ) {
				return console.warn( errors.join(' ') );
			}

			return payload;
		}

		function _sendRequest ( endpoint, data, callback ) {
			return $.ajax({
				// abstract url to allow for better dev
				url : 'http://localhost:3000/api/v0/' + endpoint,
				data : data,
				type : "post",
				success : function ( res ) {
					if ( callback ) callback( null, res );
				},
				error : function ( err ) {
					if ( callback ) callback ( err );
				}
			})
		}

		function createUser ( $inputs, callback ) {
			if ( !processing ){
				processing = true;
				var values = _compileValues( $inputs );
				if ( values ) {
					return _sendRequest( 'users.json', values, function ( ) {
						processing = false;
						if ( callback ) callback.apply( null, arguments );
					} );
				}
				// need to be able to abstract actual errors to this
				callback( new Error("Bad Input") );
			}
		}

		site.createUser = createUser;

	});

	$( function ( ) {
		var $inputs = $('input:not([type="submit"])'),
			$submit = $('input[type="submit"]');

		$submit.on('click', function ( e ) {
			e.preventDefault( );
			$submit.val("Creating...");
			site.createUser( $inputs, function ( err, res ) {
				$submit.val("Create");
				if ( err ) return console.log( err );
				console.log('We are good', res );
			})

		})
	} );
}

