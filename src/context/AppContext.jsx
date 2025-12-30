import { createContext, useEffect, useState } from "react";
import { dummyCourses } from "../assets/dummyDB";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const currency = import.meta.env.VITE_CURRENCY;

  const [allCourses, setAllCourses] = useState([]);

  const fetchAllCourses = async () => {
    setAllCourses(dummyCourses);
  };

  useEffect(() => {
    fetchAllCourses();
  }, []);

  const value = { currency, allCourses };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useCourse = () => useContext(AppContext);
