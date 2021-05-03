const { Menu, BrowserWindow } = require('electron')
const template = [
    {
        label: '前端开发',
        submenu: [
            {
                label: 'HTML',
                accelerator: 'ctrl+n',
                click: function () {
                    let newWin = new BrowserWindow({
                        width: 300,
                        height: 300,
                        webPreferences: { nodeIntegration: true }
                    })
                    newWin.loadFile('yellow.html')
                    newWin.on('closed', () => { newWin = null })
                }
            },
            { label: 'css' },
            { label: 'js' }
        ]
    },
    {
        label: '后端开发',
        submenu: [
            { label: 'java' },
            { label: 'python' }
        ]
    }
]

let m = Menu.buildFromTemplate(template)
Menu.setApplicationMenu(m)