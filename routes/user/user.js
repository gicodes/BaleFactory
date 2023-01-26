const express = require('express');
const cartsRepo = require('../../repositories/carts');
const productsRepo = require('../../repositories/products')
const cartShowTemplate = require('../../views/carts/show');

const router = express.Router();

router.get('/user/:id', async (req, res) => {
    
})