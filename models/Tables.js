import mongoose from "mongoose";
const TableSchema = new mongoose.Schema(
    {

        restaurant: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Restaurant',
        },         
        t_num: {
            type: Number,
            required: true,
            unique: true,
        },
        pax: {
            type: Number,
            required: true,
        },
        occupied: {
            type: Boolean,
            default: false,
        },
        group_id: {
            type: String,
            default: null,
        },

        OrderList: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'orderList',
        },

    });

export default mongoose.model("Tables", TableSchema)