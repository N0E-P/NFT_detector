import discord
import os
from dotenv import load_dotenv

# Use the .env file
load_dotenv()

# Connect the discord bot
client = discord.Client()

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

    # Send the Dapp Link
    if message.content.startswith("$NFT"):
        await message.channel.send("Here is the link to verify yout NFT:")
        await message.channel.send("http://localhost:3000/")


# Take the token to have authorization to act as the Discord bot (It has to stay at the end of the script.)
client.run(os.getenv("TOKEN"))
