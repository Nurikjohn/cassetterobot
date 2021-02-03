const Markup = require('telegraf/markup');

module.exports = () =>
    Markup.inlineKeyboard([]).resize().extra({
        parse_mode: 'Markdown',
        disable_web_page_preview: true,
    });
