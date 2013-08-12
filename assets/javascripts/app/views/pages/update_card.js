var app = app || {};
app.pages = app.pages || {};

(function(){
	"use stict";
	app.pages.updateCard = app.PageBase.extend({
		className : "riversideio-card",
		template : "updateCard",
		events : {
			'click button': 'updateCard'
		},
		initialize : function(){
			this.inputs = {};
		},
		postRender : function(){

			var 
			timer,
			_this = this,
			user = app.get('_user');

			this.inputs.$cardNumber = this.$('#card_number');
			this.inputs.$cardCVC = this.$('#card_cvc');
			this.inputs.$cardExpMonth = this.$('#card_exp_month');
			this.inputs.$cardExpYear = this.$('#card_exp_year');

			this.$button = this.$('button');
			this.$inputs = this.$('input')

		},
		compilePayload: function ( ) {
			var 
			inputs = this.inputs,
			payload = {};

			for ( var key in inputs ) {
				var $el = inputs[ key ];
				payload[ $el.attr('id') ] = $el.val();
			}

			return payload;

		},
		updateCard: function ( callback ) {
			var 
			payload = this.compilePayload() || {};
			payload.session_token = app.get( 'session' );

			var jXhr = $.ajax({
				type: 'POST',
				url: app.get('api') + 'users/' + app.get( 'id' ) + '/update_card.json',
				data : payload,
				success: function(){
					console.log( arguments );
				},
				error: function(){
					console.log( arguments );
				}
			});

		}
	});
}());