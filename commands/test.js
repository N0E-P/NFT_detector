const { Moralis } = require('moralis/node')


module.exports = {
    category: 'NFT Detector commands',
    description: 'initialise the bot',
    permissions: ['ADMINISTRATOR'],
    guildOnly: true,
    callback: ({ message, channel }) => {
        console.log("test starting... ");


        //var blockchain = "eth";
        //var address = "0xb47e3cd837dDF8e4c57F05d70Ab865de6e193BBB"; // cryptopunks
        var blockchain = "rinkeby";
        var address = "0x7a3a8EAA2650aD46A61486D8581AecB74A453E8E"; // Kevin's holidays
        ///////////////////////////////////// DELETE EVERYTHING ABOVE ///////////////////////////////////////////////////


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


            //Get the list of all the users of the dapp with their discord names
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


            //Check if the username of the user exist on the database
            var isOnDatabase = await isUserNameOnDatabase(userName, lowerAllUsers);
            if (isOnDatabase == "yes") {


                //Get the address of the user
                var params = { userName }
                var userAddress = await Moralis.Cloud.run("getUserAddress", params);


                //Check if the user is an owner of the NFT
                var isOnCollection = await isUserAddressInCollection(userAddress, lowerAllOwners);
                if (isOnCollection == "yes") {
                    // TO ADD : add the role to the user (if he don't already get it)
                    console.log(userName + ' get the "NFT Owner" role');
                    return


                } else {
                    console.log(userName + " register on the dapp BUT isn't in the collection.");
                    // TO ADD : enlever le role de l'utilisateur sur discord (si il en a un)
                    return
                }


            } else {
                console.log(userName + " didn't register on the dapp.");
                // TO ADD : enlever le role de l'utilisateur sur discord (si il en a un)
                return
            }
        }


        async function findNextMember() {
            // TO CREATE : Faire par numéro, car a chaque fois que l'on utilise cette fonction, c'est pour le membre suivant de la boucle while
            //D'ailleurs, cette fonction peut etre déplacée directement dans la boucle si nécessaire


            var userName = "Ni4dWCvhIx7LSnlN1M62VhE0s" // TO MODIFY
            //var userName = "Skaskaa"
            return userName
        }


        async function isUserNameOnDatabase(userName, lowerAllUsers) {
            // Check if the discord member has register on the database by searching for his name in the the list of all the users
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
            //Check if the user is in the metadata of the NFT collection by looking for his address
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