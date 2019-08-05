var cron = require('node-cron');
module.exports = (bot, firebase) => {
    cron.schedule('1 6 * * 1-6', () => {
        hojeEDiaDiario( bot, firebase )
    });
}

async function hojeEDiaDiario(bot, firebase){
    const chats = await firebase.getChatsPrivate()
    console.warn(chats)
    chats.forEach(chat => {
        bot.sendMessage(chat.id, 'BOM DIA CLÃ!!!!')
    });
}