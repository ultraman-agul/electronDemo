var electron = require('electron')  // 引入electron
var app = electron.app  // 引入app
var BrowserWindow = electron.BrowserWindow  // 窗口引用
var mainWindow = null   // 声明要打开的主窗口

app.on('ready', () => {
    mainWindow = new BrowserWindow({
        width: 400,
        height: 500,
        webPreferences: {
            nodeIntegration: true  // node命令可以在渲染进程中使用
        }
    })
    mainWindow.loadFile('./index.html')
    mainWindow.on('closed', () => {
        mainWindow = null
    })
})