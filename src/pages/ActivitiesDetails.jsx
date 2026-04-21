import { useParams } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const ActivityDetails = () => {
  const { id } = useParams();
  const { activities } = useContext(AppContext);

  const activity = activities.find(a => a.activityid == id);

  if (!activity) return <p>Not Found</p>;

  return (
    <div>
      <h2>{activity.name}</h2>
      <p>Steps: {activity.steps}</p>
      <p>Calories: {activity.caloriesBurned}</p>
      <p>Workout Minutes: {activity.workoutminutes}</p>
    </div>
  );
};

export default ActivityDetails;