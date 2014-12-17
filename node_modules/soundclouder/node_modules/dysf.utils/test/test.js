var assert = require('assert'),
	vows = require('vows'),
	log = require("../lib/dysf.utils").logger,
	utils = require("../lib/dysf.utils").utils,
	mock = require("../lib/dysf.utils").mock;

vows.describe('dysf.utils').addBatch({
  "When using logger ": {
    "setting log levels": {
      "should not error": function () {

		log.setLogLevel();
		log.setLogLevel(undefined);
		log.setLogLevel(null);
		log.setLogLevel("abcd");
		log.setLogLevel(6);

      }
    }
  }
}).addBatch({
  "When using logger ": {
    "sending messages": {
      "should not error": function () {
	
		log.system("system");
		log.error("error");
		log.warn("warn");
		log.event("event");
		log.info("info");
		log.debug("debug");
		log.trace("trace");
		log.trace( { obj: "data"} );

      }
    }
  }
}).addBatch({
  "When using utils ": {
    "rendering a file": {
      "should not error": function () {

			// Replace this >> %replace%
			var replaceParams = {'%replace%': "REPLACED!!" };
		
			utils.renderFile(mock.response, __filename, replaceParams, function (err) {
				if(err) 
				{
					log.error("utils.renderFile");
					log.error(err);
				} else {
					log.event("utils.renderFile completed.");  	
				}
			});
      }
    }
  }
}).export(module);


