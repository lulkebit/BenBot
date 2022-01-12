const { SlashCommandBuilder } = require('@discordjs/builders')
const { MessageEmbed } = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder().setName("source").setDescription("Get the Github link of the bot"),
    async execute(interaction) {
        interaction.reply({embeds: [
            new MessageEmbed()
            .setColor('GREEN')
            .setAuthor(`Requested by ${interaction.member.user.tag}`, interaction.member.user.avatarURL())
            .setDescription(`https://github.com/lulkebit/BenBot`)
            .setTimestamp()
            .setFooter('Bot by Iuke#4681', 'https://cdn.discordapp.com/emojis/912052946592739408.png?size=96')
        ]})
    }
}