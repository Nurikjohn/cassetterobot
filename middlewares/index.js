const redis = require('../services/redis');

exports.setmenu = (newcurrent, newback) => (ctx, next) => {
    const {
        session: { menu },
    } = ctx;

    const oldmenu = menu || { current: null };

    ctx.session.menu = {
        current: newcurrent,
        back: newback || oldmenu.current,
    };

    next();
};

exports.session = (newSession) => (ctx, next) => {
    Object.keys(newSession).map((key) => {
        ctx.session[key] = newSession[key];
    });

    next();
};

exports.clearsession = (ctx, next) => {
    ctx.session = {};
    next();
};

exports.logsession = (ctx, next) => {
    console.log(ctx.session);
    next();
};

exports.savesession = async (ctx, next) => {
    await redis.saveSession(redis.options.getSessionKey(ctx), ctx.session);

    next();
};
