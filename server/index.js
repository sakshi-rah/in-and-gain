import express from "express"
import mongoose from "mongoose";
import dotenv, { config } from "dotenv";
dotenv.config()

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGODB_URL,()=>{
    console.log('connected to mongoose')
})

app.listen(PORT,()=>{
    console.log(`server started running on PORT ${PORT}`)
})