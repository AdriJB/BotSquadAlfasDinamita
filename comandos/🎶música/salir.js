const Discord = require('discord.js');

module.exports = {
    name: "salir",//Nombre del comando
    aliases: [ "leavevc" , "leave" , "desconectar"], // Alias de los comandos
    desc: "Sirve para detener una canción", // Descripción del bot

    run: async (client, message, args, prefix) => {

  client.distube.voices.leave(message)

  setTimeout(function(){ /// Para borrar el mensaje que mandó la persona que solicitó el comando.
    message.delete()

    const say = new Discord.MessageEmbed()

    .setTitle(`🔇 **¡${message.author.username} me he salido del canal de voz correctamente!`)
    .setColor("#C1FF00")

    message.channel.send({ embeds: [say] }).then(msg => setTimeout(() => {
      msg.delete(); 
  }, 6200)); // <== Tiempo que pasa para borrar el mensaje una vez que el mensaje del bot haya sido enviando por el mismo.

}, 1000) // <== Tiempo que debe pasar después de mandar el mensaje solictado (comando) y borrarlo automaticamente, para despés responder el bot con lo pedido.
     
    }
    
  }

