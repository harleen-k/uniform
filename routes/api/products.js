const Product=require('../../db').Product
const route = require('express').Router()

route.get('/',(req,res)=>{
    //Get all products
    Product.findAll()
        .then((products)=>{
            res.status(200).send(products)
        })
        .catch((err)=>{
            res.status(500).send({
                error: "Could not retrieve the products"
            })
        })
})

route.post('/',(req,res)=>{
    // validate value
    if(isNaN(req.body.price)){
        return res.status(403).send(()=>{
            error:"Price is not a valid number"
        })
    }
    //Adding a product
    Product.create({
        name:req.body.name,
        schoolname:req.body.schoolname,
        price:parseFloat(req.body.price),
    }).then((product)=>{
        res.status(201).send(product)
    }).catch((err)=>{
        res.status(501).send(()=>{
            error:"Could not add the product"
        })
    })
})

exports = module.exports = route 