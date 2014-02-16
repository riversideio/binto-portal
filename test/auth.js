require('dotenv').load();

var _timeout = 50000,
	testUser = process.env.TEST_USER,
	testPassword = process.env.TEST_PASSWORD;

module.exports = {
	'login' : function ( test ) {
		test
			.open('http://127.0.0.1:3030')
			.wait(2000)
			.click('.login-switch')
			.type('#email', testUser )
		   	.type('#password', testPassword )
		   	.click('[type="submit"]')
		   	.waitForElement('#io-dashboard > h2', _timeout)
		   	.assert.text('#io-dashboard > h2').is('Hello.')
		   	.done();
	},
	persistant : function ( test ) {
		test
			.open('http://127.0.0.1:3030')
		   	.waitForElement('#io-dashboard > h2', _timeout)
			.wait(2000)
			.assert.text('#io-dashboard > h2').is('Hello.')
			.done();
	},
	logout : function ( test ) {
		test
			.open('http://127.0.0.1:3030')
		   	.waitForElement('#io-dashboard > h2', _timeout)
			.wait(2000)
			.click('[data-view="login"]')
			.waitForElement('#password')
			.assert.text('.main > h2').is('Login')
		   	.done();
	}
}