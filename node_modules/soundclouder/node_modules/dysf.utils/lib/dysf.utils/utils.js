//----------------------------------------------

var log = require('./logger'),
	fs = require('fs'),
	utils = exports;

utils.renderFile = function (response, path, replaceParams, callback) 
{
	log.info("dysf.utils: utils.renderFile: " + path);

	fs.readFile(path, 'utf8', function(err, text)
	{
    	
		if(err) 
    	{
    		callback(err);
    	}
    	else
    	{
    		for(var ea in replaceParams)
    		{
    	    	log.trace("dysf.utils: utils.renderFile: Replacing: " + ea + " with " + replaceParams[ea]);
				text = text.replace(ea, replaceParams[ea], "gi");
			}
    		
    		log.trace("dysf.utils: utils.renderFile: \n" + text);
    		
        	response.send(text);
        	
        	callback();
        }
    });
}
