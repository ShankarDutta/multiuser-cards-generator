"use client";

import { MoonIcon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "../shadcnui/button";

const ThemeToggleButton = () => {
	const { theme, setTheme } = useTheme();

	return (
		<Button
			variant={"secondary"}
			onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
			className="flex cursor-pointer items-center shadow">
			<Sun
				size={28}
				className="-rotate-90 text-blue-500 opacity-100 transition-all duration-300 dark:rotate-0 dark:opacity-0"
			/>

			<MoonIcon
				size={28}
				className="absolute -rotate-90 text-fuchsia-500 opacity-0 transition-all duration-300 dark:rotate-0 dark:opacity-100"
			/>
		</Button>
	);
};

export default ThemeToggleButton;
