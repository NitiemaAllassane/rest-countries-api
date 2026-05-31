import Logo from "./Logo"
import ThemeSwitcher from "./ThemeSwicher"

export default function Header() {
    return (
        <header>
            <div className="container">
                <Logo  />
                <ThemeSwitcher  />
            </div>
        </header>
    )
}
