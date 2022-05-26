<h1>How to start the bot:</h1>
1. Go on replit.com and add this repo.

2. Make sure to get this line right in package.json:

        "main": "./discord-bot/index.js",

3. Paste theses two command in the shell:
4. 
       npm install wokcommands

       npm init -y && npm i --save-dev node@16 && npm config set prefix=$(pwd)/node_modules/node && export PATH=$(pwd)/node_modules/node/bin:$PATH

5. Click the run button.

6. Change the line in the package.json file into:
   
        "main": "./discord-bot/bot.js",

7. Click the run button.

8. Then, if you've never done yet, make sure this bot stay online by going on uptimerobot.com and by pasting the https address of the bot.
