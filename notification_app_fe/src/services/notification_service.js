import axios from "axios";
const BASE_URL = "http://localhost:3000";
export const get_notifications = async () => {
    try {
        const response = await axios.get(
            `${BASE_URL}/api/notifications`
        );
        return response.data;
    } catch (error) {
        console.log(error);
        return {
            success: false,
            data: []
        };
    }
};