const discord = require('discord.js');

exports.run = (bot, message, params) => {

    var helpcommands = new discord.RichEmbed()
        .setTitle(`Help`)
        .setAuthor("Help commands")
        .setColor(`#10f400`)
        .setTimestamp()
        .setDescription(`*botinfo, shows information about the bot\n\n*ban, ban a user\n\n*kick, kick a user\n\n*serverinfo, shows information about the server`)
    message.channel.send(helpcommands);
};

exports.conf = {
    name: 'help',
    aliases: [],
    permLevel: 4,
    enabled: true,
    guildOnly: true
};