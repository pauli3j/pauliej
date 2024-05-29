// components/Layout.jsx

import { useState, useEffect } from 'react';

const Layout = ({ children }) => {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <nav className="bg-gray-800 p-4 dark:bg-darkaccent">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-white dark:text-darktext">pauliej.com</h1>
          <button
            onClick={toggleDarkMode}
            className="p-2 bg-gray-300 dark:bg-darkbg text-black dark:text-darktext rounded"
          >
            Theme
          </button>
        </div>
      </nav>
      <main className="container mx-auto p-4">
        {children}
      </main>
    </div>
  );
};

export default Layout;