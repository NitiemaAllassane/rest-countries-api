import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { getCountryByCode, getCountries } from "@/lib/api";

export default async function Page({ 
    params 
}: { params: Promise<{ code: string }>}
) {
    const { code } = await params;
    const currentCountry = await getCountryByCode(code);
    const countries = await getCountries();
    
    
    return (
        <div className="text-grey-950 dark:text-white pb-16">
            <main>
                <div className="container">
                    <div>
                        <Link 
                            href={`/`}
                            className="shadow-md bg-white dark:bg-blue-900 dark:text-white px-6 py-2 rounded-sm flex items-center gap-3 w-fit"
                        >
                            <FontAwesomeIcon icon={faArrowLeft} />
                            Back
                        </Link>
                    </div>

                    <section className="flex flex-col lg:flex-row items-center gap-12 lg:gap-32 mt-16">
                        <picture className="w-full h-full lg:w-1/2">
                            <Image
                                src={currentCountry.flag.url_svg ?? ''}  
                                alt={`${currentCountry.names.common} flag image`}
                                width={450}
                                height={320}
                                className="w-full h-full object-cover"
                            />
                        </picture>
                        <div className="lg:w-1/2">
                            <h1 className="text-3xl font-extrabold mb-6">{currentCountry.names.common}</h1>
                            <div className="grid grid-cols-1 gap-12 mb-12 lg:grid-cols-2 md:gap-24 md:mb-16">
                                <ul className="flex flex-col gap-2">
                                    <li>
                                        <span className="font-semibold">Native Name:</span> {"  "}
                                        {Object.values(currentCountry.names.native ?? {})[0]?.common}
                                    </li>
                                    <li>
                                        <span className="font-semibold">Population:</span> {"  "}
                                        {currentCountry.population}
                                    </li>
                                    <li>
                                        <span className="font-semibold">Region:</span> {"  "}
                                        {currentCountry.region}
                                    </li>
                                    <li>
                                        <span className="font-semibold">Sub Region:</span> {"  "}
                                        {currentCountry.subregion ?? ''}
                                    </li>
                                    <li>
                                        <span className="font-semibold">Capital:</span> {"  "}
                                        {currentCountry.capitals?.[0]?.name ?? ''}
                                    </li>
                                </ul>

                                <ul className="flex flex-col gap-2">
                                    <li>
                                        <span className="font-semibold">Top Level Domain:</span> {"  "}
                                        {currentCountry.tlds?.[0] ?? ""}
                                    </li>
                                    <li>
                                        <span className="font-semibold">Currencies:</span> {"  "}
                                       {Object.values(currentCountry.currencies ?? {}).map(currency => currency.name).join(", ")}
                                    </li>
                                    <li>
                                        <span className="font-semibold">Languages:</span> {"  "}
                                        {Object.values(currentCountry.languages ?? {}).join(", ")}
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <div className="flex flex-wrap items-center gap-4">
                                    <span className="font-semibold">Border countries:</span>
                                    <div className="flex items-center flex-wrap gap-2">
                                        {currentCountry.borders?.map((border) => {
                                            const borderCountry = countries.find(
                                                (country) => country.codes.alpha_3 === border
                                            );
                                            
                                            return (
                                                <Link 
                                                    key={border}
                                                    href={`/country/${borderCountry?.codes.alpha_3}`}
                                                    className="shadow-md bg-white dark:bg-blue-900 dark:text-white px-4 py-1 rounded-sm flex items-center gap-3 w-fit"
                                                >
                                                    {borderCountry?.names.common ?? ''}
                                                </Link>
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </main>
        </div>
    );
}


// function BorderCountry({ countryName }: { countryName: string }) {
//     return (
//         <Link 
//             href={`/`}
//             className="shadow-md bg-white px-6 py-2 rounded-sm flex items-center gap-3 w-fit"
//         >
//             <FontAwesomeIcon icon={faArrowLeft} />
//             {countryName}
//         </Link>
//     )
// }