import { useEffect, useRef, useState } from "react";
import IconMoon from "./icons/IconMoon";
import IconSun from "./icons/IconSun";

const initialStateDarkMode = localStorage.getItem("theme") === "dark";

const Header = () => {
    const [darkMode, setDarkMode] = useState(initialStateDarkMode);
    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [darkMode]);

    //const refHeader = useRef(null);
    //console.log(refHeader.current.classList.add("bg-gray-500"));

    return (
        <header className="container mx-auto max-w-xl px-6 pt-10">
            <section className="flex justify-between">
                <h1 className="text-3xl font-semibold uppercase tracking-[0.4em] text-white">
                    Todo
                </h1>
                <button onClick={() => setDarkMode(!darkMode)}>
                    {!darkMode ? <IconMoon /> : <IconSun />}
                </button>
            </section>
        </header>
    );
};

export default Header;
