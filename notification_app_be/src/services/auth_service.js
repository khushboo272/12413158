const axios_instance = require("../config/axios_config");

const register_user = async () => {
    try {
        const response = await axios_instance.post(
            "/register",
            {
                email: "www.khushboogupta272@gmail.com",
                name: "Khushboo Gupta",
                mobileNo: "9104619162",
                githubUsername: "khushboo272",
                rollNo: "12413158",
                accessCode: "TRvZWq"
            }
        );

        return response.data;
    }
    catch (error) {
        console.log(error.response?.data || error.message);
    }
};

module.exports = {
    register_user
};