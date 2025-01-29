const PastebinAPI = require('pastebin-js'),
pastebin = new PastebinAPI('EMWTMkQAVfJa9kM-MRUrxd5Oku1U7pgL')
const {makeid} = require('./id');
const express = require('express');
const fs = require('fs');
let router = express.Router()
const pino = require("pino");
const {
    default: Gifted_Tech,
    useMultiFileAuthState,
    delay,
    makeCacheableSignalKeyStore,
    Browsers
} = require("maher-zubair-baileys");

function removeFile(FilePath){
    if(!fs.existsSync(FilePath)) return false;
    fs.rmSync(FilePath, { recursive: true, force: true })
 };
router.get('/', async (req, res) => {
    const id = makeid();
    let num = req.query.number;
        async function MIDKING02_MD_PAIR_CODE() {
        const {
            state,
            saveCreds
        } = await useMultiFileAuthState('./temp/'+id)
     try {
            let Pair_Code_By_JOSHKING01_Tech = JOSHKING_Tech({
                auth: {
                    creds: state.creds,
                    keys: makeCacheableSignalKeyStore(state.keys, pino({level: "fatal"}).child({level: "fatal"})),
                },
                printQRInTerminal: false,
                logger: pino({level: "fatal"}).child({level: "fatal"}),
                browser: ["Chrome (Linux)", "", ""]
             });
             if(!Pair_Code_By_JOSHKING_Tech.authState.creds.registered) {
                await delay(1500);
                        num = num.replace(/[^0-9]/g,'');
                            const code = await Pair_Code_By_Gifted_Tech.requestPairingCode(num)
                 if(!res.headersSent){
                 await res.send({code});
                     }
                 }
            Pair_Code_By_JOSHKING01_Tech.ev.on('creds.update', saveCreds)
            Pair_Code_By_JOSHKING01_Tech.ev.on("connection.update", async (s) => {
                const {
                    connection,
                    lastDisconnect
                } = s;
                if (connection == "open") {
                await delay(5000);
                let data = fs.readFileSync(__dirname + `/temp/${id}/creds.json`);
                await delay(800);
               let b64data = Buffer.from(data).toString('base64');
               let session = await Pair_Code_By_Gifted_Tech.sendMessage(Pair_Code_By_JOSHKING01_Tech.user.id, { text: '' + b64data });

               let MIDKING02_MD_TEXT = `
┏━━━━━━━━━━━━━━
┃👑 MIDKING02_JOSH SESSION IS 
┃SUCCESSFULLY
┃CONNECTED ✅🔥
┗━━━━━━━━━━━━━━━
▬▬▬▬▬▬▬▬▬▬▬▬▬▬
❶ || Creator = MIDKING01--JOSH🇿🇼 
▬▬▬▬▬▬▬▬▬▬▬▬▬▬
❷ || WhattsApp group =https://chat.whatsapp.com/FCURRZJoRUd6Tuvf6DwUnZ
▬▬▬▬▬▬▬▬▬▬▬▬▬▬
*[Whatsapp only]*
Wanna talk to me?👉 +263 71 672 9222 👈
▬▬▬▬▬▬▬▬▬▬▬▬▬▬
> Thank tor choose
*👑 MIDKING01_JOSH*

_Don't Forget To Give Star To My Repo_`
 await Pair_Code_By_MIDKING01_JOSH.sendMessage(Pair_Code_By_MIDKING01_JOSH.user.id,{text:MIDKING02_MD_TEXT},{quoted:session})
 

        await delay(100);
        await Pair_Code_By_MIDKING01_JOSH.ws.close();
        return await removeFile('./temp/'+id);
            } else if (connection === "close" && lastDisconnect && lastDisconnect.error && lastDisconnect.error.output.statusCode != 401) {
                    await delay(10000);
                    MIDKING02_MD_PAIR_CODE();
                }
            });
        } catch (err) {
            console.log("service restated");
            await removeFile('./temp/'+id);
         if(!res.headersSent){
            await res.send({code:"Service Unavailable"});
         }
        }
    }
    return await MIDKING02_MD_PAIR_CODE()
});
module.exports = router
