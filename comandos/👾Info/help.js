const Discord = require(`discord.js`);
const { MessageActionRow, MessageSelectMenu, MessageEmbed, MessageButton} = require(`discord.js`)

module.exports = {
    name: 'help',
    alias: ["hepl", "ayuda", "Ayuda"],
    desc: "Sirve para saltar una canción",

    run: async (client, message, args, prefix) => {
    
        const start = new Discord.MessageEmbed()
        .setTitle("Menú de Ayuda")
        .setAuthor(client.user.username, client.user.avatarURL(), "https://discord.gg/EQsCj4ZDSU")
        .setDescription(`Hola ${message.author}, Te saluda ${client.user.username}, a continuación te  mostraré los codigos que puedes utilizar.`)
        .addField("Total de comandos", "`TEST`", false)
        .addField("Mi prefijo es:", `\`${prefix}\``)
        .addField("Creado por:", "ElLoboOfficial#0001")
        .setThumbnail(client.user.avatarURL())
        .setFooter("Code By: ElLoboOfficial#0001")
        .setColor("#00ffff")
        .setTimestamp()

      const row = new MessageActionRow()
      .addComponents(
        new MessageSelectMenu()
            .setCustomId('Select')
            .setPlaceholder('Selecciona una categoría')
            .addOptions([
                {
                    label:'Información',
                    Description: 'Muestra la info de nuestro bot',
                    value: "info",
                    emoji: '📰'
                },

                {
                    label:'Comandos',
                    Description: 'Muestra los comandos de nuestro bot',
                    value: "cmd",
                    emoji: '🤖'
                },
                
                {
                    label:'Lobo',
                    Description: 'Info del programador',
                    value: "sqd",
                    emoji: '😎'
                },

                {
                    label:'Inicio',
                    Description: 'Vuelve al menú principal',
                    value: "inicio",
                    emoji: '🏠'
                },
            ])
        )
        message.reply({embeds: [start], components: [row]}).then(async(m) => {

            const collector = m.createMessageComponentCollector({filter: i => i.user.id === message.author.id });
            collector.on("collect", async (i) => {
                if(i.values[0] === "info"){
                    i.update({ embeds: [iembed]})
                }

                if(i.values[0] === "cmd"){
                    i.update({ embeds: [cmdembed]})
                }

                if(i.values[0] === "sqd"){
                    i.update({ embeds: [sqdembed]})
                }

                if(i.values[0] === "inicio"){
                    i.update({ embeds: [start]})
                }
            })
            const iembed = new Discord.MessageEmbed()
            .setTitle("Información del Bot")
            .setDescription(`**${client.user.username} INFO**\n\nCreado el 11 de Junio del 2022`)
            .setFooter("Code By: ElLoboOfficial#0001")

            const cmdembed = new Discord.MessageEmbed()
            .setTitle("Comandos")
            .setDescription("`>>help`")
            .setFooter("Code By: ElLoboOfficial#0001")

            const sqdembed = new Discord.MessageEmbed()
            .setTitle("Información del programador")
            .setDescription("Programador oficial del Bot")
            .setFooter("Code By: ElLoboOfficial#0001")

        })
    }
}