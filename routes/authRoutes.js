const db = require("../config/db");
const express = require("express");
const router = express.Router();
const { registerUser, getAllUsers } = require("../controllers/authController");

router.post("/register", registerUser);
router.get("/users", getAllUsers);

router.get("/test", (req, res) => {
  res.json({ message: "✅ Test route working fine" });
});


module.exports = router;
