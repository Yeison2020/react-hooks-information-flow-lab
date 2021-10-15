import React, { useState } from "react";
import itemData from "../data/items";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  function onDarkModeClick() {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  }

  return (
    <>
      <Header
        onDarkModeClick={onDarkModeClick}
        isDarkMode={isDarkMode}
        items={itemData}
      ></Header>
    </>
  );
}

export default App;
