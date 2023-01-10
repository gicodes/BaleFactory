const Repository = require('./repository');

class CartsRepo extends Repository { }

module.exports = new CartsRepo('/tmp/carts.json');
