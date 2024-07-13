const express = require('express');
const dotenv = require("dotenv");
const mongoose = require('mongoose');
const cors = require('cors');

const UserModel = require("./models/userModel");
const ProfileModel = require("./models/profileModel");
const PostModel = require("./models/postModel");

const app = express();
dotenv.config();
app.use(express.json());
app.use(cors());

const connectDB = async () => {
    try {
        const connect = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Connected to MongoDB");
    } catch (err) {
        console.error("Failed to connect to MongoDB:", err);
    }
};

connectDB();

app.post('/createPost', async (req, res) => {
    const { userId, post, postDes } = req.body;

    if (!userId || !post || !postDes) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    try {
        const post = await PostModel.create({ userId, post, postDes });

        if (post) {
            res.status(201).json({ message: 'Post created successfully' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
});

app.get("/", (req, res) => {
    res.send("API is running");
});

app.post('/register', async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        throw new Error("email and password both are required");
    }
    const userExist = await UserModel.findOne({ email });
    if (userExist) {
        throw new Error("User Already exist");
    }

    else {
        const user = await UserModel.create({ email, password });
        if (user) {
            res.status(201).json({
                _id: user._id,
                email: user.email,
            });
        } else {
            res.sendStatus(400);
            throw new Error("Registration error");
        }
    }
});


app.post('/login', async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        throw new Error("email and password both are required");
    }

    const user = await UserModel.findOne({ email });
    if (user) {
        if (password == user.password) {
            res.status(201).json({
                _id: user._id,
                email: user.email,
            });
        }
        else {
            return res.status(400).json({ message: 'Password or Email is wrong' });
        }
    }
    else {
        return res.status(400).json({ message: 'User not found' });
    }
});


app.post('/profile', async (req, res) => {
    const { userId, avatar, name } = req.body;

    if (!userId || !avatar || !name) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    try {
        const profile = await ProfileModel.create({ userId, avatar, name });

        if (profile) {
            res.status(201).json({ message: 'Profile created successfully' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
});


const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log("Server is running...."));