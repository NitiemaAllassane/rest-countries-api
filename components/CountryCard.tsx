import Image from "next/image";
import Link from "next/link";

interface CountryProps {
    flag: string;
    name: string;
    population: number;
    region: string;
    capital: string;
}

export default function CountryCard({
    flag,
    name,
    population,
    region,
    capital
}: CountryProps
) {
    return (
        <article className="bg-white shadow-md rounded-lg overflow-hidden">
            <Link href={`/${name}`} className="inline-block">
                <figure className="w-full">
                    <Image   
                        src={flag}
                        alt={`${name}'s flag`}
                        width={360}
                        height={235}
                        className="w-full h-full object-cover"
                    />
                </figure>

                <div className="p-6 text-grey-950">
                    <h3 className="font-extrabold text-lg mb-4">{name}</h3>
                    <ul>
                        <li>
                            <span className="font-semibold">Population:</span>{" "}
                            {population}
                        </li>
                        <li>
                            <span className="font-semibold">Region:</span>{" "}
                            {region}
                        </li>
                        <li>
                            <span className="font-semibold">Capital:</span>{" "}
                            {capital}
                        </li>
                    </ul>
                </div>
            </Link>
        </article>
    )
}