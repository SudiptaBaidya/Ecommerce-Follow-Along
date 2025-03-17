const express = require("express");

const userRouter = express.Router();
const uploadUserImage = require("../middlewares/multer");
const { usermodel } = require("../models/userModel");
const bcrypt = require("bcryptjs");

// Signup Route
userRouter.post("/signup", uploadUserImage.single("image"), async (request, response) => {
    try {
        const { name, email, password } = request.body;

        // Corrected condition for field checks
        if (!name || !email || !password) {
            return response.status(400).send({ msg: "All fields are required" });
        }

        // Corrected typo and added await
        const user = await usermodel.findOne({ email });
        if (user) {
            return response.status(200).send({ msg: "User already exists" });
        }

        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password, salt);

        // Corrected method for inserting new user
        const newUser = await usermodel.create({ name, email, password: hash });

        return response.status(200).send({ message: "User registered successfully" });
    } catch (error) {
        console.error(error);  // Useful for debugging
        return response.status(500).send({ msg: "Something went wrong!" });
    }
});

// Login Route
userRouter.post("/login", async (request, response) => {
    try {
        const { email, password } = request.body;

        if (!email || !password) {
            return response.status(400).send({ msg: "All fields are required" });
        }

        const user = await usermodel.findOne({ email });
        if (!user) {
            return response.status(401).send({ msg: "User not found" });
        }

        const matchedPass = bcrypt.compareSync(password, user.password);
        if (matchedPass) {
            return response.status(200).send({ msg: "Login successful" });
        }

        return response.status(401).send({ msg: "Invalid credentials" });
    } catch (error) {
        console.error(error);  // Useful for debugging
        return response.status(500).send({ msg: "Something went wrong!" });
    }
});

module.exports = userRouter;
