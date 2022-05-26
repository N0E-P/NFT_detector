//This is the main document for the whole discord bot.
const DiscordJS = require('discord.js');
const WOKCommands = require('wokcommands')
const path = require('path')
const keepAlive = require("./server")
const token = process.env['token']
const { Intents } = DiscordJS
const client = new DiscordJS.Client({
  intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MESSAGES,
    Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
  ],
})


// Start the bot & wokcommands, and tell in the terminal when the bot is online
client.on('ready', () => {
  new WOKCommands(client, {
    commandsDir: path.join(__dirname, 'commands'),
    testServers: ['974204394742624316']
  })
  
  console.log(`Logged in as ${client.user.tag}!`);
})


//Let the bot online and access it using the discord token.
keepAlive()
client.login(token);