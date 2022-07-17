const Discord = require(`discord.js`);
const { MessageActionRow, MessageSelectMenu, MessageEmbed, MessageButton} = require(`discord.js`)

module.exports = {
    name: "hola",
    desc: "Sirve para ver la latencia del Bot",
    run: async (client, message, args, prefix) => {
        message.channel.send(`¡¡Hola **${message.author.username}** te saluda **${client.user.tag}**!! :heart: `).then(m => {
            m.react(`❤️`)
            m.react(`🧡`)
            m.react(`💛`)
            m.react(`💚`)
          })
}
}