const path = require("path");

const {
    logger
} = require(
    path.join(
        __dirname,
        "../../../logging_middleware"
    )
);

const logger_middleware = async (
    req,
    res,
    next
) => {
    try {
        await logger(
            "backend",
            "info",
            "middleware",
            `${req.method} ${req.originalUrl} endpoint triggered`
        );
    }
    catch (error) {
        console.log("middleware logger failed");
    }

    next();
};

module.exports = logger_middleware;