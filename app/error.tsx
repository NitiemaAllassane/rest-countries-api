'use client';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRotateRight } from "@fortawesome/free-solid-svg-icons";

export default function Error({
    error,
    reset
}: {
    error: Error,
    reset: () => void;
}) {
    return (
        <main>
            <div className="container">
                <section className="text-center py-36">
                    <h1 className="text-grey-950 dark:text-white text-xl md:text-3xl font-semibold mb-6">
                        Oops! {error.message} 😓
                    </h1>
                   
                    <button 
                        className="shadow-md bg-white dark:bg-blue-900 
                        dark:text-white px-3 py-2 rounded-lg cursor-pointer inline-flex items-center
                        gap-2"

                        onClick={() => reset()}
                    >
                        <FontAwesomeIcon icon={faRotateRight} />
                        Try again
                    </button>
                </section>
            </div>
        </main>
    )
}