const Markup = require('telegraf/markup');

module.exports = (i18n, channels) => {
    let buttons = [
        [Markup.callbackButton(i18n.t('create_post'), `create_post`)],
    ];

    return Markup.inlineKeyboard(buttons).resize().extra();
};
