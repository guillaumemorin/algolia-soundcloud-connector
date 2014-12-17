console.log('** Testing **');

var connector = require('../src/algolia_soundcloud_connector.js');

/*
 * For testing purpose, you need to get an access token from soundcloud connect flow
 * You can get one with algolia_soundcloud_connector auth method if you already have the "code" from connect flow callback
 * and set it with the setAccessToken method used below.
 *
 * Please have a look to soundcloud developer guide
 *   https://developers.soundcloud.com/docs/api/sdks#authentication
 *
 * and README.md of soundclouder test setup script
 *   https://github.com/khilnani/soundclouder.js/tree/master/test
 */

connector.setAccessToken('ACCESS_TOKEN', connector.sendData, '/me/followers');