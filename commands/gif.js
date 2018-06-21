const GphApiClient = require('giphy-js-sdk-core');
const giphy = GphApiClient('QHWA1X8CvM4bRdsRKBSXaqcNZo04P176');

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