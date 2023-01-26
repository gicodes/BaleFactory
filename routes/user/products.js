const express = require('express');
const productsRepo = require('../../repositories/products');
const productsIndexTemp = require('../../views/products/frontindex')


const router = express.Router();

router.get('/', async (req, res) => {
    const products = await productsRepo.getAll();

    res.send(productsIndexTemp({ products }));
})

router.get('/products'), async (req, res) => {
    const products = await productsRepo.getAll();

    // Awaiting SearchProduct
    res.send(productsIndexTemp({ products}))
}

module.exports = router;
