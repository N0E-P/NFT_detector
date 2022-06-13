//This is the main file for the whole discord bot.
const DiscordJS = require('discord.js');
const WOKCommands = require('wokcommands')
const path = require('path')
const keepAlive = require("./server")
const addRole = require("./addrole")
const token = process.env['token']


//Use Discord.js
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
  console.log(`Logged in as ${client.user.tag}!`);
  
  new WOKCommands(client, {
    commandsDir: path.join(__dirname, 'commands'),
    testServers: ['974204394742624316']
  })
  
  //TESTSSS
  //var server = client.guilds.cache.get(serverID);
  var server = client.guilds.cache.get("GUILD-ID");
  addRole(server)
})


//Let the bot online and access it using the discord token.
keepAlive()
client.login(token);