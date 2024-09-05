const ProductModel = require("../model/product.model");
const codeHandler = require("./codeHandler");

async function get(req, res) {
    try {
        const products = await ProductModel.find();
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.write(JSON.stringify(products))
        res.end()

    } catch (error) {
        console.log(error);

    }
}

async function getById(req, res) {
    try {
        const [,,,id] = req.url.split('/')
        const products = await ProductModel.findById(id);
        if(!products){
            res.write(JSON.stringify({message: '404 Not Found'}))
            res.end()

        } else {
            res.write(JSON.stringify(products))
            res.end()

        }


    } catch (error) {
        console.log(error);

    }
}

async function create(req, res) {
    try {
        const products = await ProductModel.create(
            {
                id: Date.now(),
                name: 'new name',
                description: '...',
                price: 0
            }
        );
        res.writeHead(201, {'Content-Type': 'application/json'});
        res.write(JSON.stringify({message: 'product was added'}))
        res.end()

    } catch (error) {
        console.log(error);

    }
}


const productController = {
    get,
    getById,
    create,
}
module.exports = productController