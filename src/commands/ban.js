const { SlashCommandBuilder } = require('@discordjs/builders')
const { MessageEmbed } = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder().setName("ban").setDescription("Bans the user")
            .addUserOption(option => option.setName("member").setDescription("The user").setRequired(true))
            .addStringOption(option => option.setName("reason").setDescription("Ban reason").setRequired(true)),
    async execute(interaction) {
        if(!interaction.member.permissions.has("BAN_MEMBERS")) return interaction.reply({ content: "You do not have enough permissions to use this command.", ephemeral: true })

        const member = interaction.options.getMember("member")

        if(!member) return interaction.reply("😅 | Unable to get details related to given member.");

        const reason = interaction.options.getString("reason")

        if(!member.bannable || member.user.id === process.env.DISCORD_APPLICATION_ID) 
        return interaction.reply({ embeds: [
            new MessageEmbed()
                .setColor('GREEN')
                .setTitle(`😅 I am unable to ban ${member.user.tag}`)
                .setAuthor(`${interaction.member.user.tag}`, interaction.member.user.avatarURL())
                .setThumbnail(member.user.avatarURL())
                .setTimestamp()
                .setFooter('Bot by Iuke#4681', 'https://cdn.discordapp.com/emojis/912052946592739408.png?size=96')
        ]});

        if(interaction.member.roles.highest.position <= member.roles.highest.position) 
        return interaction.reply({ embeds: [
            new MessageEmbed()
                .setColor('GREEN')
                .setTitle(`😅 I am unable to ban ${member.user.tag}`)
                .setAuthor(`${interaction.member.user.tag}`, interaction.member.user.avatarURL())
                .setDescription('Given member have higher or equal rank as you so i can not ban them.')
                .setThumbnail(member.user.avatarURL())
                .setTimestamp()
                .setFooter('Bot by Iuke#4681', 'https://cdn.discordapp.com/emojis/912052946592739408.png?size=96')
        ]});
        
        const embed = new MessageEmbed()
        .setColor('GREEN')
        .setTitle(`The ban hammer has spoken 🔨`)
        .setAuthor(`${interaction.member.user.tag}`, interaction.member.user.avatarURL())
        .setDescription(`**${member.user.tag}** is banned from the server for \`${reason}\` by ${interaction.member.user.tag}`)
        .setThumbnail(member.user.avatarURL())
        .setTimestamp()
        .setFooter('Bot by Iuke#4681', 'https://cdn.discordapp.com/emojis/912052946592739408.png?size=96')

        await member.user.send(`You are banned from **\`${interaction.guild.name}\`** for \`${reason}\``).catch(err => {})
        member.ban({ reason })

        return interaction.reply({ embeds: [ embed ]})
    }
}