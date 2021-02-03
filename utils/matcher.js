exports.menumatch = (menu) => (text, ctx) =>
    text && ctx && ctx.session.menu && menu === ctx.session.menu.current
        ? [text]
        : null;

exports.arraymatch = (array) => (text, ctx) => {
    const match = array.filter((element) => text === ctx.i18n.t(element));

    if (text && ctx && match.length) {
        return [text, match[0]];
    } else {
        return null;
    }
};

exports.startmatch = (str) => (text, ctx) =>
    text && ctx && text.startsWith(ctx.i18n.t(str, { product: '' }))
        ? [text]
        : null;
