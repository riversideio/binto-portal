define( 'validate', [], function ( ) {

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
		}
	}

	return function ( key, value ) {
		if ( type[ key ] ) {
			return type[ key ]( value );
		}
		return;
	}

} )