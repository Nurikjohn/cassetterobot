const TelegrafRedis = require('telegraf-session-redis');
require('dotenv').config();

// Initialize redis session
const redis = new TelegrafRedis({
    store: {
        host: process.env.SESSION_HOST || '127.0.0.1',
        port: process.env.SESSION_PORT || 6380,
    },
});

module.exports = redis;
