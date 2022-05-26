module.exports = {
  category: 'testing',
  description: 'Replies with pong',
  slash: 'both', 
  testOnly: true,
  callback: ({message, interaction }) => {
    console.log('ping pong command starting...')

    //The reply
    const reply = 'Pong!'

    // legacy command ??
    if (message) {
      message.reply({
        content: reply
      })
      return
    }

    // /ping command
    interaction.reply({
      content: reply
    })

    // !ping command
    return {
      content: reply
    }
    
  },
  
}