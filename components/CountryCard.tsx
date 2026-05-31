import Image from "next/image"

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
        <article>
            <div>
                <figure>
                    <Image   
                        src={flag}
                        alt={`${name}'s flag`}
                        width={360}
                        height={210}
                    />
                </figure>

                <div>
                    <h3>{name}</h3>
                    <ul>
                        <li>
                            <span>Population:</span>{" "}
                            {population}
                        </li>
                        <li>
                            <span>Region:</span>{" "}
                            {region}
                        </li>
                        <li>
                            <span>Capital:</span>{" "}
                            {capital}
                        </li>
                    </ul>
                </div>
            </div>
        </article>
    )
}