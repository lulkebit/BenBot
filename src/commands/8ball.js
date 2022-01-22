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
                    "Who told you that?",
                    "I guess so",
                    "Why would someone say yes?",
                    "Are you serious? YES!",
                    "Why would someone care?",
                    "What do you expect me to say?",
                    "I guess no",
                    "I would say yes",
                    "I would say no",
                    "I am not really sure",
                    "Why would anyone ask such a stupid question?",
                    "If you ask such a stupid question again I will ban you",
                    "It is certain",
                    "It is decidedly so",
                    "Without a doubt",
                    "Without a doubt",
                    "Signs point to yes",
                    "Not even close",
                    "Ben's mom told me yes",
                    "Better not tell you now",
                    "My sources say no",
                    "You want me to scream?",
                    "I will kill you all",
                    "No, they're off the wine",
                    "Tie me to the roof",
                    "You've Got To Be Kidding...",
                    "You Wish",
                    "Yeah Right",
                    "Yeah And I'm The Fucking Pope",
                    "Who Cares?",
                    "Yes... You Prick",
                    "What Do You Think?",
                    "Well Maybe",
                    "That's Ridiculous",
                    "Sure",
                    "Oh Please",
                    "All signs point to yes. But on second thought, go fuck yourself.",
                    "My sources say no. They also tell me they hate you and hope you burn in hell.",
                    "IDIOT WARNING!!! We got an idiot over here!",
                    "Just so you know, they're watching every question you make, every grammar mistake, every retarded question, as you keep trying to see what would I answer if you just didn't ask anything worthwhile.",
                    "Please step away from the computer and tell that to someone that gives a shit.",
                    "I only answer to proper grammar.",
                    "Oh what's that? I can't understand your horrible punctuation.",
                    "I really hope your grammar teacher isn't seeing this.",
                    "Fun fact: I was programmed to not answer your primitive word usage.",
                    "Did you know that 4/5 doctors recommend proper grammar? The last one is actually a dentist!",
                    "So is that the result of dropping school?",
                    "I apologize my good sir, but your language does not seem to suit the criteria required for I, the 8 Bot, to accordingly reward you with a proper response. I advise using proper punctuation in your request.",
                    "Bitch are you even trying to spell?",
                    "Spell with me; Q-U-E-S-T-I-O-N M-A-R-K.",
                    "I'll have you know that my creator works for Discord and your lack of basic grammar triggers me.",
                    "Watch your language, children are seeing this.",
                    "Roses are red, Violets are blue, You didn't ask me anything, So I shall not answer you.",
                    "Without a doubt.",
                    "It is certain.",
                    "It is decidedly so.",
                    "Yes, definitely.",
                    "You may rely on it.",
                    "As I see it, yes.",
                    "Most likely.",
                    "Outlook good.",
                    "Signs point to yes.",
                    "Ask again later.",
                    "Reply hazy try again.",
                    "Try again later.",
                    "Better not tell you now.",
                    "Cannot predict now.",
                    "Concentrate and ask again.",
                    "Don't count on it.",
                    "My reply is no.",
                    "My sources say no.",
                    "Outlook not so good.",
                    "Very doubtful.",
                    "Yes.",
                    "No.",
                    "Yep.",
                    "Nope.",
                    "y35.",
                    "n0.",
                    "Only the prophecy will tell.",
                    "Who cares? We all die in the end.",
                    "Isn't it obvious?",
                    "Obviously, yes.",
                    "Yes, duh?",
                    "I don't think so, no.",
                    "Who gives a fuck?",
                    "You wish.",
                    "Is this a joke?",
                    "Ask me if I care.",
                    "Fuck do I know, I'm just a magic ball.",
                    "No God, please, no.",
                    "Just google it.",
                    "Bitch, I don't know your life.",
                    "Google might have the answer.",
                    "Help! I'm trapped!",
                    "Perhaps.",
                    "Maybe, just maybe.",
                    "You bet!",
                    "Grow up and make your own decisions, idiot.",
                    "Trust me, you don't want to know.",
                    "No Ron.",
                    "Ask Michael.",
                    "Hell if I know.",
                    "Barely possible.",
                    "It's a secret to everybody.",
                    "It depends.",
                    "Don't take my word for it.",
                    "Yeah, right.",
                    "Sure, if you think so.",
                    "In your dreams.",
                    "Sounds good to me.",
                    "Not yet.",
                    "Probably.",
                    "Very likely.",
                    "Very unlikely.",
                    "Not advisable.",
                    "Give it time.",
                    "When the planets align.",
                    "You already know the answer to that.",
                    "Maybe, in a few weeks, if you're lucky.",
                    "Never in a million years, maybe in fewer.",
                    "It smells like it.",
                    "Possibly, but possibly it is impossible.",
                    "They didn't allow me to tell you.",
                    "No fucking way.",
                    "Oh hell no!",
                    "Kill them, kill all of them.",
                    "Anything is possible.",
                    "In theory, yes.",
                    "I don't even know what to answer you.",
                    "I don't know and I don't care.",
                    "The answer is C.",
                    "Ask me again tomorrow.",
                    "I strongly believe so.",
                    "It looks like it.",
                    "I wouldn't worry about it.",
                    "Go fish.",
                    "NEXT QUESTION!",
                    "yo that sounds lit fam",
                    "Don't let your dreams be dreams.",
                    "Follow your heart, I wouldn't trust your mind though.",
                    "Sure, why not?",
                    "Just ask yourself: \"Would John Cena do it?\"",
                    "JUST DO IT!",
                    "I might know the answer, but maybe a bribe can help me remember better...",
                    "It depends, does it give you EXP?",
                    "I rolled a dice to answer you, and it said the answer is C.",
                    "\"Anything is possible.\" Said the blind boy as it proceeded to walk into a pit.",
                    "42.",
                    "It ain't worth it, m8.",
                    "Would it make life better?",
                    "Why are we still here?",
                    "No! Think of the children!",
                    "please save me she's forcing me to lie",
                    "Short answer: Yes. Long answer: No.",
                    "It all depends if you have a good kda ratio.",
                    "I don't know, can a match box?",
                    "If Leo won the Oscar and we got Finding Nemo 2, It's probably possible.",
                    "What could possibly go wrong?",
                    "What's the worse that could happen?",
                    "Ah, I see you're an entity of culture as well.",
                    'Top 10 Idiots who have USED this feature',
                    'NEIN NEIN NEIN'
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