import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { Link } from "react-router-dom";

const Activities = () => {
  const { activities } = useContext(AppContext);

  return (
    <div>
      <h2>Activities</h2>

      {activities.map((item) => (
        <div key={item.activityid} data-testid="activity-item">
          <Link to={`/activities/${item.activityid}`}>
            {item.name}
          </Link>
          <p>Steps: {item.steps}</p>
        </div>
      ))}
    </div>
  );
};

export default Activities;