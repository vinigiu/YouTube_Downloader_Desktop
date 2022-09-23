const { BrowserWindow } = require('electron')
const path = require('path')

function createWindow() {
    const win = new BrowserWindow({
        width: 600,
        height: 400,
        resizable:false,
        fullscreenable:false,
        icon: path.resolve(__dirname, "../", "assets/", "baixar32.png"),
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
            nodeIntegration: true,
            contextIsolation: false
        }
    })

    win.loadFile('./index.html')

}

module.exports = createWindow()