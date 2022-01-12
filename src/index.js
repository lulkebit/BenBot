require("dotenv").config()
const fs = require("fs")
const { Client, Collection, Intents } = require("discord.js")

const client = new Client({intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MEMBERS]})
client.commands = new Collection()
const commandFiles = fs.readdirSync("./src/commands").filter(file => file.endsWith(".js"))
const eventFiles = fs.readdirSync("./src/events").filter(file => file.endsWith(".js"))

commandFiles.forEach(commandFile => {
    const command = require(`./commands/${commandFile}`)
    client.commands.set(command.data.name, command)
})

eventFiles.forEach(eventFile => {
    const event = require(`./events/${eventFile}`)
    client.on(event.name, (...args) => event.execute(...args))
})

client.on("interactionCreate", async (interaction) => {
    if(!interaction.isCommand()) return

    const command = client.commands.get(interaction.commandName)

    if(command){
        try {
            await command.execute(interaction)
        } catch(error) {
            console.error(error)

            if(interaction.deferred || interaction.replied){
                interaction.editReply("An error occurred during execution! Please notify Iuke#4681")
            } else {
                interaction.reply("An error occurred during execution! Please notify Iuke#4681")
            }
        }
    }
})

client.login(process.env.TOKEN)