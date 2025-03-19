const express = require("express");

const productRouter = express.Router();

const productModel = require("../models/productModel");

productRouter.post("/addproduct",async(req,res)=>{
    try {
        const{title,description,price} = req.body;
        if(!title || !description || !price){
            res.status(404).send({msg:"Please add all fields" });
        }
    } catch (error) {
        return res.status(500).send({msg:"Something went wrongf",error});
    }
})