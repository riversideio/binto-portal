var _timeout = 50000;

module.exports = function ( test ) {
	test
	    .open('http://127.0.0.1:3030')
	    .waitForElement('#io-dashboard > h2')
	    .wait(2000)
	    .click('[data-view="updateplan"]')
		.waitForElement('.pure-button.alert.submit-plan')
	   	.click('.plan-list > li >input[type="radio"]')
	   	.click('.submit-plan')
	   	.waitForElement('.message', _timeout)
	   	.assert.text('.message')
	   		.is('Your plan has been updated.')
	   	.done()
}