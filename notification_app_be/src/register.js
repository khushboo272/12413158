require("dotenv").config();

const {
    register_user
} = require("./services/auth_service");

const run_registration = async () => {
    const data = await register_user();

    console.log(data);
};

run_registration();