//const DiscordJS = require('discord.js');

module.exports = {
  category: 'NFT detector commands',
  description: 'initialise the bot',
  permissions: ['ADMINISTRATOR'],
  guildOnly: true,
  callback: (message) => {
    console.log('NFT function starting...')

    
    ///////////////////////////////////////////////////
    const reply = 'thisisamessage'
    
    if (message) {
      message.reply({
        content: reply
      })
    }

    console.log('NFT function ended.')
    
    //**Hey!** :sunglasses:
    //To initialize me, please send a message containing only the ETH address of your _NFT collection_.
    //```Example : 0xb47e3cd837dDF8e4c57F05d70Ab865de6e193BBB```

    //Récupérer sa réponse dans une variable
    //Faire en sorte que l'on ne prenne les réponses que de celui qui a écrit !NFT 

    //Now, please enter the blokchain where your NFT collection is located.
    //```You need to enter one of the following answer : eth | bsc | polygon | avalanche | fantom```

    //Récupérer sa réponse dans une variable
    //Faire en sorte que l'on ne prenne les réponses que de celui qui a écrit !NFT 

    //Your answers have been collected. You will need to wait a little bit until we find all the NFT owners of your collection.
    //During this time, please create a role named "NFT owner" to make them recognisable, and to let them access special channels.



    // MORALIS PART (look in collection.tsx & getusernames for that)
      //https://github.com/N0E-P/NFT_detector/blob/master/to-delete/dapp-pieces/Collection.tsx#L1
      //https://github.com/N0E-P/NFT_detector/blob/master/to-delete/discord.py/getUsernames.js


    // Save the address collection variable somewhere to be able to get it back later (link it to server, or server ID if I can get it. To then use the actual server ID in the repeted file to add the nft owners) 


    //**Your collection was added successfuly!** :partying_face:
    //Now, the last thing you need to do is to share the following link to the members of your server, so they can proove to the bot that they really own their NFTs by connecting their metamask
    //LINK
    //Thank you for using NFT detector !
    
    




    ////////////////////////////////////////////////////////////////////////////////////////////////////////////
    
    /*
    const questions = [
      'What is your eth address?',
      'What is the blockchain? (+possibilities)',
    ]
    let counter = 0

    const filter = m => m.author.id === message.author.id

    const collector = new DiscordJS.MessageCollector(message.channel, filter, {
      max: questions.length,
      time: 1000 * 60 // 60s
    })

    message.channel.send(questions[counter++])
    collector.on('collect', m => {
      if (counter < questions.length) {
        m.channel.send(questions[counter++])
      }
    })

    collector.on('end', collected => {
      console.log('Collected ${collected.size} messages')

      if (collected.size < questions.length){
        message.reply('You did not answer the questions in time')
        return
      }
      
      let counter = 0
      collected.forEach((value) => {
        console.log(questions[counter++], value.content)
      })
    })
    */

    
  },
}