import express from "express"
import mongoose from "mongoose";
import dotenv, { config } from "dotenv";
import User from "./models/User.js";
import FoodItem from "./models/FoodItem.js"
import SeatBook from "./models/SeatBook.js";
import Order from "./models/Order.js";
dotenv.config()



const app = express();
app.use(express.json());

const PORT = process.env.PORT || 5000;


mongoose.connect(process.env.MONGODB_URL, () => {
    console.log('connected to mongoose')
})

//signup routes
app.post('/signup', async (req, res) => {
    const { name, email, phone, password, role } = req.body;
    //validation for all field fillor not is starts 
    const emptyFields = [];

    if (!name) emptyFields.push('name');
    if (!email) emptyFields.push('email');
    if (!password) emptyFields.push('password');
    if (!phone) emptyFields.push('phone');
    if (!role) emptyFields.push('role');

    if (emptyFields.length > 0) {
        return res.json({
            success: false,
            message: `${emptyFields.join(', ')} are require`
        })
    }
    //validation for all field fillor not  ends

    //validation to check if email already exists starts 
    const existingUser = await User.findOne({ email: email });
    if (existingUser) {
        return res.json({
            success: false,
            message: "Email already exists "
        })
    }
    //validation to check if email already exists ends

    //validation to check if phone already exists starts 
    const existingUserPhone = await User.findOne({ phone: phone });
    if (existingUserPhone) {
        return res.json({
            success: false,
            message: "Phone already exists "
        })
    }
    //validation to check if email already exists ends
    const user = new User({
        name: name,
        email: email,
        phone: phone,
        password: password,
        role: role
    })

    const savedUser = await user.save();
    res.json({
        success: true,
        message: "User created successfully",
        data: savedUser
    })
})

//login routes
app.post('/login', async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.json({
            success: false,
            message: "Email and Password are required"
        })
    }

    const existingUser = await User.findOne({ email: email, password: password });
    if (existingUser) {
        return res.json({
            success: true,
            message: "Login successful",
            data: existingUser
        })
    }
    else {
        return res.json({
            success: false,
            message: "Invalid email or password",
        })
    }
})

//create fooditems api
app.post('/createFoodItems', async (req, res) => {
    const { title, description, imgUrl, category, price } = req.body;

    const foodItem = new FoodItem({
        title: title,
        description: description,
        imgUrl: imgUrl,
        category: category,
        price: price
    })

    const saveFoodItem = await foodItem.save();

    res.json({
        success: true,
        description: "Food Item created successfully",
        data: saveFoodItem
    })
})
//search food items api route by category
app.get('/foodItemByCategory', async (req, res) => {
    const { category } = req.query;

    const foodItems = await FoodItem.find({
        category: { $regex: category, $options: 'i' }
    })

    res.json({
        success: true,
        description: "Food Items Fatch Successfully",
        data: foodItems
    })
})

//search food items api route by title
app.get('/foodItemByTitle', async (req, res) => {
    const { title } = req.query;

    const foodItems = await FoodItem.find({
        title: { $regex: title, $options: 'i' }
    })

    res.json({
        success: true,
        description: "Food Items Fatch Successfully",
        data: foodItems
    })
})

// seatBook model api of createTable
app.post('/createTable', async (req, res) => {
    const { tableNumber } = req.body;

    const existingTable = await SeatBook.findOne({ tableNumber: tableNumber });
    if (existingTable) {
        return res.json({
            success: false,
            message: "Table already booked"
        })
    }
    const seatBook = new SeatBook({
        tableNumber: tableNumber,
        booked: false,

    })

    const savedSeatBook = await seatBook.save();

    res.json({
        success: true,
        message: "Table created successfully",
        data: savedSeatBook
    })
})

//booktable api route

app.post('/bookTable', async (req, res) => {
    const { tableNumber, userId } = req.body;

    const existingTable = await SeatBook.findOne({ tableNumber: tableNumber });
    if (existingTable && existingTable.booked) {
        return res.json({
            success: false,
            message: "Table already booked"
        })
    }
        if (existingTable) {
            existingTable.booked = true;
            existingTable.userId = userId;
            await existingTable.save();
        }
        
        res.json({
            success : true,
            message:"Table booked successfully",
            data: existingTable
        })
   
})

//unbooktable api route
app.post('/unBookTable', async (req, res) => {
    const { tableNumber } = req.body;

    const existingTable = await SeatBook.findOne({ tableNumber: tableNumber });
    if(existingTable){
        existingTable.booked= false;
        existingTable.bookedBy = null;
        await existingTable.save();
    }
    res.json({
        success: true,
        message:"Table unbooked successfully",
        data: existingTable
    })
})
//availabletables api route
app.get('/availableTables',async(req,res)=>{
   const availableTables = await SeatBook.find({ booked: false});

   res.json({
    success: true,
    message: "Available tables found successfully",
    data: availableTables
   })
})
app.listen(PORT, () => {
    console.log(`server started running on PORT ${PORT}`);
})