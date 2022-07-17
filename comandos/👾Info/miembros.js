const {MessageEmbed} = require('discord.js')


module.exports = {
    name: 'miembros',
    run : async(client, message, args) => {
        
        const user = message.author;

            let embed = new MessageEmbed()
        
      .setTitle(`Total de miembros de ${message.guild.name}`)
      .addField(`👥 Total de miembros`, `${message.guild.memberCount}`, true)
      .addField(`👤 Humanos`, `${message.guild.members.cache.filter(member => !member.user.bot).size}`, true)
      .addField(`🤖 Bots`, `${message.guild.members.cache.filter(member => member.user.bot).size}`, true)
      .setThumbnail(message.guild.iconURL({ size: 4096, dynamic: true }))
      .setAuthor(message.guild.name, message.guild.iconURL({ size: 4096, dynamic: true }))
      .setTimestamp()
      .setColor("#C1FF00")
      .setFooter({text: `Comando solicitado por ${user}`, iconURL: message.author.displayAvatarURL({ dynamic: true })})
      
      message.channel.send({ embeds: [embed] })

    }
}