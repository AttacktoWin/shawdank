const GoogleImages = require('google-images');

const client = new GoogleImages("004327231332556375843:noohb2rnyb8", "AIzaSyDiPd_eVG2aDBEFoJw84cBNaDq3fC6VHXo");

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