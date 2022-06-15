const { Moralis } = require('moralis/node')
//////////////////////////////////////////////////////////////////////////////////////////////

module.exports = {
    category: 'NFT Detector commands',
    description: 'initialise the bot',
    permissions: ['ADMINISTRATOR'],
    guildOnly: true,
    callback: ({ message, channel }) => {
        console.log("test starting... ");


        const serverUrl = "https://zxhf5v44ppmy.usemoralis.com:2053/server";
        const appId = "FhT4qqcXkx6s4d6fBGWoLyEi10twqx3uarr8eLEP";
        Moralis.start({ serverUrl, appId });


        async function usequery() {
            const hello = await Moralis.Cloud.run("hola"); //TO DELETE
            console.log(hello); //TO DELETE


            //Get the list of all the users with their discord names
            var allUsers = await Moralis.Cloud.run("getAllUsers");
            console.log(allUsers);

            //Find if a user is 
            //Everything is put in lower case in case of a user putting his username without the correct upper or lowercases.
            //But it can cause problems if 2 users have the same username but with different cases.
            var username = "Skaskaaa" // TO MODIFY
            var lowerUsername = username.toLowerCase()
            var lowerAllUsers = allUsers.toLowerCase()
            var wordFound = lowerAllUsers.indexOf(lowerUsername);
            if (wordFound > -1) {
                console.log("The specific word exists");
            } else {
                console.log("The specific word doesn't exists");
            }


        }
        usequery();
    }
}









/*
const query = new Moralis.Query("CollectionsAddresses");
    //query.startsWith("blockchain", "eth");
    const results = await query.find();
    console.log("results: " + results);
    console.log("results.length: " + results.length);
    return

//const Address = Moralis.Object.extend("CollectionsAddresses");



const users = Moralis.User.extend("_User");

//var discordUsername = "Giraphe#5480"

const query = new Moralis.Query(users);
//query.startsWith("username", discordUsername);
query.equalTo("username", "Giraphe#5480");

async function usequery() {
    const results = await query.find();
    console.log(results);
    console.log(results.length);
}
usequery();






// Do something with the returned Moralis.Object values
for (let i = 0; i < results.length; i++) {
  const object = results[i];
  alert(object.id + " - " + object.get("ownerName"));
}






const results = await query.find();

console.log("Successfully retrieved " + results.length + " monsters.");

// Do something with the returned Moralis.Object values

for (let i = 0; i < results.length; i++) {
    const object = results[i];
    console.log(object.id + " - " + object.get("ownerName"));
}
*/