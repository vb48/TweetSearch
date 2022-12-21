const twit  = require('twit');

const client = new twit({
    consumer_key : 'ADD_YOUR_KEY_HERE',
    consumer_secret: 'ADD_YOUR_KEY_HERE',
    access_token : 'ADD_YOUR_KEY_HERE',
    access_token_secret : 'ADD_YOUR_KEY_HERE'
})

module.exports = client
