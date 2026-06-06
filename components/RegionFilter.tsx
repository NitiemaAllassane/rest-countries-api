'use client';

import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { Region } from "@/lib/types";

export default function RegionFilter() {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();


    const regions: Region[] = ['Africa', 'America', 'Asia', 'Europe', 'Oceania'];


    function handleFilter(region: Region) {
        const params = new URLSearchParams(searchParams);

        if (region) {
            params.set('region', region);
        } else {
            params.delete('region');
        }

        replace(`${pathname}?${params.toString()}`);
    }
    return (
        <form>
            <div>
                <select 
                    name="countryRegion" 
                    id="countryRegion" 
                    className="bg-white shadow-md px-6 py-4 text-grey-950 font-light
                    dark:bg-blue-900 dark:text-white"
                    onChange={(e) => handleFilter(e.target.value as Region)}
                    defaultValue={searchParams.get('region')?.toString()}
                >
                    <option value="">Filter by Region</option>
                    {regions.map(region => (
                        <option 
                            key={region} 
                            value={region}
                        >
                            {region}
                        </option>
                    ))}
                </select>
            </div>
        </form>
    )
}