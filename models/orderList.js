import mongoose from "mongoose";

const { schema } = mongoose;

const orderListSchema = new mongoose.Schema({
    restaurant: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Restaurant',
      },

    Table: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Tables',
    },
    itemName: {
        type:String,
        required:true,
    },
    itemQuantity: {
        type:Number,
        required:true,
    },
    itemPrice: {
        type:String,
        required:true,
    }
});

export default mongoose.model("Orders", orderListSchema)