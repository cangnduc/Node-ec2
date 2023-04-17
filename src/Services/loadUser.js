import db from "../models/index";
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
export default loadUser;
