import express from "express"; // express is divided into 4 parts
import path from "path";
/** 1. ENTRANCE */
const app = express();
console.log(__dirname);
app.use(express.static(path.join(__dirname, 'public'))); //giving access to public folder
app.use(express.urlencoded({extended: true})); // giving access
app.use(express.json()); // letting upcoming json data in


/** 2. SESSIONS */


/** 3. VIEWS */
app.set('views', path.join(__dirname, "views"));
app.set("view engine", "ejs"); //telling that our engine is EJS

/** 4. ROUTERS */


export default app;    //module exports