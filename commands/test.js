const { Moralis } = require('moralis/node')
module.exports = {
    category: 'NFT Detector commands',
    description: 'initialise the bot',
    callback: ({ message }) => {
        console.log("test starting... ");


        //var blockchain = "eth";
        //var address = "0xb47e3cd837dDF8e4c57F05d70Ab865de6e193BBB"; // cryptopunks
        var blockchain = "rinkeby";
        var address = "0x7a3a8EAA2650aD46A61486D8581AecB74A453E8E"; // Kevin's holidays
        ///////////////////////////////////// DELETE EVERYTHING ABOVE ///////////////////////////////////////////////////



        async function addRoles(blockchain, address, message) {
            //Start Moralis
            const serverUrl = "https://zxhf5v44ppmy.usemoralis.com:2053/server";
            const appId = "FhT4qqcXkx6s4d6fBGWoLyEi10twqx3uarr8eLEP";
            Moralis.start({ serverUrl, appId });


            //Get all server data
            const { guild } = message


            //Get the role ID and verify if the server has a role named NFT Owner
            const role = guild.roles.cache.find((role) => { return role.name === "NFT Owner" })
            if (!role) { return console.log('ERROR: There is no NFT Owner role on this server') }


            //Get the owners list with all the metadata
            const allOwners = await getAllOwners(blockchain, address);


            //Get the list of all the users of the dapp
            const allUsers = await Moralis.Cloud.run("getAllUsers");


            //loop to verify all the server members
            for (var currentNumber = 0; currentNumber < guild.memberCount; currentNumber++) {


                // Get each member ID one after the other           /////////////////////////////////
                var memberId = "564395821236355072" // CHAUSSETTE ID


                //Get all the infos of the user just using his member ID
                var memberInfos = guild.members.cache.get(memberId)


                //Check this member
                await checkAMember(allOwners, allUsers, role, memberInfos)
            }


            //End of the script
            console.log("The roles have been check for every members in the server");
            return
        }


        async function getAllOwners(blockchain, address) {
            var options = { chain: blockchain, address: address };
            var objectAllOwners = await Moralis.Web3API.token.getNFTOwners(options);
            var stringAllOwners = ""
            while (objectAllOwners.next) {
                objectAllOwners = await objectAllOwners.next()
                stringAllOwners = stringAllOwners + JSON.stringify(objectAllOwners)
            }
            var allOwners = stringAllOwners.toLowerCase()
            return allOwners
        }


        async function checkAMember(allOwners, allUsers, role, memberInfos) {
            //Get the full memberName from memberinfos
            const memberName = (memberInfos.user.username + "#" + memberInfos.user.discriminator)


            //console message
            console.log("Checking the member " + memberName)


            // Check if the discord member has register on the database
            const isOnDatabase = await isMemberNameOnDatabase(memberName, allUsers);


            if (isOnDatabase == "yes") {
                //The member register on the dapp.


                //Get the address of the user
                const userAddress = await Moralis.Cloud.run("getUserAddress", params = { memberName });


                //Check if the user is an owner of the NFT
                const isOnCollection = await isUserAddressInCollection(userAddress, allOwners);


                if (isOnCollection == "yes") {
                    //The member register on the dapp and is an NFT owner. So he get the role
                    memberInfos.roles.add(role)
                    console.log(memberName + ' is an NFT Owner!');
                    return


                } else {
                    //The member register on the dapp BUT isn't in the collection. So we remove the role if he have it
                    if (memberInfos.roles.cache.get(role.id)) {
                        memberInfos.roles.remove(role)
                    }
                    console.log(memberName + " register on the dapp BUT isn't in the collection.");
                    return
                }


            } else {
                //The member didn't register on the app. So we remove the role if he have it
                if (memberInfos.roles.cache.get(role.id)) {
                    memberInfos.roles.remove(role)
                }
                console.log(memberName + " didn't register on the dapp.");
                return
            }
        }


        async function isMemberNameOnDatabase(memberName, allUsers) {
            //Search for the userName in the the list of all the users
            //WARNING : Everything is put in lower case, in case of a user putt his username without the correct upper or lowercases. But it can cause problems if 2 users have the same username but with different cases.
            const lowerMemberName = memberName.toLowerCase()
            const wordFound = allUsers.indexOf(lowerMemberName);
            if (wordFound > -1) {
                return "yes"
            } else {
                return
            }
        }


        async function isUserAddressInCollection(userAddress, allOwners) {
            //Check if the user is in the metadata of the NFT collection by looking for his address
            const lowerUserAddress = userAddress.toLowerCase()
            const wordFound = allOwners.indexOf(lowerUserAddress);
            if (wordFound > -1) {
                return "yes"
            } else {
                return
            }
        }


        addRoles(blockchain, address, message) //start the script
    }
}