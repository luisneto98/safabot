const TelegramBot = require( `node-telegram-bot-api` )
const util = require('./util.js') 
const messages = require('./messages.js')

require('dotenv').config()

const bot = new TelegramBot( process.env.BOT_TOKEN, { polling: true } )
const showUpdate = async () =>{
    console.log(await bot.getMe())
}

bot.on('message', (msg) => {
    const chatId = msg.chat.id;
    const text =  util.retiraAcentos(msg.text).toLowerCase()
    showUpdate()
    //messages.answAiDentu(chatId, msg.message_id, bot)
    if(text.search('duas') != -1 && text.search('hoje') != -1 ){
        messages.msgDuasHoje(chatId, bot)
    }else{
        messages.msg150PorCento(chatId, bot)
    }
})