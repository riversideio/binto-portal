
Handlebars.registerHelper("date", function ( ts ) {
	return new Handlebars.SafeString( 
		moment( ts, 'YYYY-MM-DD-HH-mm-ss').fromNow() 
	)
	//2013-07-20T16:10:54.761Z
});

Handlebars.registerHelper("is", function( value, comparator, options ){
	var ret = '';
	if( value === comparator ){
		ret += options.fn( this );
	}else{
		ret += options.inverse( this );
	}
	return ret;
});


Handlebars.registerHelper('json', function( obj ){
	return JSON.stringify( obj ); 
})