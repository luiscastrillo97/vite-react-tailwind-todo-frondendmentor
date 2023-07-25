import { useState } from "react";
import Header from "./components/Header";
import TodoComputed from "./components/TodoComputed";
import TodoCreate from "./components/TodoCreate";
import TodoFilter from "./components/TodoFilter";
import TodoList from "./components/TodoList";

const initialStateTodos = [];

const App = () => {
    const [todos, setTodos] = useState(initialStateTodos);

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

    const filteredTodos = () => {
        switch (filter) {
            case "all":
                return todos;
                break;
            case "active":
                return todos.filter((todo) => !todo.completed);
                break;
            case "completed":
                return todos.filter((todo) => todo.completed);
                break;
        }
    };

    return (
        <div className="min-h-screen bg-gray-300 bg-mobile-light bg-contain bg-no-repeat sm:bg-desktop-light">
            <Header />

            <main className="container mx-auto px-6">
                <TodoCreate createTodo={createTodo} />

                <TodoList
                    todos={filteredTodos()}
                    updateTodo={updateTodo}
                    removeTodo={removeTodo}
                    filter={filter}
                />

                <TodoComputed
                    computedItemsLeft={computedItemsLeft}
                    clearCompleted={clearCompleted}
                />

                <TodoFilter changeFilter={changeFilter} filter={filter} />
            </main>

            <footer className="my-10 px-6 text-center text-gray-500">
                Drag and drop to reorder list
            </footer>
        </div>
    );
};

export default App;
