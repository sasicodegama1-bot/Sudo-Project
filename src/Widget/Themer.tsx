import React, { useEffect, useState } from 'react'

const Themer = () => {
  const [theme, setTheme] = useState("light");

  // Load saved theme
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);
  // Apply + save theme
  useEffect(() => {
    const root = document.documentElement;

    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }

    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === "light" ? "dark" : "light"));
  };

  return (
    <>
      <button
        onClick={toggleTheme}
        className="px-4 py-2 bg-gray-200 dark:bg-gray-800 dark:text-white rounded"
      >
        {theme === "light" ? "🌞 Light" : "🌙 Dark"}
      </button>
    </>
  )
}

export default Themer