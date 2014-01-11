require('dotenv').load();

module.exports = {
	"main" : function ( req, res ) {
		var payload = req.query || {};
		payload.api = process.env.API || 'http://localhost:3000'
		res.render("index", payload);
	}
};