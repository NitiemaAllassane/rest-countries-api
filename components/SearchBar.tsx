import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch } from "@fortawesome/free-solid-svg-icons"

export default function SearchBar() {
    return (
        <form>
            <div>
                <span>
                    <FontAwesomeIcon  
                        icon={faSearch}
                    />
                </span>
                <input 
                    type="text" 
                    name="countryName" 
                    id="countryName" 
                    placeholder="Search for a country..."
                />
            </div>
        </form>
    )
}