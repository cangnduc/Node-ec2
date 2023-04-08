import express from "express";
import Home from "../controllers/homeController.js";
let router = express.Router();
let initWebRoutes = (app) => {
    router.get("/",Home.getHomePage);
    router.get("/about",Home.getAboutPage);
    return app.use("/", router);
}

export default initWebRoutes;
