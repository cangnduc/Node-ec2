import db from "../models/index.js";
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
        user.save();
      }
      resolve("success");
    } catch (error) {
      reject(error);
    }
  });
};
export default updateUser;
