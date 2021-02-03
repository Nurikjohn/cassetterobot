const Telegraf = require('telegraf');
const handlers = require('./handlers');
const redis = require('./services/redis');
const i18n = require('./services/i18n');
require('dotenv').config();

const token = process.env.TOKEN;

// Initialise bot
const bot = new Telegraf(token);

// Middlewares
bot.use(redis.middleware());
bot.use(i18n.middleware());

// Handlers
handlers(bot);

// Launch the bot
bot.launch().then(() => {
    console.log('\x1b[34m', 'Started', '\x1b[0m');
});
