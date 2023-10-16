import dotenv from 'dotenv'
import {AttachmentBuilder, ChannelType, Client, GatewayIntentBits, Partials, REST, Routes} from 'discord.js'
import { CodeGPTPlus } from 'judini'

dotenv.config()

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.GuildIntegrations,
        GatewayIntentBits.DirectMessages,
        GatewayIntentBits.DirectMessageTyping,
        GatewayIntentBits.MessageContent
    ],
    partials: [Partials.Channel]
})

client.on('ready', () => {
    console.log('bot is online')
})

const CHANNELS = [process.env.DISCORD_CHANNEL_ID] // add your Channel IDs

client.on('messageCreate', async (message) => {
    if(message.author.bot) return
    if(message.content.startsWith("!")) return
    // if(message.author.id === '') return // to ignore some user
    if(!CHANNELS.includes(message.channelId) && !message.mentions.users.has(client.user.id)) return

    await message.channel.sendTyping()
    const sendTypingInterval = setInterval(() => {
        message.channel.sendTyping()
    }, 5000)

    // Replace with your own CODEGPT API Key
    const codegpt = new CodeGPTPlus(process.env.CODEGPT_API_KEY)

    // Define the message
    let conversation = []
    let prevMessages = await message.channel.messages.fetch({ limit : 4})
    prevMessages.reverse()

    prevMessages.forEach((msg) => {
        if(msg.author.bot && msg.author.id !== client.user.id) return 
        if(msg.content.startsWith("!")) return
        // if(msg.author.id === '') // to ignore some user in memory

        // assistant
        if(msg.author.id === client.user.id){
            conversation.push({
                role: 'assistant',
                content: msg.content
            })
            return
        }
        // user
        conversation.push({
            role: 'user',
            content: msg.content
        })
    });
    
    conversation.push()
    // Send the message and process the response
    const res = await codegpt.chatCompletion({
        messages: conversation,
        agentId: process.env.CODEGPT_AGENT_ID // your CODEGPT Agent ID
    }, (chunk) => {
        console.log(chunk) // show the streaming response
    })
    console.log({ res }) // show the final response

    clearInterval(sendTypingInterval)

    if(!res){
        message.reply('Ups! Agent Error')    
    }

    message.reply(res)
})

client.login(process.env.DISCORD_TOKEN)
