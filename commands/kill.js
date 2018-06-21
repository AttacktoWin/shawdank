var weaponList = [
    "a Sword",
    "Magic Missile",
    "a Stick",
    "Their Bare Hands",
    "Their Bear Hands"
]

exports.run = (clients, message, args) => {
    if (args.length === 0) {
        var target = message.author;
        var weapon = weaponList[Math.floor(Math.random() * weaponList.length)];
    } else if (args.length > 1) {
        var target = message.mentions.members.first();
        var weapon = args.slice(1).join(" ");
    } else {
        var target = message.mentions.members.first();
        var weapon = weaponList[Math.floor(Math.random() * weaponList.length)];
    }

    message.channel.send(message.author + " kills " + target + " with " + weapon);
    return;
}