const config = require('./config.json');
const discord = require('discord.js');
const bot = new discord.Client();
const fs = require('fs');
var TimeStamp = (new Date().toISOString().replace(/.+T/, '[').replace(/\..+/, ']'));


require('./Util/EventsLoader')(bot);
bot.commands = new discord.Collection();
bot.aliases = new discord.Collection();
fs.readdir('./CommandDir/', (err, folders) => {
    if (err) throw err;
    for (const folder of folders) {
        fs.readdir(`./CommandDir/${folder}/`, (err, files) => {
            if (err) console.error(err);
            files.forEach(f => {
                let props = require(`./CommandDir/${folder}/${f}`);
                bot.commands.set(props.conf.name, props);
                props.conf.aliases.forEach(alias => {
                    bot.aliases.set(alias, props.conf.name);
                });
            });
            console.log(`${TimeStamp} Loaded a total of ${files.length} commands From ${folder}.`);
        });
    }
});

bot.elevation = (message) => {
    let permlvl = 1;
    if (message.author.id === config.Dev) permlvl = 5;
    return permlvl;
};

process.on("unhandledRejection", err => {
    console.error("Uncaught Promise Error: \n" + err.stack);
});


bot.login(config.token);
