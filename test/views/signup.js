var _timeout = 50000;

module.exports = function ( test ) {
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
	    .done();
}