const Markup = require('telegraf/markup');
const { channels } = require('.');
require('dotenv').config();

const play_market_app_url = process.env.PLAY_MARKET_APP_URL;
const deeplink_url = process.env.DEEPLINK_URL;

module.exports = (i18n, id, caption, channel) =>
    Markup.inlineKeyboard([
        [Markup.urlButton(i18n.t('watch'), `${deeplink_url}/movie/${id}`)],
        [Markup.urlButton(i18n.t('install'), play_market_app_url)],
        [
            Markup.callbackButton(
                i18n.t('send_to', { channel: channel.title }),
                `send_${channel.id}`
            ),
        ],
        [Markup.callbackButton(i18n.t('choose_channel'), 'choose_channel')],
        [Markup.callbackButton(i18n.t('back'), 'back_create')],
    ])
        .resize()
        .extra({
            caption,
        });
