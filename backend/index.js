const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

//middleware

app.use(cors());
app.use(express.json()); //req.body
app.use(express.urlencoded({extended:false}))

app.use('/api',require('./routes/workshop_details.js'))
app.use('/api',require('./routes/users.js'))

// app.post("/workshop-details", async (req, res) => {
//     try {
//       const { workshop_name } = req.body;
//       const newTodo = await pool.query(
//         "INSERT INTO ws_detail_update (workshop_name) VALUES($1) RETURNING *",
//         [workshop_name]
//       );
//   
//       res.json(newTodo.rows[0]);
//     } catch (err) {
//       console.error(err.message);
//     }
//   });

app.listen(5000, () => {
  console.log("server has started on port 5000");
});
