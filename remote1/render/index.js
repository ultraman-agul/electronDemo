const btn = this.document.querySelector('#btn')
const BrowserWindow = require('electron').remote.BrowserWindow
window.onload = function(){
    btn.onclick = function(){
        newwin = new BrowserWindow({
            width: 300,
            height: 300,
        })
        newwin.loadFile('yellow.html')
        newwin.on('closed', ()=>{
            newwin = null
        })
    }
}

const {remote} = require('electron')
var rightTemplate = [
    {
        label: '复制',
        accelerator: 'ctrl+c'
    },
    {
        label: '粘贴',
        accelerator: 'ctrl+v'
    }
]
var m = remote.Menu.buildFromTemplate(rightTemplate)

// 注册右键菜单
window.addEventListener('contextmenu', (e)=>{
    e.preventDefault()
    m.popup({window: remote.getCurrentWindow()})
})
