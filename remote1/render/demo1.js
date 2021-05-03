const ahref = this.document.querySelector('#aHref')
const { shell } = require('electron')
ahref.onclick = function(e){
    e.preventDefault()
    var href = this.getAttribute('href')
    shell.openExternal(href)
}

const btn = this.document.querySelector('#btn')
btn.onclick = ()=>{
    window.open('https://www.baidu.com/')
}

const child = this.document.querySelector('#openchild')
child.onclick = function(){
    window.open('./child.html')
}

window.addEventListener('message', (msg)=>{
    const box = this.document.querySelector('.box')
    box.innerHTML = JSON.stringify(msg.data)
})