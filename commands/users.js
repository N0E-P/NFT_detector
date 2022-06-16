module.exports = {
    category: 'NFT Detector commands',
    description: 'initialise the bot',
    permissions: ['ADMINISTRATOR'],
    guildOnly: true,
    callback: ({ message, client }) => {
        console.log("testusers starting... ");

        ///////////////////////////////////// DELETE EVERYTHING ABOVE ///////////////////////////////////////////////////

        // add "client" in the callback params


        async function addRoles(client, message) {


            //get server members
            var server = message.guild.id;
            const guild = client.guilds.cache.get(server)
            var allMembers = await guild.members.fetch()
            //console.log(allMembers) //TO DELETE


            //get the number of members
            var memberNumber = guild.memberCount


            //loop to verify all the server members
            var currentNumber = 0
            while (currentNumber < memberNumber) {
                currentNumber++;

                var userName = allMembers.get("user");
                console.log(userName)

                //var userName = await findNextMember(allMembers, currentNumber)

                //console.log("Checking the member " + userName)
                //await checkAMember(userName)
            }


            console.log("The roles have been check for every members in the server");
            return
        }


        addRoles(client, message) //start the script
    }
}