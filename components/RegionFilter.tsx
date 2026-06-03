export default function RegionFilter() {
    const regions = ['Africa', 'America', 'Asia', 'Europe', 'Oceania'];
    return (
        <form>
            <div>
                <select 
                    name="countryRegion" 
                    id="countryRegion" 
                    className="bg-white shadow-md px-6 py-4 text-grey-950 font-light
                    dark:bg-blue-900 dark:text-white"
                >
                    <option value="">Filter by Region</option>
                    {regions.map(region => (
                        <option 
                            key={region} 
                            value={region.toLowerCase()}
                        >
                            {region}
                        </option>
                    ))}
                </select>
            </div>
        </form>
    )
}