import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Stats = () => {
  const { activities } = useContext(AppContext);

  const totalActivites = activities.length;

  const goalAchievedCount = activities.filter(a => a.goalachived).length;

  const goalNotAchievedCount = activities.filter(a => !a.goalachived).length;

  // REQUIRED
  window.appState = {
    totalActivites,
    goalAchievedCount,
    goalNotAchievedCount
  };

  return (
    <div>
      <h2 data-testid="total-activities">{totalActivites}</h2>
      <h2 data-testid="goal-achived">{goalAchievedCount}</h2>
      <h2 data-testid="goal-not-achieved">{goalNotAchievedCount}</h2>
    </div>
  );
};

export default Stats;