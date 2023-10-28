import mongoose from 'mongoose';

const { schema } = mongoose;

const RestaurantSchema = new mongoose.Schema({
    name:{
        type: String,
        required:true
    },
    type:{ // Fast-food | Fine-dining | Buffet | Take-out
        type: String,
        required:true
    },
    city:{
        type: String,
        required:true
    },
    address:{
        type: String,
        required:true
    },
    distance:{
        type: String,
        required:true
    },
    photos:{ // Include menu [?]
        type: [String],
    },
    desc:{ 
        type: String,
        required:true
    },
    rating:{
        type: Number,
        min: 0,
        max: 5
    },

    // Per resto has its own table with its own property: (Nested Document I guess? Tables should have: 
    // PAX - [Capacity] and _ID or TNum - [Unique Table identifier])
    Tables:  [
        {
        t_num:String, //Table number / code
        pax:Number, // max amount of customers   
        occupied:Boolean,
    //    merged: [{t_num:number}, {t_num:number}]
    }],
    
    featured: { 
        type:Boolean,
        default:false
    }
});

export default mongoose.model("Restaurant", RestaurantSchema)
