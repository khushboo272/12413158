function NotificationCard({ item }) {
    return (
        <div className="notification-card">
            <h3>
                {item.title}
            </h3>
            <p>
                User: {item.user_name}
            </p>
            <p>
                Total Comments: {item.total_comments}
            </p>
        </div>
    );
}
export default NotificationCard;