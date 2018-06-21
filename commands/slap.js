exports.run = (clients, message, args) => {
    if (args.length > 0) {
        return message.channel.send(message.author + ' slapped ' + args[0] + '!');
    } else {
        return message.channel.send("Please don't slap the bot");
    }
}