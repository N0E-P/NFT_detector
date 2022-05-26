//This is the main document for the whole discord bot.
const { Client, Intents} = require('discord.js');
const WOKCommands = require('wokcommands')
const path = require('path')
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });
const token = process.env['token']
const keepAlive = require("./server")


//When the bot is online
client.on('ready', () => {
  //Tell it in the terminal
  console.log(`Logged in as ${client.user.tag}!`);

  // Make commands possible
  new WOKCommands(client, {
    commandsDir: path.join(__dirname, 'commands'),
  })
})


// Use commands.
client.on('interactionCreate', async interaction => {
  if (!interaction.isCommand()) return;

  // Make sure the bot is working great. (paste /ping on my test server)
  if (interaction.commandName === 'ping') {
    await interaction.reply('Pong!');
  }
});


//Let the bot online and acces it using the discord token.
keepAlive()
client.login(token);