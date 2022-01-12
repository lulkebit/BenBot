const { GuildMember, MessageEmbed } = require("discord.js");

module.exports = {
    name: "guildMemberAdd",
    /**
     * @param {GuildMember} member
     */
    async execute(member){
        let role = member.guild.roles.cache.find(role => role.name === 'Member')
        member.roles.add(role)

        member.guild.channels.cache.get(process.env.WELCOME_MESSAGE_CHANNEL_ID).send({ 
            embeds: [
                new MessageEmbed()
                .setTitle("Welcome! :smiley:")
                .setDescription(`${member.toString()} has joined the server!\n
                                Thanks for joining. Head over to <#${process.env.RULE_CHANNEL_ID}> and read them carefully.`)
                .setThumbnail(member.user.displayAvatarURL())
                .setColor("GREEN")
            ]
        }) 
    }
}