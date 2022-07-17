const Discord = require('discord.js');

module.exports = {
    name: 'atras',
    alias: ["regresar", "r"],
    desc: "Sirve para saltar una canción",

    run: async (client, message, args, prefix) => {
        const queue = client.distube.getQueue(message);
        if(!queue) return message.reply(`🎶 **Actualmente no hay una canción reproduciendose** 🎶`).then(msg => setTimeout(() => {
            msg.delete(); 
             }, 6000));

          if (!message.member.voice?.channel)
              return message.reply(`🔊❌***Tienes que entrar a un canal de voz para que pueda ejectar esto.*** ❌🔊`).then(msg => setTimeout(() => {
        msg.delete(); 
            }, 6000));

          if(message.guild.me.voice?.channel && message.member.voice?.channel.id != message.guild.me.voice?.channel.id)
              return message.reply(`🚫❌ ***¡Tienes que estar en el mismo canal de voz que ___YO___ para hacer esto!*** ❌🚫`).then(msg => setTimeout(() => {
                msg.delete(); 
            }, 6000));


              client.distube.previous(message);
              setTimeout(function(){
                message.delete()
          
                const say = new Discord.MessageEmbed()
          
                .setTitle(`⏮️ **¡${message.author.username}, he regresado a la canción anterior correctamente!**`)
                .setColor("#C1FF00")
          
                message.channel.send({ embeds: [say] }).then(msg => setTimeout(() => {
                  msg.delete(); 
              }, 6200));
          
            }, 1000)
    }
  }