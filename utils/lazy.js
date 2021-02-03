const makeHashtag = (str) => {
    let wordArray = str
        .replace('-', '')
        .replace('&', '')
        .split(' ')
        .filter((char) => char !== '');
    let result = '#';

    if (wordArray.length === 0) {
        return false;
    }

    result =
        result +
        wordArray
            .map((word) => {
                let capitalizedWord =
                    word.charAt(0).toUpperCase() + word.slice(1);
                return capitalizedWord;
            })
            .join('');

    return result;
};

exports.generateCaption = (movie, channel) => {
    return `
📼  ${movie.title}

📅  Year: ${movie.year}
⭐️  IMDB: ${movie.rating}

${movie.categories.map((category) => makeHashtag(category)).join(' ')} ${
        movie.type == 'cartoon'
            ? '#Cartoon'
            : movie.type == 'anime'
            ? '#Anime'
            : '#Movie'
    } ${movie.isSerial ? '#Series' : ''} 

@${channel.username}
`;
};
