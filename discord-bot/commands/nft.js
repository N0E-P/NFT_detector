const DiscordJS = require('discord.js')

module.exports = {
  category: 'NFT detector commands',
  description: 'initialise the bot',
  permissions: ['ADMINISTRATOR'],
  guildOnly: true,
  callback: ({message, channel}) => {
    console.log('NFT function starting...')

    // GET NFT COLLECTION ADDRESS
    message.reply('**Hey!** :sunglasses:')
    channel.send('To initialize me, please send a message containing only the ETH address of your _NFT collection_.')
    channel.send('```Example : 0xb47e3cd837dDF8e4c57F05d70Ab865de6e193BBB```')
                 
    const filter = (m) => {
      return m.author.id == message.author.id
    }
    
    const collector = channel.createMessageCollector({
      filter,
      max: 1,
      time: 1000 * 60,
    })

    collector.on('collect', message => {
      console.log(message.content)
    })

    collector.on('end', collected => {
      if (collected.size === 0) {
        message.reply('You did not provide your NFT collection address. Please write !NFT again to restart.')
        return
      }
      
      let text = 'Thanks! This answer has been collected:\n'
      let address = message.content

      collected.forEach((message) => {
        text += `${message.content}\n`,
        address = message.content
      })
      
      channel.send(text)
      channel.send('You will need to wait a little bit until we find all the NFT owners of your collection.')
      console.log('The address has been collected. Starting Moralis with getowners...')
      //console.log(address)  //it should give the address of the collection

      


      //MORAAAALISSSSS

      
    })
  }
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////
    /*

    //During this time, please create a role named "NFT owner" to make them recognisable, and to let them access special channels.



    // MORALIS PART (look in collection.tsx & getusernames for that)
      //https://github.com/N0E-P/NFT_detector/blob/master/to-delete/dapp-pieces/Collection.tsx#L1
      //https://github.com/N0E-P/NFT_detector/blob/master/to-delete/discord.py/getUsernames.js


    // Save the address collection variable somewhere to be able to get it back later (link it to server, or server ID if I can get it. To then use the actual server ID in the repeted file to add the nft owners) 


    //**Your collection was added successfuly!** :partying_face:
    //Now, the last thing you need to do is to share the following link to the members of your server, so they can proove to the bot that they really own their NFTs by connecting their metamask
    //LINK
    //Thank you for using NFT detector !
  */