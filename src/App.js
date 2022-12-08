import { Routes, Route } from "react-router-dom";


import { useState } from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import NewSubmission from './components/NewSubmission';
import HomeContainer from "./components/HomeContainer";

const App = () => {

  const [isDarkMode, setIsDarkMode] = useState(true);

  const onToggleDarkMode = () => {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  };

    return (
        <div>
            <Header 
            
            isDarkMode={isDarkMode}
             onToggleDarkMode={onToggleDarkMode} 
             />

             {/* / => Root URL*/}
            <Routes>
            
            <Route 
            exact path="/" 
            element={<Main />}>
            </Route>

            <Route
            exact path="/waifu"
            element={<WaifuPage />}>
            </Route>

            <Route
            path="/database"
            element={<HomeContainer />}>
            </Route>

            <Route
            path="/database/new"
            element={<NewSubmission />}>
            </Route>

            <Route
            path="/jikan/"
            element={<JikanPage />}>
            </Route>
            
            </Routes>

            <Footer />
        </div>
    );
};


  export default App;
  