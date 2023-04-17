var bcrypt = require("bcryptjs");
import db from "../models/index";
import unlinkProise from "./deleteFile";
let hassPassword = async (password) => {
  return new Promise(async (resolve, reject) => {
    try {
      let salt = await bcrypt.genSalt(10);
      let hash = await bcrypt.hash(password, salt);
      resolve(hash);
    } catch (error) {
      reject(error);
    }
  });
};
let createUser = async (data, fileName) => {
  return new Promise(async (resolve, reject) => {
    let hash = await hassPassword(data.password);
    try {
      await db.users.create({
        firstName: data.firstName,
        email: data.email,
        password: hash,
        phoneNumber: data.phoneNumber,
        address: data.address,
        image: fileName,
        lastName: data.lastName,
        gender: data.gender === "1" ? true : false,
        roleID: data.roleID,
      });
      resolve("success");
    } catch (error) {
      reject(error);
    }
  });
};
let loadUser = async () => {
  return new Promise(async (resolve, reject) => {
    try {
      let data = await db.users.findAll();
      resolve(data);
    } catch (error) {
      reject(error);
    }
  });
};

let deleteUser = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      let user = await db.users.findOne({ where: { id: id } });
      await unlinkProise(`./src/public/uploads/${user.image}`);
      //   try {
      //     if (user.image !== "default.png") {
      //       fs.unlinkSync(`./src/public/uploads/${user.image}`);
      //     }
      //   } catch (error) {
      //     console.log(error);
      //   }
      await db.users.destroy({ where: { id: id } });
      resolve("success");
    } catch (error) {
      reject(error);
    }
  });
};
let updateUser = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      let user = await db.users.findOne({ where: { id: data.id } });
      if (user) {
        user.firstName = data.firstName;
        user.lastName = data.lastName;
        user.email = data.email;
        user.phoneNumber = data.phoneNumber;
        user.address = data.address;
        user.gender = data.gender === "1" ? true : false;
        await user.save();
      }
      resolve("success");
    } catch (error) {
      reject(error);
    }
  });
};
export default {
  createUser,
  loadUser,
  deleteUser,
  updateUser,
};
