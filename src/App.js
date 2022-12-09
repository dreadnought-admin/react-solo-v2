import { createGlobalStyle, ThemeProvider } from "styled-components";


import { useState } from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";

const App = () => {

  // styled-components

  const [isSakura, setIsSakuraMode] = useState(true);

  const onToggleSakuraMode = () => {
    setIsSakuraMode((isSakura) => !isSakura);
  }; 

    return (
        <div className={isSakura ? "AppDark" : "AppLight"}>
            <Header 
            isSakura={isSakura}
             onToggleSakuraMode={onToggleSakuraMode} 
             />
            <Main />
            <Footer />
        </div>
    );
};


  export default App;