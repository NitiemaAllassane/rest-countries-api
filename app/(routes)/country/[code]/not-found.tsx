import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";

export default function NotFound () {
    return (
        <main>
            <div className="container">
                <section className="text-center py-36">
                    <h1 className="text-grey-950 dark:text-white text-xl md:text-3xl font-semibold mb-3">
                        404 not found 😓
                    </h1>
                    <p className="mb-4 dark:text-white text-grey-950">It seems that this country does not exist</p>
                    <Link 
                        href={"/"}
                        className="shadow-md bg-white dark:bg-blue-900 
                        dark:text-white px-3 py-2 rounded-lg cursor-pointer inline-flex items-center
                        gap-2"
                    >
                        <FontAwesomeIcon icon={faHouse} />
                        Go home
                    </Link>
                </section>
            </div>
        </main>
    )
}