const { Moralis } = require('moralis/node')
//////////////////////////////////////////////////////////////////////////////////////////////

module.exports = {
    category: 'NFT Detector commands',
    description: 'initialise the bot',
    permissions: ['ADMINISTRATOR'],
    guildOnly: true,
    callback: ({ message, channel }) => {
        console.log("test starting... ");


        async function addRoles() {
            const serverUrl = "https://zxhf5v44ppmy.usemoralis.com:2053/server";
            const appId = "FhT4qqcXkx6s4d6fBGWoLyEi10twqx3uarr8eLEP";
            Moralis.start({ serverUrl, appId });


            //var listOfMembers // à mettre dans findnextmember. // Et a obtenir depuis le serveur.


            //TO MODIFY faire tourner en boucle tant autant de fois qu'il y a de nombre de membres 
            while (0 < 1) {
                var userName = await findNextMember()
                await checkAMember(userName)
            }
        }


        async function findNextMember() {
            var userName = "Skaskaka" // TO MODIFY
            return userName
        }


        async function checkAMember(userName) {
            console.log("Checking the member " + userName)

            var yesOrNo = await isMemberOnDatabase(userName);

            if (yesOrNo == "yes") {
                console.log("The user is on the database"); //TO DELETE
                var userAddress = await Moralis.Cloud.run("getUserAddress");
                //... function to verify if the address is on the collection

            } else {
                console.log(userName + "didn't register on the dapp.");
                return
            }
        }


        async function isMemberOnDatabase(userName) {
            //Get the list of all the users with their discord names
            var allUsers = await Moralis.Cloud.run("getAllUsers");


            //Everything is put in lower case, in case of a user putt his username without the correct upper or lowercases. But it can cause problems if 2 users have the same username but with different cases.
            var lowerUserName = userName.toLowerCase()
            var lowerAllUsers = allUsers.toLowerCase()


            //Watch if their is his username writen inside the list with everything
            var wordFound = lowerAllUsers.indexOf(lowerUserName);
            if (wordFound > -1) {
                return "yes"
            } else {
                return
            }
        }


        addRoles() //start the script
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