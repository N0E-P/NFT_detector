//This is the main document for the whole discord bot.
const { Client, Intents } = require('discord.js');
const WOKCommands = require('wokcommands')
const path = require('path')
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });
const keepAlive = require("./server")
const token = process.env['token']


// Starts and tell in the terminal when the bot is online
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);

  // Use WOKcommands to write commands
  new WOKCommands(client, {
    commandsDir: path.join(__dirname, 'commands'),
  })
})


//Let the bot online and access it using the discord token.
keepAlive()
client.login(token);