const User = require("../models/user_model");
const bcrypt = require("bcryptjs");

const home = async (req, res) => {
    try {
        res.status(200).json("Welcome Boss..!");
    } catch (error) {
        res.status(500).json({ message: "Error at home" });
    }
};

const register = async (req, res) => {
    try {
        const { username, password, phone, email } = req.body;
        const userExist = await User.findOne({ email });
        if (userExist) {
            return res.status(400).json({ message: "email already exists" });
        }
        const userCreated = await User.create({ username, email, phone, password });
        res.status(201).json({
            msg: "registration successful",
            token: await userCreated.generateToken(),
            userId: userCreated._id.toString(),
        });
    } catch (error) {
        res.status(500).json({ message: "Internal server error" });
    }
};

const login = async (req, res) => {
    try {
        const { password, email } = req.body;
        const userExist = await User.findOne({ email });
        if (!userExist) {
            return res.status(400).json({ message: "Invalid Credentials" });
        }

        const user = await userExist.comparePassword(password);

        if (user) {
            res.status(200).json({
                msg: "Login Successful",
                token: await userExist.generateToken(),
                userId: userExist._id.toString(),
            });
        } else { res.status(401).json({ message: "Invalid email or password" }); }
    } catch (error) {
        res.status(500).json({ message: "Internal server error" });
    }
};

const user = async (req, res) => {
    try {
        const userData = req.user;
        return res.status(200).json({msg:userData});
    } catch (error) {
        console.log("Internal server error to getting user data form database", error);
    }
}

module.exports = { home, register, login, user };
