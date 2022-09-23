const { app, BrowserWindow, dialog } = require('electron')

function App () {
    const win = require('./createWindow')
    const tray = require('./tray')
}

app.whenReady().then(() => {
    App()

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) App()
    })

})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})