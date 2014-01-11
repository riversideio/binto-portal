define('dashboardReady', [ 'jquery' ], function ( $ ) {
	return function ( ) {
		var $links = $('a[data-view]');
		$links.on('click', function ( e ) {
			e.preventDefault( );
			var $link = $(this),
				view = $link.data('view'),
				payload = {};

			if ( view === 'updateplan' ) {
				payload = app.plans;
				// might want to grab current plan
			}

			app.gotoStep( view, payload );
		});
	}
})