import SearchBar from "@/components/SearchBar";
import RegionFilter from "@/components/RegionFilter";
import CountryCard from "@/components/CountryCard";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { Region } from "@/lib/types";
import data from '@/data.json';



export default async function Home({ searchParams } : {
  searchParams: Promise<{
    country?: string,
    region?: Region
  }>
}) {
  const countries = data.slice();
  
  const params = await searchParams;
  const countryName = params.country ?? '';
  const region = params.region ?? '';

  
  const displayedCountries = countries.filter((country) => {
    const matchesName =
      country.name
        .toLowerCase()
        .includes(countryName.toLowerCase());

    const matchesRegion =
      region === "" || country.region === region;

    return matchesName && matchesRegion;
  });

  return (
    <div className="pb-16">
      <main className="relative">
        <div className="container">
          <section className="flex flex-col gap-12 md:gap-0 md:flex-row md:items-center md:justify-between mb-12">
            <SearchBar  />
            <RegionFilter  />
          </section>
          <section>
            {displayedCountries.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-12">
                {displayedCountries.map((country) => (
                  <CountryCard 
                    key={country.alpha3Code}
                    code={country.alpha3Code}
                    flag={country.flags.svg} 
                    name={country.name}
                    population={country.population}
                    region={country.region}
                    capital={country.capital ?? "No Capital"}
                  />
                ))}
              </div>
            ) : (
              <div 
                className="flex flex-col sm:flex-row items-center justify-center text-center py-24
                text-grey-400 dark:text-grey-50 gap-2"
              >
                <FontAwesomeIcon icon={faMagnifyingGlass} className="text-3xl" />
                <p className="text-xl">No search results found 😓!</p>
              </div>
            )}
          </section>
        </div>
        <ScrollToTopButton  />
      </main>
    </div>
  );
}
