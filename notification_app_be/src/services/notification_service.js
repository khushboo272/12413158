const axios = require("axios");

const get_users = async () => {
    const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
    );

    return response.data;
};

const get_posts = async () => {
    const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
    );

    return response.data;
};

const get_comments = async () => {
    const response = await axios.get(
        "https://jsonplaceholder.typicode.com/comments"
    );

    return response.data;
};

module.exports = {
    get_users,
    get_posts,
    get_comments
};