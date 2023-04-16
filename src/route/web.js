import express from "express";
import Home from "../controllers/homeController";
import upload from "../crudServices/uploadFile";

let router = express.Router();
let initWebRoutes = (app) => {
  router.get("/", Home.getHomePage);
  router.get("/adduser", Home.adduser);
  router.post("/create-user", upload.single("uploaded_file"), Home.createUser);
  return app.use("/", router);
};

export default initWebRoutes;
