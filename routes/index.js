require('dotenv').load();

function merge ( ) {
	var obj = {},
		objs = [].slice.call( arguments, 0 );
	objs.forEach( function ( _obj ) {
		for( var key in _obj ) {
			obj[ key ] = _obj[ key ];
		}
	});
	return obj;
}

module.exports = {
	"main" : function ( req, res ) {
		var payload           = merge( req.query, req.params );
		payload.api           = process.env.BINTO_API || 'http://localhost:3000/api/v0/';
    payload.portal_title  = process.env.PORTAL_TITLE || 'binto-portal'; 
    payload.portal_url    = process.env.PORTAL_URL || 'http://github.com/riversideio'; 
		res.render("index", payload);
	}
};
