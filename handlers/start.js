const keyboards = require('../keyboards');
const channelsIds = require('../constants/channels');
const catchAsync = require('../utils/catchAsync');

module.exports = catchAsync(async (ctx, next) => {
    const { reply, i18n, telegram } = ctx;

    reply(i18n.t('search_instructions'), keyboards.inlineswitch(i18n));

    const channels = [];

    for (i in channelsIds) {
        const channel = await telegram.getChat(channelsIds[i]);
        channels.push(channel);
    }

    ctx.session.channels = channels;

    next();
});
