import TodoComposer from "./components/TodoComposer";
import TodoList from "./components/TodoList";
import "./globals.css";
import { todoList } from "./mocks";

function App() {
  return (
    <div className="mt-20 flex flex-col items-center gap-y-10">
      <TodoComposer />
      <TodoList data={todoList} />
    </div>
  );
}

export default App;
