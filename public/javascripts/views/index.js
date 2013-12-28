// this file should be generated
requirejs.config({
	paths : {
		'loginReady' : '/javascripts/views/login',
		'signupReady' : '/javascripts/views/signup',
		'plansReady' : '/javascripts/views/plans',
		'forgotpasswordReady' : '/javascripts/views/forgotpassword',
		'dashboardReady' : '/javascripts/views/dashboard',
		'creditcardReady' : '/javascripts/views/creditcard',
		'updatepaymentReady' : '/javascripts/views/updatepayment',
		'updateplanReady' : '/javascripts/views/updateplan',
		'cancelplanReady' : '/javascripts/views/cancelplan'
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
	'updatepaymentReady',
	'updateplanReady',
	'cancelplanReady'
], 
function ( 
	login, 
	signup, 
	plans, 
	forgot, 
	dashboard, 
	cc, 
	ccupdate, 
	updateplan, 
	cancelplan 
) {
	return {
		login : login,
		signup : signup,
		plans : plans,
		forgotpassword : forgot,
		dashboard : dashboard,
		creditcard : cc,
		updatepayment : ccupdate,
		updateplan : updateplan,
		cancelplan : cancelplan
	}

})