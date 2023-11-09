const express = require('express');
const multer = require('multer');

const { handleErrors, authUser } = require('./middlewares')
const productsRepo = require('../../../model/repositories/products')
const productsNewTemp = require('../../../views/admin/products/new')
const productsEditTemp = require('../../../views/admin/products/edit')
const productsIndexTemp = require('../../../views/admin/products/indexpro')
const { requireTitle, requirePrice } = require('./validators');

const router = express.Router();
const upload = multer({ storage: multer.memoryStorage() })

router.get('/products', authUser,
    async (req, res) => {

        const products = await productsRepo.getAll();
        res.send(productsIndexTemp({ products }))
    });

router.get('/products/create', authUser,
    (req, res) => {
        res.send(productsNewTemp({}))
    });

router.post('/products/create', authUser,
    upload.single('image'),
    [requireTitle, requirePrice],
    handleErrors(productsNewTemp),
    async (req, res) => {
        const image = req.file.buffer.toString('base64');
        const { title, price } = req.body;
        await productsRepo.create({ title, price, image });

        res.redirect('/admin/products');
    });

router.get('/products/:id/edit', authUser,
    async (req, res) => {
        const product = await productsRepo.getOne(req.params.id)

        if (!product) {
            return res.send('Product not found!')
        }

        res.send(productsEditTemp({ product }))
    });

router.post('/products/:id/edit', authUser,
    upload.single('image'),
    [requireTitle, requirePrice],
    handleErrors(productsEditTemp, async req => {
        const product = await productsRepo.getOne(req.params.id);
        return { product }
    }),
    async (req, res) => {
        const changes = req.body;

        if (req.file) {
            changes.image = req.file.buffer.toString('base64')
        }

        try {
            await productsRepo.update(req.params.id, changes)
        }
        catch (err) {
            return res.send('Could not find item')
        }

        res.redirect('/admin/products')
    });

router.post('/products/:id/delete', authUser,
    async (req, res) => {
        await productsRepo.delete(req.params.id);

        res.redirect('/admin/products')
    });

module.exports = router;
