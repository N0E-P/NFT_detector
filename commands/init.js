// This file is used to run the command !init in discord, and to initialize the bot
const { Moralis } = require('moralis/node')


//Specificities of the command
module.exports = {
  category: 'NFT Detector commands',
  description: 'initialise the bot',
  permissions: ['ADMINISTRATOR'],
  guildOnly: true,
  callback: ({ message, channel }) => {
    getAddress(message, channel);


    function getAddress(message, channel) {
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


        //getBlockchain function
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
          mssg.react('🇷')


          //Make sure that the bot only take the answer from the admin
          const filter = (reaction, user) => {
            return user.id === message.author.id;
          };


          //Start the emoji collector and create the chosenEmoji variable, to store the result
          const collector = mssg.createReactionCollector({ filter, max: 1, time: 60000 });


          // Save the chosen emoji into a variable
          let chosenEmoji
          collector.on('collect', (reaction) => {
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
            else if (chosenEmoji === '🇷') {
              blockchain = 'rinkeby'
            }
            else {
              message.reply('⚠️  A wrong emoji has been choosen. Please write `!init` again to restart.  ⚠️')
              return
            }


            //Ending function
            saveAndEnd(message, channel, address, blockchain)
          })
        })
    }


    async function saveAndEnd(message, channel, address, blockchain) {
      //Get the server infos
      const server = message.guild.id;
      const serverName = message.guild.name;


      //Start Moralis
      const serverUrl = "https://zxhf5v44ppmy.usemoralis.com:2053/server";
      const appId = "FhT4qqcXkx6s4d6fBGWoLyEi10twqx3uarr8eLEP";
      Moralis.start({ serverUrl, appId });


      // Save the data in the Moralis Database
      const Address = Moralis.Object.extend("CollectionsAddresses");
      const newAddress = new Address();
      newAddress.set("Address", address);
      newAddress.set("Blockchain", blockchain);
      newAddress.set("Server", server);
      newAddress.set("ServerName", serverName);
      await newAddress.save();


      //Messages for the user
      channel.send("**Thanks! The last thing you need to do is to tell your server's members to use the**  `!NFT`  **command.**")
      channel.send("You can also tell them to go directly on the NFT Detector dapp: *https://zxhf5v44ppmy.usemoralis.com* ")
      channel.send("> _```Anybody who own an NFT need to connect his wallet to the dapp to be able to be verified. Try to use the command and the dapp yourself!```_")
      channel.send("**_You've finish my initialisation successfuly!  Thank you for using NFT detector!_**   :partying_face:")


      //console message
      return console.log('Init data has been saved for the server ' + serverName)
    }
  }
}
