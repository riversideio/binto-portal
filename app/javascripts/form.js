define('form', ['jquery', 'validate' ], function ( $, validate ) {
	function _compileValues ( $inputs ) {
		var payload = {},
			errors = [];
		$inputs.each( function ( ) {
			var key = this.name,
				value = this.value;

			payload[ key ] = value;
		})

		if ( errors.length ) {
			return console.warn( errors.join(' ') );
		}

		return payload;
	}

	function handler ( options, method, next, error ) {
		var $inputs = $('input:not([type="submit"]), textarea'),
			$submit = $('input[type="submit"]'),
			submitState = $submit.val();

		$submit.on('click', function ( e ) {
			var _errors = [];
			e.preventDefault( );
			$submit.val( options.buttonProccessing || "Submiting...");
			var values = _compileValues( $inputs );
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

	function errors( err ) {
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

	return {
		compile : _compileValues,
		handler : handler,
		errors : errors,
		validate : validate
	}
}) 