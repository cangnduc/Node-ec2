var bcrypt = require("bcryptjs");
import db from "../models/index";
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
      await db.Users.create({
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
export default createUser;
