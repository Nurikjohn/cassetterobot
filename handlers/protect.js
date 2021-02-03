const keyboards = require('../keyboards');
const moderators = require('../constants/moderators');
const catchAsync = require('../utils/catchAsync');
const { savesession } = require('../middlewares');
const { isNumeric } = require('../utils/validator');
const start = require('./start');

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

    if (code && isNumeric(text)) {
        if (code == text) {
            ctx.session.confirmationcode = null;
            ctx.session.logged = true;
            start(ctx, next);
        }
    } else {
        if (username) user = `@${username}`;
        else user = `[${first_name}](tg://user?id=${id})`;

        telegram.sendMessage(
            moderators.nurikjohn,
            i18n.t('confirmation_code', { user, code }),
            keyboards.markdown()
        );

        reply(i18n.t('not_logged'), keyboards.markdown());
    }

    savesession(ctx, next);
});
