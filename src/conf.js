module.exports = {
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
};