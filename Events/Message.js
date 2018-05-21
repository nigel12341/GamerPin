const config = require('../config.json');
module.exports = message => {
  let bot = message.client;
  if (message.author.id == config.BotID) return;
  if (!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(' ')[0].slice(config.prefix.length).toLowerCase();
  let params = message.content.split(' ').slice(1);
  let perms = bot.elevation(message);
  let cmd;
  if (bot.commands.has(command)) {
    cmd = bot.commands.get(command);
  } else if (bot.aliases.has(command)) {
    cmd = bot.commands.get(bot.aliases.get(command));
  }
  if (cmd) {
    if (perms < cmd.conf.permLevel) return console.log(`Perm level is too low`);
    if (!cmd.conf.enabled) return console.log(`Command Disabled`);
    cmd.run(bot, message, params, perms);
  }
};