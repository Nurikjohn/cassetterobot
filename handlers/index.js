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
    bot.start(protect, start);

    bot.on('inline_query', search);
    bot.hears(/movie\/(.+)/, protect, movie);
    bot.hears(/movie (.+)/, protect, movie);
    bot.action('create_post', createpost);

    bot.action(/back_(.+)/, back);
    bot.action(/send_(.+)/, send);
    bot.action(/choose_channel/, choosechannel);
    bot.on('message', comfirmcode, start);

    bot.use(savesession);

    bot.catch(error);
};
