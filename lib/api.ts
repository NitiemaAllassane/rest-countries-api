// import { Country } from "./types";


// const API_KEY = process.env.RESTCOUNTRIES_API_KEY;

// export async function getCountries() {
//     try {
//         const response = await fetch(
//             'https://api.restcountries.com/countries/v5',
//             {
//                 headers: {
//                     'Authorization': `Bearer ${API_KEY}`
//                 }
//             }
//         );

//         if (!response.ok) {
//             const apiError = await response.json();
//             throw new Error(apiError.message);
//         }
        
//         const result = await response.json();
//         const countries: Country[] = result.data.objects;
//         return countries;

//     } catch (error) {
//         console.error(error);
//         throw new Error(`Failed to fetch countries`);
//     }
// }


// export async function getCountryByCode(code: string) {
//     if (code.length !== 3) {
//         return;
//     }

//     try {
//         const response = await fetch(
//             `https://api.restcountries.com/countries/v5/codes.alpha_3/${code}`,
//             { headers: { 'Authorization': `Bearer ${API_KEY}` } }
//         );

//         if (!response.ok) {
//             const apiError = await response.json();
//             console.error(apiError.message);
//             throw new Error("Country not found");
//         }

//         const result =  await response.json();
//         const country: Country[] = result.data.objects
//         // console.log(country);

//         return country[0];

//     } catch (error) {
//         console.error(error);
//         throw new Error(`Failed to fetch country`);
//     }
// }