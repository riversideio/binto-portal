module.exports = function( hbs ){

	hbs.registerHelper( "js", function( context ){
	  if( typeof js === "function" ){
	    return js( context );
	  }else{
	    return ""
	  }
	});

	hbs.registerHelper( "css", function( context ){
	  if( typeof css === "function" ){
	    return css( context );
	  }else{
	    return ""
	  }
	});

	hbs.registerHelper( "json", function( context ){
	  return JSON.stringify( context );
	});

};