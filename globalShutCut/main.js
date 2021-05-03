let electron = require('electron')
let BrowserWindow = electron.BrowserWindow
let app = electron.app
let mainWindow = null
let globalShortcut = electron.globalShortcut

app.on('ready', function () {
    mainWindow = new BrowserWindow({
        width: 500,
        height: 500,
        webPreferences: {
            nodeIntegration: true,
            enableRemoteModule: true
        }
    })

    globalShortcut.register('ctrl+e', function () {
        mainWindow.loadURL('https://www.baidu.com')
    })
    // 判断快捷键是否绑定成功
    let isRegister = globalShortcut.isRegistered('ctrl+e') ? 'Register Success' : 'Register Fail';
    console.log(isRegister);

    mainWindow.loadFile('./index.html')
    mainWindow.on('closed', function () {
        mainWindow = null
    })

    // 退出应用
    app.on('will-quit', () => {
        // 注销全局快捷键
        globalShortcut.unregisterAll();
    })
})