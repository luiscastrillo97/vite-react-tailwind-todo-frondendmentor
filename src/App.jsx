import { DragDropContext } from "@hello-pangea/dnd";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import TodoComputed from "./components/TodoComputed";
import TodoCreate from "./components/TodoCreate";
import TodoFilter from "./components/TodoFilter";
import TodoList from "./components/TodoList";

const initialStateTodos = JSON.parse(localStorage.getItem("todos")) || [];
const reorder = (list, startIndex, endIndex) => {
    const result = [...list];
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    return result;
};

const App = () => {
    const [todos, setTodos] = useState(initialStateTodos);

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    const createTodo = (title) => {
        const newTodo = {
            id: Date.now(),
            title: title.trim(),
            completed: false,
        };
        return setTodos([...todos, newTodo]);
    };

    const removeTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    const updateTodo = (id) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    };

    const computedItemsLeft = todos.filter((todo) => !todo.completed).length;

    const clearCompleted = () => {
        setTodos(todos.filter((todo) => !todo.completed));
    };

    const [filter, setFilter] = useState("all");

    const changeFilter = (filter) => {
        setFilter(filter);
    };

    const handleOnDragEnd = (result) => {
        const { destination, source, draggableId } = result;
        if (!destination) return;
        if (
            source.index === destination.index &&
            source.droppableId === destination.droppableId
        ) {
            return;
        }

        setTodos((prevTasks) =>
            reorder(prevTasks, source.index, destination.index)
        );
    };

    const filteredTodos = () => {
        switch (filter) {
            case "all":
                return todos.sort((a, b) => a.completed - b.completed);
            case "active":
                return todos.filter((todo) => !todo.completed);
            case "completed":
                return todos.filter((todo) => todo.completed);
        }
    };

    return (
        <div className="min-h-screen bg-gray-300 bg-mobile-light bg-contain bg-no-repeat transition-all duration-1000 dark:bg-gray-900 dark:bg-mobile-dark sm:bg-desktop-light sm:dark:bg-desktop-dark">
            <Header />

            <main className="container mx-auto max-w-xl px-6">
                <TodoCreate createTodo={createTodo} />
                <DragDropContext onDragEnd={handleOnDragEnd}>
                    <TodoList
                        todos={filteredTodos()}
                        updateTodo={updateTodo}
                        removeTodo={removeTodo}
                        filter={filter}
                    />
                </DragDropContext>
                <TodoComputed
                    computedItemsLeft={computedItemsLeft}
                    clearCompleted={clearCompleted}
                />

                <TodoFilter changeFilter={changeFilter} filter={filter} />
            </main>

            <footer className="mx-auto my-10 max-w-xl px-6 text-center text-gray-500 transition-all duration-1000 dark:text-gray-600">
                Drag and drop to reorder list
            </footer>
        </div>
    );
};

export default App;
