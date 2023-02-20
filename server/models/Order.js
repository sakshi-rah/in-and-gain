import { Schema, model } from "mongoose";

const orderSchema = new Schema({
    orderId: Number,
    tableNumber: Number,
    userId: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    items: [
        {
            name: String,
            price: Number,
            Quantity: Number,
            imgUrl: String
        }
    ]
})

const Order = model('Order', orderSchema);

export default Order