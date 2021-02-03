const Api = require('../services/api');

module.exports = async (ctx, next) => {
    const {
        inlineQuery: { query },
        answerInlineQuery,
    } = ctx;

    let results;

    if (query) results = await Api.search(query);
    else results = await Api.getAll();

    if (!results.length) return answerInlineQuery();

    const inlineresults = results.map(
        ({ _id, title, poster, description }) => ({
            type: 'article',
            id: _id,
            title,
            thumb_url: poster,
            description,
            input_message_content: {
                message_text: `/movie ${_id}`,
            },
        })
    );

    await answerInlineQuery(inlineresults);
};
