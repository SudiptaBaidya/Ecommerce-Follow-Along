const mongoose = require("mongoose");

async function connect() {
    try {
       await mongoose.connect("mongodb+srv://nezareeen:2gj4mJ2VXzYqDdFH@cluster0.6svfy.mongodb.net/");
    }
    catch (error){
        console.log("MongoDB error",error);
    }
}

module.exports ={userImage};