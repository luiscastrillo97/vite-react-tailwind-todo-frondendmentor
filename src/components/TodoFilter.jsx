const TodoFilter = ({ changeFilter, filter }) => {
    return (
        <section className="container mx-auto mt-4 transition-all duration-1000">
            <article className="flex justify-center gap-6 rounded-md bg-white py-4 transition-all duration-1000 dark:bg-gray-800">
                <button
                    className={`${
                        filter === "all"
                            ? "text-blue-600"
                            : "text-gray-800 hover:text-blue-600 dark:text-gray-400 "
                    }`}
                    onClick={() => changeFilter("all")}
                >
                    All
                </button>
                <button
                    className={`${
                        filter === "active"
                            ? "text-blue-600 "
                            : "text-gray-800 hover:text-blue-600 dark:text-gray-400 "
                    }`}
                    onClick={() => changeFilter("active")}
                >
                    Active
                </button>
                <button
                    className={`${
                        filter === "completed"
                            ? "text-blue-600 "
                            : "text-gray-800 hover:text-blue-600 dark:text-gray-400"
                    }`}
                    onClick={() => changeFilter("completed")}
                >
                    Completed
                </button>
            </article>
        </section>
    );
};

export default TodoFilter;
