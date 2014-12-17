var sc = require('soundclouder');
var Algolia = require('algolia-search');
var conf = require('./conf.js');

var sc_connector = function() {

	this.access_token;
	this.algolia;

	var configuration_pattern = {
		soundcloud: ['client_id', 'secret'],
		algolia: ['client_id', 'secret', 'init_index']
	}

	function _configurationExists () {

		if (typeof conf.soundcloud !== 'object' || typeof conf.algolia !== 'object') {
			return false;
		}

		var i, j;
		for (i in configuration_pattern) {
			for (j = 0; j < configuration_pattern[i].length; j++) {
				if (!conf[i].hasOwnProperty(configuration_pattern[i][j])) {
					return false
				}
			}
		}

		return true;
	}


	if (!_configurationExists()) {
		console.error('Algolia_soundcloud_connector::Bad configuration, See README.md for needed configuration');
		return;
	}

	var client = new Algolia(conf.algolia.client_id, conf.algolia.secret);
	this.algolia = client.initIndex(conf.algolia.init_index);
	this.algolia.setSettings({
		attributesToIndex: conf.algolia.attributes_to_index || [],
		customRanking: conf.algolia.custom_ranking || []
	});

	var sc_callback_url = conf.soundcloud.callback_url || '';
	sc.init(conf.soundcloud.client_id, conf.soundcloud.secret, sc_callback_url);

};

sc_connector.prototype = {

	auth: function(code, api_method) {
		var self = this;
		sc.auth(code, function (error, access_token) {
			if (error) {
				console.error(error.message);
				return;
			}

			self.setAccessToken(access_token, self.sendData, api_method);
		});
	},

	setAccessToken: function(access_token, callback, callback_params) {
		this.access_token = access_token;
		callback.call(this, callback_params);
	},

	sendData: function(api_method) {
		var self = this;
		sc.get(api_method, this.access_token, function (error, data) {
			if (error) {
				console.error(error.message);
				return;
			}

			var data_length = data.length;
			var array = [];
			for (var i = 0; i < data_length; ++i) {
				data[i]['objectID'] = data[i]['id'];
				array.push(data[i]);
			}

			self.algolia.saveObjects(array, function(error, content) {
				if (error) console.error("ERROR: %s", content.message);
			});
		});
	}
}

module.exports = new sc_connector();