import Logo from "./Logo"
import ThemeSwitcher from "./ThemeSwicher"

export default function Header() {
    return (
        <header className="py-8 md:py-6 shadow-md bg-white mb-12 dark:bg-blue-900">
            <div className="container flex items-center justify-between">
                <Logo  />
                <ThemeSwitcher  />
            </div>
        </header>
    )
}
