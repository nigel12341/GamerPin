const reqEvent = (Event) => require(`../Events/${Event}`)
module.exports = bot => {
  bot.on('ready', () => reqEvent('Ready')(bot));
  bot.on('message', reqEvent('Message'));
};