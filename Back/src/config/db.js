const mongoose = require("mongoose");
require('dotenv').config();

const connectDB = async() => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('te conectaste a la base de datos');
    } catch (error) {
        console.log("error al conectarte a la base de datos: ", error);
        process.exit(1);
    }
}

module.exports = connectDB;