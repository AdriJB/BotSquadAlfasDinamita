const {DisTube} = require('distube');
const { SpotifyPlugin } = require('@distube/spotify');
const { SoundCloudPlugin } = require('@distube/soundcloud');

module.exports = (client , Discord) => {
    console.log(`¡Modulo de música cargado!`.red)

    client.distube = new DisTube(client, {
        emitNewSongOnly: false,
        leaveOnEmpty: true,
        leaveOnFinish: true,
        leaveOnStop: false,
        savePreviousSongs: true,
        emitAddSongWhenCreatingQueue: false,
        searchSongs: 0,
        nsfw: false,
        emptyCooldown: 30,
        ytdlOptions: {
            highWaterMark: 1024 * 1024 * 64,
            quality: "highestaudio",
            format: "audioonly",
            liveBuffer:60000,
            dlChunkSize: 1024 * 1024 * 4,
        },
        youtubeDL: false,
        plugins: [
            new SpotifyPlugin({
                parallel: true,
                
            }),
            new SoundCloudPlugin()
        ],
     })

     

     client.distube.on("playSong", (queue,song) => {
    queue.textChannel.send({
        embeds: [new Discord.MessageEmbed()
            .setAuthor({name:`🎶 Reproduciendo ahora... 🎶`, iconURL:'https://emoji.discord.st/emojis/e0b9a253-b9ea-4c16-b844-d7cca075991e.gif' })
            .setTitle(`💿 **Nombre de la canción:**`)
            .setDescription(`\`${song.name}\``)
            .setThumbnail(song.thumbnail) 
            .addField(`👤 Pedido por:`, `\`${song.user.tag}\``, true)
            .addField(`⏳ Duración:`, `\`${song.formattedDuration}\``, true)
            .addField(`🎵 Pista:`, `\`[${queue.songs.length} ${queue.songs.length > 1 ? "Canciones" : "Canción"}]\``, true)
            .addField(`🌐 Link:`, `${song.url}`, true)
            .setColor("#FF0044")
        ]
    })
})


    client.distube.on("addSong" , (queue, song) => {
        queue.textChannel.send({
            embeds: [new Discord.MessageEmbed()
                .setTitle(`✅ Añadido \`${song.name}\` - \`${song.formattedDuration}\``)
                .setThumbnail(song.thumnail)
                .setURL(song.url)
                .setColor("#8400ff")
                .setFooter({text: `Añadida por ${song.user.tag}`, iconURL: song.user.displayAvatarURL({dynamic: true})})
            ]
        })
    })

    client.distube.on("initQueue", (queue) => {
        queue.autoplay = true;
        
    })
};