var _timeout = 50000;

module.exports = function ( test ) {
	test
	    .open('http://127.0.0.1:3030')
	    .waitForElement('#io-dashboard > h2')
	    .wait(2000)
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
	   	.done()
}