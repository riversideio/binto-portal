var app = app || {};
app.pages = app.pages || {};

(function(){

  "use stict";

  app.pages.signup = app.PageBase.extend({

    className : "signup_page",
    tagName : "article",
    template : "signup",
    events : {
    	"click .signup_submit" : "validateForm"
    },
    initialize : function(){
    	this.user = new app.User({});
    },
    formErrors : function( arr ){

    },
    validateForm : function(){
    	var 
    	errors = [],
    	payload = {
	    	first_name : this.$(".first_name").val(),
	    	last_name : this.$(".last_name").val(),
	    	email : this.$(".last_name").val(),
	    	username : this.$(".username").val(),
    		password : this.$(".password").val(),
    		confirm_password : this.$(".confirm_password").val()
    	};

    	_.each( payload, function( value, key ){
    		// just to make sure everything is here
    		if( !value.length ){
    			errors.push( key );
    			this.$("." + key ).addClass("error");
    		}

    	});

    	if( errors.length ){
    		this.formErrors(errors); // this can
    		// display a nice error message
    		// once we get more validation running
    		return null;
    	}

    	delete payload.confirm_password;

    	this.user.save(payload)
    }

  });

}());