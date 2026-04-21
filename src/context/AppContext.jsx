import { createContext, useReducer, useEffect } from "react";
import { reducer, initialState } from "./AppReducer";
import { fetchActivitiesAPI } from "../api/api";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const load = async () => {
      const data = await fetchActivitiesAPI();
      dispatch({ type: "SET_ACTIVITIES", payload: data });
    };
    load();
  }, []);

  return (
    <AppContext.Provider value={{ ...state }}>
      {children}
    </AppContext.Provider>
  );
};