import express from "express";
import ViewEngine from "./config/viewEngine.js";
import initWebRoutes from "./route/web.js";
import bodyParser from "body-parser"; //hổ trợ lấy các tham số từ body
import {} from 'dotenv/config.js'; //hổ trợ lấy các tham số từ .env
//init app
let app = express();
app.use(bodyParser.urlencoded({ extended: true }));
ViewEngine(app);
initWebRoutes(app);

let port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log("App is running at port: " + port);
});