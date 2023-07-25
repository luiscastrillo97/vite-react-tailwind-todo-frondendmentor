import IconMoon from "./icons/IconMoon";

const Header = () => {
    return (
        <header className="container mx-auto px-6 pt-10">
            <section className="flex justify-between">
                <h1 className="text-3xl font-semibold uppercase tracking-[0.4em] text-white">
                    Todo
                </h1>
                <button>
                    <IconMoon />
                </button>
            </section>
        </header>
    );
};

export default Header;
