const fs = require("fs");
// import { rename } from "fs";
const replaceThis = "raghu";
const replaceWith = "Debu";
const preview = true;
try {
  fs.readdir("data", (err, data) => {
    console.log(data);
    for (let index = 0; index < data.length; index++) {
      const item = data[index];
      let newFile = "data/" + item.replaceAll(replaceThis, replaceWith);
      if (!preview) {
        fs.rename("data/" + item, newFile, () => {
          console.log("Renamed success");
        });
      } else {
        if ("data/" + item !== newFile) {
          console.log("data/" + item + "will be renamed to " + newFile);
        }
      }
    }
  });
} catch (err) {
  console.error(err);
}
