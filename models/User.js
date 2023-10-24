import mongoose from 'mongoose';

const { schema } = mongoose;

const EmployeeSchema = new mongoose.Schema({
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
        isAdmin:
        {
        type: Boolean,
        default: false
        },
    }, {timestamps:true}
    );

export default mongoose.model("Employee", EmployeeSchema)
