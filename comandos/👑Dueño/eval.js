const {inspect} = require('util');
const Discord = require('discord.js')

module.exports = {
    name: "eval",
    aliases: ["evaluar", "probar", "testear" ],
    desc: "Sirve para ejectutar código DISCORD.js del Bot",
    owner: true,
    run: async (client, message, args, prefix) => {
       if(!args.legth) return message.reply(`⚠️**¡Tienes que especificar un código para evaluar!**⚠️`).then(msg => setTimeout(() => {
        msg.delete(); 
    }, 4300));

       try {
        const evaludado = await eval(args.join(" "));
        const truncado = truncar(evaluado, 2045);
        message.channel.send({
            embeds: [new Discord.Message.Embed()
            .setTitle(`EVALUACIÓN`)
            .setDescription(`\`\`\`js\n${truncado}\`\`\``)
            .setColor(client.color)
            .setTimestamp()
        ]
        })
    } catch(e){
         message.channel.send({
            embeds: [new Discord.Message.Embed()
            .setTitle(`EVALUACIÓN`)
            .setDescription(`\`\`\`js\n${e.toSring().substring(0,2048)}\`\`\``)
            .setColor("FF0000")
            .setTimestamp()
            ]
            })
         }
    }
}

function truncar(texto, n){
    if(texto.length > n){
      let truncado = texto.substring(0, n) + "..."
      return truncado;
    } else {
        return texto;
    }
}