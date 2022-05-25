//This is the main document for the whole discord bot.
const { Client, Intents} = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });
const token = process.env['token']
const keepAlive = require("./server")


//Tell in the terminal when the bot is online.
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});


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