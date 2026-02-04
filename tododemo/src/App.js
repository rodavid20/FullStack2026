import { useState } from "react";

function TodoHeader() {
  return <h1>Todo</h1>;
}

function TodoForm({ handleAdd }) {
  const [text, setText] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    handleAdd(text);
    setText("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      <button type="submit">
        Add New
      </button>
    </form>
  );
}

//const person = {name: "abc", age: 30}
//person.name
//let {p_name, p_age} = person

function Todo({ title }) {
  return (
    <li>
      <h2>{title}</h2>
    </li>
  );
}

function TodoList({ todoList }) {
  const todoListItems = todoList.map((t) => <Todo title={t.title} />);

  return <ul>{todoListItems}</ul>;
}

//const todoList = [{ title: "a" }, { title: "b" }];

function App() {
  let [todoList, setTodoList] = useState([{ title: "a" }]);
  function addTodo(newTitle) {
    setTodoList([...todoList, { title: newTitle }]);
  }

  return (
    <>
      <TodoHeader />
      <TodoForm handleAdd={addTodo} />
      <TodoList todoList={todoList} />
    </>
  );
}

export default App;
