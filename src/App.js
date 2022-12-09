import { createGlobalStyle, ThemeProvider } from "styled-components";


import { useState } from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";

const App = () => {

  // styled-components

  const [isDarkMode, setIsDarkMode] = useState(true);

  const onToggleDarkMode = () => {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  }; 

    return (
        <div className={isDarkMode ? "AppDark" : "AppLight"}>
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