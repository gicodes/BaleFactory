const express = require('express');
const multer = require('multer');

const { handleErrors, authUser } = require('./middlewares')
const productsRepo = require('../../repositories/products')
const productsNewTemp = require('../../views/admin/products/new')
const productsEditTemp = require('../../views/admin/products/edit')
const productsIndexTemp = require('../../views/admin/products/indexpro')
const { requireTitle, requirePrice } = require('./validators');

const router = express.Router();
const upload = multer({ storage: multer.memoryStorage() })

router.get('/admin/products', authUser,
    async (req, res) => {

        const products = await productsRepo.getAll();
        res.send(productsIndexTemp({ products }))
    });

router.get('/admin/products/new', authUser,
    (req, res) => {
        res.send(productsNewTemp({}))
    });

router.post('/admin/products/new', authUser,
    upload.single('image'),
    [requireTitle, requirePrice],
    handleErrors(productsNewTemp),
    async (req, res) => {
        const image = req.file.buffer.toString('base64');
        const { title, price } = req.body;
        await productsRepo.create({ title, price, image });

        res.redirect('/admin/products');
    });

router.get('/admin/products/:id/edit', authUser,
    async (req, res) => {
        const product = await productsRepo.getOne(req.params.id)

        if (!product) {
            return res.send('Product not found!')
        }

        res.send(productsEditTemp({ product }))
    });

router.post('/admin/products/:id/edit', authUser,
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

router.post('/admin/products/:id/delete', authUser,
    async (req, res) => {
        await productsRepo.delete(req.params.id);

        res.redirect('/admin/products')
    });

module.exports = router;