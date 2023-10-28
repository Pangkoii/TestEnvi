import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import authRoute from "./routes/auth.js";
import restaurantsRoute from "./routes/restaurants.js";
import TablesRoute from "./routes/Tables.js";
import usersRoute from "./routes/users.js";
import cookieParser from "cookie-parser";

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
app.use(cookieParser())
app.use(express.json())
app.use("/auth", authRoute)
app.use("/users", usersRoute)
app.use("/restaurants", restaurantsRoute)
app.use("/Tables", TablesRoute)

app.listen(8800, () => {
    connect()
    console.log("Connected to back-end!");

});

