const DiscordJS = require('discord.js')
const { Moralis, useMoralisWeb3Api, useMoralis } = require('moralis/node')

module.exports = {
  category: 'NFT detector commands',
  description: 'initialise the bot',
  permissions: ['ADMINISTRATOR'],
  guildOnly: true,
  callback: ({message, channel}) => {
    console.log('NFT function starting...')


    /////////////////////////////// GET NFT COLLECTION ADDRESS ///////////////////////////////
    message.reply('**Hey! To initialize me, please send a message containing only the ETH address of your NFT collection.** :sunglasses:')
    channel.send('_Example:_')
    channel.send('```0xb47e3cd837dDF8e4c57F05d70Ab865de6e193BBB```')
                 
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
      
      let text = "  _"
      let address = message.content

      collected.forEach((message) => {
        text += `${message.content}_`,
        address = message.content
      })

      console.log('The address '+ address +' has been collected. Starting Moralis with getowners...')

      
      //DELETE THESES 2 messages if moralis is quick enouth
      message.reply("**Thanks! I've collected your answer!** :grin:")  // OR: message.reply(text)
      channel.send('I will tell you when I have found all the NFT owners. Just wait a little bit...')
      


      
      /////////////////////////////// MORALIS ///////////////////////////////
      
      
      const iUseMoralis = (async() => {
        const serverUrl = "https://zxhf5v44ppmy.usemoralis.com:2053/server";
        const appId = "FhT4qqcXkx6s4d6fBGWoLyEi10twqx3uarr8eLEP";
        Moralis.start({ serverUrl, appId });

        const options = {
          address: address,
        };

        const nftOwners = await Moralis.Web3API.token.getNFTOwners(options);
        console.log(nftOwners);

        
        /////////////////////////////// ENDING MESSAGES ///////////////////////////////
        console.log('The NFT owners have been saved in moralis!')
        
        message.reply("**Your NFT collection was added successfuly!** :partying_face:")
        channel.send("Now, the last thing you need to do is to share this link with the members of your server: http://localhost:3000/")
        channel.send("> _By connecting their metamask to my dapp, I will be able to verify if they really owns their NFTs._ ")
        channel.send("> _There is absolutely NO payement or transaction to do._")
        channel.send("**You've finish my initialisation! Thank you for using NFT detector !** :thumbsup:")
        }) 
      
      const jefaisdestests = iUseMoralis();



      
    })
  }
}

