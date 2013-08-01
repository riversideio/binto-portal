// Loader - loads any file in this directory
// double underscore files are ignored

var fs = require("fs");

module.exports = function( done ){
	var obj = {};
	fs.readdir( __dirname, function(err, list){
		if ( err ) {
			throw "Could not load routes shutting down";
		}else{
			list.forEach( function( item, index ) {
				var _js = /\.js/;
				if ( !(/__/.test(item)) && _js.test(item) ) {
					var routes = require("./" + item );
					if ( typeof routes === "object" ) {
						var name = item.replace(_js, "");
						obj[ name ] = routes;
					}
				}
			});
			done( obj );
		}
		
	})
};
