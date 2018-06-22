const GphApiClient = require('giphy-js-sdk-core');
const giphy = GphApiClient('[insert key here]');

exports.run = (clients, message, args) => {
    if (args.length > 0) {
       var term = args.join(' ');
       
       giphy.search('gifs', {"q": term, "limit": 1})
       .then((response) => {
            return message.channel.send(response.data[0].url);
        })
        .catch((err) => {
            return console.log(err);
        })
    } else {
        giphy.random('gifs', {})
        .then((response) => {
            return message.channel.send(response.data.url);
        })
        .catch((err) => {
            return console.log(err);
        })
    }
}