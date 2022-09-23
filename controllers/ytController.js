const fs = require('fs');
const ytdl = require('ytdl-core');

const youtubeDownload = (link) => {
    ytdl.getBasicInfo(link)  // retirando resources/app/ do caminho do save do vídeo para que funcione para quem baixa no github     
        .then(a => ytdl(link).pipe(fs.createWriteStream(`downloaded-videos/${a.videoDetails.videoId}.mp4`)))
}

module.exports = youtubeDownload

