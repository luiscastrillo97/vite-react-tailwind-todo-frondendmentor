import CrossIcon from "./components/icons/CrossIcon";
import MoonIcon from "./components/icons/MoonIcon";

const App = () => {
    return (
        <div className="min-h-screen bg-gray-200 bg-mobile-bg bg-contain bg-no-repeat">
            <header className="container mx-auto px-6">
                <section className="flex justify-between py-10">
                    <h1 className="text-3xl font-semibold uppercase tracking-[0.4em] text-white">
                        Todo
                    </h1>
                    <button>
                        <MoonIcon />
                    </button>
                </section>
                <form className="flex items-center gap-4 overflow-hidden rounded-md bg-white px-5 py-3">
                    <span className="inline-block h-5 w-5 rounded-full border-2"></span>
                    <input
                        type="text"
                        placeholder="Create a new todo..."
                        className="w-full text-gray-500 outline-none"
                    />
                </form>
            </header>
            <main className="container mx-auto mt-4 px-6">
                <section className="rounded-md bg-white">
                    <article className="flex items-center gap-4 border-b px-5 py-4">
                        {/* Aplicar padding a todos los hijos de articule [&>articule]:px-4 */}
                        <button className="inline-block h-5 w-5 rounded-full border-2"></button>
                        <p className="grow text-gray-700">Completed Todo app</p>
                        <button>
                            <CrossIcon />
                        </button>
                    </article>
                    <article className="flex items-center gap-4 border-b px-5 py-4">
                        <button className="inline-block h-5 w-5 rounded-full border-2"></button>
                        <p className="grow text-gray-700">Completed Todo app</p>
                        <button>
                            <CrossIcon />
                        </button>
                    </article>
                    <article className="flex items-center gap-4 border-b px-5 py-4">
                        <button className="inline-block h-5 w-5 rounded-full border-2"></button>
                        <p className="grow text-gray-700">Completed Todo app</p>
                        <button>
                            <CrossIcon />
                        </button>
                    </article>
                    <footer className="flex justify-between px-5 py-4 text-gray-500">
                        <span>5 items left</span>
                        <button>Clear Completed</button>
                    </footer>
                </section>
            </main>
            <section className="container mx-auto mt-4 px-6">
                <article className="flex justify-center gap-6 rounded-md bg-white py-4">
                    <button className="text-blue-600">All</button>
                    <button className="hover:text-blue-600">Active</button>
                    <button className="hover:text-blue-600">Completed</button>
                </article>
            </section>

            <p className="my-8 px-6 text-center text-gray-400">
                Drag and drop to reorder list
            </p>
        </div>
    );
};

export default App;
