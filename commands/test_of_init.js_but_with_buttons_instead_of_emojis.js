// This file is used to run the command !init in discord, and to initialize the bot
const DiscordJS = require('discord.js')
const {MessageActionRow, MessageButton} = require('discord.js')
const { Moralis, useMoralisWeb3Api, useMoralis } = require('moralis/node')


//Specificities of the command
module.exports = {
  category: 'NFT Detector commands',
  description: 'initialise the bot',
  permissions: ['ADMINISTRATOR'],
  guildOnly: true,
  callback: async ({message, channel}) => {
    console.log('INIT function starting...')


    /////////////////////////////// GET NFT COLLECTION ADDRESS ///////////////////////////////
    channel.send('**Hey ' + message.author.username +'!  :grin:**')
    channel.send('To initialize me, please send a message containing only the smart contract address of your NFT collection.')
    channel.send('_Example:_ `0xb47e3cd837dDF8e4c57F05d70Ab865de6e193BBB`')

    
    //Make sure that the bot only take the answer from the admin
    const filter = (m) => {return m.author.id == message.author.id}
    

    //Start the emoji collector
    const collector = channel.createMessageCollector({filter, max: 1, time: 1000 * 60,})


    // saying that he didn't answer fast enought, or continue.
    collector.on ('end', collected => {
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
      console.log('The address '+ address +' has been collected.')

      
      
      
      /////////////////////////////// GET THE BLOCKCHAIN ///////////////////////////////
      const getBlockchain = (async(message) => {
        const row = new MessageActionRow()
          .addComponents(
            new MessageButton()
              .setCustomId('ethereum')
              .setLabel('Ethereum')
              .setStyle('PRIMARY')
          )
          .addComponents(
            new MessageButton()
              .setCustomId('binance')
              .setLabel('Binance Smart Chain')
              .setStyle('PRIMARY')
          )
          .addComponents(
            new MessageButton()
              .setCustomId('polygon')
              .setLabel('Polygon / Matic')
              .setStyle('PRIMARY')
          )
          .addComponents(
            new MessageButton()
              .setCustomId('avalanche')
              .setLabel('Avalanche')
              .setStyle('PRIMARY')
          )
          .addComponents(
            new MessageButton()
              .setCustomId('fantom')
              .setLabel('Fantom')
              .setStyle('PRIMARY')
          )
        
        await channel.send({
          content: "**Now, please click on the button of your NFT collection's blockchain.**",
          components: [row],
          })
        

        const filter = (btnInt, message, user) => {
          return message.user == btnInt.user.id
          //return m.author.id == message.author.id
          //return user.id === message.author.id;
        }

        const blockchainCollector = channel.createMessageComponentCollector({
          filter,
          max: 1,
          time: 1000 * 60 * 5
        })
  
        collector.on('end', (collection) => {
          channel.send('blockchain entered')
          collection.forEach((click) => {
            const blockchain = click.label
          })


        
        console.log(blockchain)
        return


          
        }) //blockchain collector
      }) //getting the blockchain
      let gettingTheBlockchain = getBlockchain();
    }) // end of address collector
  } //callback
} // module.export