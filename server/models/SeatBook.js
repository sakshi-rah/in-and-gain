import {model,Schema} from "mongoose";

const SeatBookSchema = new Schema({
    tableNumber : Number,
    booked : Boolean,
    bookedBy : {
        type: Schema.Types.ObjectId,
        ref:"User"
    }
})

const Table = model('Table', SeatBookSchema);

export default Table 