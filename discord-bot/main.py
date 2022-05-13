# to start the bot, run this in the terminal : "pip install discord.py" or "pip install discord-py-slash-command"

import discord
import os
from keep_alive import keep_alive


# Connect the discord bot and know who is joining the server
intents = discord.Intents.default()
intents.members = True
client = discord.Client(intents=intents)


#############################################


#function to save the address in the database
def saveAddress(enteredAddress):
  pass #WRITE HERE HOW TO SAVE THE ADDRESS


# Send the dapp link to the users when they write specific words
@client.event
async def on_message(message):
  if message.author == client.user:
    return


  #Présentation du bot lorsque l'on écrit $NFT
  if message.content.startswith("$NFT"):
    await message.channel.send("**Hey!** :sunglasses:") 
    await message.channel.send("To initialize me, please write the command _$collection_, and paste the address of your _NFT collection_.")
    await message.channel.send("```Example : $collection 0xb47e3cd837dDF8e4c57F05d70Ab865de6e193BBB```")


  #Sauvegarde de l'addresse et messages quand on écrit $collection
  if message.content.startswith("$collection"):
    enteredAddress = message.content.split("$collection ",1)[1]
    saveAddress(enteredAddress)
    await message.channel.send("**Your collection was added successfuly!** :partying_face:")
    await message.channel.send('You have only one thing to do:')
    await message.channel.send('> Please create a role named "NFT member" to make NFT owners recognisable, and to let them access special channels.')


# Send a DM with the Dapp link when someone join the server
@client.event
async def on_member_join(member):
  await member.send(f'**Hey {member.name}!** :grin:')
  await member.send('If you want to verify your NFT to get a special role on your new discord server, click this link and follow the quick steps: http://localhost:3000/')


#############################################


# Connect the discord bot
@client.event
async def on_ready():
  print("We have logged in as {0.user}".format(client))


#let the server online by using the keep_alive script
keep_alive()


# Take the token to have authorization to act as the Discord bot (It has to stay at the end of the script.)
token = os.environ['TOKEN']
client.run(token)