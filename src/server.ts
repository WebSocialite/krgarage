                             //  moduleJS  =>  import moment from "moment";   
                              // commonJS => const moment = require('moment');
import dotenv from 'dotenv';
dotenv.config();
import mongoose from 'mongoose';
import app from './app';


mongoose
.connect(process.env.MONGO_URL as string, {}) // connection to the database
.then((data) => {
    console.log("MongoDB connection succeed");
    const PORT = process.env.PORT ?? 3005;
    app.listen(PORT, function () {
        console.info(`The server is running successfully on port : http://localhost:${PORT}`);
        console.info(`Admin project on http://localhost:${PORT}/admin \n`);
    });
})
.catch(err => console.log("ERROR on connection MongoDB", err));
