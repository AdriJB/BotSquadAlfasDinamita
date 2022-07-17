const Discord = require('discord.js');
const { MessageActionRow, MessageSelectMenu, MessageEmbed, MessageButton} = require('discord.js')


module.exports = {
  name: "play",//Nombre del comando
  alias: ["reproducir", "r"],
  desc: "Sirve para reproducir una canción",
  run: async (client, message, args, prefix) => 
  {
      if (!args.length)
          return message.reply(`⚠️ ***Tienes que especificar un nombre de canción*** ⚠️`).then(msg => setTimeout(() => {
            msg.delete(); 
        }, 6200));
    
      if (!message.member.voice?.channel)
          return message.reply(`🔊❌***Tienes que entrar a un canal de voz para reproducir la canción.*** ❌🔊`).then(msg => setTimeout(() => {
            msg.delete(); 
        }, 6200));
        
      if(message.guild.me.voice?.channel && message.member.voice?.channel.id != message.guild.me.voice?.channel.id)
          return message.reply(`🚫❌ ***¡Tienes que estar en el mismo canal de voz que ___YO___ para reproducir tu canción!*** ❌🚫`).then(msg => setTimeout(() => {
            msg.delete(); 
        }, 6200));

        
        //////////////////////////////// //////////////////////////////// ////////////////////////////////

      client.distube.play(message.member.voice?.channel, args.join(" "), {
          member: message.member,
          textChannel: message.channel,
          message
      });

      //////////////////////////////// //////////////////////////////// ////////////////////////////////


    setTimeout(function(){
      message.delete()

      const say = new Discord.MessageEmbed()

      .setAuthor({name:` BUSCANDO...`, iconURL:'https://cdn3.emoji.gg/emojis/5564_Loading_Color.gif'})
      .setDescription(` **${message.author.username} ahora mismo estoy buscando \`${args.join(" ")}\`, Espera un momento por favor... `)
      .setColor("#C1FF00")

      message.channel.send({ embeds: [say] }).then(msg => setTimeout(() => {
        msg.delete(); 
    }, 6200));

  }, 1000)
  }

}