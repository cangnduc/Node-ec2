import db from "../models/index";
import createUserForm from "../Services/createUser";
import loadUser from "../Services/loadUser";
import deleUser from "../Services/deleteUser";
import getUpdateUser from "../Services/updateUser";
import crudService from "../Services/crudService";
import multer from "multer";
let upload = multer().single("uploaded_file");
let getHomePage = async (req, res) => {
  let data = await loadUser();
  return res.render("homePage.ejs", { data: data });
};
let adduser = (req, res) => {
  return res.render("CRUD/addUser.ejs");
};

let createUser = async (req, res) => {
  let data = req.body;
  if (req.file === undefined) req.file = { filename: "default.png" };
  await crudService.createUser(data, req.file.filename);
  return res.redirect("/");
};
let deleteUser = async (req, res) => {
  await crudService.deleteUser(req.params.id);
  return res.redirect("/");
};
let editUser = async (req, res) => {
  if (!req.params.id) return res.redirect("/");
  let data = await db.users.findOne({ where: { id: req.params.id } });

  return res.render("CRUD/editUser.ejs", { data: data });
};
let updateUser = async (req, res) => {
  let data = req.body;
  await crudService.updateUser(data);
  return res.redirect("/");
};

//let homeController = {getHomePage}
//every object key need a value
export default { getHomePage, deleteUser, adduser, createUser, editUser, updateUser };
