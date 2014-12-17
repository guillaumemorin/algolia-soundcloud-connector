//----------------------------------------------

var log = require('./logger'),
	mock = exports;

mock.response = {
	send: function (text) {
		log.info("dysf.utils: mock.response: \n" + text);
	}
};
