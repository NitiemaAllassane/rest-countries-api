import { Country } from "./types";

export async function getCountries() {
    try {
        const response = await fetch(
            'https://restcountries.com/v3.1/all?fields=name,population,region,capital,flags,cca3'
        );

        if (!response.ok) {
            const apiError = await response.json();
            throw new Error(apiError.message);
        }
        
        const countries: Country[] = await response.json();
        return countries;

    } catch (error) {
        console.error(error);
        throw new Error(`Failed to fetch countries`);
    }
}


export async function getCountryByCode(code: string) {
    try {
        const response = await fetch(`https://restcountries.com/v3.1/alpha/${code}`);

        if (!response.ok) {
            const apiError = await response.json();
            console.error(apiError.message);
            throw new Error("Country not found");
        }

        const country: Country[] =  await response.json();
        console.log(country[0]);
        return country[0];

    } catch (error) {
        console.error(error);
        throw new Error(`Failed to fetch country by his code: ${error}`);
    }
}