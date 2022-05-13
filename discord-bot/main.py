import discord
import os
from keep_alive import keep_alive
from replit import db


# Connect the discord bot and know who is joining the server
intents = discord.Intents.default()
intents.members = True
client = discord.Client(intents=intents)


# Connect the discord bot
@client.event
async def on_ready():
    print("We have logged in as {0.user}".format(client))


# Send the dapp link to the users when they write "$NFT"
@client.event
async def on_message(message):
  if message.author == client.user:
    return
  msg = message.content
  if msg.startswith("$NFT"):
    await message.channel.send("Here is the link to verify your NFT: http://localhost:3000/")


# Send a DM with the Dapp link when someone join the server
@client.event
async def on_member_join(member):
  await member.send(f'Hey {member.name}! If you want to verify your NFT to get a special role on your new discord server, click this link and follow the quick steps: http://localhost:3000/')


#let the server online by using the keep_alive script
keep_alive()


# Take the token to have authorization to act as the Discord bot (It has to stay at the end of the script.)
token = os.environ['TOKEN']
client.run(token)