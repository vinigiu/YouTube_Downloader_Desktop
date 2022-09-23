const ytdl = require('./controllers/ytController')

window.addEventListener('load', ()=>{
    let btnEnv = document.getElementById('enviar')
    let linkInput = document.getElementById('link')
    
    btnEnv.addEventListener('click', () =>{
        let link = document.getElementById('link').value
        ytdl(link)

        alert("Seu vídeo está disponível no caminho 'downloaded-videos/' no diretório do YouTube Downloader")

        linkInput.value = ''
    })

    btnEnv.addEventListener('mouseover', () => {
        btnEnv.style.cssText = 'cursor:pointer; border-style: solid;'
    })

    btnEnv.addEventListener('mouseout', () => {
        btnEnv.style.cssText = 'border-style: none;'
    } )

    linkInput.addEventListener('focus', () => {
        linkInput.dataset.placeholder = linkInput.placeholder;
        linkInput.placeholder = '';
        linkInput.style.cssText = "text-align: start"
    })
    
    linkInput.addEventListener('blur', () => {
        linkInput.placeholder = linkInput.dataset.placeholder;
        linkInput.style.cssText = "text-align: center"
    })

})