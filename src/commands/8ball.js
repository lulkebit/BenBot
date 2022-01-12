const { SlashCommandBuilder, inlineCode } = require('@discordjs/builders')
const { MessageEmbed } = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder()
        .setName("8ball")
        .setDescription("Ask the magic miracle for help.")
        .addSubcommand(subCommand => subCommand.setName("ask").setDescription("Ask a question and get a reply, but be weary of insulting replies.")
            .addStringOption(option => option.setName("question").setDescription("The question").setRequired(true)))
        .addSubcommand(subCommand => subCommand.setName("pp-size").setDescription("Get the size of... well.. you get it."))
        .addSubcommand(subCommand => subCommand.setName("coin-flip").setDescription("Get help from the 8 Ball Magic overlords!"))
        .addSubcommand(subCommand => subCommand.setName("roll-dice").setDescription("Roll a six-sided die and get a response."))
        .addSubcommand(subCommand => subCommand.setName("insult").setDescription("Feeling like your ego is a bit too big? Here, take an insult!")),
    async execute(interaction) {
        switch (interaction.options.getSubcommand()) {
            case "ask": {
                const question = interaction.options.getString("question")
                const answers = [
                    "I honestly couldn't care less.", 
                    "Good question! Make a better one.",
                    "ERROR: Question not found.",
                    "Make anodah one.",
                    "You call that a question? < THIS is a question.",
                    "QUESTION ME YOU FILTHY ANIMAL",
                    "Great question! Do it again.",
                    "This ain't no question mate.",
                    "Ok, now ask me a real question.",
                    "Next time try an actual question.",
                    "What do you and a banana have in common? Both can't ask questions.",
                    "English modahfuckah, do you speak it?",
                    "NEXT QUESTION!",
                    "Ask that fucker Bixby. You know, Siri's cousin twice removed.",
                    "You should ask that bitch Alexa.",
                    "Haven't you been in school?",
                    "Try a non-stupid question.",
                    "yes",
                    "no",
                    "definitely",
                    "probably not",
                    "How do you know about it?",
                    "Ask later when no children are listening",
                    "Who told you that?"
                ]
                interaction.reply({embeds: [
                    new MessageEmbed()
                    .setColor('GREEN')
	                .setTitle('"' + `${question}` + '"')
	                .setAuthor(`Requested by ${interaction.member.user.tag}`, interaction.member.user.avatarURL())
	                .setDescription(inlineCode(`${answers[Math.floor(Math.random() * answers.length)]}`))
	                .setThumbnail('https://images-ext-1.discordapp.net/external/F3wT0ODh1hfdnZqnk0vzT5Seg3wIr551w0iuWvfGeoM/https/i.imgur.com/nXanD2e.png')
                    .setTimestamp()
                    .setFooter('Bot by Iuke#4681', 'https://cdn.discordapp.com/emojis/912052946592739408.png?size=96')
                ]})
                break
            }

            case "pp-size": {
                const answers = [
                    "8D", 
                    "8=D",
                    "8==D",
                    "8===D",
                    "8====D",
                    "8=====D",
                    "8======D",
                    "8=======D",
                    "8========D",
                    "8=========D",
                    "8==========D",
                    "8===========D",
                    "8============D",
                    "8=============D",
                    "8==============D",
                    "8===============D",
                    "8================D",
                    "8=================D",
                    "8==================D",
                    "8===================D"
                ]
                interaction.reply({embeds: [
                    new MessageEmbed()
                    .setColor('GREEN')
	                .setTitle('So, you want to know your PP size?')
	                .setAuthor(`Requested by ${interaction.member.user.tag}`, interaction.member.user.avatarURL())
	                .setDescription(inlineCode(`${answers[Math.floor(Math.random() * answers.length)]}`))
                    .setTimestamp()
                    .setFooter('Bot by Iuke#4681', 'https://cdn.discordapp.com/emojis/912052946592739408.png?size=96')
                ]})
                break
            }

            case "coin-flip": {
                const answers = [
                    "https://i.imgur.com/iTGwUPN.png", 
                    "https://i.imgur.com/i8VgR2K.png"
                ]
                interaction.reply({embeds: [
                    new MessageEmbed()
                    .setColor('GREEN')
	                .setTitle('Flipped Coin! :coin:')
	                .setAuthor(`Requested by ${interaction.member.user.tag}`, interaction.member.user.avatarURL())
	                .setImage(answers[Math.floor(Math.random() * answers.length)])
                    .setTimestamp()
                    .setFooter('Bot by Iuke#4681', 'https://cdn.discordapp.com/emojis/912052946592739408.png?size=96')
                ]})
                break
            }

            case "roll-dice": {
                const answers = [
                    "1", 
                    "2",
                    "3",
                    "4",
                    "5",
                    "6"
                ]
                interaction.reply({embeds: [
                    new MessageEmbed()
                    .setColor('GREEN')
	                .setTitle('Rolled Dice! :game_die:')
	                .setAuthor(`Requested by ${interaction.member.user.tag}`, interaction.member.user.avatarURL())
	                .setDescription(inlineCode(`You have rolled a ${answers[Math.floor(Math.random() * answers.length)]}`))
                    .setTimestamp()
                    .setFooter('Bot by Iuke#4681', 'https://cdn.discordapp.com/emojis/912052946592739408.png?size=96')
                ]})
                break
            }

            case "insult": {
                const answers = [
                    "You're as ugly as a salad!",
                    "It looks like your face caught on fire and someone tried to put it out with a fork.",
                    "Please, I could remove 90% of your 'beauty' with a tissue.",
                    "Go and hide under something old!",
                    "Your family tree is a cactus, because everybody on it is a prick.",
                    "You Sir are an insult upon insults of a booble on an assortment.",
                    "You're so ugly Hello Kitty said goodbye to you.",
                    "I hear when you were a child your mother wanted to hire somebody to take care of you, but the mafia wanted too much.",
                    "Some cause happiness wherever they go; others, whenever they go.",
                    "You are so ugly that when your mama dropped you off at school she got a fine for littering.",
                    "You're a failed abortion whose birth certificate is an apology from the condom factory.",
                    "I would ask how old you are, but I know you can't count that high.",
                    "If you were twice as smart, you'd still be stupid.",
                    "When you were born, the police arrested your dad, the doctor slapped your mom, animal control euthanized your brother, and A&E made a documentary that saved your life.",
                    "You're so stupid you got fired from the M&M factory for throwing out all the Ws.",
                    "Shut up, you'll never be the man your mother is."
                ]
                interaction.reply({embeds: [
                    new MessageEmbed()
                    .setColor('GREEN')
	                .setTitle('So, you want to be insulted, eh?')
	                .setAuthor(`Requested by ${interaction.member.user.tag}`, interaction.member.user.avatarURL())
	                .setDescription(`${answers[Math.floor(Math.random() * answers.length)]}`)
                    .setTimestamp()
                    .setFooter('Bot by Iuke#4681', 'https://cdn.discordapp.com/emojis/912052946592739408.png?size=96')
                ]})
                break
            }
        }
    }
}