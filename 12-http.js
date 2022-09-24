const http=require('http')

const server = http.createServer((req,res)=>{
    if(req.url==='/'){
        res.end('Welcome to our home page')

    }
    if(req.url==='/about'){
        res.end('Here is our short history')
    }
    res.end(`
        <h1>OOPS!!</h1>
        <p>WE cannot seem to find the page you are looking for</p>
        <a href="/">back home</a>
        <a href="/about"> back to see about us</a>
    `)
})

server.listen(5000)
