const Discord = require("discord.js");

module.exports = {
    name: "say",
    aliases: ["decir", "comentar"],
    desc: "Sirve para que el staff comente algo desde el bot.",
    run: async (client, message, args) => {
        
        const mensaje = args.join(" ")
        if(!mensaje) return message.reply("⚠️ **Debes especificar un mensaje para comentar.** ⚠️").then(msg => setTimeout(() => {
            msg.delete(); 
        }, 6000))

        setTimeout(function(){
            message.delete()

            const say = new Discord.MessageEmbed()
            .setDescription(`> ${mensaje} `)
            .setColor("#C1FF00")
    
            message.channel.send({ embeds: [say] })
        }, 1000)

    }
}