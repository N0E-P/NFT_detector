const DiscordJS = require('discord.js');


module.exports = {
  category: 'NFT detector commands',
  description: 'initialise the bot',
  permissions: ['ADMINISTRATOR'],
  guildOnly: true,
  callback: () => {
    console.log('NFT function starting...')
    /*
    add message in the parenthèses après callback:

    const questions = [
      'What is your name?',
      'How old are you?',
      'What country are you from?'
    ]
    let counter = 0

    const filter = m => m.author.id === message.author.id

    const collector = new DiscordJS.MessageCollector(message.channel, filter, {
      max: question.length,
      time: 1000 * 60 // 60s
    })

    message.channel.send(questions[counter++])
    collector.on('collect', m => {
      if (counter < question.length) {
        m.channel.send(question[counter++])
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