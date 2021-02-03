const Markup = require('telegraf/markup');
require('dotenv').config();

const play_market_app_url = process.env.PLAY_MARKET_APP_URL;
const deeplink_url = process.env.DEEPLINK_URL;

module.exports = (i18n, id, caption) =>
    Markup.inlineKeyboard([
        [Markup.urlButton(i18n.t('watch'), `${deeplink_url}/movie/${id}`)],
        [Markup.urlButton(i18n.t('install'), play_market_app_url)],
    ])
        .resize()
        .extra({
            caption,
        });
