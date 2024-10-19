const productsController = require('./product');
const methods = require('./../temp/methods')

function products(req, res){
    const { url, method } = req

    if (url === '/api/products/'){
        switch (method) {
            case "GET":
                productsController.get(req, res);
                break;

            default:
                methods.response(req, res, 405, {message: '405, Method Not Allowed'})
                break;
        }
        
    } else {
        methods.response(req, res, 404, {message: '404, Not Found'})

    }

}

const controller = {
    products
}

module.exports = controller