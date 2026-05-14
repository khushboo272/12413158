function NotificationCard({ item }) {

    return (

        <div className="notification-card">

            <div className="top-section">

                <h3>
                    {item.title}
                </h3>

            </div>

            <div className="bottom-section">

                <p>
                    <strong>User:</strong> {item.user_name}
                </p>

                <p>
                    <strong>Total Comments:</strong> {item.total_comments}
                </p>

            </div>

        </div>
    );
}

export default NotificationCard;