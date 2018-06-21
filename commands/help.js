const Discord = require('discord.js');
const prefix = "$";


exports.run = (client, message, args) => {
    if (args.length > 0) {
        if (args[0].trim().toLowerCase() == "mod") {
            var embed = new Discord.RichEmbed()
                .setColor('#f430ff')
                .setTitle('Help Mod')
                .setDescription('Prefix is ' + prefix)
                .addBlankField()
                .addField('Purge', 'Purges the specified number of messages (args: number)')

                return message.channel.send(embed);
        } else if (args[0].trim().toLowerCase() == "fun") {
            var embed = new Discord.RichEmbed()
                .setColor('#f430ff')
                .setTitle('Help Fun')
                .setDescription('Prefix is ' + prefix)
                .addBlankField()
                .addField('Kill', 'Kills a mentioned user with the specified weapon (args: target, weapon)')
                .addField('8Ball', 'Shakes the 8Ball to answer your question (args: question)')
                .addField('Roll', 'Rolls the number of dice specified (args: number, max)')
                .addField('Say', "Makes the bot say whatever you want")
                return message.channel.send(embed);
        } else {
            var embed = new Discord.RichEmbed()
            .setColor('#f430ff')
            .setTitle('Help Topics')
            .setDescription('Prefix is ' + prefix)
            .addBlankField()
            .addField('Mod', 'Only for mods')
            .addField('Fun', 'All-purpose use')

            return message.channel.send(embed);
        }
    } else {
        var embed = new Discord.RichEmbed()
            .setColor('#f430ff')
            .setTitle('Help Topics')
            .setDescription('Prefix is ' + prefix)
            .addBlankField()
            .addField('Mod', 'Only for mods')
            .addField('Fun', 'All-purpose use')

            return message.channel.send(embed);
    }
}