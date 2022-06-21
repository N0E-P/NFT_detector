module.exports = {
    category: 'NFT Detector commands',
    description: 'initialise the bot',
    callback: ({ message }) => {
        console.log("testnextuser starting... ");
        addRoles(message)
        async function addRoles(message) {
            const { guild } = message
            /////////////// DELETE EVERYTHING ABOVE ///////////////


            //Get the list of all the members IDs
            const allMembersData = await guild.members.fetch()
            const allMembersID = allMembersData.map(member => member.id);


            for (var currentMemberNumber = 0; currentMemberNumber < guild.memberCount; currentMemberNumber++) {


                //Get all the infos of the current member
                var memberInfos = guild.members.cache.get(allMembersID[currentMemberNumber])


                /////////////// DELETE EVERYTHING UNDER ///////////////
                console.log(memberInfos.user.username)
            }
            console.log("End.");
        }
    }
}