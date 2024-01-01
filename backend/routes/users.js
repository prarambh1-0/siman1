const express = require("express");
const router = express.Router();
const pool = require("../db");

router.post("/users", async (req, res) => {
    try {
      const {
        user_name,
        password
      } = req.body;
      console.log(req.body);
      const newWorkshopDetail = await pool.query(
        "INSERT INTO users(user_name,password) VALUES($1, $2) RETURNING *",[user_name,password]
      );
  
      res.json(newWorkshopDetail.rows[0]);
    } catch (err) {
      console.error(err.message);
      res.status(500).json({ error: "Internal Server Error" });
    }
  });


module.exports = router;