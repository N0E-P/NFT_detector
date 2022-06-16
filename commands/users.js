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
            console.log(allMembers) //TO DELETE


            //get the number of members
            var memberNumber = guild.memberCount
            console.log('nombre ' + memberNumber) // TO DELETE


            //loop to verify all the server members
            var i = 0
            while (i < memberNumber) {
                i++;
                var userName = await findNextMember(allMembers)
                console.log(i) // TO DELETE
                //console.log("Checking the member " + userName)
                //await checkAMember(userName)
            }


            console.log("The roles have been check for every members in the server");
            return
        }


        async function findNextMember(allMembers) {
            // TO CREATE : Faire par numéro, car a chaque fois que l'on utilise cette fonction, c'est pour le membre suivant de la boucle while
            //D'ailleurs, cette fonction peut etre déplacée directement dans la boucle si nécessaire


            var userName = "";
            return userName
        }


        addRoles(client, message) //start the script
    }
}