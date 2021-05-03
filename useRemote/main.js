var electron = require('electron')
var BrowserWindow = electron.BrowserWindow
var app = electron.app
var mainBrowserWindow = null

app.on('ready', () => {
    mainBrowserWindow = new BrowserWindow({
        width: 800,
        height: 800,
        webPreferences: {
            nodeIntegration: true,  // node命令你可以在渲染进程内使用
            enableRemoteModule: true   // 使用remote模块
        }
    })
    mainBrowserWindow.loadFile('./index.html')
    mainBrowserWindow.on('close', () => {
        mainBrowserWindow = null
    })
})