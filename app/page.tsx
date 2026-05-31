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
          <section>
            <SearchBar  />
            <RegionFilter  />
          </section>
          <section>
            <div>
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
