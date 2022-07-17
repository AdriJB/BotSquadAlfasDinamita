const Discord = require("discord.js");

module.exports = {
  name: "horoscopo",
  aliases: ["horoscopo", "hp"],
  desc: "Sirve para ver tu horoscopo!",
  run: async (client, message, args, prefix) => {

    if (!args[0]) return message.channel.send("🔮 **Indicame tu signo zodiacal!** 🔮")

    let Options = ["libra", "tauro", "cancér", "capricornio", "sagitario", "géminis", "piscis", "leo", "aries", "virgo", "escorpio", "acuario", "cancer", "geminis"]


    if (!Options.includes(args[0].toLowerCase())) return message.channel.send("<:error:976129097853980672> **Ese no es un signo zodiacal!**")

    let author = message.author.username;
    let amor = Math.floor(Math.random() * 100)
    let dinero = Math.floor(Math.random() * 100)
    let salud = Math.floor(Math.random() * 100)
    let suerte = Math.floor(Math.random() * 100)
    let trabajo = Math.floor(Math.random() * 100)
    let sexo = Math.floor(Math.random() * 100)

    const embed = new Discord.MessageEmbed()
      .setTitle(" ✨💫 Los astros determinan que el horóscopo de " + `${author}` + " es:")
      .addFields(
        { name: '**Amor**', value: `💘**${amor}**%💘`, inline: true },
        { name: '**Dinero**', value: `💰**${dinero}**%💰`, inline: true },
        { name: '**Salud**', value: `💉**${salud}**%💉`, inline: true },
        { name: '**Suerte**', value: `🍀**${suerte}**%🍀 `, inline: true },
        { name: '**Trabajo**', value: `🧰**${trabajo}**%🧰`, inline: true },
        { name: '**Sexo**', value: `🥵**${sexo}**%🥵`, inline: true },
      )
      .setColor("RANDOM");
    message.channel.send({ embeds: [embed] })
  }

}