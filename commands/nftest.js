const DiscordJS = require('discord.js')

module.exports = {
  category: 'NFT detector commands',
  description: 'TEEEEEEEEEEEEEEEEEST',
  permissions: ['ADMINISTRATOR'],
  guildOnly: true,
  callback: ({message, channel}) => {
    
    console.log('NFTest function starting...')
    message.react('🇪')
    message.react('🇧')
    message.react('🇵')
    message.react('🇦')
    message.react('🇫')

    
    const filter = (reaction, user) => {
	    return user.id === message.author.id;
    };
    
    
    const collector = message.createReactionCollector({ filter, max: 1 , time: 60000 });
    let chosenEmoji
    
    
    collector.on('collect', (reaction, user) => {
    	console.log(`Collected ${reaction.emoji.name} from ${user.tag}`);
      console.log(reaction.emoji)
      chosenEmoji = reaction.emoji.name
    });
    
    
    collector.on('end', collected => {
      if (collected.size === 0) {
        message.reply('You did not answer.')
        console.log('No answer')
        return
      }

      

      
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
      console.log(chosenEmoji)
      console.log(blockchain)
      return
    });
  }
}