import mongoose from "mongoose";

const  FoodItemSchema = new mongoose.Schema({
     title: String,
     description: String,
     imgUrl: String,
     category: String,
     price: Number
}, {timestamps:true})

const FoodItem = mongoose.model("FoodItem", FoodItemSchema)

export default FoodItem 