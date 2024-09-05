const http = require('http')
const products = require('./data/products')
const productController = require('./controllers/product.controller')
const PORT = 3000
const codeHandler = require('./controllers/codeHandler')

const server = http.createServer((req, res) => {

    if (req.method !== 'GET'){

        if (req.url.match(/\/api\/product\/create\//) && req.method == 'POST'){
            productController.create(req, res)

        } else {
            return codeHandler._405(req, res)

        }

    } else {
        if (req.url === '/'){
            res.writeHead(200, {'Content-Type': 'text/plain'})
            res.end('Welcome')
                
        } else if (req.url.match(/\/api\/product\/[0-9]\//)){
            productController.getById(req, res)

        } else if (req.url.match(/\/api\/product\/all\//)){
            productController.getById(req, res)
    
        } else {
            codeHandler._404(req, res)
    
        }
    }


}).listen(PORT, () => {
    console.log('Server started!')

})