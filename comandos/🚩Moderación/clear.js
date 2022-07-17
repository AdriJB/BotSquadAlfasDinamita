const Discord = require('discord.js');

module.exports = {
    name: "clear",
    aliases: ["limpiar", "eliminar", "eliminar-mensajes", "purge"],
    desc: "Elimina una cantidad de mensajes especificadas en un canal.",
    run: async (client, message, args) => {

        if(!message.member.permissions.has(`MANAGE_MESSAGES`)) return message.reply(":x: **Solo los ADMINISTRADORES de este servidor pueden ejecutar este comando.**")
        if(!message.guild.me.permissions.has(`MANAGE_MESSAGES`)) return message.channel.send(`❌ **Necesito el permiso para controlar los mensajes "MANAGE_MESSAGE, ¿Me ayudas?"**`)

        const cantidad = args[0]

        if(!cantidad) return message.channel.send(`❌ **Debes de especificar una cantidad de mensajes para eliminar.**`).then(msg => setTimeout(() => {
          msg.delete(); 
      }, 5000))

        
        if(isNaN(cantidad)) return message.channel.send(`❌ **Debes de especificar un número valido.**`).then(msg => setTimeout(() => {
          msg.delete(); 
      }, 5000))

        if(cantidad > 100) return message.channel.send(`❌ **No puedes eliminar más de** \`100\` **mensajes a la vez.**`).then(msg => setTimeout(() => {
          msg.delete(); 
      }, 5000))

        if(cantidad < 1) return message.channel.send(`❌ **No puedes eliminar** \`0\` **mensajes, debes de especificar un numero elevado a** \`0*\``).then(msg => setTimeout(() => {
          msg.delete(); 
      }, 5000))
        
      const basura = new Discord.MessageEmbed()
  
      .setAuthor({name:`${message.author.username}· ahora mismo estoy eliminando \`${cantidad}\` mensajes de este canal, espera un momento por favor....`})
      .setColor("#C1FF00")

      message.channel.send({ embeds: [basura] })

        try {
            setTimeout(() => message.channel.bulkDelete(cantidad), 2000)
          } catch {
            param.reply('No se permiten mensajes pasados de 14 dias!!')
          }

       const basurita = new Discord.MessageEmbed()
  
      .setAuthor({name:`${message.author.username}· Acabo de eliminar \`${cantidad}\` mensajes de este canal.`, iconURL: 'https://cdn.discordapp.com/emojis/758423098885275748.gif' })
      .setColor("#C1FF00")
  
        message.channel.send({ embeds: [basurita] })
  

      
        }
    }