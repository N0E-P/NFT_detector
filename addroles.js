const { Moralis } = require('moralis/node')

async function test(message) {
    //loop to restart the test every 5 min
    while (0 < 1) {


        console.log("starting while loooooop") // TO DELETE


        //Start Moralis
        const { Moralis } = require('moralis/node')
        const serverUrl = "https://zxhf5v44ppmy.usemoralis.com:2053/server";
        const appId = "FhT4qqcXkx6s4d6fBGWoLyEi10twqx3uarr8eLEP";
        Moralis.start({ serverUrl, appId });


        //Check if the admins enter the NFT collections infos with the !init command
        var query = new Moralis.Query("CollectionsAddresses");
        query.equalTo("Server", message.guild.id);
        const result = await query.find();
        if (JSON.stringify(result) !== "[]") {


            //Get the NFT collection infos
            var blockchain = result[0].get("Blockchain");
            var address = result[0].get("Address");


            console.log("starting set intervaaaallll") // TO DELETE


            //Repeat the addrole function every 60 minutes
            setInterval(addRoles, 60000 * 60, blockchain, address, message)
        }


        //wait 5 minutes before restarting the test function
        setTimeout(useless, 1000 * 60 * 5);
        function useless() {
            return
        }
    }
}



async function addRoles(blockchain, address, message) {
    //Get all server data
    const { guild } = message


    //Get the role ID and verify if the server has a role named NFT Owner
    const role = guild.roles.cache.find((role) => { return role.name === "NFT Owner" })
    if (!role) { return console.log('ERROR: There is no NFT Owner role on the server' + message.guild.name) }


    //Get the owners list with all the metadata
    const allOwners = await getAllOwners(blockchain, address);


    //Get the list of all the users of the dapp
    const allUsers = await Moralis.Cloud.run("getAllUsers");


    //Get the list of all the members IDs
    const allMembersData = await guild.members.fetch()
    const allMembersID = allMembersData.map(member => member.id);


    //loop to verify all the server members
    for (var currentMemberNumber = 0; currentMemberNumber < guild.memberCount; currentMemberNumber++) {


        //Get all the infos of the current member
        var memberInfos = guild.members.cache.get(allMembersID[currentMemberNumber])


        //Check this member
        await checkAMember(allOwners, allUsers, role, memberInfos)
    }


    //End of the script
    console.log("The roles have been check for every members in the server");
    return
}


async function getAllOwners(blockchain, address) {
    const options = { chain: blockchain, address: address };
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


    // Check if the discord member has register on the database
    const isOnDatabase = isMemberNameOnDatabase(memberName, allUsers);


    if (isOnDatabase == "yes") {
        //The member register on the dapp.


        //Get the address of the user
        const userAddress = await Moralis.Cloud.run("getUserAddress", params = { memberName });


        //Check if the user is an owner of the NFT
        const isOnCollection = isUserAddressInCollection(userAddress, allOwners);


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


function isMemberNameOnDatabase(memberName, allUsers) {
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


function isUserAddressInCollection(userAddress, allOwners) {
    //Check if the user is in the metadata of the NFT collection by looking for his address
    const lowerUserAddress = userAddress.toLowerCase()
    const wordFound = allOwners.indexOf(lowerUserAddress);
    if (wordFound > -1) {
        return "yes"
    } else {
        return
    }
}


module.exports = test