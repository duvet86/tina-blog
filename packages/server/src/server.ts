import path from "path";
import express from "express";
import compression from "compression";
import PouchDB from "pouchdb";
import exprPouch from "express-pouchdb";

const app = express();
const port = process.env.PORT || 8080;

app.use(compression());

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../../client/build")));
}

app.use("/db", exprPouch(PouchDB));

const db = new PouchDB("posts");

// const post = {
//   _id: new Date().toISOString(),
//   date: Date.now(),
//   title: "First Post",
//   body: "This is my first post.",
// };

if (process.env.NODE_ENV === "production") {
  app.get("*", function (_, res) {
    res.sendFile(path.join(__dirname, "../../client/build/index.html"));
  });
}

app.get("/clear", function (_, res) {
  db.destroy()
    .then(() => {
      res.end();
    })
    .catch((err) => res.status(500).json(err));
});

// db.put(post).then(() => {
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
// });
