const ytdl = require('ytdl-core');
const queue = {};

exports.run = (clients, message, args) => {
    if (args.length < 1) {
        return;
    }

    if (args[0] == 'play') {
        if (args.length > 1) {
            if (!queue[message.guild.id]) queue[message.guild.id] = {
                queue: []
            };

            var server = queue[message.guild.id];

            server.queue.push(args[1]);

            if (!message.guild.voiceChannel) {
                if (message.member.voiceChannel) {
                    message.member.voiceChannel.join().then(function(connection) {
                        play(connection, message);
                    })
                } else {
                    return message.channel.send("Join a voice channel first");
                }
            }
        }
    }

    if (args[0] == 'skip') {
        var server = queue[message.guild.id];

        if (server.dispatcher) server.dispatcher.end();
    }

    if (args[0] == 'stop') {
        var server = queue[message.guild.id];

        if (message.guild.voiceConnection) message.guild.voiceConnection.disconnect();
    }
}

function play (connection, message) {
    var server = queue[message.guild.id];

    server.dispatcher = connection.playStream(ytdl(server.queue[0], {filter: "audioonly"}));

    server.queue.shift();
    server.dispatcher.on('end', function() {
        if (server.queue[0]) play(connection, message)
        else connection.disconnect();
    })
}