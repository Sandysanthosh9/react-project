const express = require("express");
const router = express.Router();
const multer = require("multer");
const menuController = require("../controllers/MenuItemController");

// Set up multer for handling file uploads
const upload = multer({ dest: "uploads/" });

// Routes
router.get("/", menuController.getAllItems);
router.post("/", upload.single("image"), menuController.addItem);

module.exports = router;
