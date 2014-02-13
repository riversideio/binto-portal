module.exports = {
	'signup exsisting username error': function ( test ) {
		test
		    .open('http://127.0.0.1:3030')
		    .waitForElement('#password')
		    .type('#email', 'jacoblowe2.0@gmail.com')
		   	.type('#password', '123456')
		   	.click('[type="submit"]')
		   	.waitForElement('.error_message')
		   	.assert.text('.error_message')
		   		.is('username jacoblowe2.0@gmail.com already taken')
		   	.done();	
	},
	'signup flow works': function ( test ) {

		// good for now but there also should
		// be a cleanup script
		// and also test for errors in between

		test
		    .open('http://127.0.0.1:3030')
		    .waitForElement('#password')
		    .type('#email', 'temp' + ( Math.random() * 100000 ) + '@gmail.com')
		   	.type('#password', '123456')
		   	.click('[type="submit"]')
		   	.waitForElement('.pure-button.alert.submit-plan')
		   	.click('.plan-list > li >input[type="radio"]')
		   	.click('.submit-plan')
		   	.waitForElement('input[type="submit"]')
		   	.type('#card_number', '4242424242424242')
		   	.type('#cvc', '123')
		   	.type('#card_exp_month', '02')
		   	.type('#card_exp_year', '20')
		   	.click('input[type="submit"]')
		   	.waitForElement('.message')
		   	.assert.text('.message').is('Thanks for joining!')
		    .done();
	},
	'login is working': function ( test ) {

		test
			.open('http://127.0.0.1:3030')
			.waitForElement('#password')
			.click('.login-switch')
			.type('#email', 'jacoblowe2.0@gmail.com')
		   	.type('#password', '123456')
		   	.click('[type="submit"]')
		   	.waitForElement('.main ul')
		   	.assert.text('.main h2', 'Hello.')
		   	.done();

	}
};