import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch } from "@fortawesome/free-solid-svg-icons"

export default function SearchBar() {
    return (
        <form 
            className="bg-white shadow-md px-8 py-2 md:w-[40%] 
            focus-within:ring-2 focus-within:ring-grey-400 dark:bg-blue-900"
        >
            <div className="flex items-center gap-6 w-full">
                <span>
                    <FontAwesomeIcon  
                        icon={faSearch}
                        className="text-lg text-grey-400 dark:text-white"
                    />
                </span>
                <input 
                    type="text" 
                    name="countryName" 
                    id="countryName" 
                    placeholder="Search for a country..."
                    className="w-full px-2 py-2 text-grey-950 dark:text-white font-semibold outline-none border-none"
                />
            </div>
        </form>
    )
}