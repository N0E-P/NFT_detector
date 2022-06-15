const { Moralis } = require('moralis/node')
//////////////////////////////////////////////////////////////////////////////////////////////

module.exports = {
    category: 'NFT Detector commands',
    description: 'initialise the bot',
    permissions: ['ADMINISTRATOR'],
    guildOnly: true,
    callback: ({ message, channel }) => {
        console.log("test starting... ");

        //FOR TEST ONLY :
        var blockchain = "eth";
        var address = "0xb47e3cd837dDF8e4c57F05d70Ab865de6e193BBB"; // cryptopunks
        //var blockchain = "rinkeby";
        //var address = "0x7a3a8EAA2650aD46A61486D8581AecB74A453E8E"; // Kevin's holidays


        async function addRoles(blockchain, address) {
            //Start Moralis
            const serverUrl = "https://zxhf5v44ppmy.usemoralis.com:2053/server";
            const appId = "FhT4qqcXkx6s4d6fBGWoLyEi10twqx3uarr8eLEP";
            Moralis.start({ serverUrl, appId });


            //Get the owners list with all the metadata
            const options = { chain: blockchain, address: address };
            let objectOwners = await Moralis.Web3API.token.getNFTOwners(options);
            let allOwners = ""
            while (objectOwners.next) {
                objectOwners = await objectOwners.next()
                allOwners = allOwners + JSON.stringify(objectOwners)
            }
            var lowerAllOwners = allOwners.toLowerCase()


            //Get the list of all the users with their discord names
            var allUsers = await Moralis.Cloud.run("getAllUsers");
            var lowerAllUsers = allUsers.toLowerCase()




            //var listOfMembers // à mettre dans findnextmember. // Et a obtenir depuis le serveur.


            //TO MODIFY faire tourner en boucle tant autant de fois qu'il y a de nombre de membres 
            while (0 < 1) {
                await checkAMember(lowerAllOwners, lowerAllUsers)
            }
            console.log("The roles have been check for every members in the server");
        }




        async function checkAMember(lowerAllOwners, lowerAllUsers) {
            var userName = await findNextMember()
            console.log("Checking the member " + userName)

            var isOnDatabase = await isUserNameOnDatabase(userName, lowerAllUsers);
            if (isOnDatabase == "yes") {

                //var userAddress = await Moralis.Cloud.run("getUserAddress");
                var userAddress = "0x21a2e1Aa815EC9a088Cc18236631ca1FE7F357e4"//TO DELETE

                var isOnCollection = await isUserAddressInCollection(userAddress, lowerAllOwners);
                if (isOnCollection == "yes") {
                    // TO ADD : add the role to the user (if he don't already get it)
                    console.log(userName + 'get the "NFT Owner" role');
                    return

                } else {
                    console.log(userName + "register on the dapp BUT isn't in the collection.");
                    // TO ADD : enlever le role de l'utilisateur sur discord (si il en a un)
                    return
                }

            } else {
                console.log(userName + "didn't register on the dapp.");
                return
            }
        }


        async function findNextMember() {
            // TO CREATE : Faire par numéro, car a chaque fois que l'on utilise cette fonction, c'est pour le membre suivant de la boucle while
            //D'ailleurs, cette fonction peut etre déplacée directement dans la boucle si nécessaire
            var userName = "Ni4dWCvhIx7LSnlN1M62VhE0sM" // TO MODIFY
            return userName
        }


        async function isUserNameOnDatabase(userName, lowerAllUsers) {
            //WARNING : Everything is put in lower case, in case of a user putt his username without the correct upper or lowercases. But it can cause problems if 2 users have the same username but with different cases.
            var lowerUserName = userName.toLowerCase()
            var wordFound = lowerAllUsers.indexOf(lowerUserName);
            if (wordFound > -1) {
                return "yes"
            } else {
                return
            }
        }


        async function isUserAddressInCollection(userAddress, lowerAllOwners) {
            var lowerUserAddress = userAddress.toLowerCase()
            var wordFound = lowerAllOwners.indexOf(lowerUserAddress);
            if (wordFound > -1) {
                return "yes"
            } else {
                return
            }
        }


        addRoles(blockchain, address) //start the script
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