import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import data from '@/data.json';

export default async function Page({ 
    params 
}: { params: Promise<{ code: string }>}
) {
    const { code } = await params;

    const countries = data.slice();
    const currentCountry = countries.find((country) => (country.alpha3Code === code));
    
    
    
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
                                src={currentCountry?.flags.svg ?? ''}  
                                alt={`${currentCountry?.name} flag image`}
                                width={450}
                                height={320}
                                className="w-full h-full object-cover"
                            />
                        </picture>
                        <div className="lg:w-1/2">
                            <h1 className="text-3xl font-extrabold mb-6">{currentCountry?.name}</h1>
                            <div className="grid grid-cols-1 gap-12 mb-12 lg:grid-cols-2 md:gap-24 md:mb-16">
                                <ul className="flex flex-col gap-2">
                                    <li>
                                        <span className="font-semibold">Native Name:</span> {"  "}
                                        {Object.values(currentCountry?.nativeName ?? {})}
                                    </li>
                                    <li>
                                        <span className="font-semibold">Population:</span> {"  "}
                                        {currentCountry?.population}
                                    </li>
                                    <li>
                                        <span className="font-semibold">Region:</span> {"  "}
                                        {currentCountry?.region}
                                    </li>
                                    <li>
                                        <span className="font-semibold">Sub Region:</span> {"  "}
                                        {currentCountry?.subregion ?? ''}
                                    </li>
                                    <li>
                                        <span className="font-semibold">Capital:</span> {"  "}
                                        {currentCountry?.capital ?? ''}
                                    </li>
                                </ul>

                                <ul className="flex flex-col gap-2">
                                    <li>
                                        <span className="font-semibold">Top Level Domain:</span> {"  "}
                                        {currentCountry?.topLevelDomain ?? ""}
                                    </li>
                                    <li>
                                        <span className="font-semibold">Currencies:</span> {"  "}
                                       {Object.values(currentCountry?.currencies ?? {}).map(currency => currency.name).join(", ")}
                                    </li>
                                    <li>
                                        <span className="font-semibold">Languages:</span> {"  "}
                                        {Object.values(currentCountry?.languages ?? {}).map(language => language.name).join(", ")}
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <div className="flex flex-wrap items-center gap-4">
                                    <span className="font-semibold">Border countries:</span>
                                    <div className="flex items-center flex-wrap gap-2">
                                        {currentCountry?.borders?.map((border) => {
                                            const borderCountry = countries.find((country) => country.alpha3Code === border);
                                            console.log(borderCountry);
                                            
                                            
                                            return (
                                                <Link 
                                                    key={border}
                                                    href={`/country/${border}`}
                                                    className="shadow-md bg-white dark:bg-blue-900 dark:text-white px-4 py-1 rounded-sm flex items-center gap-3 w-fit"
                                                >
                                                    {borderCountry?.name}
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