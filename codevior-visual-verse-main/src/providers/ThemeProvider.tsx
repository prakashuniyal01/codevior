
import React, { createContext, useState, useContext, useEffect } from "react";

type Theme = "light" | "dim" | "dark";

type ThemeContextType = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>(() => {
    // Try to get the theme from local storage
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("codevior-theme") as Theme | null;
      
      // If there's a saved theme, use it
      if (savedTheme) {
        return savedTheme;
      }
      
      // If no saved theme, check for system preference
      if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        return "dark";
      }
    }
    
    // Default to light mode
    return "light";
  });

  useEffect(() => {
    // Update class on the html element
    document.documentElement.classList.remove("light", "dim", "dark");
    document.documentElement.classList.add(theme);
    
    // Save the theme to local storage
    localStorage.setItem("codevior-theme", theme);
  }, [theme]);

  const contextValue = {
    theme,
    setTheme,
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
