const Markup = require('telegraf/markup');

module.exports = () =>
    Markup.inlineKeyboard([]).resize().extra({
        parse_mode: 'HTML',
        disable_web_page_preview: true,
    });
