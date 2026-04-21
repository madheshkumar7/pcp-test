import { useState, useContext } from "react";
import { AppContext } from "../context/AppContext";

const Filter = () => {
  const { activities } = useContext(AppContext);
  const [query, setQuery] = useState("");

  const filtered = activities.filter(a =>
    a.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <input
        data-testid="filter-input"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      {filtered.map(item => (
        <div key={item.activityid} data-testid="activity-item">
          {item.name}
        </div>
      ))}
    </div>
  );
};

export default Filter;