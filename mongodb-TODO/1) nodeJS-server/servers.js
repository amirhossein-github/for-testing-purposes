'use strict';

const
    http = require('http'),
    methods = require('./temp/methods'),
    controller = require('./controllers/controller')

const
    PORT = 3000,
    SERVER = http.createServer(server).listen(PORT); // eventListener()

function server(req, res){
    const { url } = req

    switch (true) {

        // "/"
        case /^\/$/.test(url):
            methods.response(req, res, 200, {message: 'Welcome'})
            break;

        // "/api/products/.*": Routing
        case /\/api\/products\/.*/.test(url):
            controller.products(req, res)
            break
            
        // Every thing else
        default:
            methods.response(req, res, 404, {message: '404, Not Found'})
            break;
        
    }

}