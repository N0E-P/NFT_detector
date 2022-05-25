// Before running the program : "npm install discord.js"
// If "Error: Cannot find module ‘node:events’" : npm update -g

//npm init -y && npm i --save-dev node@16 && npm config set prefix=$(pwd)/node_modules/node && export PATH=$(pwd)/node_modules/node/bin:$PATH

const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');


const token = process.env['token']
const CLIENT_ID = process.env['client_id']
const GUILD_ID = process.env['guild_id']


const commands = [{
  name: 'ping',
  description: 'Replies with Pong!'
}]; 


const rest = new REST({ version: '9' }).setToken(token);


(async () => {
  try {
    console.log('Started refreshing application (/) commands.');

    await rest.put(
      Routes.applicationGuildCommands(CLIENT_ID, GUILD_ID),
      { body: commands },
    );

    console.log('Successfully reloaded application (/) commands.');
  } catch (error) {
    console.error(error);
  }
})();