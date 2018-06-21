const settings = require('./settings.json');
const fs = require('fs');

const Discord = require('discord.js');

const prefix = settings.prefix;

const bot = new Discord.Client({disableEveryone: true});

fs.readdir("./events/", (err, files) => {
    if (err) return console.error(err);
    files.forEach(file => {
      let eventFunction = require(`./events/${file}`);
      let eventName = file.split(".")[0];
      // super-secret recipe to call events with all their proper arguments *after* the `client` var.
      bot.on(eventName, (...args) => eventFunction.run(bot, ...args));
    });
  });

bot.on('ready', async () => {
    console.log('Bot is online ' + bot.user.username);
    console.log("Your invite link is:");
    bot.generateInvite(["ADMINISTRATOR"]).then(link => {
        console.log(link);
    }).catch(err => {
        console.log(err.stack);
    });
    bot.user.setActivity('Prefix is ' + prefix, {type: 'LISTENING'});
});

bot.on('message', async message => {
    if (message.author.bot) return;
    if (message.channel.type === 'dm') return;
    if (!message.content.startsWith(prefix)) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    console.log("working");
    console.log(args);

    try {
        let commandFile = require(`./commands/${command}.js`);
        commandFile.run(bot, message, args);
      } catch (err) {
        console.error(err);
      }
});

bot.login(settings.token);