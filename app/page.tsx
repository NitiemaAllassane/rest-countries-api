import Header from "@/components/Header";
import SearchBar from "@/components/SearchBar";
import RegionFilter from "@/components/RegionFilter";
import CountryCard from "@/components/CountryCard";
import data from '@/data.json';


export default function Home() {
  const countries = data.slice();
  return (
    <div>
      <Header   />
      
      <main>
        <div className="container">
          <section className="flex flex-col gap-12 md:gap-0 md:flex-row md:items-center md:justify-between mb-12">
            <SearchBar  />
            <RegionFilter  />
          </section>
          <section>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-12">
              {countries.map(country => (
                <CountryCard 
                  key={country.numericCode}
                  flag={country.flag} 
                  name={country.name}
                  population={country.population}
                  region={country.region}
                  capital={country.capital ?? ""}
                />
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
