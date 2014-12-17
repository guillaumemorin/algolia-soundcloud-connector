//----------------------------------------------

var logger = exports,
	util = require('util'),
	cs = require('callsite'),
  chalk = require('chalk');


// 0, 1, 2, 3, 4, 5, 6
var log_types = ["system", "error", "warn", "event", "info", "debug", "trace"];
var log_labels = [chalk.cyan("[SYSTEM]"),chalk.bold.white.bgRed("[ERROR]") + " ", chalk.yellow("[WARN]  "), chalk.green("[EVENT] "), chalk.blue("[INFO]  "), chalk.gray("[DEBUG] "), chalk.gray("[TRACE] ")];
var log_level = 4;	// info and higher


//----------------------------------------------

function log(level, message, stackLevel) 
{ 
//	util.log("log: " + level + " : " + message);		
	var index = log_types.indexOf(level);
	if (index <= log_level ) 
	{
 		if (typeof message !== 'string') 
		{
 			message = JSON.stringify(message);
		}
		
		if(index == 1) message = "*** " + message;

		if(__stack) 
		{
			var ref = __stack[2];
			var line = ref.getLineNumber();
			var name = ref.getFileName().replace(process.cwd() + '/', '');
			message = "(" + name + ":" + line + "): " + message;
			
		}
		      	
      	util.log(log_labels[index] + ' '+ message);
    }
}

//----------------------------------------------//----------------------------------------------


logger.setLogLevel = function (level)
{
	if(level != undefined && level != null && level >= 0 &&  level < log_types.length)
	{
		log_level = level;
		log("system", "dysf.utils:logger.setLogLevel() " + log_types[log_level].toUpperCase());
//		this.system(log_types[log_level].toUpperCase());
	}
	else
	{
		log("system", "dysf.utils:logger.setLogLevel() Invalid level: " + level + ". Using: " + log_types[log_level].toUpperCase());
//		this.system("Invalid level: " + level + ". Using: " + log_types[log_level].toUpperCase());
	}
}

//----------------------------------------------

logger.system = function( message ) 
{
	log("system", message);
}

logger.event = function( message ) 
{
	log("event", message);
}

logger.error = function( message ) 
{
	log("error", message);
}

logger.warn = function( message ) 
{
	log("warn", message);
}


logger.info = function( message ) 
{
	log("info", message);
}

logger.debug = function( message ) 
{
	log("debug", message);
}

logger.trace = function( message ) 
{
	log("trace", message);
}

//----------------------------------------------
