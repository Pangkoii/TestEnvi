import mongoose from "mongoose";

const { schema } = mongoose;

const MenuSchema = new mongoose.Schema({

    restaurant: { // To Know which restaurant Menu Belongs To
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Restaurant',
      },

    itemName: {
        type: String,
        required: true,
    },
    itemType: {
        type: String, // Appetizer | Main Course | Drinks | Dessert
        required: true,
        enum: ['Appetizer', 'Main Course', 'Drinks', 'Dessert']
    },
    meatType: { // Pork | Beef | Chicken | Seafood 
        type: String,
        required: true,
        enum: ['Pork', 'Beef', 'Chicken', 'Seafood']
    },
    itemDescription: {
        type: String,
    },
    itemAllergens: {
        type: String,
    },
    goodForPax: {
        type: String,
        required: true,
    },
    
    Status: [ // Modifiable by: Manager/Admin
        {
        Hot: 
            {
            type: Boolean, 
            default:false
            },
        Kids:
            {
            type: Boolean,
            default: false,
            },
        Spicy: {
            type:Boolean,
            default: false,
            },
        Available: {
            type: Boolean,
            default: true,
            },
        }

    ],
    itemPrice: {
        type:Number,
        required: true,
    },
    itemPhotos: { // Required for Mobile Menu
        type: [String],
        required: true,
    },

});

export default mongoose.model("Menu", MenuSchema)