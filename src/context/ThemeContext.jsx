import { useState } from "react";
import { createContext } from "react";
import { useContext } from "react";
import { useEffect } from "react";

const ThemeContext = createContext(null);

export const ThemeProvider = ({ children }) => {
	const [theme, setTheme] = useState(
		() => localStorage.getItem("theme") || "light"
	);

	useEffect(() => {
		document.documentElement.classList.toggle("dark", theme === "dark");
		localStorage.setItem("theme", theme);
	}, [theme]);

	const toggleTheme = () =>
		setTheme((prev) => (prev === "dark" ? "light" : "dark"));

	return (
		<ThemeContext.Provider value={{ theme, toggleTheme }}>
			{children}
		</ThemeContext.Provider>
	);
};

export const useTheme = () => useContext(ThemeContext);
