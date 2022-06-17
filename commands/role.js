
module.exports = {
    category: 'NFT Detector commands',
    description: 'initialise the bot',
    permissions: ['ADMINISTRATOR'],
    guildOnly: true,
    callback: ({ message, client }) => {
        console.log("role starting... ");
        console.log(message)

        var role = message.guild.roles.find(role => role.name === "NFT Owner");

        message.member.addRole(role);

    }
}