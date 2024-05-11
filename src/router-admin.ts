
import adminController from "./controllers/admin.controller";
import express from "express";
import productController from "./controllers/product.controller";
import makeUploader from "./libs/utils/uploader";
const routerAdmin = express.Router();

// ADMIN 
routerAdmin.get('/', adminController.goHome);
routerAdmin
    .get('/login', adminController.getLogin)
    .post('/login', adminController.processLogin);
routerAdmin
    .get('/signup', adminController.getSignup)
    .post('/signup',makeUploader("members").single("memberImage"), // uploading a single file while signingUP
     adminController.processSignup);
routerAdmin.get("/logout", adminController.logout);
routerAdmin.get("/check-me", adminController.checkAuthSession);


// PRODUCT
routerAdmin.get("/product/all", adminController.verifyAdmin, 
productController.getAllProducts);
routerAdmin.post("/product/create", adminController.verifyAdmin,
// uploadProductImage.single("productImage"),
makeUploader("products").array("productImages", 5),  // maximum 5 file upload is possible
productController.createNewProduct);
routerAdmin.post("/product/:id", adminController.verifyAdmin,
productController.updateChosenProduct);
// USER 

routerAdmin.get("/user/all", adminController.verifyAdmin, adminController.getUsers)
routerAdmin.get("/user/edit", adminController.verifyAdmin, adminController.updateChosenUser)


export default routerAdmin;