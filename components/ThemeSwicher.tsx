import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMoon } from "@fortawesome/free-solid-svg-icons"

export default function ThemeSwitcher() {
    return (
        <button>
            <FontAwesomeIcon icon={faMoon} />
            Dark mode
        </button>
    )
}