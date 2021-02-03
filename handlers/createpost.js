const keyboards = require('../keyboards');
const catchAsync = require('../utils/catchAsync');

module.exports = catchAsync(async (ctx, next) => {
    const { editMessageText, answerCbQuery, i18n } = ctx;

    answerCbQuery();
    editMessageText(
        i18n.t('search_instructions'),
        keyboards.inlineswitch(i18n)
    );
});
