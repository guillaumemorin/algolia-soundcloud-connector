algolia-soundcloud-connector
============================

node connector to send soundcloud data on algolia's servers

## Installation

The recommended way is through NPM

    $ npm install algolia-soundcloud-connector

Otherwise, you can check it in your repository and then expose it:

    $ git clone git://github.com/guillaumemorin/algolia-soundcloud-connector.git node_modules/algolia-soundcloud-connector/

And install dependency modules written on `package.json`.

Then you can `require` it:

    require('algolia-soundcloud-connector')


## Configuration

You need to set your Algolia and Soundcloud credentials in conf.js
    
    soundcloud: {
		client_id: 'CLIENT_ID',
		secret: 'SECRET',
		callback_url: 'CALLBACK_URL'
	},
	algolia: {
		client_id: 'CLIENT_ID',
		secret: 'SECRET',
		init_index: 'soundcloud',
		attributes_to_index: ['username', 'city'],
		custom_ranking: ['desc(followers)']
	}require('algolia-soundcloud-connector')

