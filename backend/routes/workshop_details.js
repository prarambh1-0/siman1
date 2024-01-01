const express = require("express");
const router = express.Router();
const pool = require("../db");
const multer = require("multer");
// const upload = multer({ dest: 'uploads/' })

// Set up multer storage
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });



router.post("/workshop-details", upload.fields([
  { name: 'attendence_sheet' },
  { name: 'pre_post_result'},
  { name: 'feedback'},
  { name: 'workshop_photos'}
]), async (req, res) => {
    try {

      const {
      workshop_name,
      date,
      lead_faculty,
      workshop_type
    } = req.body;

  
    const {
      attendence_sheet,
      pre_post_result,
      feedback,
      workshop_photos
    } = req.files;
    // console.log(req.files);
    // Convert file buffers to Buffer objects
    const attendenceSheetBuffer = Buffer.from(attendence_sheet[0].buffer);
    const prePostResultBuffer = Buffer.from(pre_post_result[0].buffer);
    const feedbackBuffer = Buffer.from(feedback[0].buffer);
    const workshopPhotosBuffer = Buffer.from(workshop_photos[0].buffer);
   
      const newWorkshopDetail = await pool.query(
        "INSERT INTO ws_detail_update (workshop_name, date, lead_faculty, workshop_type, attendence_sheet,pre_post_result, feedback, workshop_photos) VALUES($1, $2, $3, $4, $5, $6, $7,$8) RETURNING *",
        [workshop_name, date, lead_faculty, workshop_type, attendenceSheetBuffer, prePostResultBuffer, feedbackBuffer, workshopPhotosBuffer]
      );
  
      res.json(newWorkshopDetail.rows[0]);
    } catch (err) {
      console.error(err.message);
      res.status(500).json({ error: "Internal Server Error" });
    }
  });



module.exports = router;