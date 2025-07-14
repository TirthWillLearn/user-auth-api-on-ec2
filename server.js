const express = require("express");
const dotenv = require("dotenv");
const db = require("./config/db");
const authRoutes = require("./routes/authRoutes");

dotenv.config();
const app = express();
app.use(express.json());

(async () => {
  try {
    await db.query("SELECT 1");
    console.log("✅ MySQL DB connected");
  } catch (err) {
    console.error("❌ DB connection failed:", err.message);
  }
})();

app.get("/", (req, res) => {
  res.send("✅ Server is up and running on EC2");
});

app.use("/api/auth", authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
