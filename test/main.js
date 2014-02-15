var _timeout = 50000;

module.exports = {
	'signup flow works': function ( test ) {

		// good for now but there also should
		// be a cleanup script
		// and also test for errors in between
		test
		    .open('http://127.0.0.1:3030')
		    .waitForElement('#password')
		    .wait(2000)
		    .type('#email', 'temp' + ( Math.random() * 100000 ) + '@gmail.com')
		   	.type('#password', '123456')
		   	.click('[type="submit"]')
		   	.waitForElement('.pure-button.alert.submit-plan')
		   	.assert.visible('.pure-button.alert.submit-plan')
		   	.click('.plan-list > li >input[type="radio"]')
		   	.click('.submit-plan')
		   	.waitForElement('input[type="submit"]')
		   	.type('#card_number', '4242424242424242')
		   	.type('#cvc', '123')
		   	.type('#card_exp_month', '02')
		   	.type('#card_exp_year', '20')
		   	.click('input[type="submit"]')
		   	.waitForElement('.message', _timeout)
		   	.assert.text('.message')
		   		.is('Thanks for joining!', 'Successfully created new member account')
			.waitForElement('[data-view="login"]')
			.click('[data-view="login"]')
			.waitForElement('#password')
		    .done();
	},
	'dashboard is working': function ( test ) {

		test
			.open('http://127.0.0.1:3030')
			.wait(2000)
			// login
			.click('.login-switch')
			.type('#email', 'jacoblowe2.0@gmail.com')
		   	.type('#password', '123456')
		   	.click('[type="submit"]')
		   	.waitForElement('#io-dashboard > h2', _timeout)
		   	.assert.text('#io-dashboard > h2')
		   		.is('Hello.', 'Login Successfull')
		   	// donate
		   	.click('[data-view="donate"]')
		   	.waitForElement('#amount')
		   	.type('#amount', '1.00')
		   	.type('#card_number', '4242424242424242')
		   	.type('#cvc', '123')
		   	.type('#card_exp_month', '02')
		   	.type('#card_exp_year', '20')
		   	.click('[type="submit"]')
		   	.waitForElement('.message', _timeout)
		   	.assert.text('.message')
		   		.is('Thanks! You have been charged $1.00')
		   	// create a event
		   	.click('[data-view="createevent"]')
		   	.waitForElement('#date')
		   	.click('#date')
		   	.waitForElement('.pika-single')
		   	.assert.visible('.pika-single', 'Calendar opened')
		   	//random number of clicks / 12
		   	.click('.pika-next')
		   	.click('.pika-next')
		   	.click('.pika-next')
		   	// random day / 28
		   	.click('[data-day="15"] > button')
		   	.type('#title', 'Hello World')
		   	.type('#description', 'Woot woot!')
		   	.click('[type="submit"]')
		   	.waitForElement('.message', _timeout)
		   	.assert.text('.message')
		   		.is('Your Event \'Hello World\' has been created!' + 
		   			' We will email you if there are any issues with the event.')
		   	// make a payment
		   	.click('[data-view="payment"]')
		   	.waitForElement('#amount')
		   	.type('#amount', '1.00')
		   	.type('#card_number', '4242424242424242')
		   	.type('#cvc', '123')
		   	.type('#card_exp_month', '02')
		   	.type('#card_exp_year', '20')
		   	.click('[type="submit"]')
		   	.waitForElement('.message', _timeout)
		   	.assert.text('.message')
		   		.is('Thanks! You have been charged $1.00')
		   	// update plan
		   	.click('[data-view="updateplan"]')
		   	.waitForElement('.pure-button.alert.submit-plan')
		   	.click('.plan-list > li >input[type="radio"]')
		   	.click('.submit-plan')
		   	.waitForElement('.message', _timeout)
		   	.assert.text('.message')
		   		.is('Your plan has been updated.')
		   	// update card
		   	.click('[data-view="updatepayment"]')
		   	.waitForElement('#card_number')
		   	.type('#card_number', '4242424242424242')
		   	.type('#cvc', '123')
		   	.type('#card_exp_month', '02')
		   	.type('#card_exp_year', '20')
		   	.click('[type="submit"]')
		   	.waitForElement('.message', _timeout)
		   	.assert.text('.message')
		   		.is('Payment Successfully Updated')
		   	//cancel plan
		   	.click('[data-view="cancelplan"]')
		   	.waitForElement('.yes-plan')
		   	.click('.yes-plan')
		   	.waitForElement('.message', _timeout)
		   	.assert.text('.message')
		   		.is('Sorry to see you go')
		   	.done();
	}
};