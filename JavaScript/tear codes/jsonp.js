let newscript = document.createElement('script')
newscript.src = "https://xxx.com?callback=fn"
document.body.appendChild(newscript)
function fn(data) {
    console.log(data)
}