const Extra = require('telegraf/extra');

module.exports = () => Extra.markup((markup) => markup.removeKeyboard());
