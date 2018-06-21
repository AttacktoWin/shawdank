const Discord = require('discord.js');

var outcomes = [
    "Sure",
    "Give or Take",
    "No",
    "Yeah, No",
    "It says you're gonna die. That's not even what you asked, it just says that",
    "New 8ball, who dis",
    "8Ball broke",
    "Yes",
    "Maybe",
    "No comment",
    "Outcome unclear"
]

exports.run = (clients, message, args) => {
    message.channel.send("Shaking the 8ball...");

    var question = args.join(" ");
    var outcome = outcomes[Math.floor(Math.random() * outcomes.length)];

    var embed = new Discord.RichEmbed()

    .setColor("#000000")

    .setTitle(question)

    .addField(outcome, 'That is the future...')

    message.channel.send(embed);
    return;
}