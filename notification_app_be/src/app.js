const express = require("express");
const cors = require("cors");
const notification_routes = require("./routes/notification_routes");
const logger_middleware = require("./middleware/logger_middleware");
const app = express();
app.use(cors());
app.use(express.json());
app.use(logger_middleware);
app.get("/", (req, res) => {
    res.status(200).json({
        success: true,
        message: "notification backend running"
    });
});
app.use("/api", notification_routes);
module.exports = app;