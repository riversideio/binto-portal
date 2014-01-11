define('paymentReady', [ 'jquery', 'validate' ], function ( $, validate ) {
	return function ( ) {
		var $amount = $('#amount'),
			$cancel = $('.payment-cancel'),
			pattern = /\$|\.|[a-z]|-/gi,
			bads = /\$|[a-z]|-/gi,
			payloadAmount;

		function parseAmount ( amount ) {
			var _amount = amount + '',
				sanitize = _amount.replace( pattern, ''),
				cents = sanitize.slice(-2),
				dollar = sanitize.replace( cents, '');

			dollar = dollar.length ? +dollar : '0';
			cents = cents.length === 2 ? cents : 
				cents.length === 1 ? '0' + cents :
					'00';

			dollar = isNaN( dollar ) ? '0' : dollar;
			cents = isNaN( +cents ) ? '00' : cents;

			return '$' + dollar + '.' + cents;
		}



		app.form.handler({}, function( data, callback ){
			var amount = '' + data.amount,
				decSplit = amount.split(/\./),
				append = '',
				invalid;

			if ( !decSplit[1] ) { 
				append = '00';
			}
			invalid = validate('amountFormatted', amount);
			if ( invalid ) {
				var errors = {
					error : {
						message : invalid
					}
				};
				app.form.errors( errors );
				return callback( errors );
			}
			data.amount = (amount).replace( pattern, '') + append;
			


			app.io.users.charge( data, callback );
			payloadAmount = data.amount;
		}, function ( ) {
			app.io.users.show({
				id : app.user.id
			}, function ( err, res ) {
				if ( err ) return console.warn( err );
				app.user.message = "Thanks! You have been charged " 
					+ parseAmount( payloadAmount );
				app.gotoStep( 'dashboard', app.user );
			});
		}, app.form.errors );

		$amount.on('keyup', function( e ) {
			var value = $amount.val(),
				invalid = validate('amountFormatted', value );

			if ( invalid ) {
				$amount.addClass('error')
					.val( value.replace( bads, '' ) );
				return;
			}
			$amount.removeClass('error');	
		});

		$cancel.on('click', function ( ) {
			app.user.message = null;
			app.gotoStep('dashboard', app.user);
		});
	}
})