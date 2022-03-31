function ProductValidate(req, res, next){
let product = req.body;
let properties = [
    {name:'title', type:"string"},
    {name:'album', type:"string"},
    {name:'artist', type:"string"},
    {name:'genre', type:"string"},
    {name:'releasedate', type:"string"}
];

for (const property of properties){
    if (
        product.hasOwnProperty(property.name) &&
        typeof (product[product.name] === property.type)
    ) {
        continue;
    }
    else{
        return(res.status(403).send('Product Body not Valid!'));
    }
}
return next();
}

module.exports = ProductValidate