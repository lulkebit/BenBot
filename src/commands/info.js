const { SlashCommandBuilder } = require('@discordjs/builders')
const { MessageEmbed } = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('info')
        .setDescription('Show information about this server or a user')
        .addSubcommand(subCommand=> subCommand.setName("server").setDescription("Show information about this server"))
        .addSubcommand(subCommand => subCommand.setName("user").setDescription("Show information about a user")
        .addUserOption(option => option.setName("member").setDescription("The member").setRequired(true))),
    async execute(interaction) {
        switch (interaction.options.getSubcommand()) {
            case "server": {
                interaction.reply({embeds: [
                    new MessageEmbed()
                    .setColor('GREEN')
	                .setTitle(`Information for the Server ${interaction.guild.name}`)
                    .setURL('https://discord.gg/BenBonk')
	                .setAuthor(`Requested by ${interaction.member.user.tag}`, interaction.member.user.avatarURL())
	                .setDescription(`Owner: <@254644959993397248>`)
	                .setThumbnail('https://cdn.discordapp.com/icons/703221728918372443/a_4e2db77cc0de825e2299dc7df945225f.png?size=96')
	                .addFields(
                        {
                            name: "Member Count",
                            value: `${interaction.guild.memberCount}`,
                            inline: false
                        },
                        {
                            name: 'AFK Timeout',
                            value: `${interaction.guild.afkTimeout / 60} minutes`,
                            inline: false
                        },
                        {
                            name: "Channels",
                            value: `${interaction.guild.channels.cache.size} Channels`,
                            inline: false
                        },
                        {
                            name: "Created",
                            value: `<t:${Math.round(interaction.guild.createdTimestamp/1000)}>`,
                            inline: false
                        }
                    )
                    .setTimestamp()
                    .setFooter('Bot by Iuke#4681', 'https://cdn.discordapp.com/emojis/912052946592739408.png?size=96')
                ]})
                break
            }

            case "user": {
                const member = interaction.options.getMember("member")
                interaction.reply({embeds: [
                    new MessageEmbed()
                    .setColor('GREEN')
	                .setTitle(`Information for ${member.user.tag}`)
	                .setAuthor(`Requested by ${interaction.member.user.tag}`, interaction.member.user.avatarURL())
	                .setThumbnail(member.user.avatarURL({dynamic: true}))
	                .addFields(
                        {
                            name: "Server joined",
                            value: `<t:${Math.round(member.joinedTimestamp/1000)}>`,
                            inline: true
                        },
                        {
                            name: "Roles",
                            value: `${member.roles.cache.map(r => `${r}`).join(' | ')}`,
                            inline: true
                        },
                        {
                            name: "ID",
                            value: `${member.id}`,
                            inline: true
                        },
                        {
                            name: "Account created",
                            value: `<t:${Math.round(member.user.createdTimestamp/1000)}>`,
                            inline: true
                        }
                    )
                    .setTimestamp()
                    .setFooter('Bot by Iuke#4681', 'https://cdn.discordapp.com/emojis/912052946592739408.png?size=96')
                ]})
                break
            }
        }
    }
}