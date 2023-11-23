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
    Orders : 
    [{
        menuId: {
        type:mongoose.Schema.Types.ObjectId,
        ref: 'Menu',
    },
       itemName: {
        type:String,
        required:true,
    },
       itemPrice: {
        type:String,
        required:true,
    },
       itemStatus: {
        type: String,
        enum: ['Served', 'Preparing', 'Ready To Be Served'],
        default: 'Preparing',
    }
}]
    
});

export default mongoose.model("Orders", orderListSchema)