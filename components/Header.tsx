import Logo from "./Logo"
import ThemeSwitcher from "./ThemeSwicher"

export default function Header() {
    return (
        <header className="py-6 shadow-md bg-white">
            <div className="container flex items-center justify-between">
                <Logo  />
                <ThemeSwitcher  />
            </div>
        </header>
    )
}
