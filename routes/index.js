module.exports = {
	"landing" : function( req, res ){
		res.render("index", req.query || {});
	},
	"signup" : function ( req, res ) {
		var payload = req.query || {};
		payload.layout = '__signup.hbs';
		res.render("index", payload);
	}
};