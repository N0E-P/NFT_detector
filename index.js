//This is the main file for the whole discord bot.
const DiscordJS = require('discord.js');
const WOKCommands = require('wokcommands')
const path = require('path')
const keepAlive = require("./server")
const test = require("./addroles")


//With replit.com, you have to use the following code to get the token:
//const token = process.env['token'] 

//With VSCode, you have to use the following code to get the token:
require('custom-env').env('staging')
token = process.env.TOKEN


//Use Discord.js
const { Intents } = DiscordJS
const client = new DiscordJS.Client({
  intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MESSAGES,
    Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
    Intents.FLAGS.GUILD_MEMBERS,
  ],
})


// Start the bot & wokcommands, and tell in the terminal when the bot is online
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);

  new WOKCommands(client, {
    commandsDir: path.join(__dirname, 'commands'),
    testServers: ['974204394742624316']
  })

  loop()
})


//



//Check if someone sends any message
client.on("messageCreate", message => {
  if (message.content.includes("")) {






    console.log("NEW MESSAGEGGEGEGE")

  }
})



async function loop() {

}

for (/*Tester chaque serveurs en prennant leur message associés*/) {

  test(message)
}



//


//Let the bot online and access it using the discord token.
keepAlive()
client.login(token);