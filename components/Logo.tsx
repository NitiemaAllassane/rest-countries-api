import Link from "next/link";


export default function Logo() {
    return (
        <Link href="/" className="font-extrabold md:text-2xl text-grey-950 dark:text-white">
            Where in the world?
        </Link>
    );
}