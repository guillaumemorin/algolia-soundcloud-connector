algolia-soundcloud-connector
============================
node connector to send soundcloud data on algolia's servers

**Table of Contents**

- [Installation](#installation)
- [Configuration](#configuration)

## Installation

The recommended way is through NPM

    $ npm install algolia-soundcloud-connector

Otherwise, you can check it in your repository and then expose it:

    $ git clone git://github.com/guillaumemorin/algolia-soundcloud-connector.git node_modules/algolia-soundcloud-connector/

And install dependency modules written on `package.json`.

Then you can `require` it:

    require('algolia-soundcloud-connector')


## Configuration

You first need to set your Algolia and Soundcloud credentials in conf.js
You can find them on [your Algolia account](http://www.algolia.com/users/edit) and on your [Soundcloud developer account](http://soundcloud.com/you/apps).
    
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
	}

attributes_to_index and custom_ranking options are described on [Algolia's doc Ranking & Relevance section](https://www.algolia.com/doc/node#RankingRelevance)

After configuration completed, you need to get an access token from soundcloud connect flow.
You can get one with algolia-soundcloud-connector auth method if you already have the "code" from connect flow callback. Please have a look to soundcloud [developer guide](https://developers.soundcloud.com/docs/api/sdks#authentication) and [README.md](https://github.com/khilnani/soundclouder.js/tree/master/test) of soundclouder test setup script.

Once you get your Access Token, you can set it with the setAccessToken method below and pass as a callback the sendData method (with the soundcloud api method you want to get data from) to send soundcloud data to Algolia' server.

	var connector = require('algolia-soundcloud-connector');
	connector.setAccessToken('ACCESS_TOKEN', connector.sendData, '/me/followers');
	
All soundcloud api methods are listed on [soundcloud api console](https://developers.soundcloud.com/console/) 

