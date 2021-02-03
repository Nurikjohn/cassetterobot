module.exports = (fn) => {
    return (ctx, next) => {
        fn(ctx, next).catch((error) => {
            ctx.reply(error.toString());
        });
    };
};
