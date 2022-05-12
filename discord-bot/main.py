import discord
import os
from keep_alive import keep_alive
from replit import db

# Connect the discord bot
client = discord.Client()



def update_address(enteredAddress):
  db["key"] = "value"



  
  if "collectionAddress" in db.keys():
    collectionAddress = db ["collectionAddress"]
    collectionAddress.append(enteredAddress)
    db["collectionAddress"] = collectionAddress
  else:
    db["collectionAddress"] = [enteredAddress]



def delete_address(index):
  collectionAddress = db ["collectionAddress"]
  if len(collectionAddress) > index:
    del collectionAddress[index]
    db["collectionAddress"] = collectionAddress


    
# Connect the discord bot
@client.event
async def on_ready():
    print("We have logged in as {0.user}".format(client))


  
# Send the dapp link to the users when they write "$NFT"
@client.event
async def on_message(message):
  # Make sure to not respond at his own messages
  if message.author == client.user:
    return

  
  msg = message.content

  
  # Send the Dapp Link
  if msg.startswith("$NFT"):
    await message.channel.send("Here is the link to verify your NFT: http://localhost:3000/")

  
  if msg.startswith("$addcollection"):
    enteredAddress = msg.split("$NFTcollection ",1)[1]
    update_address(enteredAddress)
    await message.channel.send("New collection address added.")

  
  if msg.startswith("$deletecollection"):
    collectionAddress = []
    if "collectionAddress" in db.keys():
      index = int(msg.split("$NFTcollectionDelete",1)[1])
      delete_address(index)
      collectionAddress = db["collectionAddress"]
    await message.channel.send(collectionAddress)



#let the server online by using the keep_alive script
keep_alive()



# Take the token to have authorization to act as the Discord bot (It has to stay at the end of the script.)
token = os.environ['TOKEN']
client.run(token)
