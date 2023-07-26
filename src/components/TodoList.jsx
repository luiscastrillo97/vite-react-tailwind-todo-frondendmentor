import { Droppable, Draggable } from "@hello-pangea/dnd";
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
        <Droppable droppableId="todos">
            {(droppableProvided) => (
                <section
                    ref={droppableProvided.innerRef}
                    {...droppableProvided.droppableProps}
                    className="mt-5 overflow-hidden rounded-t-md bg-white transition-colors duration-1000 dark:bg-gray-800"
                >
                    {todos?.length ? (
                        todos.map((todo, index) => (
                            <Draggable
                                key={todo.id}
                                index={index}
                                draggableId={`${todo.id}`}
                            >
                                {(draggableProvided) => (
                                    <TodoItem
                                        ref={draggableProvided.innerRef}
                                        todo={todo}
                                        updateTodo={updateTodo}
                                        removeTodo={removeTodo}
                                        {...draggableProvided.dragHandleProps}
                                        {...draggableProvided.draggableProps}
                                    />
                                )}
                            </Draggable>
                        ))
                    ) : (
                        <article className="grid place-items-center gap-4 border-b px-5 py-4 text-gray-800 dark:border-gray-700 dark:text-gray-400">
                            {textToPrint()}
                        </article>
                    )}
                    {droppableProvided.placeholder}
                </section>
            )}
        </Droppable>
    );
};

export default TodoList;
