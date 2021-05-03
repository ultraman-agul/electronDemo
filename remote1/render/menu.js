const { Menu, BrowserWindow } = require('electron')

//菜单模板
var template = [
    {
        label: '天上人间洗浴中心',
        submenu: [
            {
                label: '搓澡',
                click: ()=>{   // 点击事件
                    newwin = new BrowserWindow({
                        width: 300,
                        height: 300,
                    })
                    newwin.loadFile('yellow.html')
                    newwin.on('closed', ()=>{
                        newwin = null
                    })
                },
                accelerator: 'ctrl+n'   // 快捷键
            },
            {label: '按摩'}
        ]
    },
    {
        label: '浪淘沙洗浴中心',
        submenu: [
            {label: '爱情拍拍手'},
            {label: '芜湖起飞'}
        ]
    }
]

var m = Menu.buildFromTemplate(template)

Menu.setApplicationMenu(m)