require('dotenv').config()
const ws = require('ws')

const log4js = require("log4js");
log4js.configure({
    pm2: true,
    appenders: {chat: {type: "file", filename: "chat.log"}},
    categories: {default: {appenders: ["chat"], level: "info"}}
});
const logger = log4js.getLogger("chat");
const PORT = process.env.SOCKET_PORT

const wsServer = new ws.Server({
    port: PORT || 6677,
}, () => console.log(`sockets started on port: ${PORT}`))

wsServer.on('connection', function connection(ws) {
    ws.on('message', function (message) {
        message = JSON.parse(message);
        switch (message.event) {
            case 'message':
                messageAll(message)
                console.log('Пользователь: ', message.username, '|| Сообщение: ', message.message)
                logger.info('Пользователь: ', message.username, '|| Сообщение: ', message.message);
                break;
            case 'connection':
                messageAll(message)
                console.log('Подключился пользователь: ', message.username)
                logger.info('Подключился пользователь: ', message.username);
                break;
        }
    })
})

function messageAll(message) {
    wsServer.clients.forEach(client => {
        client.send(JSON.stringify(message))
    })
}