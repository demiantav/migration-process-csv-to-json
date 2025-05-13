import mongoose from "mongoose";
import User from "../models/user.js";
import Device from "../models/device.js";

const URI = 'mongodb+srv://demiantavolaro6:Venancio92@cluster0.jx8xzrh.mongodb.net/inventarioDB?retryWrites=true&w=majority&appName=Cluster0';


console.log("Connecting to MongoDB...")

mongoose
.connect(URI)
.then(() => {
    console.log("Connection successful! :)")
})
.catch((error) => {
    console.error(error);
})

