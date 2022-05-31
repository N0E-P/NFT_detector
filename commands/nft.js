// This file is used to run the command !NFT in discord, and to initialize the bot
const DiscordJS = require('discord.js')
const { Moralis, useMoralisWeb3Api, useMoralis } = require('moralis/node')

//Specificities of the command
module.exports = {
  category: 'NFT detector commands',
  description: 'initialise the bot',
  permissions: ['ADMINISTRATOR'],
  guildOnly: true,
  callback: ({message, channel}) => {
    console.log('NFT function starting...')


    /////////////////////////////// GET NFT COLLECTION ADDRESS ///////////////////////////////
    message.reply('**Hey! To initialize me, please send a message containing only the ETH address of your NFT collection.** :grin:')
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

    collector.on('end', collected => {
      if (collected.size === 0) {
        message.reply('You did not provide your NFT collection address. Please write !NFT again to restart.')
        return
      }
      
      let address = message.content
      collected.forEach((message) => {
        address = message.content
      })

      console.log('The address '+ address +' has been collected.')
      channel.send("Thanks! Just wait a little bit while I'm saving save your answer...")


      
      
      /////////////////////////////// GET THE BLOCKCHAIN ///////////////////////////////
      message.channel.send({content: 'choose'})
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
          const collector = mssg.createReactionCollector({ filter, max: 1 , time: 60000 });
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

            
            //Finish message
            channel.send('blockchain got successfully!')
            console.log(chosenEmoji) // TO DELETE
            console.log(blockchain) // TO DELETE



            
            /////////////////////////////// MORALIS ///////////////////////////////
            const iUseMoralis = (async() => {
              const serverUrl = "https://zxhf5v44ppmy.usemoralis.com:2053/server";
              const appId = "FhT4qqcXkx6s4d6fBGWoLyEi10twqx3uarr8eLEP";
              Moralis.start({ serverUrl, appId });
      
              
              //Get owners:
              const options = {chain: blockchain, address: address};
              const nftOwners = await Moralis.Web3API.token.getNFTOwners(options);
              console.log('The NFT owners have been found!');
      
              
              // Save the NFT owners in the Moralis Database
              const Address = Moralis.Object.extend("CollectionsAddresses");
              const newAddress = new Address();
              newAddress.set("Name", address);
              newAddress.set("Data", nftOwners);
              await newAddress.save();
              console.log("Collection address saved:", address)


              
      
              /////////////////////////////// ENDING MESSAGES ///////////////////////////////
              message.reply("**Your NFT collection was added successfuly!** :partying_face:")
              channel.send("Now, the last thing you need to do is to share this link with the members of your server: https://zxhf5v44ppmy.usemoralis.com/")
              channel.send("> _By connecting their metamask to the NFT Detector dapp, I will be able to verify if they really owns their NFTs._ ")
              channel.send("> _There is absolutely NO payement or transaction to do._")
              channel.send("**You've finish my initialisation! Thank you for using NFT detector !** :thumbsup:")
              return
              })
            
            //Start and use the Moralis function
            const startingMoralis = iUseMoralis(); 
            });
        })
    })
  }
}