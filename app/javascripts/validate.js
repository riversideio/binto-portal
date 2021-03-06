define( 'validate', ['moment'], function ( moment ) {

	function validateMoment ( error, value ) {
		var date = moment( value );
		return date ? ( moment( value ).isValid() ? null : error ) : error;
	}

	var type = {
		'email' : function ( value ) {
			var pattern = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if (!pattern.test(value)) {
                return "Invalid Email.";
            } 
            return;
		},
		'card_number' : function ( value ) {
			if( isNaN(+value) || (value + '').length !== 16 ){
			  return "Credit Card Number Invalid.";
			}
			return;
		},
		'card_cvc' : function ( value ) {
			if ( 
				isNaN(+value) ||
			 	( value + '' ).length > 3 || 
			 	( value + '' ).length === 0
			) {
				return "Card CVC Not Valid"
			}
			return;
		},
		'card_exp_month' : function ( value ) {
			if ( 
				isNaN(+value) ||
			 	( value + '' ).length > 2 || 
			 	( value + '' ).length === 0
			) {
				return "Card Expiration Month Not Valid"
			}
			return;
		},
		'card_exp_year' : function ( value ) {
			if ( 
				isNaN(+value) ||
			 	( value + '' ).length > 2 || 
			 	( value + '' ).length === 0
			) {
				return "Card Expiration Year Not Valid"
			}
			return;
		},
		'_amount' : function ( value ) {
			if( isNaN(+value) ) {
				return "Amount must be a number";
			}

			if( +value < 50 ) {
				return "Minimal amount accepted is $.50";	
			}
			return;
		},
		'amountFormatted' : function ( value ) {
			var val = '' + value,
				decSplit = val.split(/\./),
				afterDec = decSplit[1],
				cents = decSplit.join(''),
				valid;

			if( !afterDec ) {
				cents = cents + "00";
				afterDec = "00";
			}

			valid = type._amount( cents );

			if ( valid ) return valid;

			if ( afterDec.length > 2 || decSplit.length > 2 || afterDec.length < 2 ) {
				return "Invalid Amount"
			}

			return;

		},
		'date' : function ( value ) {
			return validateMoment.bind( null, 'Invalid Date' )( value );
		},
		'start' : function ( value ) {
			var date = moment().format('YYYY/MM/DD');
			return validateMoment.bind( null, 'Invalid Start Time' )
				( date + ' ' + value );
		},
		'end' : function ( value ) {
			var date = moment().format('YYYY/MM/DD');
			return validateMoment.bind( null, 'Invalid End Time' )
				( date + ' ' + value );
		},
		'title' : function ( value ) {
			return value ? null : 'Please enter a title' ;
		}
	}

	return function ( key, value ) {
		if ( type[ key ] ) {
			return type[ key ]( value );
		}
		return;
	}

} )