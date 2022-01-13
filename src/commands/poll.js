const { SlashCommandBuilder } = require('@discordjs/builders')
const { MessageEmbed } = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder()
        .setName("poll")
        .setDescription("Create a quick poll.")
        .addStringOption(option => option.setName("question").setDescription("The question").setRequired(true)),
    async execute(interaction) {
        const question = interaction.options.getString("question")
        const message = await interaction.reply({embeds: [
            new MessageEmbed()
                .setColor('GREEN')
                .setTitle(`Discord Poll`)
                .setAuthor(`Requested by ${interaction.member.user.tag}`, interaction.member.user.avatarURL())
                .setDescription(question)
                .setThumbnail('https://pngimg.com/uploads/question_mark/question_mark_PNG126.png')
                .setTimestamp()
                .setFooter('Bot by Iuke#4681', 'https://cdn.discordapp.com/emojis/912052946592739408.png?size=96')
        ], fetchReply: true})
        
        await message.react('✔️');
        await message.react('❌');
    }
}