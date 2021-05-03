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
    mainBrowserWindow.loadFile('./windowOpen.html')

    // BrowserView
    // let BrowserView = electron.BrowserView
    // let view = new BrowserView()
    // mainBrowserWindow.setBrowserView(view)
    // view.setBounds({ x: 0, y: 120, width: 1000, height: 300 })
    // view.webContents.loadURL('https://www.baidu.com')

    mainBrowserWindow.on('close', () => { mainBrowserWindow = null })
})