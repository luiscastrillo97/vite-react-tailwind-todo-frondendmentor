const TodoComputed = ({ computedItemsLeft, clearCompleted }) => {
    return (
        <section className="flex justify-between rounded-b-md bg-white px-5 py-4 text-gray-600 transition-all duration-1000 dark:bg-gray-800 dark:text-gray-500">
            <span>{computedItemsLeft} items left</span>
            <button onClick={clearCompleted}>Clear Completed</button>
        </section>
    );
};

export default TodoComputed;
