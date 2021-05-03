const electron = require('electron')
const BrowserWindow = electron.BrowserWindow
const app = electron.app

let mainBrowserWindow = null

app.on('ready', () => {
    mainBrowserWindow = new BrowserWindow({
        height: 600,
        width: 500,
        webPreferences: {
            nodeIntegration: true,
            enableRemoteModule: true
        }
    })
    mainBrowserWindow.webContents.openDevTools()
    require('./main/menu.js')
    mainBrowserWindow.loadFile('index.html')
    mainBrowserWindow.on('closed', () => { mainBrowserWindow = null })
})