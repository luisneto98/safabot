exports.msg150PorCento = (chatId, bot) => {
    const imageUrl = './res/images/cocaina.jpg'
    bot.sendPhoto(chatId, imageUrl)
    setTimeout(() => bot.sendMessage(chatId, 'hoje é         diaaaaaa!'), 3000)
    setTimeout(() => bot.sendMessage(chatId, '150%%%%%%'), 5000)
}
exports.msgDuasHoje = (chatId, bot) => {
    bot.sendMessage(chatId, 'tu tá ficando é doido é? hoje não')
    setTimeout(() => bot.sendMessage(chatId, 'quer saber? Só se vive uma vez!'), 20000)
}

exports.answAiDentu = (chatId,msgId, bot) => {
    bot.onReplyToMessage(chatId,msgId, () => bot.sendMessage(chatId, 'ai dentu'))
}