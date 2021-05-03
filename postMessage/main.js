const electron = require('electron')
const app = electron.app
const BrowserWindow = electron.BrowserWindow

let mainBrowserWindow = null

app.on('ready', () => {
    mainBrowserWindow = new BrowserWindow({
        width: 1300,
        height: 600,
        webPreferences: { nodeIntegration: true }
    })
    mainBrowserWindow.loadFile('./index.html')
    mainBrowserWindow.on('close', () => { mainBrowserWindow = null })
})