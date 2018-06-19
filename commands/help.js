exports.run = (client, message, args) => {
    var embed = new Discord.RichEmbed()
        .setTitle('Help Page 1 of 1')

        .setDescription('Prefix is ' + prefix)

        .setColor('#f430ff')

        .addField('Poll', 'Starts a Strawpoll (args: title, [options])')

        .addField('Purge', 'Purges specified number of messages')

        message.channel.send(embed);
        return;
}