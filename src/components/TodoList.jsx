import TodoItem from "./TodoItem";

const TodoList = ({ todos, updateTodo, removeTodo, filter }) => {
    const textToPrint = () => {
        switch (filter) {
            case "all":
                return "¡You are update!";
                break;
            case "active":
                return "¡There is nothing to do!";
                break;
            case "completed":
                return "¡There is nothing completed!";
                break;
        }
    };
    return (
        <section className="mt-5 rounded-t-md bg-white">
            {todos.length !== 0 ? (
                todos.map((todo) => (
                    <TodoItem
                        key={todo.id}
                        todo={todo}
                        updateTodo={updateTodo}
                        removeTodo={removeTodo}
                    />
                ))
            ) : (
                <article className="grid place-items-center gap-4 border-b px-5 py-4 text-gray-800">
                    {textToPrint()}
                </article>
            )}
        </section>
    );
};

export default TodoList;
