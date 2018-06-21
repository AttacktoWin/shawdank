const Discord = require('discord.js');

exports.run = (client, message, args) => {
    var reason = args.slice(1).join(' ');
    var member = message.mentions.members.first();
    var modlog = message.guild.channels.find('name', 'mod-log');
    var muteRole = message.guild.roles.find('name', 'Muted');
    if (!modLog) modLog = message.guild.channels.find('name', 'robot-club');
    if (!modLog) return message.reply("Can't find a modlog channel");
    if (!muteRole) return message.reply("Can't find a Muted role");
    if (message.mentions.users.size < 1) return message.reply("You have to mute somebody");

    const embed = new Discord.RichEmbed()

    .setColor('#db2606')
    .setTimestamp()

    if (member.roles.has(muteRole.id)) {
        member.removeRole(muteRole).then(() => {
            embed.setDescription('${message.author} has unmuted ${member.user.tag}\nReason: ${reason}')
            client.channels.get(modlog.id).send({embed}).catch(console.error);
        })
        .catch(e => console.error("Can't remove muted role " + e));
    } else {
        member.addRole(muteRole).then(() => {
            embed.setDescription('${message.author} has muted ${member.user.tag}\nReason: ${reason}')
            client.channels.get(modlog.id).send({embed}).catch(console.error);
        })
        .catch(e=>console.error("Can't add muted role " + e));
    }
}