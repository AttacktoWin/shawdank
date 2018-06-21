exports.run = (clients, message, args) => {
    if (args.length < 1) {
        message.delete().catch(O_o => {});
        return message.channel.send("No comment");
    }

    var words = args.slice(0).join(" ");

    message.delete().catch(O_o => {}) ;
    return message.channel.send(words);
}