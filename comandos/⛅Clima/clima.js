const weather = require('weather-js')
const Discord = require('discord.js')



module.exports = {
    name: "clima",
    aliases: ["tiempo"],
    desc: "Sirve para ver el clima actual",
    run: async(client, message, args) => {

        if (!args[0]) {
            return message.reply('Ingresa una localización, Ejemplo: ``>>clima Rio de Janeiro``').then(msg => setTimeout(() => {
                msg.delete(); 
            }, 5300))
        }
        weather.find({ search: args.join(' '), degreeType: 'C' }, function(err, result) {
            if (result[0] != undefined) {
                var current = result[0].current;
                var location = result[0].location;
                const tempEmbed = new Discord.MessageEmbed()
                    .setDescription(`**${current.skytext}**`)
                    .setAuthor({ name:`Clima actual en la region de: ${current.observationpoint}`, iconURL: ''})
                    .setThumbnail(current.imageUrl)
                    .setColor('BLACK')
                    .addField(`Horario`, `UTC${location.timezone}`, true)
                    .addField(`Temperatura`, `${current.temperature} C°`, true)
                    .addField(`Sensación térmica`, `${current.feelslike} C°`, true)
                    .addField(`Viento`, `${current.winddisplay}`, true)
                    .addField(`Humedad`, `${current.humidity}%`, true)
                    message.channel.send({ embeds: [tempEmbed]})
            } else {
                message.reply({ content: ':x: | ¡Esta ubicación está fuera de mi alcance! ¿Me disculpas?'})
            }
        })

    }
}