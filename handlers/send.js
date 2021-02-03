const keyboards = require('../keyboards');
const { generateCaption } = require('../utils/lazy');
const catchAsync = require('../utils/catchAsync');

module.exports = catchAsync(async (ctx, next) => {
    const {
        session: { movie, channels },
        answerCbQuery,
        deleteMessage,
        i18n,
        reply,
        match: [_, channelId],
    } = ctx;

    const channel = channels.filter((channel) => channel.id == channelId)[0];

    const { message_id } = await ctx.telegram.sendPhoto(
        channel.id,
        movie.poster,
        keyboards.movie(i18n, movie._id, generateCaption(movie, channel))
    );

    answerCbQuery();

    const message_url = `https://t.me/${channel.username}/${message_id}`;

    console.log(channel.username);

    await deleteMessage();
    await reply(
        i18n.t('message_sent', {
            channel: `@${channel.username.replace(/_/g, '\\_')}`,
            message_url,
        }),
        keyboards.markdown()
    );
    await reply(i18n.t('search_instructions'), keyboards.inlineswitch(i18n));

    ctx.session.channel = channel;
    ctx.session.movie = null;

    next();
});
