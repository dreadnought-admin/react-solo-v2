import { BrowserRouter as Router, Switch, useLocation } from "react-router-dom";

import { useState } from "react";

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
            isDarkMode={isDarkMode}
             onToggleDarkMode={onToggleDarkMode} 
             />

            <Main />
            <Footer />
        </div>
    );
};


  export default App;