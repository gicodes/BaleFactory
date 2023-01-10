const Repository = require('./repository');

class ProductsRepo extends Repository { }

module.exports = new ProductsRepo('/tmp/products.json');
