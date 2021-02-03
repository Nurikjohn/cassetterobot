const path = require('path');
const TelegrafI18n = require('telegraf-i18n');

// Initialize i18n
const i18n = new TelegrafI18n({
    directory: path.resolve(__dirname, '../locales'),
    defaultLanguage: 'en',
    sessionName: 'session',
    useSession: true,
});

module.exports = i18n;
