const axios = require("axios");
const log_config = require(
    "./constants/log_config"
);
let access_token = "";
const set_access_token = (token) => {
    access_token = token;
};
const logger = async (
    stack,
    level,
    package_name,
    message
) => {
    try {
        if (!access_token) {
            console.log(
                "logger token unavailable"
            );
            return;
        }
        const response = await axios.post(
            `${log_config.base_url}${log_config.log_endpoint}`,
            {
                stack,
                level,
                package: package_name,
                message
            },
            {
                headers: {
                    Authorization: `Bearer ${access_token}`
                },
                timeout: 10000
            }
        );
        return response.data;
    } catch (error) {
        console.log(
            error.response?.data ||
            error.message
        );
    }
};

module.exports = {
    logger,
    set_access_token
};