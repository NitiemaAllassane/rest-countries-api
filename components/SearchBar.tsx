import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch } from "@fortawesome/free-solid-svg-icons"

export default function SearchBar() {
    return (
        <form className="bg-white shadow-md px-8 py-2 w-[40%]">
            <div className="flex items-center gap-6 w-full">
                <span>
                    <FontAwesomeIcon  
                        icon={faSearch}
                        className="text-lg text-grey-400"
                    />
                </span>
                <input 
                    type="text" 
                    name="countryName" 
                    id="countryName" 
                    placeholder="Search for a country..."
                    className="w-full px-2 py-2 text-grey-950 font-semibold"
                />
            </div>
        </form>
    )
}