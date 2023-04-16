import db from "../models/index";
import createUserForm from "../crudServices/hassPassword";
import multer from "multer";
let upload = multer().single("uploaded_file");
let getHomePage = async (req, res) => {
  let data;
  try {
    data = await db.Users.findAll();
    //console.log(data[0]['dataValues'])
  } catch (error) {
    console.log(error);
  }
  return res.render("homePage.ejs", { data: data });
};
let adduser = (req, res) => {
  return res.render("CRUD/addUser.ejs");
};

let createUser = async (req, res) => {
  let data = req.body;
  let hash = await createUserForm(data, req.file.filename);
  return res.redirect("/");
};

//let homeController = {getHomePage}
//every object key need a value
export default { getHomePage, adduser, createUser };
