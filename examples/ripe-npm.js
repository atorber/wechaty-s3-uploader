import { Wechaty, ScanStatus, log } from 'wechaty'

import qrcodeTerminal from 'qrcode-terminal'
// import 'dotenv/config.js'

import WechatyS3Plugin from 'wechaty-s3-link'

const bot = new Wechaty()

async function onMessage(msg) {
  log.info('StarterBot', msg.toString())
  // console.debug(msg)
}

bot
  .use(
    WechatyS3Plugin()
  )
  .on('message', onMessage)

bot.start().catch((e) => console.error(e))
