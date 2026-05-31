import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMoon } from "@fortawesome/free-solid-svg-icons"

export default function ThemeSwitcher() {
    return (
        <button className="flex items-center gap-2 cursor-pointer">
            <FontAwesomeIcon icon={faMoon} className="text-lg" />
            Dark mode
        </button>
    )
}