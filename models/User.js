import mongoose from 'mongoose';

const { schema } = mongoose;

const EmployeeSchema = new mongoose.Schema({

        restaurant: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Restaurant',
        },

        username:{
            type: String,
            required:true,
            unique:true,
        },
        email:{
            type: String,
            required: true,
            unique: true,
        },
        password:{
            type: String,
            required: true,
        },
        name:{
            type: String,
            required:true
        },

        isAdmin: {
            type: Boolean,
            default: false,
        },
        role:
        {
        type: String,
        enum:['Kitchen', 'Manager', 'Receptionist', 'Waiter']
        },
    }, {timestamps:true}
    );

export default mongoose.model("Employee", EmployeeSchema)
