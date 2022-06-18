
module.exports = {
    category: 'NFT Detector commands',
    description: 'initialise the bot',
    permissions: ['ADMINISTRATOR'],
    guildOnly: true,
    callback: ({ message, client }) => {
        console.log("role starting... ");
        //console.log(message)

        aller(message, client)
        async function aller(message, client) {
            //get server members
            const server = message.guild.id;
            const data = client.guilds.cache.get(server)
            const membersData = await data.members.fetch()

            const member = await findAMemberData(membersData, 'Chaussette')
            console.log(member)
            //


            var role = member.guild.roles.cache.find(role => role.name === "NFT Owner");
            member.roles.add(role);

            /*
            const member = await findAMemberData(membersData, 'Chaussette')
            console.log(member)

            var role = function (member) {
                member.guild.roles.find(role => role.name === "NFT Owner");
            }

            function r(member, role) { member.roles.add(role); }
            r(member, role)
            */
        }
        //
        /*
        var role = function (message) {
            message.guild.roles.find(role => role.name === "NFT Owner");
        }

        function r(message) { message.member.add(role); }
        r(message)
        //var role = member.guild.roles.cache.find(role => role.name === "role name");
        //member.roles.add(role);
        */

        //Donne toutes les données d'un utilisateur précis quand on le recherche
        function findAMemberData(allMembers, username) {
            return allMembers.filter(
                function (allMembers) { return allMembers.user.username == username }
            );
        }

    }
}