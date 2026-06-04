'use client';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowUp } from "@fortawesome/free-solid-svg-icons"
import { useState, useEffect } from "react";

export default function ScrollToTopButton() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setVisible(window.scrollY > 300);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    if (!visible) return null;


    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }


    return (
        <button 
            className="fixed bottom-4 right-6  bg-blue-900 text-white 
            dark:bg-white dark:text-grey-950 w-12 h-12 rounded-full cursor-pointer shadow-lg"
            onClick={scrollToTop}
        >
            <FontAwesomeIcon icon={faArrowUp} className="font-extrabold text-lg"  />
        </button>
    )
}