const DiscordJS = require('discord.js')

module.exports = {
  category: 'NFT detector commands',
  description: 'TEEEEEEEEEEEEEEEEEST',
  permissions: ['ADMINISTRATOR'],
  guildOnly: true,
  callback: ({message, channel}) => {
    console.log('NFTest function starting...')// TO DELETE


    //Messages from the bot
    message.react('🇪')
    message.react('🇧')
    message.react('🇵')
    message.react('🇦')
    message.react('🇫')


    //Make sure that the bot only take the answer from the admin
    const filter = (reaction, user) => {
	    return user.id === message.author.id;
    };

    
    //Start the emoji collector and create the chosenEmoji variable, to store the result
    const collector = message.createReactionCollector({ filter, max: 1 , time: 60000 });
    let chosenEmoji

    
    // Save the chosen emoji into a variable
    collector.on('collect', (reaction, user) => {
    	console.log(`Collected ${reaction.emoji.name} from ${user.tag}`); // TO DELETE
      console.log(reaction.emoji) // TO DELETE
      chosenEmoji = reaction.emoji.name
    });
    
    // saying that he didn't answer fast enought, or continue.
    collector.on('end', collected => {
      if (collected.size === 0) {
        message.reply('You did not answer fast enouth. Please write _!NFT_ again to restart.')
        return
      }

      
      //convert the emoji into a blockchain name
      let blockchain
      if (chosenEmoji === '🇪'){
        blockchain = 'eth'
      }
      else if (chosenEmoji === '🇧'){
        blockchain = 'bsc'
      }
      else if (chosenEmoji === '🇦'){
        blockchain = 'avalanche'
      }
      else if (chosenEmoji === '🇫'){
        blockchain = 'fantom'
      }
      else if (chosenEmoji === '🇵'){
        blockchain = 'polygon'
      }
      else {
        channel.send('A wrong emoji has been choosen. Please write _!NFT_ again to restart.')
        return
      }
        
      
      channel.send('succeded!')
      console.log(chosenEmoji) // TO DELETE
      console.log(blockchain) // TO DELETE
      return
    });
  }
}