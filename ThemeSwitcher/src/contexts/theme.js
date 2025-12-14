import { createContext, useContext } from "react";

// 1️⃣ Create context FIRST
const ThemeContext = createContext({
  themeMode: "light",
  darkTheme: () => {},
  lightTheme: () => {},
});

// 2️⃣ Export provider
export const ThemeProvider = ThemeContext.Provider;

// 3️⃣ Custom hook (clean usage)
export function useTheme() {
  return useContext(ThemeContext);
}

// 4️⃣ Default export (optional but fine)
export default ThemeContext;
