const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");
const { response } = require("express");
//middleware
app.use(cors());
app.use(express.json());

//routes//
//create a row
// app.post("/create", async (res, req) => {
//   try {
//       const {name,dates,id}=req.body
//     const allrows = await pool.query("insert into basic_info (id,name,joining_date) values($1,$2,$3) RETURNING *",[id,name,dates]);
//     console.log('created');
//   } catch (err) {
//     console.error(err.message);
//   }
// });
//get all rows
app.get("/", async (req, res) => {
  try {
    const allrows = await pool.query("select * from basic_info");
    console.log(allrows.rows);
    res.json(allrows.rows);
  } catch (err) {
    console.error(err.message);
  }
});

//get single row
// app.get("/abhi/:id", async (res, req) => {
//   try {
//   const {id}=req.params;
//     // const onerow = await pool.query("select * from basic_info where id=$1",[id]);
//     res.send(onerow.rows[0])
//   } catch (err) {
//     console.error(err.message);
//   }
// });
// update a row
app.post("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);
    console.log("body", req.body);
    const { ids, names, dates } = req.body;
    console.log(ids, names, dates);
    console.log("hello");
    // const allrows = await pool.query(
    //   "update basic_info SET id=$1,name=$2,joining_date=$3 where id=$4",
    //   [newid, name, dates, id]
    // );
    // res.jason("update successfully");
    // console.log("row updated");
  } catch (err) {
    console.error(err.message);
  }
});
//delete a row
app.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);
    const allrows = await pool.query("delete from basic_info where id=$1", [
      id,
    ]);
    console.log("row deleted");
    res.json("deleted");
  } catch (err) {
    console.error(err.message);
  }
});
app.listen(3002, () => {
  console.log("server started on port 3002");
});
