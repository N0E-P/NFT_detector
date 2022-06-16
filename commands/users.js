module.exports = {
    category: 'NFT Detector commands',
    description: 'initialise the bot',
    permissions: ['ADMINISTRATOR'],
    guildOnly: true,
    callback: ({ message, channel, client }) => {
        console.log("testusers starting... ");

        var server = message.guild.id;
        console.log('server' + server)

        console.log('client' + client)

        const guild = client.guilds.cache.get(server)
        console.log('guild' + guild)

        const nombre = guild.memberCount
        console.log('nombre' + nombre)



        ///////////////////////////////////// DELETE EVERYTHING ABOVE ///////////////////////////////////////////////////






        async function addRoles(message, channel, server, client) {


            var listOfMembers = await getServerMembers(message, channel, server, client)
            console.log("The list of members is: " + listOfMembers) //TO DELETE


            //TO MODIFY faire tourner en boucle tant autant de fois qu'il y a de nombre de membres 
            while (0 < 1) {
                var userName = await findNextMember(listOfMembers)
                //console.log("Checking the member " + userName)
                //await checkAMember(userName)
            }


            console.log("The roles have been check for every members in the server");
            return
        }

        async function getServerMembers(message, channel, server, client) {
            //récupérer la guild
            const guild = client.guilds.cache.get(server)
            //console.log('client' = client)
            return client

            /*
            message.guild.members.fetch().then(fetchedMembers => {
                    const totalMembers = fetchedMembers.memberCount;
                    return totalMembers

                })


                
                
            //server.guild.members.forEach(member => console.log(member.user.username));


            //var listOfMembers = ""
            //var listOfMembers = message.guild.members.cache.array()


            //setInterval(function() {
            //    client.user.setActivity(`${client.users.cache.size} users`)
            //    }, 10000)


            // Get the target guild
            //const guild = client.guilds.resolve(server);

            // Fetch the members of the guild and log them
            guild.members.fetch()
                .then(console.log)
                .catch(console.error);
            
             //const listOfMembers = server.members.cache.map(member => member.id);
             //const listOfMembers = await server.members.fetch()
             var jsp = message.guild.members.fetch({ limit: 10 })
                 .then(members => {
                     mbr = members.map(member => member);
                     message.channel.send(mbr)
                 })
 
             //Picking first user:
 
             message.guild.members.fetch({ limit: 10 })
                 .then(members => {
                     mbr = members.map(member => member);
                     message.channel.send(mbr[1])
                 })
             */
        }


        async function findNextMember(listOfMembers) {
            // TO CREATE : Faire par numéro, car a chaque fois que l'on utilise cette fonction, c'est pour le membre suivant de la boucle while
            //D'ailleurs, cette fonction peut etre déplacée directement dans la boucle si nécessaire


            var userName = "";
            return userName
        }



        //addRoles(message, channel, server, client) //start the script
    }
}