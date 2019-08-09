exports.msg150PorCento = (chat, bot) => {
    const imageUrl = './res/images/cocaina.jpg'
    bot.sendPhoto(chat.id, imageUrl)
    setTimeout(() => bot.sendMessage(chat.id, 'hoje é dia!'), 3000)
    setTimeout(() => bot.sendMessage(chat.id, '150%%%%%%'), 5000)
}
exports.msgDuasHoje = (chat, bot) => {
    bot.sendMessage(chat.id, 'tu tá ficando é doido é? hoje não')
    setTimeout(() => bot.sendMessage(chat.id, 'quer saber? Só se vive uma vez!'), 20000)
}

exports.chance5PorCentoAiDentu = (chatId, bot) => {
    let max = 21
    let min = 1
    let resposta = Math.floor(Math.random() * (max - min) + min);
    if(resposta == 1)
        bot.sendMessage(chatId, 'ai dentu')
}

exports.duasHojeBora = async (chat, bot) => {
    await bot.sendMessage(chat.id, 'DUDU DUAS HOJE? DUAS HOJE, BORA?')
}

exports.idDentu = async (chat, bot) => {
    await bot.sendMessage(chat.id, 'AI DENTU!')
}
exports.naoBebam = async (chat, bot) => {
    await bot.sendMessage(chat.id, 'NÃO BEBAM!')
}
exports.hojeEDia = async (chat, bot) => {
    await bot.sendMessage(chat.id, 'BOM DIA CLÃ!!!!')
    await bot.sendMessage(chat.id, 'HOJE')
    await bot.sendMessage(chat.id, 'É')
    await bot.sendMessage(chat.id, 'DIA!!!!')
    await bot.sendMessage(chat.id, '150%%!')
    await bot.sendMessage(chat.id, 'JÁ TÔ NA BLACKSWAN')
}
exports.amanhaEDia = async (chat, bot) => {
    await bot.sendMessage(chat.id, 'BOA NOITE CLÃ!!!!')
    await bot.sendMessage(chat.id, 'AMANHÃ')
    await bot.sendMessage(chat.id, 'É')
    await bot.sendMessage(chat.id, 'DIA!!!!')
}