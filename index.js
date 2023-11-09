const express = require('express');
const bodyParser = require('body-parser');
const cookieSession = require('cookie-session');
const authRouter = require('./controller/routes/admin/auth')
const productRouter = require('./controller/routes/user/products')
const cartsRouter = require('./controller/routes/user/carts');
const AdminproductRouter = require('./controller/routes/admin/products');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(__dirname + "/public/"));
app.use(bodyParser.urlencoded({ extended: true }));

app.use(
    cookieSession({
        keys: ['12345qwertypoiuasdlkjzm09876']
    }))

app.use(authRouter);
app.use(cartsRouter);
app.use(productRouter);
app.use(AdminproductRouter);

app.listen(port, () => {
    console.log(`Listening on ${port}`);
})
