const fs = require('fs');
const ytdl = require('ytdl-core');

const youtubeDownload = (link) => {
    ytdl.getBasicInfo(link)        
        .then(a => ytdl(link).pipe(fs.createWriteStream(`resources/app/downloaded-videos/${a.videoDetails.videoId}.mp4`)))
}

module.exports = youtubeDownload

