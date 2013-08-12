var app = app || {};
app.pages = app.pages || {};

(function(){
	"use stict";
	app.pages.accountInfoEdit = app.PageBase.extend({
		className : "riversideio-profile",
		template : "accountInfoEdit",
		initialize : function(){
			this.inputs = {};
		},
		postRender : function(){

			var 
			timer,
			_this = this,
			user = app.get('_user');

			this.inputs.$email = this.$('#email');
			this.inputs.$phone = this.$('#phone');
			this.inputs.$address_1 = this.$('#address_1');
			this.inputs.$address_2 = this.$('#address_2');
			this.inputs.$zip = this.$('#zip');
			this.inputs.$city = this.$('#city');
			this.$button = this.$('button');
			this.$inputs = this.$('input')

			this.$inputs.on('input propertychange', function(){

				clearTimeout( timer );
				var payload = {};

				_.forEach( _this.inputs, function( $el, key, index ){
					if( $el ){
						var value = $el.val();
						if( value && value.length ){
							payload[ $el.attr('id') ] = value;
						}
					}
				} )

				timer = setTimeout(function(){
					// console.log( payload );
					_this.$button.text('Saving...')
					user.update( payload, function(){
						_this.$button.text('Saved')
					});
				}, 500 );	

			});
		}
	});
}());