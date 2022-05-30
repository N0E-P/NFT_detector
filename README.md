<h1>Here is the link of the dapp repository: </h1> https://github.com/N0E-P/NFT_detector_dapp

<h1>How to use NFT detector:</h1>
1. Add the NFT Detector Bot to your discord server with this link:

_https://discord.com/api/oauth2/authorize?client_id=974205010504192032&permissions=8&scope=bot%20applications.commands_

2. Write ```!NFT``` on any channel.
   > You need to be an administrator to use it.


4. Paste the ETH address of your NFT collection on the channel.
   > _You can find it on opensea, or on the page of your NFT collection in the blockchain explorer._

5. Wait while the bot save your address on our database.
   > It can take up to 5 minutes.
7. If you receive a message starting by: ```Your NFT collection was added successfuly!```
   > It means that the initialisation succeded.

    But if you receive an error message, or nothing after 5 minutes:
   > It means that the initialisation failed. Verify your NFT address and restart the  ```!NFT``` command.

6. Share this link with the members of your server: _https://zxhf5v44ppmy.usemoralis.com/_
   > _By connecting their metamask to the NFT Detector Dapp, the bot will be able to verify if they got some NFTs from your collection or not. And by the same time, it will link their wallet to their discord username._
   >
   > _This service is free. There is absolutely NO payement or transaction to do on the Dapp._ 
   
7. You've finish the setup! The bot will automatically add roles to the discord members who owns NFTs.

   Now, feel free to create text and vocal channels only for members with the ```NFT owner``` role.

<h1>How to start the bot:</h1>
1. Go on replit.com and add this repo.

2. Paste theses 2 commands in the shell:
   
       npm install moralis

       npm init -y && npm i --save-dev node@16 && npm config set prefix=$(pwd)/node_modules/node && export PATH=$(pwd)/node_modules/node/bin:$PATH


4. Add a secret environment variable named "token" with the password of your discord bot, in replit.
   
6. Click the run button.

7. Then, if you've not done it yet, make sure this bot stay online by going on uptimerobot.com and by pasting the https address of the bot.

**Thank you for using NFT detector!** :grin::thumbsup:

```Created by N0E-P```
