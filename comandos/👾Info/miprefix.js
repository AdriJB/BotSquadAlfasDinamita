const Discord = require("discord.js");

module.exports = {
    name: "prefix",
    aliases: ["aliasbot"],
    desc: "Sirve para saber el prefix o alias del bot",
    run: async (client, message, args, prefix) => {
        

        setTimeout(function(){
            message.delete()

            const say = new Discord.MessageEmbed()

            .setTitle(`¡¡Hola** ${message.author.username},** **mi prefix es:** \`${prefix}\` !! 😎`)
            .setColor("#C1FF00")
    
            message.channel.send({ embeds: [say] }).then(msg => setTimeout(() => {
                msg.delete(); 
            }, 15100));
        
          }, 1000)

    }
}


