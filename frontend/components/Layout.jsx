// components/Layout.jsx
import { Button } from "@/components/ui/button";
import { useState, useEffect } from 'react';
import Quote from '@/components/Quote';

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
      <nav className="bg-background p-4 dark:bg-darkaccent max-h-12">
        <div className="container mx-auto items-center flex flex-col sm:flex-row sm:justify-left justify-center sm:justify-between text-center sm:text-left">
          <h1 className="text-4xl font-coop text-teal-950 dark:text-darktextaccent">pauliej.com</h1>
          <Button variant="nav" size="default" onClick={toggleDarkMode}>
            Theme
          </Button>
        </div>
      </nav>
      <main className="container mx-auto p-2">
        {children}
        <Quote /> {/* Include the Quote component */}
      </main>
    </div>
  );
};

export default Layout;
