const express = require("express");
const router = express.Router();
const multer = require("multer");
const menuController = require("../models/MenuItem");

const upload = multer({ dest: "uploads/" });

router.get("/", menuController.getAllItems);
router.post("/", upload.single("image"), menuController.addItem);

module.exports = router;
