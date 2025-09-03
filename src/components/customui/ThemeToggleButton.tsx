"use client";

import { MoonStarIcon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

const ThemeToggleButton = () => {
	const { theme, setTheme } = useTheme();

	return (
		<button
			onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
			className="mt-0.5 flex cursor-pointer items-center">
			<Sun
				size={22}
				className="-rotate-90 text-blue-500 opacity-100 transition-all duration-300 dark:rotate-0 dark:opacity-0"
			/>

			<MoonStarIcon
				size={22}
				className="absolute -rotate-90 text-fuchsia-500 opacity-0 transition-all duration-300 dark:rotate-0 dark:opacity-100"
			/>
		</button>
	);
};

export default ThemeToggleButton;
