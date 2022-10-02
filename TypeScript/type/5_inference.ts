// 这个是联合类型
type Method = 'GET'|'POST'
function request(url: string, method: Method) {}

type Request = {
  url: string,
  method: Method
}

// const options: Request = {
//   url: "vue.js.org",
//   method: 'POST'
// }

const options = {
  url: "vue.js.org",
  method: 'POST'
} as const

request(options.url, options.method)

export {}