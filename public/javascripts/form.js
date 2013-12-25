define('form', ['jquery'], function ( $ ) {
	function _compileValues ( $inputs ) {
		var payload = {},
			errors = [];
		$inputs.each( function ( ) {
			var key = this.name,
				value = this.value;
/*					bad = validate( key, value );
			if ( bad ) {
				errors.push( err)
			}
*/
			payload[ key ] = value;
		})

		if ( errors.length ) {
			return console.warn( errors.join(' ') );
		}

		return payload;
	}

	return {
		compile : _compileValues,
		validate : null
	}
})