const GoogleImages = require('google-images');

const client = new GoogleImages("insert client id here", "[insert key here]");

exports.run = (clients, message, args) => {
    if (args.length > 0) {
        client.search(args.join(' '))
        .then((images) => {
            return message.channel.send(images[0].url);
        })
        .catch((err) => {
            return console.log(err);
        })
    } else {
        client.search('There was an attempt')
        .then((images) => {
            return message.channel.send(images[0].url);
        })
        .catch((err) => {
            return console.log(err);
        })
    }
}