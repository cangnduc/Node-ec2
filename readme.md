1. npm init
2. npm install body-parser dotenv ejs express
   body-parser: tối giản về việc lấy tham số từ body
   dotenv : process.env
3. npm install @babel/core @babel/node @babel/preset-env nodemon -D
   #babel : trinh bien dịch các phiên bản của javascript
   Lưu các package vào dependence
4. Cấu hình các file môi trường .babelrc .env .gitignore
5. Tạo cấu trúc thư mục gồm
   src - config - controllers - public - route - services - views
   server.js
6. setup viewEngine.js insie config
7. Create route web.js in route folder
8. setup file server.js
9. config homeController
10. install sequelize
11. install mysql2
12. install sequelize-cli
13. npx sequelize-cli model:generate --name User --attributes firstName:string,lastName:string,email:string
14. npx sequelize-cli db:migrate
15. Tạo database để test

---

sequelize.authenticate().then(() => {
console.log("Connection successfull");;
}).catch((err)=> {
console.log("Error connecting to database!");
})
Console.log("another task)

---

try {
await sequelize.authenticate();
console.log("Connection has been established successfully);
} catch (error) {
console.log("Unable to connect to the database", error);
}

---

//using both import and require
import { createRequire } from "module";
const require = createRequire(import.meta.url);

---
