const TelegramBot = require( `node-telegram-bot-api` )
require('dotenv').config()

const bot = new TelegramBot( process.env.BOT_TOKEN, { polling: true } )

function retiraAcentos(str) 
{
    com_acento = "ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖØÙÚÛÜÝŔÞßàáâãäåæçèéêëìíîïðñòóôõöøùúûüýþÿŕ";
    sem_acento = "AAAAAAACEEEEIIIIDNOOOOOOUUUUYRsBaaaaaaaceeeeiiiionoooooouuuuybyr";
    novastr="";
    for(i=0; i<str.length; i++) {
        troca=false;
        for (a=0; a<com_acento.length; a++) {
            if (str.substr(i,1)==com_acento.substr(a,1)) {
                novastr+=sem_acento.substr(a,1);
                troca=true;
                break;
            }
        }
        if (troca==false) {
            novastr+=str.substr(i,1);
        }
    }
    return novastr;
}   

const msg150PorCento = (chatId) => {
    const imageUrl = './res/images/cocaina.jpg'
    bot.sendPhoto(chatId, imageUrl)
    setTimeout(() => bot.sendMessage(chatId, 'Mestreeeeeeeeeee, hoje é         diaaaaaa!'), 3000)
    setTimeout(() => bot.sendMessage(chatId, '150%%%%%%'), 5000)
}
const msgDuasHoje = (chatId) => {
    bot.sendMessage(chatId, 'mestre, tu tá ficando é doido é? hoje não')
    setTimeout(() => bot.sendMessage(chatId, 'mestre, quer saber? Só se vive uma vez!'), 20000)
}

bot.on('message', (msg) => {
    const chatId = msg.chat.id;
    const text =  retiraAcentos(msg.text).toLowerCase()
    if(text.search('duas') != -1 && text.search('hoje') != -1 ){
        msgDuasHoje(chatId)
    }else{
        msg150PorCento(chatId)
    }
})