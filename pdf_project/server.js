const express = require("express");
const app = express();
const path = require("path");
const multer = require("multer");
const { mergepdfs } = require("./merge");
const upload = multer({ dest: "uploads/" });
app.use("/static", express.static("public"));
const port = 3000;

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/index.html"));
});

app.post("/merge", upload.array("pdfs", 2), async (req, res, next) => {
  console.log(req.file);
  let d = await mergepdfs(
    path.join(__dirname, req.files[0].path),
    path.join(__dirname, req.files[1].path)
  );
  // res.send({ data: req.files });
  res.redirect(`http://localhost:3000/static/${d}.pdf`);
  // req.files is array of `photos` files
  // req.body will contain the text fields, if there were any
});

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
