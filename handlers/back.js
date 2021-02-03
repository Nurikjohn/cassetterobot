const menu = require('../constants/menu');
const keyboards = require('../keyboards');

module.exports = async (ctx, next) => {
    const {
        answerCbQuery,
        i18n,
        editMessageText,
        deleteMessage,
        reply,
        match: [_, back],
    } = ctx;

    answerCbQuery();

    switch (back) {
        case menu.home: {
            return editMessageText(i18n.t('hello'), keyboards.start(i18n));
        }

        case menu.create: {
            await deleteMessage();
            return reply(
                i18n.t('search_instructions'),
                keyboards.inlineswitch(i18n)
            );
        }
    }
};
