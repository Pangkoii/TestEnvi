import dotenv from "dotenv";
import express from "express"
import mongoose from "mongoose"
import authRoute from "./routes/auth.js"
import hotelsRoute from "./routes/hotels.js"
import roomsRoute from "./routes/rooms.js"
import usersRoute from "./routes/users.js"

dotenv.config();
const app = express();

const connect = async () => {
    try {
        await mongoose.connect(process.env.ATLAS_URI);
        console.log("Connected to mongoDB.")
    } catch(error) {
        throw error;
    }
}

mongoose.connection.on("disconnected", () =>{
    console.log("mongoDB Disconnected!")
})

// middlewares
app.use(express.json)
app.use("/auth", authRoute)
app.use("/users", usersRoute)
app.use("/hotels", hotelsRoute)
app.use("/rooms", roomsRoute)

app.listen(8800, () => {
    connect()
    console.log("Connected to back-end!");

});

