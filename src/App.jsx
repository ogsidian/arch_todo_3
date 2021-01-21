import React from "react";
import TodoItem from "./components/TodoItem";

const colors = ["grey", "red", "blue", "orange", "green"];

function App() {
  const inputRef = React.useRef();
  const [activeColor, setActiveColor] = React.useState("");
  const [tasks, setTasks] = React.useState([
    {
      text: "Попробовать создать ToDo",
      color: "green",
    },
    {
      text: "Сохранить задачи в массив стейта",
      color: "red",
    },
  ]);

  const removeTask = (index) => {
    setTasks(
      tasks.filter((obj, i) => {
        return index !== i;
      })
    );
  };

  const addTask = (text, color) => {
    const obj = {
      text,
      color,
    };
    setTasks([...tasks, obj]);
  };

  const addColor = (color) => {
    setActiveColor(color);
  };

  const editTask = (index) => {
    const text = tasks[index].text;
    const newTask = window.prompt("Введите ", text);
    if (newTask) {
      setTasks(tasks.map((item, i) => ({ text: index === i })));
    }
  };

  const searchEnter = (event, color) => {
    if (event.key === "Enter") {
      addTask(event.target.value, activeColor || "red");
      event.target.value = "";
    }
  };

  return (
    <div className="App">
      <div className="todo">
        <h2>Список задач</h2>
        {tasks.map((obj, index) => (
          <TodoItem
            key={obj.id}
            index={index}
            text={obj.text}
            editTask={editTask}
            removeTask={removeTask}
            color={obj.color}
          />
        ))}
        <div className="todo-input">
          <input
            type="text"
            placeholder="Текст задачи..."
            onKeyUp={searchEnter}
          />
          <ul>
            {colors.map((color) => (
              <li
                style={{ backgroundColor: `var(--${color})` }}
                className={`todo-color ${
                  activeColor === color ? "active" : ""
                }`}
                onClick={() => addColor(color)}
              ></li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
