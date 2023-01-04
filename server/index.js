import express from "express"
import mongoose from "mongoose";
import dotenv, { config } from "dotenv";
dotenv.config()

const app = express();
app.use(express.json());
mongoose.connect(process.env.MONGODB_URL,()=>{
    console.log('connected to mongoose')
})

app.listen(5000,()=>{
    console.log('server started running on PORT 5000')
})