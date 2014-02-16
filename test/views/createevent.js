var _timeout = 50000,
	// starts on current month
	// + 1 to alway go forawrd at least once
	// 9 to limit range to ( 9 + 1 ) 10 so we dont hit
	// the current month next year "only some dates are avail" 
	month = Math.round( (Math.random() * 9) + 1 ),
	day = Math.round( (Math.random() * 27) + 1 );

function randomDate ( test ) {
	test.randomDate = function ( ) {
		var _test = this;
		for( var i = 0; i <= month; i += 1 ){
			_test = _test.click('.pika-next');
		}
		return _test.click('[data-day="' + day + '"] > button');
	}
}

module.exports = function ( test ) {
	// extend test object
	randomDate( test );

	test
	    .open('http://127.0.0.1:3030')
	    .waitForElement('#io-dashboard > h2')
	    .wait(2000)
	    .click('[data-view="createevent"]')
	   	.waitForElement('#date')
	   	//random number of clicks / 12
	   	.type('#start','7:00 AM')
	   	.type('#end','8:00 AM')
	   	.type('#title', 'Hello World')
	   	.type('#description', 'Woot woot!')
	   	.click('#date')
	   	.waitForElement('.pika-single')
	   	.assert.visible('.pika-single', 'Calendar opened')
	   	.randomDate()
	   	// .click('body')
	   	.click('[type="submit"]')
	   	.waitForElement('.message', _timeout)
	   	.assert.text('.message')
	   		.is('Your Event \'Hello World\' has been created!' + 
	   			' We will email you if there are any issues with the event.', 
	   			'Correct Message Shown')
	   	.done()
}