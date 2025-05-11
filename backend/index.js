const express = require('express');
require('./db/config')
const User = require('./db/users')
const Product = require('./db/Product')
const cors = require("cors")
const app = express();
const Jwt = require('jsonwebtoken');
const key = 'e-commerce' 

//middleware
app.use(express.json())
app.use(cors())

app.post('/register',async (req,res)=>{
    let user = new User(req.body)
    let result = await user.save()
    
    result = result.toObject()
    delete result.password
    Jwt.sign({result},key,{expiresIn : '2hr'},(error,token)=>{
        if(error){
            res.send({result :"No user Found"})
        }else{
            res.json({result,auth:token})
        }
    })
    
})

//login api 

app.post('/login',async (req,res)=>{
    console.warn(req.body)
    if(req.body.email && req.body.password){
        let user = await User.findOne(req.body).select("-password");
        console.log("user",user)
        if(user){
            Jwt.sign({user},key,{expiresIn : '2hr'},(error,token)=>{
                if(error){
                    res.send({result :"No user Found"})
                }else{
                    res.json({user,auth:token})
                }
            })
            
        }else{
            res.send({result :"No user Found"})
        }
    }
        else{
            res.send({result:"Details not entered"})
        }
    }
    
)


app.post('/add-product',verifyToken ,async (req,res)=>{
    let product = new Product(req.body)
    let result = await product.save()
    res.send(result)
})


app.get('/get-product',verifyToken, async (req,res)=>{
    console.log(req.params.id)
    const products = await Product.find()
    if(products.length > 0){
        res.send(products)
    }
    else{
        res.send({result:"No Product Found"})
    }

})


app.delete('/product/:id',verifyToken, async (req, res) => {
    try {
        console.log("id", req.params.id);
        const result = await Product.deleteOne({ _id: req.params.id });
        if (result.deletedCount === 1) {
            res.json("Product deleted successfully");
        } else {
            res.status(404).send("Product not found");
        }
    } catch (error) {
        console.error(error);
        res.status(500).send("An error occurred while deleting the product");
    }
});

app.get('/product/:id',verifyToken,async (req,res)=>{
    console.log("request",req)
    let result = await Product.findOne({_id:req.params.id})
    if(result){
        res.send(result)
    }else{
        res.send({result:"No result fpund"})
    }
})

app.put('/product/:id',verifyToken,async (req,res)=>{
    
let result = await Product.updateOne(
    {
        _id : req.params.id
    },
    {
        $set : req.body
    }
)
res.send(result)
})


app.get("/search/:key",verifyToken,async (req,res)=>{
    let result = await Product.find({
        "$or" : [
            { name: { $regex: req.params.key}},
            { company: { $regex: req.params.key}},
            { category: { $regex: req.params.key}}

        ]
    })
    res.send(result)
})


//middleware that has 3 arguments 
function verifyToken( req, res,next){
    let token = req.headers['authorization']
    if(token){
        token = token.split('')[1]
        console.warn("token",token)
        Jwt.verify(token,key, (error,valid)=>{
            if(error){
                res.send({result : "Please enter a valid token"})
            }else{
                next();
            }
        })

    }else{
        res.send({ result: "Please add token with header"})
    }
}

app.listen(5000)