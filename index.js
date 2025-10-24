const express = require("express");
const bodyParser = require("body-parser");
const app = express();

// Middleware untuk parsing JSON
app.use(bodyParser.json());

// Route utama server
app.get("/", (req, res) => {
  res.send("🌑 GeoDarknes Server aktif dan berjalan! silahkan lanjut ke tahap berikut nya!");
});

// Contoh route test API
app.get("/status", (req, res) => {
  res.json({
    server: "GeoDarknes",
    status: "Online",
    version: "1.0.0"
  });
});

// Menjalankan server di port 3000
app.listen(3000, () => {
  console.log("✅ Server GeoDarknes berjalan di port 3000");
});
