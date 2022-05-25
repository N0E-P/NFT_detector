const { Client, Intents} = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });
const token = process.env['token']
const keepAlive = require("./server")


//Know in the terminal when the bot is online
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});


// Use commands
client.on('interactionCreate', async interaction => {
  if (!interaction.isCommand()) return;

  // Make sure the bot is working great (paste /ping on my test server)
  if (interaction.commandName === 'ping') {
    await interaction.reply('Pong!');
  }
});


/*
client.on("guildMemberAdd", async (member) => {
  msg.author.send('**Hey ${msg.author.username}!** :grin:')
})

client.on("message", (msg) => {
  let isWelcomeMessage = msg.type === 'GUILD_MEMBER_JOIN'
  if (isWelcomeMessage) {
    msg.author.send('**Hey ${msg.author.username}!** :grin:')
  }
    
})

*/


keepAlive()
client.login(token);