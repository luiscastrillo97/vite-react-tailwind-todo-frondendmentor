import IconCross from "./icons/IconCross";
import IconCheck from "./icons/IconCheck";

const TodoItem = ({ todo, updateTodo, removeTodo }) => {
    const { id, title, completed } = todo;
    return (
        <article className="flex items-center gap-4 border-b border-gray-300 px-5 py-4 transition-all duration-1000 dark:border-gray-700">
            {/* Aplicar padding a todos los hijos de articule [&>articule]:px-4 */}
            <button
                className={`h-5 w-5 flex-none rounded-full ${
                    completed
                        ? "grid place-items-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
                        : "inline-block border-2 border-gray-300 dark:border-gray-600"
                }`}
                onClick={() => updateTodo(id)}
            >
                {completed && <IconCheck />}
            </button>
            <p
                className={`grow ${
                    completed
                        ? "text-gray-400 line-through dark:text-gray-500"
                        : "text-gray-800 dark:text-gray-400"
                }`}
            >
                {title}
            </p>
            <button className="flex-none" onClick={() => removeTodo(id)}>
                <IconCross />
            </button>
        </article>
    );
};

export default TodoItem;
