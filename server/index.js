import express from "express"
import mongoose from "mongoose";
import cors from "cors"
import dotenv from "dotenv"
dotenv.config();

import { postSignup, postLogin} from "./controllers/user.js";

const app = express();
app.use(express.json());
app.use(cors());

const connectDB = async () => {
    const conn = await mongoose.connect(process.env.MONGO_URl)
    if (conn) {
        console.log(`MongoDB connected successfully`);
    }

};
connectDB();

app.get("/", (req, res) => {
    res.json({
        message: "Welcome to Goal Tracker"
    })
})


app.post("/signup", postSignup)

app.post("/login", postLogin )








const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
})


