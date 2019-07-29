var cron = require('node-cron');
exports.cron = (bot) => {
    cron.schedule('* * * * *', () => {
        console.log('running a task every minute');
    });
}

function hojeEDiaDiario(bot){

}