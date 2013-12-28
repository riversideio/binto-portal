// this file should be generated
requirejs.config({
	paths : {
		'loginReady' : '/javascripts/views/login',
		'signupReady' : '/javascripts/views/signup',
		'plansReady' : '/javascripts/views/plans',
		'forgotpasswordReady' : '/javascripts/views/forgotpassword',
		'dashboardReady' : '/javascripts/views/dashboard',
		'creditcardReady' : '/javascripts/views/creditcard',
		'updatepaymentReady' : '/javascripts/views/updatepayment'
	}
});

define('ready', 
[
	'loginReady',
	'signupReady',
	'plansReady',
	'forgotpasswordReady',
	'dashboardReady',
	'creditcardReady',
	'updatepaymentReady'
], 
function ( login, signup, plans, forgot, dashboard, cc, ccupdate ) {
	return {
		login : login,
		signup : signup,
		plans : plans,
		forgotpassword : forgot,
		dashboard : dashboard,
		creditcard : cc,
		updatepayment : ccupdate
	}

})