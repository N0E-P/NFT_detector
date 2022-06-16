module.exports = {
    category: 'NFT Detector commands',
    description: 'initialise the bot',
    permissions: ['ADMINISTRATOR'],
    guildOnly: true,
    callback: ({ message, channel }) => {
        console.log("testusers starting... ");
        var server = message.guild.id;


        async function addRoles(message, channel, server) {


            var listOfMembers = await getServerMembers(message, channel, server)
            console.log("The list of members is: " + listOfMembers) //TO DELETE


            //TO MODIFY faire tourner en boucle tant autant de fois qu'il y a de nombre de membres 
            while (0 < 1) {
                var userName = await findNextMember(listOfMembers)
                console.log("Checking the member " + userName)
                //await checkAMember(userName)
            }


            console.log("The roles have been check for every members in the server");
            return
        }

        async function getServerMembers(message, channel, server) {
            var listOfMembers = ""
            var members = message.guild.members.cache.array()
        }


        async function findNextMember(listOfMembers) {
            // TO CREATE : Faire par numéro, car a chaque fois que l'on utilise cette fonction, c'est pour le membre suivant de la boucle while
            //D'ailleurs, cette fonction peut etre déplacée directement dans la boucle si nécessaire


            var userName = "";
            return userName
        }



        addRoles(message, channel, server) //start the script
    }
}