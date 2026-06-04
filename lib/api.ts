import { Country } from "./types";

export async function getCountries() {
    const response = await fetch('https://restcountries.com/v3.1/all?fields=name,population,region,capital,flags,cca3');

    if (!response.ok) {
        const apiError = await response.json();
        console.error(apiError);

        throw new Error(apiError.message);
    }
    
    const data: Country[] = await response.json();
    return data;
}