const express = require('express');
const { json } = require('body-parser');
const massive = require('massive');
const cors = require('cors');

const { dbUser, dbPass, database } = require('./config');

const port = 3000;
const connectionString =  `postgres://${dbUser}:${dbPass}@localhost/${database}`;
const productctrl = require('./productCtrl');

const app = express();

app.use(json());
app.use(cors());

const massiveConnection = massive(connectionString)
    .then(db => {
        app.set('db', db)
    })
    .catch(err => {
        console.log(err)
    })

app.get('/api/product/:id', productctrl.getProduct);
app.get('/api/products', productctrl.getAllProducts);
app.put('/api/product/:id', productctrl.updateProduct);
app.post('/api/product', productctrl.addProduct);
app.delete('/api/product/:id', productctrl.deleteProduct);


app.listen(port, () => {
    console.log(`Listening on the lesser port of ${port}`);
})