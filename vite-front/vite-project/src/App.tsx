
import { createContext, useState } from "react";
import Navbar from "./components/neutron/Navbar";
import Student from "./components/neutron/body/Student";
import Department from "./components/neutron/body/Department";
import Socre from "./components/neutron/body/Socre";
import Course from "./components/neutron/body/course";

interface AppContextValue {
  isExpanded: boolean;
  toggleExpanded: () => void;
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const AppContext = createContext<AppContextValue | null>(null);



function App() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  function toggleExpanded() {
    setIsExpanded(!isExpanded);
  }

  function toggleDarkMode() {
    setIsDarkMode(!isDarkMode);
  }

  return (
    <>
      <AppContext.Provider value={{ isExpanded, toggleExpanded, isDarkMode, toggleDarkMode }}>
        <Navbar />
        <Student />
        <Socre />
        <Course />
        <Department />
      </AppContext.Provider>
    </>
  )
}

export default App;
export { AppContext };





