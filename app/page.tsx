import SearchBar from "@/components/SearchBar";
import RegionFilter from "@/components/RegionFilter";
import CountryCard from "@/components/CountryCard";
import { getCountries } from "@/lib/api";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";



export default async function Home({ searchParams } : {
  searchParams: Promise<{
    country?: string
  }>
}) {
  const countries = await getCountries();

  const params = await searchParams;
  const countryName = params.country ?? '';
  const filteredCountriesByName = countries.filter((country) => (country.name.common.toLowerCase().includes(countryName)));

  const displayedCountries = countryName === "" ? countries : filteredCountriesByName;

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
                    key={country.cca3}
                    flag={country.flags.svg} 
                    name={country.name.common}
                    population={country.population}
                    region={country.region}
                    capital={country.capital?.[0] ?? "No Capital"}
                  />
                ))}
              </div>
            ) : (
              <div 
                className="flex items-center justify-center text-center py-24
                text-grey-400 dark:text-grey-50 gap-2"
              >
                <FontAwesomeIcon icon={faMagnifyingGlass} className="text-3xl" />
                <p className="text-3xl">No results found!</p>
              </div>
            )}
          </section>
        </div>
        <ScrollToTopButton  />
      </main>
    </div>
  );
}
