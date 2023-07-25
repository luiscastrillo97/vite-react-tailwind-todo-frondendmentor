const TodoFilter = ({ changeFilter, filter }) => {
    return (
        <section className="container mx-auto mt-4">
            <article className="flex justify-center gap-6 rounded-md bg-white py-4">
                <button
                    className={`${
                        filter === "all"
                            ? "text-blue-600 "
                            : "text-gray-800 hover:text-blue-600 "
                    }`}
                    onClick={() => changeFilter("all")}
                >
                    All
                </button>
                <button
                    className={`${
                        filter === "active"
                            ? "text-blue-600 "
                            : "text-gray-800 hover:text-blue-600 "
                    }`}
                    onClick={() => changeFilter("active")}
                >
                    Active
                </button>
                <button
                    className={`${
                        filter === "completed"
                            ? "text-blue-600 "
                            : "text-gray-800 hover:text-blue-600 "
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
