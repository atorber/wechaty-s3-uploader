import onMessage from './handlers/on-message.js'

function WechatyS3Plugin() {
  return function (bot) {
    bot.on('message', onMessage)
  }
}

export { WechatyS3Plugin }

export default WechatyS3Plugin
