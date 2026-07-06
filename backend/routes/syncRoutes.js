const express = require("express");
const { syncCodeforces } = require("../controllers/syncController");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/", authMiddleware, syncCodeforces);

module.exports = router;