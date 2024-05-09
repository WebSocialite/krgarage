import express from "express"; // express is divided into 4 parts
import path from "path";
import router from "./router";
import routerAdmin from "./router-admin";
import morgan from "morgan";
import { MORGAN_FORMAT } from "./libs/config";
import session from "express-session";
import ConnectMongoDB from "connect-mongodb-session";

const MongoDBStore = ConnectMongoDB(session);
const store = new MongoDBStore({
    uri: String(process.env.MONGO_URL),
    collection: "sessions",

});

/** 1. ENTRANCE */
const app = express();
console.log(__dirname);
app.use(express.static(path.join(__dirname, 'public'))); //giving access to public folder
app.use(express.urlencoded({extended: true})); // giving access
app.use(express.json()); // letting upcoming json data in
app.use(morgan(MORGAN_FORMAT));

/** 2. SESSIONS */
app.use(
    session({
        secret: String(process.env.SESSION_SECRET),
        cookie: {
            maxAge: 1000 * 3600 * 3, //3h cookie yashash muddati
        },
        store: store,
        resave: true, // if false 10:00 => 13:00 no matter what it will kill session on browser
        saveUninitialized: true 
    })
);


/** 3. VIEWS */
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs"); //telling that our engine is EJS

/** 4. ROUTERS */
app.use('/admin', routerAdmin );  // BSSR : EJS
app.use('/', router);             // SPA :REACT 

export default app;    //module exports