exports.run = (clients, message, args) => {
    if (!message.guild.member(message.author).hasPermission('MANAGE_MESSAGES')) {
        return message.reply('Insufficient Permissions')
    };

    var messageCount = parseInt(args[0]);

    if (messageCount < 0) {
        message.channel.fetchMessages({
            limit: 1
        }).then(messages => message.channel.bulkDelete(1));
        return;
    }

    if (messageCount > 100) {
        return message.channel.send('Too many to delete');
    }

    message.channel.fetchMessages({
        limit: messageCount
    }).then(messages => message.channel.bulkDelete(messageCount));
}