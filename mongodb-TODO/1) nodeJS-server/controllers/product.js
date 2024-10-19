const
    productModule = require('./../models/product'),
    methods = require('./../temp/methods');

async function get(req, res){
    try {
        // get data from database
        const products = await productModule.get()
        methods.response(req, res, 200, products)
        
    } catch (error) {
        methods.response(req, res, 500, error)

    }
}

const ProductsController = {
    get
}

module.exports = ProductsController