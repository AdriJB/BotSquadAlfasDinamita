const mongoose = require('mongoose');
const config = require('../../config/config.json');
const Discord = require('discord.js');

module.exports = client => {
    
    console.log(`
╔═════════════════════════════════════════════════════╗
║                                                     ║
║      ¡Conectado con presencia personalizada!        ║
║                                                     ║
╚═════════════════════════════════════════════════════╝`.yellow)
   
    const estadopro = ['Netflix, WATCHING' , 'Minecraft, PLAYING', 'Imagine Dragons, LISTENING', 'Visual Studio, PLAYING', 'DM, WATCHING', 'Prefix >>, WATCHING'] 
  
      setInterval(() => {
      
        client.user.setStatus('idle') /// acá puedes colocar online, offline, dnd y idle, a mi me gusta la lunita jeje
        
        const random = estadopro[Math.floor(Math.random() * estadopro.length)].split(', ')
        const estado = random[0];
        const mode = random[1];
        client.user.setActivity(estado, { type: mode })
        
        
        
      }, 7200) /// estos son los millisegundos de cambio de estado de tu bot :D
 
      
    let palo = 53;

    mongoose.connect(config.mongodb, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(() => {
        console.log(`
╔═════════════════════════════════════════════════════╗
║                                                     ║
║      ¡Conectado a la base de datos de MongoDB!      ║
║                                                     ║
╚═════════════════════════════════════════════════════╝`.blue)
    }).catch((err) => {
        console.log(`❌☁️ ERROR AL CONECTAR A LA BASE DE DATOS DE MONGODB☁️❌`.red);
        console.log(err)
    })

    console.log(`╔═════════════════════════════════════════════════════╗`.green)
    console.log(`║ `.green + " ".repeat(-1 + palo - 1) + " ║".green)
    console.log(`║ `.green + `      Conectado como ${client.user.tag}`.cyan + " ".repeat(-1 + palo - 1 - `      Conectado como ${client.user.tag}`.length) + " ║".cyan)
    console.log(`║ `.green + " ".repeat(-1 + palo - 1) + " ║".green)
    console.log(`╚═════════════════════════════════════════════════════╝`.green)
   





};





