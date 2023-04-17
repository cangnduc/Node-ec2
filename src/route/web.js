import express from "express";
import Home from "../controllers/homeController";
import upload from "../Services/uploadFile";

let router = express.Router();
let initWebRoutes = (app) => {
  router.get("/", Home.getHomePage);
  router.get("/adduser", Home.adduser);
  router.post("/create-user", upload.single("uploaded_file"), Home.createUser);
  router.post("/delete-user/:id", Home.deleteUser);
  router.get("/edit-user/:id", Home.editUser);
  router.post("/edit-user/update-user", Home.updateUser);
  return app.use("/", router);
};

export default initWebRoutes;
