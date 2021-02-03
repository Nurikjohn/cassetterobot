const keyboards = require('../keyboards');

module.exports = async (ctx, next) => {
    const {
        i18n,
        answerCbQuery,
        reply,
        deleteMessage,
        session: { channels },
    } = ctx;

    answerCbQuery();

    await deleteMessage();

    reply(i18n.t('choose_channel'), keyboards.channels(i18n, channels));

    next();
};
