**Table of Contents**  *generated with [DocToc](http://doctoc.herokuapp.com/)*

- [dysf.utils [![Build Status](https://travis-ci.org/khilnani/dysf.utils.png?branch=master)](https://travis-ci.org/khilnani/dysf.utils)](#dysfutils-!build-statushttpstravis-ciorgkhilnanidysfutilspngbranch=masterhttpstravis-ciorgkhilnanidysfutils)
- [Usage](#usage)
- [API](#api)
	- [logger](#logger)
	- [utils](#utils)
	- [mock](#mock)
- [Installation](#installation)
	- [Global](#global)
	- [Project](#project)

dysf.utils [![Build Status](https://travis-ci.org/khilnani/dysf.utils.png?branch=master)](https://travis-ci.org/khilnani/dysf.utils)
==========

Custom dysfunctional utilities for node.js !!!

Usage
=========

- utils - <code>utils = require("dysf.utils").utils;</code>
- logger - <code>logger = require("dysf.utils").logger;</code>
- mock - <code>mock = require("dysf.utils").mock;</code>

API
==========

logger
----------

A key reason for creating my own logger was to print file path and line numbers from where a log message was called.
Additionally it prints the date/time and also has a few additional levels of logging.

- logger.setLogLevel( id ) 
  - 0: system, 1: error, 2: warn, 3: event, 4: info, 5: debug, 6: trace. Default is 4 (info)
- logger.system ( msg | obj ) 
  - Useful for system level notifications.
- logger.error ( msg | obj )
- logger.warn ( msg | obj )
- logger.event ( msg | obj )
  - Recommended for key events like new tranactions / sessions / requests etc.
- logger.info ( msg | obj )
  - Recommended for notable phases within a transaction like handlers, methods etc.
- logger.debug ( msg | obj )
  - Recommended for useful property values or callback tracking.
- logger.trace ( msg | obj )
  - Recommended for detailed debugging like printing object contents.

utils
----------

A random utility collection of one. Render a file to the Response 
in cases where you are not using a micro or mega framework.

- utils.renderFile ( response, path, replaceParams, callback )
  - response: Http Response
  - path: path to file
  - replaceParams: A hash of Ket Value pairs with the key representing the string to replace with the Value.
  - callback: to help with callback hell.

mock
----------

The start of a few mock objects primarily useful in quick and dirty unit testing.

- mock.response ( text )
   


Installation
=======

Global
--------- 
- Run: <code>sudo npm install dysf.utils -g</code>
- Usually installed at - /usr/local/lib/node_modules/dysf.utils

Project
---------
- Add <code>"dysf.utils": "x.x.x"</code> to the dependencies section of your project's package.json 
  - Example <code>"dependencies": { "dysf.utils": "x.x.x" }</code>
- Run <code>npm install</code> in the director with your package.json
- Usually installed at - PROJECT_DIR/node_modules/dysf.utils

