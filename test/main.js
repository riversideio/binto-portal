var _timeout = 50000,
	auth = require('./auth');
	
module.exports = {
	'signup flow': require('./views/signup'),
	'signup user logout' : auth.logout,
	'login' : auth.login,
	'login is persistant' : auth.persistant,
	'donating' : require('./views/donate'),
	'creating an event' : require('./views/createevent'),
	'making a payment' : require('./views/payment'),
	'updating plan' : require('./views/updateplan'),
	'canceling plan' : require('./views/cancelplan'),
	'logout' : auth.logout
};