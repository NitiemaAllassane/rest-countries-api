export default function RegionFilter() {
    const regions = ['Africa', 'America', 'Asia', 'Europa', 'Oceania'];
    return (
        <form>
            <div>
                <select name="countryRegion" id="countryRegion">
                    <option value="">Filter by Region</option>
                    {regions.map(region => (
                        <option key={region} value={region.toLowerCase()}>{region}</option>
                    ))}
                </select>
            </div>
        </form>
    )
}