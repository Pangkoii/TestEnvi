import mongoose from "mongoose";
const TableSchema = new mongoose.Schema(
    {
        t_num: {
            type: Number,
            required: true,
            unique: true,
        },
        pax: {
            type: Number,
            required: true,
        //  Merged with(?): [t_num]
        },
        occupied: {
            type: Boolean,
            default: false,
        },
        group_id: {
            type: String,
            default: null,
        },
/**
    // Per resto has its own table with its own property: (Nested Document I guess? Tables should have: 
    // PAX - [Capacity] and _ID or TNum - [Unique Table identifier])
    Tables:  [
        {
        t_num:String, //Table number / code
        pax:Number, // max amount of customers   
        occupied:Boolean,
    //    merged: [{t_num:number}, {t_num:number}]
    }],
 */

    });

export default mongoose.model("Tables", TableSchema)