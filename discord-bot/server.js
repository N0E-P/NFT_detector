// This whole document is just to make the bot stay alive using uptimerobot.com
const express = require("express")

const server = express()

server.all("/", (req, res) => {
  res.send("Bot is running!")
})

function keepAlive() {
  server.listen(3000, () => {
    console.log("Server is alive.")
  }) 
}

module.exports = keepAlive