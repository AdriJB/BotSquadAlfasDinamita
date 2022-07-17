const Discord = require('discord.js');

module.exports = {
    name: "stop",//Nombre del comando
    alias: ["detener", "stop"],
    desc: "Sirve para detener una canción",
    run: async (client, message, args, prefix) => {
      const queue = client.distube.getQueue(message);
      if(!queue) return message.reply(`🎶 **Actualmente no hay una canción reproduciendose** 🎶`);
        if (!message.member.voice?.channel)
            return message.reply(`🔊❌***Tienes que entrar a un canal de voz para que pueda ejectar esto.*** ❌🔊`);
        if(message.guild.me.voice?.channel && message.member.voice?.channel.id != message.guild.me.voice?.channel.id)
            return message.reply(`🚫❌ ***¡Tienes que estar en el mismo canal de voz que ___YO___ para hacer esto!*** ❌🚫`);
  
        client.distube.stop(message);
        setTimeout(function(){
            message.delete()
      
            const say = new Discord.MessageEmbed()
      
            .setTitle(`⏹️ ¡${message.author.username}, he detenido la música correctamente!`)
            .setColor("#C1FF00")
      
            message.channel.send({ embeds: [say] }).then(msg => setTimeout(() => {
              msg.delete(); 
          }, 6200));
      
        }, 1000)


    }
}