const strawpoll = require('strawpoll');

exports.run = (clients, message, args) => {
    if (args.length < 3) {
        message.channel.send("Not enough options");
        return;
    }

    var pollTitle = args[0];
    var pollOptions = [];
    for (var i = 1; i < args.length; i++) {
        pollOptions.push(args[i]);
    }

    var poll = strawpoll.create({
        title: pollTitle,
        options: pollOptions,
        multi: false,
        dupcheck: 'normal',
        captcha: false
    })

    poll.then((response) => {
        console.log(response)
    }).catch((error) => {
        console.log(error)
    })
}