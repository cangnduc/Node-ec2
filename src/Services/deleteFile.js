import { unlink } from "fs";

let unlinkProise = (file) => {
  return new Promise((resolve, reject) => {
    try {
      unlink(file, (err) => {
        if (err) reject(err);
        resolve("success");
      });
    } catch (error) {
      reject(error);
    }
  });
};
export default unlinkProise;