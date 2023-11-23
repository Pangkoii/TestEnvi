import mongoose from "mongoose";

const queueingSchema = new mongoose.Schema({
    restaurant: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Restaurant',
        required: true,
    },
    pax: {
        type: Number,
        required: true,
    },
    queuePos: {
        type: String,
        required: true,
    }
});

export default mongoose.model("Queue", queueingSchema)