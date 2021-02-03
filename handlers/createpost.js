const keyboards = require('../keyboards');

module.exports = async (ctx, next) => {
    const { editMessageText, answerCbQuery, i18n } = ctx;

    answerCbQuery();
    editMessageText(
        i18n.t('search_instructions'),
        keyboards.inlineswitch(i18n)
    );
};
