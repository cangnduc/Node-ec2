import express from "express";
import ViewEngine from "./config/viewEngine.js";
import initWebRoutes from "./route/web.js";
//import webapp from "./route/web.js";
import bodyParser from "body-parser"; //hổ trợ lấy các tham số từ body
import connectDB from "./config/connectDB.js";
require("dotenv").config(); //hổ trợ lấy các tham số từ .env
//init app
let app = express();
app.use(bodyParser.urlencoded({ extended: true }));
ViewEngine(app);
initWebRoutes(app);

let port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log("App is running at port: " + port);
});