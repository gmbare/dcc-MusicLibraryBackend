
const express = require('express');
const repoContext = require('./repository/repository-wrapper');
const ProductValidate = require('./middleware/product-validation.js')
const app = express();

//Middleware
app.use(express.json())
app.use(express.urlencoded({extended:true}));


//Endpoints

app.get("/api/:dir", (req, res) => {
    const dir = req.params.dir
    const requestedInfo = repoContext[dir].findAll();
    // const requestedInfo = testSwitch(dir.toLowerCase())
    return(res.send(requestedInfo))
});


app.get("/api/:dir/:id", (req, res) => {
    const dir = req.params.dir
    const id = req.params.id;
    // const requestedInfo = testSwitch(dir.toLowerCase())
    const products = repoContext[dir].findById(id);
    return(res.send(products))
});

app.post("/api/:dir",[ProductValidate], (req, res) => {
    const dir = req.params.dir;
    const newProduct = req.body;
    const addedProduct = repoContext[dir].create(newProduct);
    // const addedProduct = repoContext.products.createProduct(newProduct);
    return (res.status(201).send(addedProduct))
});

app.put("/api/:dir/:id",[ProductValidate], (req, res) => {
    const dir = req.params.dir;
    const id = parseInt(req.params.id);
    const productPropertiesToModify = req.body;
    const updateProduct = repoContext[dir].update(id, productPropertiesToModify);
    return (res.status(201).send(updateProduct))
});




//starting a server
const PORT = process.env.PORT || 5010;


app.listen(PORT, () => {
    console.log(`Server running, Garett! on PORT: ${PORT}`);
});