const mongoose = require("mongoose");

const schema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    image: { type: String }
});

const usermodel = mongoose.model("users", schema);

module.exports = { usermodel };
