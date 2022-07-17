const Discord = require('discord.js');
const { MessageActionRow, MessageSelectMenu, MessageEmbed, MessageButton} = require('discord.js')


module.exports = {
  name: "3d",//Nombre del comando
  alias: ["3d"],
  desc: "Sirve para reproducir una canción",
  run: async (client, message, args, prefix) => 
  {
       const queue = client.distube.getQueue(message);
            if(!queue) return message.reply(`🎶 **Actualmente no hay una canción reproduciendose** 🎶`);
    
      if (!message.member.voice?.channel)
          return message.reply(`🔊❌***Tienes que entrar a un canal de voz para reproducir la canción.*** ❌🔊`).then(msg => setTimeout(() => {
            msg.delete(); 
        }, 6200));
        
      if(message.guild.me.voice?.channel && message.member.voice?.channel.id != message.guild.me.voice?.channel.id)
          return message.reply(`🚫❌ ***¡Tienes que estar en el mismo canal de voz que ___YO___ para reproducir tu canción!*** ❌🚫`).then(msg => setTimeout(() => {
            msg.delete(); 
        }, 6200));

        
        //////////////////////////////// //////////////////////////////// ////////////////////////////////

      client.distube.setFilter(message, "3d") 

      //////////////////////////////// //////////////////////////////// ////////////////////////////////


    setTimeout(function(){
      message.delete()

      const say = new Discord.MessageEmbed()

      .setAuthor({ name:'Filtro Activado/Desactivado: 3D', iconURL: 'https://cdn.discordapp.com/emojis/758423098885275748.gif' })
      .setColor("#C1FF00")

      message.channel.send({ embeds: [say] }).then(msg => setTimeout(() => {
        msg.delete(); 
    }, 6200));

  }, 1000)
  }

}