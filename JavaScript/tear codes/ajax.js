const xhr = new XMLHttpRequest()
xhr.open('GET')
xhr.send()
xhr.onreadystatechange = function() {
  if(xhr.readyState === 4) {
    if(xhr.status >= 200 && xhr.status < 300) {
      handle(xhr.response)
    }
  }
}
xhr.onerror = function() {
  console.log(xhr.statusText)
}