var _timeout = 50000;

module.exports = function ( test ) {
	test
	    .open('http://127.0.0.1:3030')
	    .waitForElement('#io-dashboard > h2')
	    .wait(2000)
	    .click('[data-view="cancelplan"]')
	   	.waitForElement('.yes-plan')
	   	.click('.yes-plan')
	   	.waitForElement('.message', _timeout)
	   	.assert.text('.message')
	   		.is('Sorry to see you go')
	   	.done()
}