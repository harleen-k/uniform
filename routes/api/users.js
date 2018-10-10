const User= require('../../db').User
const route= require('express').Router()

route.get('/',(req,res)=>{
    //all users from the database
    User.findAll()
        .then((users)=>{
            res.status(200).send(users)
        })
        .catch((err)=>{
            res.status(500).send({
                error:"Unable to retrieve users"
            })
        }) 
})

route.post('/',(req,res)=>{
    //validating phone number
    if(isNaN(req.body.Phn)){
        return res.status(403).send(()=>{
            error:"Phone is not valid"
        })
    }
    //here we are creating a new user
    User.create({
        name: req.body.name,
        Phn: parseInt(req.body.Phn),
        Address: req.body.Address,
        Email: req.body.Email,
    }).then((user)=>{
        res.status(201).send(user)
    }).catch((err)=>{
        res.status(501).send({
            error: "Could not add the user"            
        })
    })
})

exports=module.exports=route