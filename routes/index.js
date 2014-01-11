var dotenv = require('dotenv').load();
module.exports = {
	"landing" : function( req, res ){
		res.render("index", req.query || {});
	},
	"signup" : function ( req, res ) {
		var payload = req.query || {};
		payload.api = process.env.API || 'http://localhost:3000'
		res.render("index", payload);
	}
};