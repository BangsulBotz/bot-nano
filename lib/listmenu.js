const chalk = require('chalk')
const fs = require('fs')

global.allmenu = (prefix, hituet) => {
return`
ʜᴀɪ ᴋᴀᴋ ɪɴɪ ᴅɪᴀ ᴅᴀғᴛᴀʀ sᴇᴍᴜᴀ ᴍᴇɴᴜ ʏᴀɴɢ ᴀᴅᴀ ᴅɪ  𖣠 ${botname}
ᴊᴀɴɢᴀɴ ᴅɪ sᴘᴀᴍ ʙʀᴏ ☕
=========================
 ʀᴜɴ : ᴘʀɪᴠᴀᴛᴇ ʜᴏsᴛɪɴɢ
 ᴍᴏᴅᴇ:  𖣠 ${NanoBotz.public ? 'Publik' : 'Self'}
=========================

┈─────────────────
        ᴀ ʟ ʟ ᴍ ᴇ ɴ ᴜ 
┈─────────────────
┏『  𝐀𝐢 & 𝐒𝐄𝐀𝐑𝐂𝐇  』━◧

  𖣠 ${prefix}ai
  𖣠 ${prefix}bard
  𖣠 ${prefix}cai
  𖣠 ${prefix}cari musik
  𖣠 ${prefix}cuaca
  𖣠 ${prefix}film
  𖣠 ${prefix}gpt4
  𖣠 ${prefix}gpt4_2
  𖣠 ${prefix}happymod
  𖣠 ${prefix}indo-ai
  𖣠 ${prefix}lepton
  𖣠 ${prefix}mediafire
  𖣠 ${prefix}pin
  𖣠 ${prefix}play
  𖣠 ${prefix}realistic
  𖣠 ${prefix}ringtone
  𖣠 ${prefix}spotify
  𖣠 ${prefix}spotifysearch
  𖣠 ${prefix}tiktoksearch
  𖣠 ${prefix}ttsearch
  𖣠 ${prefix}terabox
  𖣠 ${prefix}xnxxsearch
  𖣠 ${prefix}yts
  𖣠 ${prefix}ytsearch
┗━━━━━━━━━━━━━━━━⊱


┏『  𝐀𝐧𝐨𝐧𝐲𝐦𝐨𝐮𝐬 𝐌𝐞𝐧𝐮 』━◧
  𖣠 ${prefix}confess
  𖣠 ${prefix}balesconfess
  𖣠 ${prefix}tolakconfess
  𖣠 ${prefix}stopconfess
 
  𖣠 ${prefix}menfess
  𖣠 ${prefix}balesmenfess
  𖣠 ${prefix}tolakmenfess
  𖣠 ${prefix}stopmenfess
┗━━━━━━━━━━━━━━━━⊱

┏『  𝐂𝐨𝐧𝐯𝐞𝐫𝐭 𝐌𝐞𝐧𝐮  』━◧
  𖣠 ${prefix}emojimix
  𖣠 ${prefix}fliptext
  𖣠 ${prefix}gtts
  𖣠 ${prefix}hapusbackground
  𖣠 ${prefix}hd
  𖣠 ${prefix}hdvid
  𖣠 ${prefix}hdvideo
  𖣠 ${prefix}hdvidio
  𖣠 ${prefix}nobg
  𖣠 ${prefix}qc
  𖣠 ${prefix}readviewonce
  𖣠 ${prefix}removebg
  𖣠 ${prefix}rvo
  𖣠 ${prefix}s
  𖣠 ${prefix}say
  𖣠 ${prefix}smeme
  𖣠 ${prefix}ss
  𖣠 ${prefix}ssweb
  𖣠 ${prefix}steal
  𖣠 ${prefix}sticker
  𖣠 ${prefix}stickerwm
  𖣠 ${prefix}stiker
  𖣠 ${prefix}swm
  𖣠 ${prefix}take
  𖣠 ${prefix}toimg
  𖣠 ${prefix}tomp4
  𖣠 ${prefix}toonce
  𖣠 ${prefix}toqr
  𖣠 ${prefix}tourl
  𖣠 ${prefix}tovideo
  𖣠 ${prefix}toviewonce
  𖣠 ${prefix}tts
  𖣠 ${prefix}wm
  𖣠 ${prefix}ytmp3
  𖣠 ${prefix}ytmp4
  𖣠 ${prefix}ytvideo
┗━━━━━━━━━━━━━━━━⊱

┏『 𝐃𝐨𝐰𝐧𝐥𝐨𝐚𝐝 𝐌𝐞𝐧𝐮 』━◧
  𖣠 ${prefix}tiktok
  𖣠 ${prefix}facebook
  𖣠 ${prefix}facebookvid
  𖣠 ${prefix}fb
  𖣠 ${prefix}gdrive
  𖣠 ${prefix}git 
  𖣠 ${prefix}gitclone
  𖣠 ${prefix}ig 
  𖣠 ${prefix}igimage 
  𖣠 ${prefix}igimg
  𖣠 ${prefix}igvid 
  𖣠 ${prefix}igvideo 
  𖣠 ${prefix}instagram
  𖣠 ${prefix}snackvideo 
  𖣠 ${prefix}spdl 
  𖣠 ${prefix}spotifydl 
  𖣠 ${prefix}tiktokaudio
  𖣠 ${prefix}tt
  𖣠 ${prefix}ttaudio
  𖣠 ${prefix}twitter 
  𖣠 ${prefix}twitter 
  𖣠 ${prefix}twitterdl
  𖣠 ${prefix}twitterdl
  𖣠 ${prefix}twitterdl 
┗━━━━━━━━━━━━━━━━⊱

┏━『  𝐄𝐏𝐡𝐨𝐭𝐨 𝟑𝟔𝟎 𝐌𝐞𝐧𝐮 』━◧
  𖣠 ${prefix}1917style
  𖣠 ${prefix}advancedglow
  𖣠 ${prefix}blackpinklogo
  𖣠 ${prefix}blackpinkstyle
  𖣠 ${prefix}cartoonstyle
  𖣠 ${prefix}deletingtext
  𖣠 ${prefix}effectclouds
  𖣠 ${prefix}flag3dtext
  𖣠 ${prefix}flagtext
  𖣠 ${prefix}freecreate
  𖣠 ${prefix}galaxystyle
  𖣠 ${prefix}galaxywallpaper
  𖣠 ${prefix}glitchtext
  𖣠 ${prefix}glowingtext
  𖣠 ${prefix}gradienttext
  𖣠 ${prefix}lighteffects
  𖣠 ${prefix}logomaker
  𖣠 ${prefix}luxurygold
  𖣠 ${prefix}makingneon
  𖣠 ${prefix}multicoloredneon
  𖣠 ${prefix}neonglitch
  𖣠 ${prefix}papercutstyle
  𖣠 ${prefix}pixelglitch
  𖣠 ${prefix}royaltext
  𖣠 ${prefix}sandsummer
  𖣠 ${prefix}summerbeach
  𖣠 ${prefix}typographytext
  𖣠 ${prefix}underwatertext
  𖣠 ${prefix}watercolortext
  𖣠 ${prefix}writetext
┗━━━━━━━━━━━━━━━━⊱

┏『  𝐅𝐮𝐧 𝐌𝐞𝐧𝐮  』━◧
  𖣠 ${prefix}apakah
  𖣠 ${prefix}bisakah
  𖣠 ${prefix}bodohcek
  𖣠 ${prefix}cantikcek
  𖣠 ${prefix}cekaku
  𖣠 ${prefix}cekkodam
  𖣠 ${prefix}couplepp
  𖣠 ${prefix}dare
  𖣠 ${prefix}gantengcek
  𖣠 ${prefix}gaycek
  𖣠 ${prefix}gilacek
  𖣠 ${prefix}goblokcek
  𖣠 ${prefix}imutcek
  𖣠 ${prefix}jadian 
  𖣠 ${prefix}jodoh
  𖣠 ${prefix}jodohku
  𖣠 ${prefix}jomblocek
  𖣠 ${prefix}kapan
  𖣠 ${prefix}kapankah
  𖣠 ${prefix}lesbicek
  𖣠 ${prefix}pintarcek
  𖣠 ${prefix}ppcouple
  𖣠 ${prefix}rate
  𖣠 ${prefix}truth
  𖣠 ${prefix}siapacantik
  𖣠 ${prefix}siapaganteng
  𖣠 ${prefix}siapajelek
┗━━━━━━━━━━━━━━━━⊱

┏『  𝐆𝐚𝐦𝐞 𝐌𝐞𝐧𝐮  』━◧
  𖣠 ${prefix}asahotak
  𖣠 ${prefix}caklontong
  𖣠 ${prefix}family100
  𖣠 ${prefix}matematika
  𖣠 ${prefix}math
  𖣠 ${prefix}siapaaku
  𖣠 ${prefix}susunkata
  𖣠 ${prefix}tebakbendera
  𖣠 ${prefix}tebakbendera2
  𖣠 ${prefix}tebakgambar
  𖣠 ${prefix}tebakkalimat
  𖣠 ${prefix}tebakkata
  𖣠 ${prefix}tebakkimia
  𖣠 ${prefix}tebaklagu
  𖣠 ${prefix}tebaktebakan
  𖣠 ${prefix}tekateki
┗━━━━━━━━━━━━━━━━⊱

┏『 𝐆𝐫𝐮𝐩 𝐌𝐞𝐧𝐮  』━◧
   𖣠 ${prefix}>l
  𖣠 ${prefix}add
  𖣠 ${prefix}aigrup 
  𖣠 ${prefix}antibadword
  𖣠 ${prefix}antilink
  𖣠 ${prefix}antilinkall
  𖣠 ${prefix}antilinkfacebook 
  𖣠 ${prefix}antilinkfb
  𖣠 ${prefix}antilinkgc
  𖣠 ${prefix}antilinkig 
  𖣠 ${prefix}antilinkinsta
  𖣠 ${prefix}antilinkinstagram 
  𖣠 ${prefix}antilinktelegram 
  𖣠 ${prefix}antilinktg
  𖣠 ${prefix}antilinktiktok 
  𖣠 ${prefix}antilinktt
  𖣠 ${prefix}antilinktwit
  𖣠 ${prefix}antilinktwitter 
  𖣠 ${prefix}antilinktwt 
  𖣠 ${prefix}antilinkyoutubech 
  𖣠 ${prefix}antilinkyoutubechannel 
  𖣠 ${prefix}antilinkyoutubevid 
  𖣠 ${prefix}antilinkyoutubevideo 
  𖣠 ${prefix}antilinkytch
  𖣠 ${prefix}antilinkytvid
  𖣠 ${prefix}antitoxic 
  𖣠 ${prefix}antivirtex
  𖣠 ${prefix}antivirus 
  𖣠 ${prefix}antiwame
  𖣠 ${prefix}autoaigc
  𖣠 ${prefix}autoaigrup
  𖣠 ${prefix}autosimi
  𖣠 ${prefix}checkvote
  𖣠 ${prefix}closetime
  𖣠 ${prefix}d
  𖣠 ${prefix}del
  𖣠 ${prefix}delete 
  𖣠 ${prefix}deleteppgc 
  𖣠 ${prefix}deleteppgroup 
  𖣠 ${prefix}deletevote
  𖣠 ${prefix}delppgc 
  𖣠 ${prefix}delppgroup 
  𖣠 ${prefix}delvote 
  𖣠 ${prefix}demote
  𖣠 ${prefix}downvote
  𖣠 ${prefix}gclink 
  𖣠 ${prefix}getpp
  𖣠 ${prefix}goodbye
  𖣠 ${prefix}grouplink
  𖣠 ${prefix}hapusvote
  𖣠 ${prefix}hidetag
  𖣠 ${prefix}ht
  𖣠 ${prefix}invite
  𖣠 ${prefix}join
  𖣠 ${prefix}kick
  𖣠 ${prefix}kickall
  𖣠 ${prefix}leavegc
  𖣠 ${prefix}left
  𖣠 ${prefix}linkgc 
  𖣠 ${prefix}linkgroup 
  𖣠 ${prefix}mute
  𖣠 ${prefix}onlygc
  𖣠 ${prefix}onlygroup
  𖣠 ${prefix}opentime
  𖣠 ${prefix}poll
  𖣠 ${prefix}promote
  𖣠 ${prefix}resetgclink
  𖣠 ${prefix}resetgrouplink
  𖣠 ${prefix}resetgruplink
  𖣠 ${prefix}resetlink
  𖣠 ${prefix}resetlinkgc
  𖣠 ${prefix}resetlinkgroup
  𖣠 ${prefix}resetlinkgrup
  𖣠 ${prefix}revoke
  𖣠 ${prefix}setdesc 
  𖣠 ${prefix}setdesk
  𖣠 ${prefix}setgcpp 
  𖣠 ${prefix}setgroupname
  𖣠 ${prefix}setgrouppp
  𖣠 ${prefix}setppgcpanjang
  𖣠 ${prefix}setppgroup 
  𖣠 ${prefix}setsubject
  𖣠 ${prefix}tagall
  𖣠 ${prefix}totag
  𖣠 ${prefix}upvote
  𖣠 ${prefix}vote
  𖣠 ${prefix}welcome
┗━━━━━━━━━━━━━━━━⊱

┏『  𝐎𝐭𝐡𝐞𝐫 𝐌𝐞𝐧𝐮  』━◧
  𖣠 ${prefix}delsampah
  𖣠 ${prefix}id
  𖣠 ${prefix}ping
  𖣠 ${prefix}runtime
  𖣠 ${prefix}totalfitur 
┗━━━━━━━━━━━━━━━━⊱

┏『  𝐎𝐰𝐧𝐞𝐫 𝐌𝐞𝐧𝐮  』━⊱

  𖣠 ${prefix}addcase 
  𖣠 ${prefix}getcase

  𖣠 ${prefix}addimage
  𖣠 ${prefix}delimage
  𖣠 ${prefix}listimage

  𖣠 ${prefix}addvideo
  𖣠 ${prefix}delvideo
  𖣠 ${prefix}listvideo

  𖣠 ${prefix}addvn
  𖣠 ${prefix}delvn
  𖣠 ${prefix}listvn

  𖣠 ${prefix}bcimage 
  𖣠 ${prefix}broadcastimage 
  𖣠 ${prefix}broadcastvid
  𖣠 ${prefix}broadcastvideo 

  𖣠 ${prefix}ban
  𖣠 ${prefix}banlist
  𖣠 ${prefix}unban

  𖣠 ${prefix}clearsession 
  𖣠 ${prefix}delsesi 
  𖣠 ${prefix}getsession

  𖣠 ${prefix}addowner
  𖣠 ${prefix}delowner

  𖣠 ${prefix}delprem
  𖣠 ${prefix}listprem
  𖣠 ${prefix}addprem

  𖣠 ${prefix}creategc 
  𖣠 ${prefix}creategroup
  𖣠 ${prefix}listgc

  𖣠 ${prefix}delppbot
  𖣠 ${prefix}setbotbio
  𖣠 ${prefix}setbotname
  𖣠 ${prefix}setexif 
  𖣠 ${prefix}setppbot 
  𖣠 ${prefix}setpppanjang

  𖣠 ${prefix}clearall 
  𖣠 ${prefix}listpremium 
  𖣠 ${prefix}myip 
  𖣠 ${prefix}listpc
  𖣠 ${prefix}pinchat
  𖣠 ${prefix}report
  𖣠 ${prefix}reportbug
  𖣠 ${prefix}request 
  𖣠 ${prefix}restart
  𖣠 ${prefix}unpinchat
┗━━━━━━━━━━━━━━━━⊱

┏『  𝐐𝐮𝐨𝐭𝐞𝐬 𝐌𝐞𝐧𝐮  』━◧
  𖣠 ${prefix}quotesbacot
  𖣠 ${prefix}quotesbijak
  𖣠 ${prefix}quotesbucin
  𖣠 ${prefix}quotesgalau
  𖣠 ${prefix}quotesgombal
  𖣠 ${prefix}quoteshacker
  𖣠 ${prefix}quotesmotivasi 
┗━━━━━━━━━━━━━━━━⊱

┏『  𝐑𝐚𝐧𝐝𝐨𝐦 𝐕𝐢𝐝𝐞𝐨  』━◧
  𖣠 ${prefix}tiktokbocil
  𖣠 ${prefix}tiktokghea
  𖣠 ${prefix}tiktokkayes
  𖣠 ${prefix}tiktoknotnot
  𖣠 ${prefix}tiktoknukthy
  𖣠 ${prefix}tiktokpanrika
  𖣠 ${prefix}tiktoksantuy
  𖣠 ${prefix}tiktokgirl
┗━━━━━━━━━━━━━━━━⊱

┏『  𝐑𝐚𝐧𝐝𝐨𝐦 𝐏𝐡𝐨𝐭𝐨  』━◧
  𖣠 ${prefix}8ballpool
  𖣠 ${prefix}aesthetic
  𖣠 ${prefix}antiwork
  𖣠 ${prefix}art
  𖣠 ${prefix}bike
  𖣠 ${prefix}blackpink
  𖣠 ${prefix}boneka
  𖣠 ${prefix}bts
  𖣠 ${prefix}car
  𖣠 ${prefix}cartoon
  𖣠 ${prefix}cat
  𖣠 ${prefix}catmeow
  𖣠 ${prefix}chinese
  𖣠 ${prefix}coffee
  𖣠 ${prefix}cosplay
  𖣠 ${prefix}couplepic
  𖣠 ${prefix}cyber
  𖣠 ${prefix}dogwoof
  𖣠 ${prefix}exo
  𖣠 ${prefix}gamewallpaper
  𖣠 ${prefix}goose
  𖣠 ${prefix}goosebird
  𖣠 ${prefix}hacker
  𖣠 ${prefix}hacking
  𖣠 ${prefix}hijab
  𖣠 ${prefix}indo
  𖣠 ${prefix}islamic
  𖣠 ${prefix}japanese
  𖣠 ${prefix}jennie
  𖣠 ${prefix}jiso
  𖣠 ${prefix}justina
  𖣠 ${prefix}korean
  𖣠 ${prefix}kpop
  𖣠 ${prefix}lisa
  𖣠 ${prefix}lizardpic
  𖣠 ${prefix}malay
  𖣠 ${prefix}mountain
  𖣠 ${prefix}pentol
  𖣠 ${prefix}profilepic
  𖣠 ${prefix}programming
  𖣠 ${prefix}pubg
  𖣠 ${prefix}randomboy
  𖣠 ${prefix}randomgirl
  𖣠 ${prefix}rose
  𖣠 ${prefix}ryujin
  𖣠 ${prefix}satanic
  𖣠 ${prefix}shortquote
  𖣠 ${prefix}space
  𖣠 ${prefix}technology
  𖣠 ${prefix}thai
  𖣠 ${prefix}ulzzangboy
  𖣠 ${prefix}ulzzanggirl
  𖣠 ${prefix}vietnamese
  𖣠 ${prefix}wallml
  𖣠 ${prefix}wallpaper
  𖣠 ${prefix}wallphone
  𖣠 ${prefix}wikimedia
┗━━━━━━━━━━━━━━━━⊱

┏『  𝐒𝐭𝐚𝐥𝐤𝐞𝐫 𝐌𝐞𝐧𝐮  』━◧
  𖣠 ${prefix}ffstalk
  𖣠 ${prefix}githubstalk
  𖣠 ${prefix}igstalk2
  𖣠 ${prefix}mlstalk
  𖣠 ${prefix}tiktokstalk
┗━━━━━━━━━━━━━━━━⊱`}










global.aimenu = (prefix) => {
return`┏『  𝐀𝐢 & 𝐒𝐄𝐀𝐑𝐂𝐇  』━◧
  𖣠 ${prefix}ai
  𖣠 ${prefix}bard
  𖣠 ${prefix}cai
  𖣠 ${prefix}cari musik
  𖣠 ${prefix}cuaca
  𖣠 ${prefix}film
  𖣠 ${prefix}gpt4
  𖣠 ${prefix}gpt4_2
  𖣠 ${prefix}happymod
  𖣠 ${prefix}indo-ai
  𖣠 ${prefix}lepton
  𖣠 ${prefix}mediafire
  𖣠 ${prefix}pin
  𖣠 ${prefix}play
  𖣠 ${prefix}realistic
  𖣠 ${prefix}ringtone
  𖣠 ${prefix}spotify
  𖣠 ${prefix}spotifysearch
  𖣠 ${prefix}tiktoksearch
  𖣠 ${prefix}ttsearch
  𖣠 ${prefix}terabox
  𖣠 ${prefix}xnxxsearch
  𖣠 ${prefix}yts
  𖣠 ${prefix}ytsearch
┗━━━━━━━━━━━━━━━━⊱`}





global.anonymousmenu = (prefix) => {
return`┏『  𝐀𝐧𝐨𝐧𝐲𝐦𝐨𝐮𝐬 𝐌𝐞𝐧𝐮 』━◧
  𖣠 ${prefix}confess
  𖣠 ${prefix}balesconfess
  𖣠 ${prefix}tolakconfess
  𖣠 ${prefix}stopconfess
 
  𖣠 ${prefix}menfess
  𖣠 ${prefix}balesmenfess
  𖣠 ${prefix}tolakmenfess
  𖣠 ${prefix}stopmenfess
┗━━━━━━━━━━━━━━━━⊱}`}





global.convertmenu = (prefix) => {
return` ┏『  𝐂𝐨𝐧𝐯𝐞𝐫𝐭 𝐌𝐞𝐧𝐮  』━◧
  𖣠 ${prefix}emojimix
  𖣠 ${prefix}fliptext
  𖣠 ${prefix}gtts
  𖣠 ${prefix}hapusbackground
  𖣠 ${prefix}hd
  𖣠 ${prefix}hdvid
  𖣠 ${prefix}hdvideo
  𖣠 ${prefix}hdvidio
  𖣠 ${prefix}nobg
  𖣠 ${prefix}qc
  𖣠 ${prefix}readviewonce
  𖣠 ${prefix}removebg
  𖣠 ${prefix}rvo
  𖣠 ${prefix}s
  𖣠 ${prefix}say
  𖣠 ${prefix}smeme
  𖣠 ${prefix}ss
  𖣠 ${prefix}ssweb
  𖣠 ${prefix}steal
  𖣠 ${prefix}sticker
  𖣠 ${prefix}stickerwm
  𖣠 ${prefix}stiker
  𖣠 ${prefix}swm
  𖣠 ${prefix}take
  𖣠 ${prefix}toimg
  𖣠 ${prefix}tomp4
  𖣠 ${prefix}toonce
  𖣠 ${prefix}toqr
  𖣠 ${prefix}tourl
  𖣠 ${prefix}tovideo
  𖣠 ${prefix}toviewonce
  𖣠 ${prefix}tts
  𖣠 ${prefix}wm
  𖣠 ${prefix}ytmp3
  𖣠 ${prefix}ytmp4
  𖣠 ${prefix}ytvideo
┗━━━━━━━━━━━━━━━━⊱`}





global.downloadmenu = (prefix) => { 
return`┏『 𝐃𝐨𝐰𝐧𝐥𝐨𝐚𝐝 𝐌𝐞𝐧𝐮 』━◧
  𖣠 ${prefix}tiktok
  𖣠 ${prefix}facebook
  𖣠 ${prefix}facebookvid
  𖣠 ${prefix}fb
  𖣠 ${prefix}gdrive
  𖣠 ${prefix}git 
  𖣠 ${prefix}gitclone
  𖣠 ${prefix}ig 
  𖣠 ${prefix}igimage 
  𖣠 ${prefix}igimg
  𖣠 ${prefix}igvid 
  𖣠 ${prefix}igvideo 
  𖣠 ${prefix}instagram
  𖣠 ${prefix}snackvideo 
  𖣠 ${prefix}spdl 
  𖣠 ${prefix}spotifydl 
  𖣠 ${prefix}tiktokaudio
  𖣠 ${prefix}tt
  𖣠 ${prefix}ttaudio
  𖣠 ${prefix}twitter 
  𖣠 ${prefix}twitter 
  𖣠 ${prefix}twitterdl
  𖣠 ${prefix}twitterdl
  𖣠 ${prefix}twitterdl 
┗━━━━━━━━━━━━━━━━⊱`}





global.ephoto360menu = (prefix) => {
return`┏━『  𝐄𝐏𝐡𝐨𝐭𝐨 𝟑𝟔𝟎 𝐌𝐞𝐧𝐮 』━◧
  𖣠 ${prefix}1917style
  𖣠 ${prefix}advancedglow
  𖣠 ${prefix}blackpinklogo
  𖣠 ${prefix}blackpinkstyle
  𖣠 ${prefix}cartoonstyle
  𖣠 ${prefix}deletingtext
  𖣠 ${prefix}effectclouds
  𖣠 ${prefix}flag3dtext
  𖣠 ${prefix}flagtext
  𖣠 ${prefix}freecreate
  𖣠 ${prefix}galaxystyle
  𖣠 ${prefix}galaxywallpaper
  𖣠 ${prefix}glitchtext
  𖣠 ${prefix}glowingtext
  𖣠 ${prefix}gradienttext
  𖣠 ${prefix}lighteffects
  𖣠 ${prefix}logomaker
  𖣠 ${prefix}luxurygold
  𖣠 ${prefix}makingneon
  𖣠 ${prefix}multicoloredneon
  𖣠 ${prefix}neonglitch
  𖣠 ${prefix}papercutstyle
  𖣠 ${prefix}pixelglitch
  𖣠 ${prefix}royaltext
  𖣠 ${prefix}sandsummer
  𖣠 ${prefix}summerbeach
  𖣠 ${prefix}typographytext
  𖣠 ${prefix}underwatertext
  𖣠 ${prefix}watercolortext
  𖣠 ${prefix}writetext
┗━━━━━━━━━━━━━━━━⊱`}





global.funmenu = (prefix) => {
return`┏『  𝐅𝐮𝐧 𝐌𝐞𝐧𝐮  』━◧
  𖣠 ${prefix}apakah
  𖣠 ${prefix}bisakah
  𖣠 ${prefix}bodohcek
  𖣠 ${prefix}cantikcek
  𖣠 ${prefix}cekaku
  𖣠 ${prefix}cekkodam
  𖣠 ${prefix}couplepp
  𖣠 ${prefix}dare
  𖣠 ${prefix}gantengcek
  𖣠 ${prefix}gaycek
  𖣠 ${prefix}gilacek
  𖣠 ${prefix}goblokcek
  𖣠 ${prefix}imutcek
  𖣠 ${prefix}jadian 
  𖣠 ${prefix}jodoh
  𖣠 ${prefix}jodohku
  𖣠 ${prefix}jomblocek
  𖣠 ${prefix}kapan
  𖣠 ${prefix}kapankah
  𖣠 ${prefix}lesbicek
  𖣠 ${prefix}pintarcek
  𖣠 ${prefix}ppcouple
  𖣠 ${prefix}rate
  𖣠 ${prefix}truth
  𖣠 ${prefix}siapacantik
  𖣠 ${prefix}siapaganteng
  𖣠 ${prefix}siapajelek
  𖣠 ${prefix}sound1 - sound161
┗━━━━━━━━━━━━━━━━⊱`}





global.gamemenu = (prefix) => {
return`┏『  𝐆𝐚𝐦𝐞 𝐌𝐞𝐧𝐮  』━◧
  𖣠 ${prefix}asahotak
  𖣠 ${prefix}caklontong
  𖣠 ${prefix}family100
  𖣠 ${prefix}matematika
  𖣠 ${prefix}math
  𖣠 ${prefix}siapaaku
  𖣠 ${prefix}susunkata
  𖣠 ${prefix}tebakbendera
  𖣠 ${prefix}tebakbendera2
  𖣠 ${prefix}tebakgambar
  𖣠 ${prefix}tebakkalimat
  𖣠 ${prefix}tebakkata
  𖣠 ${prefix}tebakkimia
  𖣠 ${prefix}tebaklagu
  𖣠 ${prefix}tebaktebakan
  𖣠 ${prefix}tekateki
┗━━━━━━━━━━━━━━━━⊱`}





global.groupmenu = (prefix) => {
return`┏『 𝐆𝐫𝐮𝐩 𝐌𝐞𝐧𝐮  』━◧
   𖣠 ${prefix}>l
  𖣠 ${prefix}add
  𖣠 ${prefix}aigrup 
  𖣠 ${prefix}antibadword
  𖣠 ${prefix}antilink
  𖣠 ${prefix}antilinkall
  𖣠 ${prefix}antilinkfacebook 
  𖣠 ${prefix}antilinkfb
  𖣠 ${prefix}antilinkgc
  𖣠 ${prefix}antilinkig 
  𖣠 ${prefix}antilinkinsta
  𖣠 ${prefix}antilinkinstagram 
  𖣠 ${prefix}antilinktelegram 
  𖣠 ${prefix}antilinktg
  𖣠 ${prefix}antilinktiktok 
  𖣠 ${prefix}antilinktt
  𖣠 ${prefix}antilinktwit
  𖣠 ${prefix}antilinktwitter 
  𖣠 ${prefix}antilinktwt 
  𖣠 ${prefix}antilinkyoutubech 
  𖣠 ${prefix}antilinkyoutubechannel 
  𖣠 ${prefix}antilinkyoutubevid 
  𖣠 ${prefix}antilinkyoutubevideo 
  𖣠 ${prefix}antilinkytch
  𖣠 ${prefix}antilinkytvid
  𖣠 ${prefix}antitoxic 
  𖣠 ${prefix}antivirtex
  𖣠 ${prefix}antivirus 
  𖣠 ${prefix}antiwame
  𖣠 ${prefix}autoaigc
  𖣠 ${prefix}autoaigrup
  𖣠 ${prefix}autosimi
  𖣠 ${prefix}checkvote
  𖣠 ${prefix}closetime
  𖣠 ${prefix}d
  𖣠 ${prefix}del
  𖣠 ${prefix}delete 
  𖣠 ${prefix}deleteppgc 
  𖣠 ${prefix}deleteppgroup 
  𖣠 ${prefix}deletevote
  𖣠 ${prefix}delppgc 
  𖣠 ${prefix}delppgroup 
  𖣠 ${prefix}delvote 
  𖣠 ${prefix}demote
  𖣠 ${prefix}downvote
  𖣠 ${prefix}gclink 
  𖣠 ${prefix}getpp
  𖣠 ${prefix}goodbye
  𖣠 ${prefix}grouplink
  𖣠 ${prefix}hapusvote
  𖣠 ${prefix}hidetag
  𖣠 ${prefix}ht
  𖣠 ${prefix}invite
  𖣠 ${prefix}join
  𖣠 ${prefix}kick
  𖣠 ${prefix}kickall
  𖣠 ${prefix}leavegc
  𖣠 ${prefix}left
  𖣠 ${prefix}linkgc 
  𖣠 ${prefix}linkgroup 
  𖣠 ${prefix}mute
  𖣠 ${prefix}onlygc
  𖣠 ${prefix}onlygroup
  𖣠 ${prefix}opentime
  𖣠 ${prefix}poll
  𖣠 ${prefix}promote
  𖣠 ${prefix}resetgclink
  𖣠 ${prefix}resetgrouplink
  𖣠 ${prefix}resetgruplink
  𖣠 ${prefix}resetlink
  𖣠 ${prefix}resetlinkgc
  𖣠 ${prefix}resetlinkgroup
  𖣠 ${prefix}resetlinkgrup
  𖣠 ${prefix}revoke
  𖣠 ${prefix}setdesc 
  𖣠 ${prefix}setdesk
  𖣠 ${prefix}setgcpp 
  𖣠 ${prefix}setgroupname
  𖣠 ${prefix}setgrouppp
  𖣠 ${prefix}setppgcpanjang
  𖣠 ${prefix}setppgroup 
  𖣠 ${prefix}setsubject
  𖣠 ${prefix}tagall
  𖣠 ${prefix}totag
  𖣠 ${prefix}upvote
  𖣠 ${prefix}vote
  𖣠 ${prefix}welcome
┗━━━━━━━━━━━━━━━━⊱`}





global.othermenu = (prefix) => {
return`┏『  𝐎𝐭𝐡𝐞𝐫 𝐌𝐞𝐧𝐮  』━◧
  𖣠 ${prefix}delsampah
  𖣠 ${prefix}id
  𖣠 ${prefix}ping
  𖣠 ${prefix}runtime
  𖣠 ${prefix}totalfitur 
┗━━━━━━━━━━━━━━━━⊱`}
 
 
 
 
 
 
global.ownermenu = (prefix) => {
return`┏『  𝐎𝐰𝐧𝐞𝐫 𝐌𝐞𝐧𝐮  』━⊱
//case
  𖣠 ${prefix}addcase 
  𖣠 ${prefix}getcase

  𖣠 ${prefix}addimage
  𖣠 ${prefix}delimage
  𖣠 ${prefix}listimage

  𖣠 ${prefix}addvideo
  𖣠 ${prefix}delvideo
  𖣠 ${prefix}listvideo

  𖣠 ${prefix}addvn
  𖣠 ${prefix}delvn
  𖣠 ${prefix}listvn

  𖣠 ${prefix}bcimage 
  𖣠 ${prefix}broadcastimage 
  𖣠 ${prefix}broadcastvid
  𖣠 ${prefix}broadcastvideo 

  𖣠 ${prefix}ban
  𖣠 ${prefix}banlist
  𖣠 ${prefix}unban

  𖣠 ${prefix}clearsession 
  𖣠 ${prefix}delsesi 
  𖣠 ${prefix}getsession

  𖣠 ${prefix}addowner
  𖣠 ${prefix}delowner

  𖣠 ${prefix}delprem
  𖣠 ${prefix}listprem
  𖣠 ${prefix}addprem

  𖣠 ${prefix}creategc 
  𖣠 ${prefix}creategroup
  𖣠 ${prefix}listgc

  𖣠 ${prefix}delppbot
  𖣠 ${prefix}setbotbio
  𖣠 ${prefix}setbotname
  𖣠 ${prefix}setexif 
  𖣠 ${prefix}setppbot 
  𖣠 ${prefix}setpppanjang

  𖣠 ${prefix}clearall 
  𖣠 ${prefix}listpremium 
  𖣠 ${prefix}myip 
  𖣠 ${prefix}listpc
  𖣠 ${prefix}pinchat
  𖣠 ${prefix}report
  𖣠 ${prefix}reportbug
  𖣠 ${prefix}request 
  𖣠 ${prefix}restart
  𖣠 ${prefix}unpinchat
┗━━━━━━━━━━━━━━━━⊱`}




global.quotesmenu = (prefix) => {
return`┏『  𝐐𝐮𝐨𝐭𝐞𝐬 𝐌𝐞𝐧𝐮  』━◧
  𖣠 ${prefix}quotesbacot
  𖣠 ${prefix}quotesbijak
  𖣠 ${prefix}quotesbucin
  𖣠 ${prefix}quotesgalau
  𖣠 ${prefix}quotesgombal
  𖣠 ${prefix}quoteshacker
  𖣠 ${prefix}quotesmotivasi 
┗━━━━━━━━━━━━━━━━⊱`}






global.randomphotomenu = (prefix) => {
return`┏『  𝐑𝐚𝐧𝐝𝐨𝐦 𝐏𝐡𝐨𝐭𝐨  』━◧
  𖣠 ${prefix}8ballpool
  𖣠 ${prefix}aesthetic
  𖣠 ${prefix}antiwork
  𖣠 ${prefix}art
  𖣠 ${prefix}bike
  𖣠 ${prefix}blackpink
  𖣠 ${prefix}boneka
  𖣠 ${prefix}bts
  𖣠 ${prefix}car
  𖣠 ${prefix}cartoon
  𖣠 ${prefix}cat
  𖣠 ${prefix}catmeow
  𖣠 ${prefix}chinese
  𖣠 ${prefix}coffee
  𖣠 ${prefix}cosplay
  𖣠 ${prefix}couplepic
  𖣠 ${prefix}cyber
  𖣠 ${prefix}dogwoof
  𖣠 ${prefix}exo
  𖣠 ${prefix}gamewallpaper
  𖣠 ${prefix}goose
  𖣠 ${prefix}goosebird
  𖣠 ${prefix}hacker
  𖣠 ${prefix}hacking
  𖣠 ${prefix}hijab
  𖣠 ${prefix}indo
  𖣠 ${prefix}islamic
  𖣠 ${prefix}japanese
  𖣠 ${prefix}jennie
  𖣠 ${prefix}jiso
  𖣠 ${prefix}justina
  𖣠 ${prefix}korean
  𖣠 ${prefix}kpop
  𖣠 ${prefix}lisa
  𖣠 ${prefix}lizardpic
  𖣠 ${prefix}malay
  𖣠 ${prefix}mountain
  𖣠 ${prefix}pentol
  𖣠 ${prefix}profilepic
  𖣠 ${prefix}programming
  𖣠 ${prefix}pubg
  𖣠 ${prefix}randomboy
  𖣠 ${prefix}randomgirl
  𖣠 ${prefix}rose
  𖣠 ${prefix}ryujin
  𖣠 ${prefix}satanic
  𖣠 ${prefix}shortquote
  𖣠 ${prefix}space
  𖣠 ${prefix}technology
  𖣠 ${prefix}thai
  𖣠 ${prefix}ulzzangboy
  𖣠 ${prefix}ulzzanggirl
  𖣠 ${prefix}vietnamese
  𖣠 ${prefix}wallml
  𖣠 ${prefix}wallpaper
  𖣠 ${prefix}wallphone
  𖣠 ${prefix}wikimedia
┗━━━━━━━━━━━━━━━━⊱`}

global.randomvideomenu = (prefix) => {
return`┏『  𝐑𝐚𝐧𝐝𝐨𝐦 𝐕𝐢𝐝𝐞𝐨  』━◧
  𖣠 ${prefix}tiktokbocil
  𖣠 ${prefix}tiktokghea
  𖣠 ${prefix}tiktokkayes
  𖣠 ${prefix}tiktoknotnot
  𖣠 ${prefix}tiktoknukthy
  𖣠 ${prefix}tiktokpanrika
  𖣠 ${prefix}tiktoksantuy
  𖣠 ${prefix}tiktokgirl
┗━━━━━━━━━━━━━━━━⊱`}





global.stalkermenu = (prefix) => {
  return `┏『  𝐒𝐭𝐚𝐥𝐤𝐞𝐫 𝐌𝐞𝐧𝐮  』━◧
  𖣠 ${prefix}ffstalk
  𖣠 ${prefix}githubstalk
  𖣠 ${prefix}igstalk2
  𖣠 ${prefix}mlstalk
  𖣠 ${prefix}tiktokstalk
┗━━━━━━━━━━━━━━━━⊱`}





let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update  ${__filename}`))
	delete require.cache[file]
	require(file)
})
