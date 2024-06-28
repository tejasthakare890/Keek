import { Routes, Route } from "react-router-dom";
import Setss from "./settings/setting";
import SideBar from "./components/sideBar/SideBar";
import "./App.css";
import Header from "./Header/Header";
import Cards from "./Cards";
import { createContext, useState } from "react";
import { LightMode } from "@mui/icons-material";



export const ThemeContext = createContext("null");

function App() {
  const [Theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme((current) => (current === "light" ? "dark" : "light"));
  };
 

  return (
    <ThemeContext.Provider value={{ Theme, toggleTheme }}>
      <div className="app" id={Theme}>
        <div className="sidecontent">
          <SideBar />
          <Header />
          <button className="icon-button">
                        <LightMode onClick={toggleTheme} 
                                    checked={Theme === "dark"}
                                     />
                    </button>
           
          <div className="rightcontent">
            <Routes>
           <Route path="/" element={<Cards />} />
          <Route path="/managecampaigns" element={<Setss />}></Route>
          <Route path="/reportgeneration" element={<Setss />}></Route>
          <Route path="/savedlists" element={<Setss />}></Route>
          <Route path="/findinfluencers" element={<Setss />}></Route>
          <Route path="/influencersbase" element={<Setss />}></Route>
          <Route path="/settings" element={<Setss />} />
          <Route path="/hireinfluencers" element={<Setss />} />
          <Route path="/livesupport" element={<Setss />} />
            </Routes>
          </div>
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
