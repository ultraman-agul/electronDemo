const { remote } = require('electron')
let rightTemplate = [
    {
        label: '复制',
        accelerator: 'ctrl+c'
    },
    {
        label: '粘贴',
        accelerator: 'ctrl+v'
    }
]
let m = remote.Menu.buildFromTemplate(rightTemplate)
window.addEventListener('contextmenu', (e) => {
    e.preventDefault()
    m.popup({ window: remote.getCurrentWindow() })
})