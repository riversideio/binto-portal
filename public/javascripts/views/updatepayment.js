define('updatepaymentReady', [ 'jquery' ], function ( $ ) {
	return function ( ) {
		site.form.handler({}, site.io.users.updateCard, function ( ) {
				site.gotoStep( 'updatethanks', {} );
		}, site.form.errors )
	}
})