define('eventsReady', 
	[ 'jquery', 'pikaday', 'moment' ], 
	function ( $, Pikaday, moment ) {
		return function ( ) {
			var date = document.getElementById('date'),
				$date = $( date ),
				$start = $('#start'),
				$cancel = $('.cancel-event'),
				today = moment(),
				$end = $('#end'),
				scheduledDates,
				picker;

			function handleDateSelect ( ) {
				// this is
				if ( !$start.val() ) {
					$start.val('7:00 PM');
				}
				if ( !$end.val() ) {
					$end.val('8:00 PM');
				}
			}

			picker = new Pikaday({
				field : date,
				minDate : today.toDate(),
				maxDate : moment().add('y', 1).toDate(),
				format : 'MM/DD/YYYY',
				onSelect : handleDateSelect,
				bound : true
			});

			$date.on('click', function ( ) {
				setTimeout(function(){
					picker.adjustPosition()
				},0)
			});

			$cancel.on('click', function ( ) {
				app.user.message = null;
				app.gotoStep( 'dashboard', app.user );
			})

			app.form.handler({}, function ( vals, next ){
				var date = vals.date,
					start = vals.start,
					end = vals.end,
					payload = {
						start : moment ( date + ' ' + start ).format(),
						end : moment ( date + ' ' + end ).format(),
						title : vals.title,
						description : vals.description
					},
					_start = moment( payload.start ),
					_end = moment( payload.end ),
					// do some checkin to make sure scheduledDates is here
					collisions = scheduledDates.map(function( _event ){
						if ( 
							_start.isBefore( _event.start.dateTime ) &&
							_end.isAfter( _event.start.dateTime )
						) return true;

						if ( 
							_start.isBefore( _event.end.dateTime ) &&
							_end.isAfter( _event.end.dateTime )
						) return true;

						if ( 
							// if event is same times
							_start.isSame( _event.start.dateTime ) &&
							_end.isSame( _event.end.dateTime )
						) return true;

						return false;
					});

				if ( !moment( payload.end ).isAfter( payload.start ) ){
					return next ( { 
						error : new Error("End time must be after start time") 
					} );
				}

				if ( !!~collisions.indexOf( true ) ) {
					return next ( { 
						error : new Error("Event timing conflicts with another event") 
					} );
				}

				app.io.events.create( payload, next );

			}, function ( _event ) {
				var payload = app.user;
				payload.message = "Your Event '" + _event.event.summary + 
					"' has been created! We will email you if there" + 
					" are any issues with the event.";
				app.gotoStep( 'dashboard', payload );

			}, app.form.errors );

			// get events for month
			// to avoid overlap
			app.io.events.all({
				orderBy : 'startTime',
				singleEvents : true,
				timeMin : today.format(),
				timeMax : moment().add('y', 1).format()
			}, function( err, res ) {
				if ( err ) return console.warn( err );
				scheduledDates = res.events;
			});
		}
	}
)