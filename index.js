import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import authRoute from "./routes/auth.js";
import restaurantsRoute from "./routes/restaurants.js";
import TablesRoute from "./routes/Tables.js";
import usersRoute from "./routes/users.js";
import menuRoute from "./routes/Menu.js"
import cookieParser from "cookie-parser";
import QREntryPointRoute from "./routes/QREntry.js"
import  cors from "cors";

//gusto ko na umiyak putangina end me hehehehehehehe

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

const allowedOrigins = ["http://localhost:3000/"];
const corsOptions= {
    origin: function(origin, callback) {
        if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
            callback(null,true);
        } else {
            callback(new Error("Not allowed by CORSD"));
        }
    },
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
    optionsSuccessStatus: 204,
}

// middlewares

app.use(cors(corsOptions))
app.use(cookieParser())
app.use(express.json())
app.use("/menu", menuRoute)
app.use("/qr", QREntryPointRoute)
app.use("/auth", authRoute)
app.use("/users", usersRoute)
app.use("/restaurants", restaurantsRoute)
app.use("/Tables", TablesRoute)

app.listen(8800, () => {
    connect()
    console.log("Connected to back-end!");

});

