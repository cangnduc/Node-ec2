//import expess from 'express';
import express from 'express';
//generate viewEngine
let configViewEngine = (app) => {
    app.use(express.static("./src/public"));
    app.set("view engine", "ejs");
    // tất cả các file ejs đều nằm trong thư mục views
    app.set("views", "./src/views");
}
export default configViewEngine;
