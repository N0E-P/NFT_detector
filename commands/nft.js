// This file is used to run the command !NFT in discord, To get the link of the dapp with a beautiful button
const {MessageActionRow, MessageButton } = require('discord.js')


//Specificities of the command
module.exports = {
  category: 'NFT Detector commands',
  description: 'Show the button to connect Metamask',
  guildOnly: true,
  callback: async ({message, channel}) => {
    console.log('NFT function starting...')
    
    channel.send('**Hi ' + message.author.username +'!**  :grin:')
    //If you have an NFT, you can get access to specials texts and vocals channels on this server.


    
    //channel.send('Click on this button to go on the NFT Detector Dapp')
    
    // channel.send("> By connecting their metamask to the NFT Detector dapp, I will be able to verify if they really owns their NFTs. ")
    // channel.send("> There is absolutely NO payement or transaction to do.")
    //We will never DM you or ask you for your private key
    //Préciser ça sur la dapp aussi

    
    const row = new MessageActionRow()
      .addComponents(
        new MessageButton()
          .setCustomId('Get_link')
          .setLabel(' Go to the NFT Detector Dapp ')
          .setStyle('SUCCESS')
      )


    await channel.send({
      content: 'Click',
      components: [row],
    })
  }
}