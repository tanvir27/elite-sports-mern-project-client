import React from 'react';

import MainLayout from '../../Layout/MainLayout';

const ToggleTheme = () => {
     const [theme, setTheme] = useState("dark");

     const toggleTheme = () => {
       const newTheme = theme === "dark" ? "light" : "dark";
       setTheme(newTheme);
     };

    return (
      <div className={`app ${theme}`}>
        <MainLayout toggleTheme={toggleTheme} />
      </div>
    );
};

export default ToggleTheme;