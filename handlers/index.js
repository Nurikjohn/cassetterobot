const { logsession, savesession, clearsession } = require('../middlewares');

// handlers
const start = require('./start');
const search = require('./search');
const createpost = require('./createpost');
const choosechannel = require('./choosechannel');
const movie = require('./movie');
const send = require('./send');
const back = require('./back');
const error = require('./error');
const protect = require('./protect');
const comfirmcode = require('./comfirmcode');

module.exports = (bot) => {
    bot.start(protect, start, savesession);

    bot.on('inline_query', search);
    bot.hears(/movie\/(.+)/, protect, movie, savesession);
    bot.hears(/movie (.+)/, protect, movie, savesession);
    bot.action('create_post', createpost);

    bot.action(/back_(.+)/, back);
    bot.action(/send_(.+)/, send, savesession);
    bot.action(/choose_channel/, choosechannel);
    bot.on('message', comfirmcode, start, savesession);

    bot.catch(error);
};
