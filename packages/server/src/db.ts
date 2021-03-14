import PouchDB from "pouchdb-node";

const db = new PouchDB("mydb");

db.put({
  _id: "dave@gmail.com",
  name: "David",
  age: 69,
});

db.changes().on("change", function () {
  console.log("Ch-Ch-Changes");
});
