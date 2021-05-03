let a = document.querySelector('#aHref')
let { shell } = require('electron')
a.onclick = function (e) {
    e.preventDefault()
    let href = this.getAttribute('href')
    shell.openExternal(href)
}