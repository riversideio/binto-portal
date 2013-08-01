(function(Backbone, exports){

	exports.BaseView = Backbone.View.extend({
		setCollection : function( collection ){
			this.collection = collection;
			this.render();
		},
		setModel : function( model ){
			this.model = model;
			this.render();
		}
	});

}(Backbone, this))