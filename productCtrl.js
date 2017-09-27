
const getProduct = (req, res, next) => {
    const db = req.app.get('db');

    db.getProduct([req.params.id])
        .then(response => {
            res.json(response)
        })
}
const getAllProducts = (req, res, next) => {
    const db = req.app.get('db');

    db.getAllProducts()
        .then(response => {
            res.json(response)
        })
        .catch(err => {
            console.log(err)
        })
}
const updateProduct = (req, res, next) => {
    const db = req.app.get('db');

    db.updateProduct([req.params.id, req.query.desc])
        .then(response => {
            res.json(response)
        })
        .catch(err => {
            console.log(err)
        })
}
const addProduct = (req, res, next) => {
    const db = req.app.get('db');
    const { name, description, price, imageurl} = req.body
    console.log(name, description, price, imageurl)
    db.addProduct([name, description, price, imageurl])
        .then(response => {
            res.send(response)
        })
        .catch(err => {
            console.log(err)
        })
}
const deleteProduct = (req, res, next) => {
    const db = req.app.get('db');

    db.deleteProduct([req.params.id])
        .then(response => {
            res.json(response)
        })
        .catch(err => {
            console.log(err)
        })
}

module.exports = {
    getProduct,
    getAllProducts,
    updateProduct,
    addProduct,
    deleteProduct
}