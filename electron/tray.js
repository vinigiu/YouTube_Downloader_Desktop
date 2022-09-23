const { Tray } = require('electron')
const { resolve } = require('path')

const iconPath = resolve(__dirname, '../', 'assets', 'baixar.png')

function createTray () {
    const tray = new Tray(iconPath)
    tray.setToolTip('Youtube Downloader')
    return tray
}

module.exports = createTray()