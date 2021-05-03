const electron = require('electron')

const app = electron.app
const BrowserWindow = electron.BrowserWindow

var mainWindow = null
app.on('ready', ()=>{
    mainWindow = new BrowserWindow({
        width: 1400,
        height: 800,
        webPreferences: {
            nodeIntegration: true,
            enableRemoteModule: true
        }
    })
    require('./render/menu')  //菜单栏
    mainWindow.webContents.openDevTools()  // 打开开发模式
    mainWindow.loadFile('demo2.html')

    //  嵌入网页BrowserView
    // var BrowserView = electron.BrowserView
    // var view = new BrowserView()
    // mainWindow.setBrowserView(view)
    // view.setBounds({x:0, y: 120,width: 1200, height: 600})
    // view.webContents.loadURL('https://www.baidu.com/')

    mainWindow.on('closed', ()=>{
        mainWindow = null
    })

})

