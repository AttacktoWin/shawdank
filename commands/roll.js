const Discord = require('discord.js');

exports.run = (clients, message, args) => {
    if (args.length < 2) {
        if (args[0].indexOf("d") != -1) {
            var num = parseInt(args[0].slice(0, args[0].indexOf("d")));
            var max = parseInt(args[0].slice(args[0].indexOf("d") + 1));
        } else {
            var num = 1;
            var max = parseInt(args[0]);
        }
    } else {
        var num = parseInt(args[0]);
        var max = parseInt(args[1]);
    }

    var embed = new Discord.RichEmbed()

    .setColor("#f4350e")

    .setTitle("Rolling " + num + "d" + max)

    for (var i = 0; i < num; i++) {
        embed.addField("Roll " + (i+1), "" + (Math.floor(Math.random() * max)));
    }

    message.channel.send(embed);
    return;
}