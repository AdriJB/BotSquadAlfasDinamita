const config = require(`${process.cwd()}/config/config.json`)
const serverSchema =  require(`${process.cwd()}/modelos/servidor.js`)
const {asegurar_todo} = require(`${process.cwd()}/handlers/funciones.js`)
const Discord = require('discord.js');

module.exports = async (client, message) => {
    if(!message.guild || !message.channel || message.author.bot) return;
    await asegurar_todo(message.guild.id, message.author.id);
    let data = await serverSchema.findOne({guildID: message.guild.id})
    if(!message.content.startsWith(data.prefijo)) return;
    const args = message.content.slice(data.prefijo.length).trim().split(" ");
    const cmd = args.shift()?.toLowerCase();
    const command = client.commands.get(cmd) || client.commands.find(c => c.aliases && c.aliases.includes(cmd));
    if(command) {

        if (command.owner) {
            if(!config.ownerIDS.includes(message.author.id)) return message.reply(`⛔ **¡SOLO LOS DUEÑOS DE ESTE BOT PUEDEN EJECUTAR ESTE COMANDO!** ⛔`).then(msg => setTimeout(() => {
                msg.delete(); 
            }, 10000));
        }
        //ejecutar el comando
        command.run(client, message, args, data.prefijo,)
    } else {

        setTimeout(function(){
            message.delete()
      
            const say = new Discord.MessageEmbed()
      
            .setAuthor({name:`|| ERROR: EL COMANDO QUE HAS ESPECIFICADO NO EXISTE...`, iconURL:'https://emoji.discord.st/emojis/3143181a-16eb-4b3c-931b-cf9f593ba706.gif'})
            .setColor("RED")
      
            message.channel.send({ embeds: [say] }).then(msg => setTimeout(() => {
              msg.delete(); 
          }, 6200));
      
        }, 1560)
    }

}