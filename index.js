const FirebaseUtil = require('./util/firebase')
const TelegramBot = require( `node-telegram-bot-api` )
const util = require('./util/formater') 
const messages = require('./messages')
const db = require('./config/database')
const cron = require('./cron')

require('dotenv').config()

const firebase = new FirebaseUtil(db)
const bot = new TelegramBot( process.env.BOT_TOKEN, { polling: true } )
cron(bot, firebase)

bot.on('message', (msg) => {
    const chatId = msg.chat.id;
    const text =  util.retiraAcentos(msg.text).toLowerCase()

    firebase.checkAndSaveNewChat(msg.chat)

    if(text.search('duas') != -1 && text.search('hoje') != -1 ){
        messages.msgDuasHoje(chatId, bot)
    }else{
        messages.chance5PorCentoAiDentu(chatId, bot)
    }
})