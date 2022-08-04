const { SlashCommandBuilder } = require('@discordjs/builders')
const { MessageEmbed } = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder().setName("palette").setDescription("For those who can't read the faq"),
    async execute(interaction) {
        interaction.reply({embeds: [
            new MessageEmbed()
            .setColor('GREEN')
            .setThumbnail('https://lospec.com/palettes/sweet-guarana/og-thumbnail.png')
            .setAuthor(`Requested by ${interaction.member.user.tag}`, interaction.member.user.avatarURL())
            .setDescription(`I guess there's another member who can't read the FAQ. https://lospec.com/palette-list/sweet-guarana`)
            .setTimestamp()
            .setFooter('Bot by Iuke#4681', 'https://cdn.discordapp.com/emojis/912052946592739408.png?size=96')
        ]})
    }
}