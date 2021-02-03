const keyboards = require('../keyboards');
const catchAsync = require('../utils/catchAsync');
const { isNumeric } = require('../utils/validator');
const moderators = require('../constants/moderators');

module.exports = catchAsync(async (ctx, next) => {
    const {
        reply,
        i18n,
        telegram,
        session: { confirmationcode },
        message: {
            text,
            from: { username, id, first_name },
        },
    } = ctx;

    if (confirmationcode && isNumeric(text) && confirmationcode == text) {
        ctx.session.confirmationcode = null;
        ctx.session.logged = true;
        next();

        const date = new Date();
        let user;

        if (username) user = `@${username}`;
        else user = `[${first_name}](tg://user?id=${id})`;

        telegram.sendMessage(
            moderators.nurikjohn,
            i18n.t('new_login', { user, date }),
            keyboards.markdown()
        );
    }
});
