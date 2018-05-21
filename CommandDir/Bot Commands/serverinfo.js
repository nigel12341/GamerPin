const discord = require('discord.js');


exports.run = (bot, message, params) => {
    function getFormattedTime(date) {
        var seconds = Math.floor(date.getSeconds());
        var minutes = Math.floor(date.getMinutes());
        var hours = Math.floor(date.getHours());
        var formattedTime;
        if (seconds < 10) {
            seconds = `0${seconds}`;
        }
        if (minutes < 10 && hours >= 1) {
            minutes = `0${minutes}`;
        }
        formattedTime = (`${hours}:${minutes}:${seconds}`);

        return formattedTime;
    }

    var numberroles = message.guild.roles.map(role => role);
    var date = message.guild.createdAt;

    var ServerInformation = new discord.RichEmbed()
        .setAuthor(`Author: Nigel#4318`, "https://cdn.discordapp.com/avatars/291272018773671937/58450cab34c48ecbe9e7b0eadb83dc8b.png")
        .setColor(`#10f400`)
        .setTimestamp()
        .setDescription(`Server owner: ${message.guild.owner.user}\nServer owner ID: ${message.guild.ownerID}`)
        .addField(`Total members:`, message.guild.members.size, true)
        .addField(`Total roles:`, Array.from(numberroles).length, true)
        .addField(`Creation date:`, `${date.getDate()}-${date.getMonth()}-${date.getFullYear()} | ${getFormattedTime(date)}`)
    message.channel.send(ServerInformation);
};

exports.conf = {
    name: 'serverinfo',
    aliases: ['srvinfo',],
    permLevel: 1,
    enabled: true,
    guildOnly: true
};