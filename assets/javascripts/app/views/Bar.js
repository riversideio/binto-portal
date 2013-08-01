var app = app || {};

(function( ){

	"use stict";

  	app.Bar = Backbone.View.extend({
		className : "element",
		tagName : "header",
		initialize : function(options){

			var 
			container = this.options.container || $("body"),
			index = this.options.index || 1,
			position = this.options.position || "top";

			this.container = container;
			this.buttons = [];
			
			this.ele = $('<div/>')
			  	.addClass(position + 'bar');
			this.content = $('<div/>')
			  	.addClass('container');
			this.wrap = $('<div/>')
			  	.addClass('row columns six centered');

			this.$el.css('z-index', index);
			this.add(); // add it to dom
		},

		add : function(){

			var 
			position = this.options.position || "top";

		  this.container
			[(position === 'top') ? 'prepend' : 'append'](
			  	this.$el.append(
					this.ele.append(
				  		this.content.append(this.wrap)
					)
			  	)
			);
		},
		
		Button : function(content, classes){
		  	var button = $('<a/>')
				.addClass((classes) ? classes : '')
				.append(content);

		  	this.wrap.append(button);
		  	this.buttons.push(button);
		  	return button;
		},

		Block : function(html){
		  	if(typeof html === 'string'){
				this.wrap.html(html);
		  	}else{
				this.wrap.append(html);
		  	}
		  	return this;
		}
  	});  

}());