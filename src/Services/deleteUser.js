let fs = require("fs");
import db from "../models/index";
let deleteUser = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      let user = await db.users.findOne({ where: { id: id } });
      try {
        if (user.image !== "default.png") {
          fs.unlinkSync(`./src/public/uploads/${user.image}`);
        }
      } catch (error) {
        console.log(error);
      }
      await db.users.destroy({ where: { id: id } });
      resolve("success");
    } catch (error) {
      reject(error);
    }
  });
};
export default deleteUser;
