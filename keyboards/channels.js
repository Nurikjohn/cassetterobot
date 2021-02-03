const Markup = require('telegraf/markup');

module.exports = (i18n, channels) => {
    let buttons = [];

    channels.map((channel) => {
        buttons.push([
            Markup.callbackButton(channel.title, `send_${channel.id}`),
        ]);
    });

    buttons.push([Markup.callbackButton(i18n.t('back'), `back_create`)]);

    return Markup.inlineKeyboard(buttons).resize().extra();
};
