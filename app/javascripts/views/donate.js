define('donateReady', [ 'jquery', 'validate' ], function ( $, validate ) {
	return function ( ) {
		var $amount = $('#amount'),
			$cancel = $('.donate-cancel'),
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



		site.form.handler({}, function( data, callback ){
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
				site.form.errors( errors );
				return callback( errors );
			}
			data.amount = (amount).replace( pattern, '') + append;
			


			site.io.users.charge( data, callback );
			payloadAmount = data.amount;
		}, function ( ) {
			site.io.users.show({
				id : site.user.id
			}, function ( err, res ) {
				if ( err ) return console.warn( err );
				site.user.message = "Thanks! You have been charged " 
					+ parseAmount( payloadAmount );
				site.gotoStep( 'dashboard', site.user );
			});
		}, site.form.errors );
		
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
			site.user.message = null;
			site.gotoStep('dashboard', site.user);
		});
	}
})