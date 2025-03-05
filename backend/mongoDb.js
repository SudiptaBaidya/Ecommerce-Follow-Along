const mongoose = require("mongoose");
 async function connect(){
    try{
        await mongoose.connect("mongodb+srv://SudiptaBaidya:8731832415Su@cluster0.kkcb0.mongodb.net/")
    
    } catch(error) {
        console.log("MongoDB connection error", error);
    }
 }

 module.exports = connect;