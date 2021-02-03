const keyboards = require('../keyboards');
const moderators = require('../constants/moderators');
const catchAsync = require('../utils/catchAsync');
const { savesession } = require('../middlewares');

module.exports = catchAsync(async (ctx, next) => {
    const {
        reply,
        i18n,
        session: { logged, confirmationcode },
        telegram,
        message: {
            from: { first_name, username, id },
            text,
        },
    } = ctx;

    if (logged) return next();

    let code = confirmationcode,
        user;

    if (!code) {
        code = parseInt(Math.random() * 10000);
        ctx.session.confirmationcode = code;
    }

    if (username) user = `@${username}`;
    else user = `[${first_name}](tg://user?id=${id})`;

    telegram.sendMessage(
        moderators.nurikjohn,
        i18n.t('confirmation_code', { user, code }),
        keyboards.markdown()
    );

    reply(i18n.t('not_logged'), keyboards.markdown());

    savesession(ctx, next);
});
