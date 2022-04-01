function ProductValidate(req, res, next) {
    const dir = req.params.dir
    let product = req.body;
    let properties;
    if (dir.toLowerCase() == 'songs') {
        properties = [
            { name: 'title', type: "string" },
            { name: 'album', type: "string" },
            { name: 'artist', type: "string" },
            { name: 'genre', type: "string" },
            { name: 'releaseDate', type: "string" }
        ];
    }
    else if (dir.toLowerCase() == 'products') {
        properties = [
            { name: 'name', type: "string" },
            { name: 'description', type: "string" },
            { name: 'category', type: "string" },
            { name: 'price', type: "number" }
        ];
    }
    else if (dir.toLowerCase() == 'movies') {
        properties = [
            { name: 'title', type: "string" },
            { name: 'director', type: "string" },
            { name: 'genre', type: "string" },
        ];
    }
    else if (dir.toLowerCase() == 'users') {
        properties = [
            { name: 'email', type: "string" },
            { name: 'password', type: "string" },
        ];
    }

    for (const property of properties) {
        if (
            product.hasOwnProperty(property.name) &&
            typeof (product[product.name] === property.type)
        ) {
            continue;
        }
        else {
            return (res.status(403).send('Product Body not Valid!'));
        }
    }
    return next();
}

module.exports = ProductValidate