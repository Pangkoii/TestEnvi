import mongoose from 'mongoose';

const { schema } = mongoose;

const RestaurantSchema = new mongoose.Schema({
    name:{
        type: String,
        required:true
    },
    type:{ // Fast-food | Fine-dining | Buffet | Take-out
        type: String,
        required:true,
        enum: ['Fast Food', 'Fine-Dining', 'Buffet', 'Take-out']
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
    featured: { 
        type:Boolean,
        default:false
    },
    Logo: {
        type: [String],
    },
});

export default mongoose.model("Restaurant", RestaurantSchema)
