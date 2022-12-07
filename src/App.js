import { BrowserRouter as Router, Switch, useLocation } from "react-router-dom";

import { useState, useEffect } from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";

const App = () => {

  const [isDarkMode, setIsDarkMode] = useState(true);

  const onToggleDarkMode = () => {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  };

    return (
        <div>
            <Header 
            key={1}
            isDarkMode={isDarkMode}
             onToggleDarkMode={onToggleDarkMode} 
             />

            <Main key={2}/>
            <Footer key={3}/>
        </div>
    );
};


  export default App;
  