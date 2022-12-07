const twit  = require('twit');

const client = new twit({
    consumer_key : 'mKihbWZ6RjhcsaZiuw1IOHHRF',
    consumer_secret: 'vNVK49iWS3qr7N9QrhkbSP6FN58VHmEMd1U3s8zRwdXRADxwXu',
    access_token : '1032979442157711360-c9fwEaM7yXdQPcgzhFqoDoVOHEW7D3',
    access_token_secret : 'ArjorNeCPWH3bQ3KUx7MRGnMzjGPfCeCPeZztWMOWdItz'
})

module.exports = client