var app = app || {};

(function(){

	app.PageBase = Backbone.View.extend({
		render : function(){
			var payload;

			if( this.collection ){
				payload = { models : this.collection.toJSON() };
			}else if( this.model ){
				payload = this.model.toJSON();
			}

			this.$el.html( __tmp[ this.template ]( payload || {} ) );

			if( this.postRender ){
				this.postRender();
			}
		}
	});

}())