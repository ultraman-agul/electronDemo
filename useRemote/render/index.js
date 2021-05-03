const BrowserWindow = require('electron').remote.BrowserWindow
const btn = document.querySelector('button')
const hw = document.querySelector('h1')
window.onload = function () {
    btn.onclick = function () {
        hw.innerHTML = "潘金华"
        const newWin = new BrowserWindow({
            width: 400,
            height: 400
        })
        newWin.loadFile('yellow.html')
        newWin.on('close', () => {
            newWin = null
        })
    }
}
