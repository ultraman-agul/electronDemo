var fs = require('fs')

window.onload = function () {
    var btn = this.document.querySelector('#btn')
    var hello = this.document.querySelector('.hello')
    btn.onclick = () => {
        fs.readFile('name.txt', (err, data) => {
            hello.innerHTML = data
        })
    }
}