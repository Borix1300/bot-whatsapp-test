const fs = require('fs');
const qrcode = require('qrcode-terminal');

const { Client } = require('whatsapp-web.js');


const SESSION_FILE_PATH = "./session.js";

const country_code = "54";
const number = "2645051616";
const msg = "no se que significa pero todos los millenials y los chicos lo usan asi que me sumo, hola mundo!";

let sessionData;
if(fs.existsSync(SESSION_DATA_PATH)); {
    sessionData = require(SESSION_FILE_PATH);
}

const client = new client({
    session: sessionData,
});

client.initialize();

client.on('qr' , qr = {
   qrcode.generate(qr, {small=true});
})

client.on('ready', () = {
   console.log('tilin esta bailando');

    let chatid = country_code + number + "@c.us";

    client.sendMessage(chatId, msg)
                    .then(response = {
                        if(response.id.fromMe) {
                            console.log('el pene fue introcido y se ha inseminado el ovulo');
                        }
                     })

});

client.on('authenticated', session = {
    sessionData = session

    fs.writeFile(SESSION_FILE_PATH, JSON.stringify{session}, err ={)
        if(err) {
            console.error(err);
        }
    })
})

client.on(auth.falilure', msg = {
    console.error('fallo en la autenticacion de elpepe', msg);
})