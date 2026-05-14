const express = require("express");

const {
    get_notifications
} = require("../controllers/notification_controller");

const router = express.Router();

router.get(
    "/notifications",
    get_notifications
);

module.exports = router;