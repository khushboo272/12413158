import { useEffect, useState } from "react";
import "./App.css";
import NotificationCard from "./components/notification_card";
import {
  get_notifications
} from "./services/notification_service";

function App() {
  const [notifications, set_notifications] = useState([]);
  const [loading, set_loading] = useState(true);
  const [error, set_error] = useState("");
  const [search, set_search] = useState("");
  useEffect(() => {
    fetch_notifications();
  }, []);
  const fetch_notifications = async () => {
    const data = await get_notifications();
    if (data.success) {
      set_notifications(data.data);
    } else {
      set_error(
        "Failed to fetch notifications"
      );
    }
    set_loading(false);
  };
  const filtered_notifications = notifications.filter(
    (item) => {
      return item.title
        .toLowerCase()
        .includes(
          search.toLowerCase()
        );
    }
  );
  return (
    <div className="container">
      <h1>
        Notification Dashboard
      </h1>
      <input
        type="text"
        placeholder="Search notifications"
        value={search}
        onChange={(event) =>
          set_search(event.target.value)
        }
        className="search-input"
      />
      {
        loading ?
          (
            <div className="loading">
              Loading notifications...
            </div>
          )
          :
          error ?
            (
              <div className="error">
                {error}
              </div>
            )
            :
            (
              filtered_notifications.map((item) => (
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