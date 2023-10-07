const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors= require("cors");
const bcrypt=require("bcryptjs");

app.use(cors());
app.use(express.json())

const mongoUrl = ""; //ur database

mongoose.connect(mongoUrl, {
    useNewUrlParser: true
}).then(() => { console.log("Connected to database"); })
    .catch(e => console.log(e));

app.listen(5000, () => {
    console.log("Server Started");
})

require("./userDetails");

const User = mongoose.model("UserInfo");

app.post("/register",async(req,res) => {
    const { email, password } = req.body;
    
    const encryptedPassword=await bcrypt.hash(password,10);

    try {
        const oldUser = await User.findOne({ email });

        if (oldUser) {
            return res.json('Email already exists');
        }
        await User.create({
            email,
            password: encryptedPassword ,
        })
        res.send({status:"Ok"})
    } catch (error) {
        res.send({status:"error"})
    }
})