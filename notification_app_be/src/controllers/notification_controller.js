const path = require("path");
const {
    logger
} = require(
    path.join(
        __dirname,
        "../../../logging_middleware"
    )
);
const {
    get_users,
    get_posts,
    get_comments
} = require("../services/notification_service");

const get_notifications = async (req, res) => {
    try {
        const users = await get_users();
        const posts = await get_posts();
        const comments = await get_comments();
        
        const notifications = posts.slice(0, 10).map((post) => {
            const user = users.find(
                (item) => item.id === post.userId
            );
            
            const post_comments = comments.filter(
                (comment) => comment.postId === post.id
            );
            
            return {
                post_id: post.id,
                title: post.title,
                user_name: user?.name || "unknown",
                total_comments: post_comments.length
                
            };
        });
        await logger(
        "backend",
        "info",
        "controller",
        "notifications fetched successfully"
        );
        return res.status(200).json({
            success: true,
            total: notifications.length,
            data: notifications
        });
    }
    catch (error) {
        await logger(
            "backend",
            "error",
            "controller",
            "failed to fetch notifications"
        );
        return res.status(500).json({
            success: false,
            message: "failed to fetch notifications"
        });
    }
};

module.exports = {
    get_notifications
};