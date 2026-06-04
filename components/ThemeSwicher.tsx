'use client';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { useTheme } from "next-themes";

export default function ThemeSwitcher() {
    const { theme, setTheme } = useTheme();
    return (
        <button 
            className="flex items-center gap-2 cursor-pointer text-grey-950 dark:text-white"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
            <FontAwesomeIcon icon={faMoon} className="text-lg" />
            Dark mode
        </button>
    )
}