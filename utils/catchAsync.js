module.exports = (fn) => {
    return (ctx, next) => {
        fn(ctx, next).catch((error) => {
            console.log(error);
        });
    };
};
