const Api = require('../services/api');
const keyboards = require('../keyboards');
const channelsIds = require('../constants/channels');
const { generateCaption } = require('../utils/lazy');

module.exports = async (ctx, next) => {
    const {
        match: [_, id],
        replyWithPhoto,
        reply,
        i18n,
        session: { channel, channels },
    } = ctx;

    if (!id) return;

    const movie = await Api.get(id);

    if (!movie) return reply('404, Movie not found!');

    ctx.session.movie = movie;

    let predictedChannelId = channelsIds[movie.type];

    if (!predictedChannelId) predictedChannelId = channel.id;
    if (!predictedChannelId) predictedChannelId = channelsIds.cassette;

    predictedChannel = channels.filter(
        (channel) => channel.id == predictedChannelId
    )[0];

    replyWithPhoto(
        movie.poster,
        keyboards.preview(
            i18n,
            movie._id,
            generateCaption(movie, predictedChannel),
            predictedChannel
        )
    );

    next();
};
