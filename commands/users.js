module.exports = {
    category: 'NFT Detector commands',
    description: 'initialise the bot',
    permissions: ['ADMINISTRATOR'],
    guildOnly: true,
    callback: ({ message, client }) => {
        console.log("testusers starting... ");
        /*
                //var user = allMembers.get("user.username");
                //var userName = user.get("username");
                var user = getValues(allMembers, "user")


                

                //var userName = await findNextMember(allMembers, currentNumber)

                //console.log("Checking the member " + userName)
                //await checkAMember(userName)



        //return an array of values that match on a certain key
        function getValues(obj, key) {
            var objects = [];
            for (var i in obj) {
                if (!obj.hasOwnProperty(i)) continue;
                if (typeof obj[i] == 'object') {
                    objects = objects.concat(getValues(obj[i], key));
                } else if (i == key) {
                    objects.push(obj[i]);
                }
            }
            return objects;
        }



'564395821236355072' => GuildMember { user: User { username: 'Chaussette',
'691279414796877834' => GuildMember { user: User { username: 'Noé Test',
'974205010504192032' => GuildMember { user: User { username: 'NFT detector',




                var results = [];
                var searchVal = "Chaussette";
                for (var i = 0; i < allMembers.length; i++) {
                    if (allMembers[i]["user"]["username"] == searchVal) {
                        results.push(obj.list[i]);
                    }
                }


                */
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


                var results = getCountryByCode(allMembers, 'Chaussette')


                console.log(results)
            }


            console.log("The roles have been check for every members in the server");
            return
        }


        function getCountryByCode(allMembers, username) {
            return allMembers.filter(
                function (allMembers) { return allMembers.user.username == username }
            );
        }


        addRoles(client, message) //start the script
    }
}