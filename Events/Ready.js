module.exports = bot => {
    console.log(`Bot has connected on: ${bot.guilds.size} server(s)`)

    bot.user.setPresence({
        game: {
            name: `${bot.guilds.size} servers!`,
            type: 'watching'
        }
    });
}