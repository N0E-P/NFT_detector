//partir d'un pseudo, ajouter ou enlever un role

module.exports = {
    category: 'NFT Detector commands',
    description: 'initialise the bot',
    callback: ({ message }) => {






        //Besoin d'y accéder je sais pas comment : ///////////////////////////
        const userId = "564395821236355072"






        //Code qui marche : ///////////////////////////


        //Avoir les bonnes variables :
        const roleName = "NFT Owner"
        const { guild } = message
        //console.log(guild)


        //find the role ID
        const role = guild.roles.cache.find((role) => {
            return role.name === roleName
        })
        if (!role) {
            console.log('There is no role with this name')
            return
        }
        //console.log("the role ID is: " + role) // TO DELETE


        //avoir toutes les infos d'un utilisateur a partir de son user ID
        const member = guild.members.cache.get(userId)
        //console.log(member)



        /* ADD A ROLE (si possede déjà le role, c'est X grave)
        member.roles.add(role)
        message.reply(`Chaussette have now the "${roleName}" role`)
        */


        //REMOVE A ROLE
        if (member.roles.cache.get(role.id)) {
            member.roles.remove(role)
            console.log('That user no longer have the role')
        } else {
            console.log('That user does not have the role')
        }


    }
}