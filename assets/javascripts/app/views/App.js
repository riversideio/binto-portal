var app = app || {};

(function(){

	"use stict";

	app.AppView = Backbone.View.extend({

		el : "#app",
		initialize : function(){
			// need to cache states
			// with payloads as well
			this.$body = $('#app');
			this.$main = this.$("#main");
			this.$nav = this.$('#nav nav');
			this.$list = this.$('#list');
			this.$notifications = $('#notifications');

			this.origin = window.location.origin;
			this.actives = [];
			this.views = {
				list : {},
				nav : {},
				main : {}
			};	
			this.render();
		}, 
		_errorHandler : function( view, err ){
			// handle errors in view
		},
		_whatPayload : function( view, payload ){
			// setting the data
			if( payload instanceof Backbone.Model){
				payload.set( { app : app.toJSON() } );
				view.model = payload;
			}else if( payload instanceof Backbone.Collection ){
				view.collection = payload;
			}
		},
		_viewHandle : function( type, view, payload, options ){
			var page = app.pages[ view ];
			if ( page ) {

				// if( !this.views[ type ] ){
				// 	this.views[ type ] = {};
				// }
				var _view = new page( options || {} );
				this._whatPayload( _view, payload );
				_view.render();

				this[ "$" + type ].html( _view.$el );
			}

		},
		setNotification: function ( txt, duration ) {

			var _this = this;

			duration = duration || 5000;
			clearTimeout( this.timer );
			this.$notifications
				.text( txt )
				.addClass( 'show' );

			this.timer = setTimeout( function () {
				_this.$notifications
					.removeClass( 'show' );
			}, duration );
		},
		setState: function(){
			// console.log( app.Router.rout)
			var 
			$links = $('a'),
			_this = this,
			fragments = Backbone.history.fragment.split(/\//);
			
			_.each( this.actives, function( $el ){
				console.log("el", $el)
				$el.removeClass('active');
			});

			this.actives.length = 0;

	
			$links.each(function(){
				var 
				frags = this.href.
					replace( _this.origin , '').
					split(/\//),
				good = 0,
				$el = $(this);


				frags.shift(1);

				_.each( frags, function( frag, index ){
					if( 
						fragments[ index ] &&
						frag === fragments[ index ] 
					){
						good = good + 1;
					}
				})
				if( good === frags.length ){
					var $li = $el.closest('li');
					$li.
						addClass('active');
					_this.actives.push($li);

				}
			});

		},
		render : function( view, payload, options ){

			var 
			main,
			list,
			nav;

			payload = payload || {};

			if ( view && typeof view === 'object' ) { // avoid 404 everytime
				
				if ( view.main ) {
					this._viewHandle( 'main', view.main, payload.main, options );
				}  

				if ( view.list ) {
					this._viewHandle( 'list', view.list, payload.list, options );
				}

				if ( view.nav ) {
					this._viewHandle( 'nav', view.nav, payload.nav, options );
				}

				if( this.postRender ){
					this.postRender();
				}

				app.Router.trigger('done');

			}
		}

	});

}());