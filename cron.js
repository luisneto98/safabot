const messages = require('./messages');
const cron = require('node-cron');

module.exports = (bot, firebase) => {
    cron.schedule('30 6 * * 1-5', () => {
        hojeEDiaDiario(bot, firebase)
    }, {
            timezone: "America/Sao_Paulo"
    });
    cron.schedule('15 22 * * 1-5', () => {
        amanhaEDiaDiario(bot, firebase)
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
        naoBebam(bot, firebase)
    }, {
            timezone: "America/Sao_Paulo"
    });
}
async function enviarParaTodosTiposGrupos(functionMessage, bot, firebase){
    var chatsGroup = await firebase.getChatsGroup()
    chatsGroup.forEach(async (chat) => functionMessage(chat,bot));
    var chatsSuperGroup = await firebase.getChatsSuperGroup()
    chatsSuperGroup.forEach(async (chat) => functionMessage(chat,bot));
}
async function hojeEDiaDiario(bot, firebase) {
    enviarParaTodosTiposGrupos(messages.hojeEDia,bot,firebase);
}
async function amanhaEDiaDiario(bot, firebase) {
    enviarParaTodosTiposGrupos(messages.amanhaEDia,bot,firebase);
}
async function aiDentuDiario(bot, firebase) {
    enviarParaTodosTiposGrupos(messages.idDentu,bot,firebase);
}
async function duasHojeDiario(bot, firebase) {
    enviarParaTodosTiposGrupos(messages.duasHojeBora,bot,firebase);
}
async function naoBebam(bot, firebase) {
    enviarParaTodosTiposGrupos(messages.naoBebam,bot,firebase);
}