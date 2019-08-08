var cron = require('node-cron');
module.exports = (bot, firebase) => {
    cron.schedule('30 6 * * 1-5', () => {
        hojeEDiaDiario(bot, firebase)
    }, {
            timezone: "America/Sao_Paulo"
        });
    cron.schedule('1 14 * * 1-5', () => {
        aiDentuDiario(bot, firebase)
    }, {
            timezone: "America/Sao_Paulo"
        });
    cron.schedule('1 15 * * 1-5', () => {
        aiDentuDiario(bot, firebase)
    }, {
            timezone: "America/Sao_Paulo"
        });
    cron.schedule('30 17 * * 1-5', () => {
        duasHojeDiario(bot, firebase)
    }, {
            timezone: "America/Sao_Paulo"
        });
    cron.schedule('30 8 * * 6', () => {
        nuncaMaisEuBebo(bot, firebase)
    }, {
            timezone: "America/Sao_Paulo"
        });
}

async function hojeEDiaDiario(bot, firebase) {
    const chats = await firebase.getChatsGroupAndSuperGroup()
    chats.forEach(async chat => {
        await bot.sendMessage(chat.id, 'BOM DIA CLÃ!!!!')
        await bot.sendMessage(chat.id, 'HOJE')
        await bot.sendMessage(chat.id, 'É')
        await bot.sendMessage(chat.id, 'DIA!!!!')
        await bot.sendMessage(chat.id, 'JÁ TÔ NA BLACKSWAN')
    });
}

async function aiDentuDiario(bot, firebase) {
    const chats = await firebase.getChatsGroupAndSuperGroup()
    chats.forEach(async chat => {
        await bot.sendMessage(chat.id, 'AI DENTU!')
    });
}
async function duasHojeDiario(bot, firebase) {
    const chats = await firebase.getChatsGroupAndSuperGroup()
    chats.forEach(async chat => {
        await bot.sendMessage(chat.id, 'DUDU DUAS HOJE? DUAS HOJE, BORA?')
    });
}
async function nuncaMaisEuBebo(bot, firebase) {
    const chats = await firebase.getChatsGroupAndSuperGroup()
    chats.forEach(async chat => {
        await bot.sendMessage(chat.id, 'NÃO BEBAM!')
    });
}