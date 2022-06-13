// This file is used to run the command !init in discord, and to initialize the bot
const DiscordJS = require('discord.js')
const { Moralis, useMoralisWeb3Api, useMoralis } = require('moralis/node')
const { setAPIRateLimit } = require('moralis')


//Specificities of the command
module.exports = {
  category: 'NFT Detector commands',
  description: 'initialise the bot',
  permissions: ['ADMINISTRATOR'],
  guildOnly: true,
  callback: ({ message, channel }) => {
    console.log('INIT function starting...')


    function getCollectionAddress(message, channel) {
      channel.send('**Hey ' + message.author.username + '!  :grin:**')
      channel.send('To initialize me, please send a message containing only the smart contract address of your NFT collection.')
      channel.send('_Example:_ `0xb47e3cd837dDF8e4c57F05d70Ab865de6e193BBB`')


      //Make sure that the bot only take the answer from the admin
      const filter = (m) => { return m.author.id == message.author.id }


      //Start the emoji collector
      const collector = channel.createMessageCollector({ filter, max: 1, time: 1000 * 60, })


      // saying that he didn't answer fast enought, or continue.
      collector.on('end', collected => {
        if (collected.size === 0) {
          message.reply('⚠️  You did not provide your NFT smart contract fast enough. Please write `!init` again to restart.  ⚠️')
          return
        }


        // get the address of the smart contract
        let address = message.content
        collected.forEach((message) => {
          address = message.content
        })


        //message
        console.log('The address ' + address + ' has been collected.')
        getBlockchain(message, channel, address)
      })
    }


    function getBlockchain(message, channel, address) {
      channel.send('**Now, please click on the emoji representing the blockchain where your NFT collection is located.**')
      message.channel.send({ content: '🇪  Ethereum  |   🇧  Binance Smart Chain  |   🇵  Polygon / Matic  |   🇦  Avalanche  |   🇫  Fantom' })
        .then(mssg => {
          mssg.react('🇪')
          mssg.react('🇧')
          mssg.react('🇵')
          mssg.react('🇦')
          mssg.react('🇫')


          //Make sure that the bot only take the answer from the admin
          const filter = (reaction, user) => {
            return user.id === message.author.id;
          };


          //Start the emoji collector and create the chosenEmoji variable, to store the result
          const collector = mssg.createReactionCollector({ filter, max: 1, time: 60000 });


          // Save the chosen emoji into a variable
          let chosenEmoji
          collector.on('collect', (reaction, user) => {
            chosenEmoji = reaction.emoji.name
          });


          // saying that he didn't answer fast enough, or continue.
          collector.on('end', collected => {
            if (collected.size === 0) {
              message.reply('⚠️  You did not chose the blockchain fast enough. Please write `!init` again to restart.  ⚠️')
              return
            }


            //convert the emoji into a blockchain name
            let blockchain
            if (chosenEmoji === '🇪') {
              blockchain = 'eth'
            }
            else if (chosenEmoji === '🇧') {
              blockchain = 'bsc'
            }
            else if (chosenEmoji === '🇦') {
              blockchain = 'avalanche'
            }
            else if (chosenEmoji === '🇫') {
              blockchain = 'fantom'
            }
            else if (chosenEmoji === '🇵') {
              blockchain = 'polygon'
            }
            else {
              channel.send('⚠️  A wrong emoji has been choosen. Please write `!init` again to restart.  ⚠️')
              return
            }


            //message
            console.log('The blockchain ' + blockchain + ' has been chosen.')


            //Get the server ID
            var server = message.guild.id;
            console.log("The server ID is " + server)


            //Ending messages for the user
            channel.send("**Thanks! The last thing you need to do is to tell your server's members to use the**  `!NFT`  **command.**")
            channel.send("You can also tell them to go directly on the NFT Detector dapp: *https://zxhf5v44ppmy.usemoralis.com* ")
            channel.send("> _```Anybody who own an NFT need to connect his wallet to the dapp to be able to be verified. Try to use the command and the dapp yourself!```_")
            channel.send("**_You've finish my initialisation successfuly!  Thank you for using NFT detector!_**   :partying_face:")


            //Start the repeat function and chose the time to repeat in minutes

            //setInterval(addRoles, 1000 * 60 * 0.1); 
            //don't have the appropriate variables. 
            //Send : "addRoles function starting...undefinedundefinedundefined"
            setInterval(addRoles, 1000 * 60 * 0.1, server, address, blockchain)
            //setInterval(addRoles(address, blockchain, server), 1000 * 60 * 0.1);
            //work one time and have the variables, but don't work after it. 
            //Send : TypeError [ERR_INVALID_CALLBACK]: Callback must be a function. Received Promise { undefined }
          })
        })
    }


    async function addRoles(server, address, blockchain) {
      console.log("addRoles function starting...");
      console.log("server :" + server)
      console.log("address :" + address)
      console.log("blockchain :" + blockchain)



      //messageS
      console.log("addRoles function ended");



    }


    getCollectionAddress(message, channel); //Start the script
  }
}


/* BONUS NOTES :
(Address, Blockchain, Server)
(address, blockchain, server)


//Real first moralis script:
const serverUrl = "https://zxhf5v44ppmy.usemoralis.com:2053/server";
const appId = "FhT4qqcXkx6s4d6fBGWoLyEi10twqx3uarr8eLEP";
Moralis.start({ serverUrl, appId });


// Save the data in the Moralis Database
const Address = Moralis.Object.extend("CollectionsAddresses");
const newAddress = new Address();
newAddress.set("Address", address);
newAddress.set("Blockchain", blockchain);
newAddress.set("Server", server);
await newAddress.save();


server = client.guilds.cache.get("the guild id");
console.log(the guild id)



//Get the owners:
const options = {chain: blockchain, address: address,};
let objectOwners = await Moralis.Web3API.token.getNFTOwners(options);
let stringOwners
let allOwners = ""
while (objectOwners.next){
  objectOwners = await objectOwners.next()
  stringOwners = JSON.stringify(objectOwners)
  allOwners = allOwners + stringOwners
}

newAddress.set("Data", allOwners);
*/