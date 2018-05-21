const discord = require('discord.js');

exports.run = (bot, message, params) => {

    var botinfo = new discord.RichEmbed()
        .setTitle(`Bot information`)
        .setAuthor(`Author: Nigel#4318`, "https://cdn.discordapp.com/attachments/447770671846653964/447773914374995990/svgA38003069029417325.png")
        .setColor(`#10f400`)
        .setTimestamp()
        .setFooter("Get the bot on ur own server: https://discordapp.com/api/oauth2/authorize?client_id=447557133819445248&permissions=8&scope=bot")
        .setDescription(`Created in Node.js\nMade by: Nigel#4318\nSupport discord server: https://discord.gg/v4GkNjG`)
        .addField(`Bot serving in:`, `${bot.guilds.size} servers!`)
    message.channel.send(botinfo);
};


exports.conf = {
    name: 'botinfo',
    aliases: [`botinformation`],
    permLevel: 4,
    enabled: true,
    guildOnly: true
};