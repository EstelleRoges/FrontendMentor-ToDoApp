import "./styles/App.scss";
import { useState } from "react";
import ToDoItem from "./components/toDoItem/ToDoItem";

function App() {
  let [list, setList] = useState(["Clean Ti'Bec's cage"]);

const handleChange = (event) => {
  const text = event.target.value;
  console.log(text);
}

const addToDoItem = (newItem) => {
  setList((prevList) => {
    return [...prevList, newItem]
  });
  console.log(list);
}

  const selectToDelete = () => {
    console.log("Preparing to delete");
  };

  const clearCompleted = () => {};

  return (
    <>
      <img
        id="backgroundImg"
        src="./images/bg-desktop-light.jpg"
        alt="bgDesktop"
      />

      <main id="toDoContent">
        <header>
          <h1>Todo</h1>
          <img src="./images/icon-moon.svg" alt="lightMode" />
        </header>

        <section id="newToDoItem">
          <form>
            <input type="checkbox" name="newToDo" id="newToDo" />
            <input type="text" name="newToDoText" id="newToDoText" value={handleChange} onChange={handleChange} onKeyDown={addToDoItem}/>
          </form>
        </section>

        <section id="toDoArea">
          <article id="toDoTable">
            {list.map((item, index) => {
              return (
                <ToDoItem key={index} text={item} onAdd={addToDoItem} onCheck={selectToDelete} />
              );
            })}
          </article>

          <aside id="options">
            <div>
              {list.length === 0 ? (
                <span>List is empty</span>
              ) : (
                <span>{list.length} items left</span>
              )}
            </div>
            <div>
              <span>All</span>
              <span>Active</span>
              <span>Completed</span>
            </div>
            <div>
              <span onClick={clearCompleted}>Clear Completed</span>
            </div>
          </aside>
        </section>
        <p>Drag and drop to reorder list</p>

        <div className="attribution">
          Challenge by
          <a
            rel="noreferrer"
            href="https://www.frontendmentor.io?ref=challenge"
            target="_blank"
          >
            Frontend Mentor
          </a>
          . Coded by
          <a
            rel="noreferrer"
            href="https://www.frontendmentor.io/profile/EstelleRoges"
            target="_blank"
          >
            Teru-san
          </a>
          .
        </div>
      </main>
    </>
  );
}

export default App;
