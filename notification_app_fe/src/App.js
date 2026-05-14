import { useEffect, useState } from "react";
import "./App.css";
import NotificationCard from "./components/notification_card";
import {
    get_notifications
} from "./services/notification_service";

function App() {
    const [notifications, set_notifications] = useState([]);
    const [loading, set_loading] = useState(true);
    useEffect(() => {
        fetch_notifications();
    }, []);
    const fetch_notifications = async () => {
        const data = await get_notifications();
        if (data.success) {
            set_notifications(data.data);
        }
        set_loading(false);
    };
    return (
        <div className="container">
            <h1>
                Notification Dashboard
            </h1>
            {
                loading ?
                (
                    <h2>
                        Loading...
                    </h2>
                )
                :
                (
                    notifications.map((item) => (
                        <NotificationCard
                            key={item.post_id}
                            item={item}
                        />
                    ))
                )
            }
        </div>
    );
}
export default App;