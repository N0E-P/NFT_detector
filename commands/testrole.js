//partir d'un pseudo, ajouter ou enlever un role

module.exports = {
    category: 'NFT Detector commands',
    description: 'testestest',
    callback: ({ message }) => {
        console.log("testrole starting...")


        //Besoin d'y accéder je sais pas comment : 
        const userId = "564395821236355072"


        //Avoir accès à toutes les données :
        const { guild } = message


        //Pas utile ici, mais utile plus tard
        const memberNumber = guild.memberCount
        console.log(memberNumber)


        //find the role ID
        const role = guild.roles.cache.find((role) => {
            return role.name === "NFT Owner"
        })
        if (!role) {
            console.log('ERROR: There is no NFT Owner role on this server')
            return
        }


        //avoir toutes les infos d'un utilisateur a partir de son user ID
        const member = guild.members.cache.get(userId)


        /* 
        //ADD A ROLE (si possede déjà le role, c'est X grave)
        member.roles.add(role)
        message.reply("That user have now the role")
        */


        /*
        //REMOVE A ROLE
        if (member.roles.cache.get(role.id)) {
            member.roles.remove(role)
            console.log('That user no longer have the role')
        } else {
            console.log('That user does not have the role')
        }
        */

    }
}