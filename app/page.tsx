import SearchBar from "@/components/SearchBar";
import RegionFilter from "@/components/RegionFilter";
import CountryCard from "@/components/CountryCard";
import { getCountries } from "@/lib/api";
import ScrollToTopButton from "@/components/ScrollToTopButton";



export default async function Home() {
  const countries = await getCountries();
  return (
    <div className="pb-16">
      <main className="relative">
        <div className="container">
          <section className="flex flex-col gap-12 md:gap-0 md:flex-row md:items-center md:justify-between mb-12">
            <SearchBar  />
            <RegionFilter  />
          </section>
          <section>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-12">
              {countries.map((country) => (
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
          </section>
        </div>
        <ScrollToTopButton  />
      </main>
    </div>
  );
}
