
import adminController from "./controllers/admin.controller";
import express from "express";
const routerAdmin = express.Router();

// ADMIN 
routerAdmin.get('/', adminController.goHome);
routerAdmin
    .get('/login', adminController.getLogin)
    .post('/login', adminController.processLogin);
routerAdmin
    .get('/signup', adminController.getSignup)
    .post('/signup', adminController.processSignup)

routerAdmin.get("/check-me", adminController.checkAuthSession);
// PRODUCT


// USER 



export default routerAdmin;