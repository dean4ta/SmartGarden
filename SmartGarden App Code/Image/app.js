

// Closure that encapsulates functions and variables.
//in Image Handler Chris Faulk
;(function () {

	'use strict';

	// Application object that exposes global functions.

	window.app = {};

	var counter = 0;

	app.buttonTap = function () {
		++counter;
		if (1 == counter) {
			showInfo('Works as expected!');
		} else {
			showInfo('You tapped ' + counter + ' times');
		}
	};

	function showInfo(info) {
		document.getElementById('info').innerHTML = info;
		//console.log(info);
	}

	function init() {
		showInfo('App is ready');
	}

	document.addEventListener('deviceready', init, false);
})();