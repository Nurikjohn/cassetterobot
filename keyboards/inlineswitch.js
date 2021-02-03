const Markup = require('telegraf/markup');

module.exports = (i18n) =>
    Markup.inlineKeyboard([
        [Markup.switchToCurrentChatButton(i18n.t('search'), '')],
    ])
        .resize()
        .extra({
            parse_mode: 'markdown',
        });
