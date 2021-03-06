const http = require('http')

const server = http.createServer((req, res) => {
  if (req.url == '/') {
    res.writeHead(200, { 'content-type': 'text/html' })
    res.write('<h1>Home Page</h1>')
    res.end()
  } else if (req.url == '/contact') {
    res.writeHead(200, { 'content-type': 'text/plain' })
    res.write('Contact Page')
    res.end()
  } else {
    res.writeHead(404, { 'content-type': 'text/html' })
    res.write('<h1>Not Found</h1>')
    res.end()
  }
})

server.listen(5000)