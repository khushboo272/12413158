const axios = require("axios");

const axios_instance = axios.create({
    baseURL: "https://20.244.56.144/evaluation-service",
    timeout: 30000
});

module.exports = axios_instance; 