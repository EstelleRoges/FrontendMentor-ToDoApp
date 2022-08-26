import "./styles/App.scss";
import { useState } from "react";
import ToDoItem from "./components/toDoItem/ToDoItem";

function App() {
  const [list, setList] = useState([]);
  const [newToDo, setNewToDo] = useState("");
  const [toDelete, setToDelete] = useState([]);

  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(count + 1);
  };

  const handleChange = (event) => {
    setNewToDo(event.target.value);
  };

  const addToDoItem = (event) => {
    if (event.keyCode === 13) {
      setList((prevList) => {
        return [...prevList, newToDo];
      });
      setNewToDo("");
    }
  };

  const selectToDelete = (id) => {
    increase();
    setToDelete((prevDeleteList) => {
        for(let i = 0; i <= toDelete.length; i++) {
          if(prevDeleteList[i] === id) {
            return prevDeleteList.splice(i, 1);
      } else {
        return [...prevDeleteList, id];
          }
        }
      });
    //   if (toDelete.includes(id)) {
    //     return prevDeleteList.filter((item, index) => {
    //       return index !== id;
    //     });
    // });
    console.log(toDelete);
  };

  const deleteItem = (id) => {
    setList((prevList) => {
      return prevList.filter((item, index) => {
        return index !== id;
      });
    });
  };
  const clearCompleted = () => {
    // console.log(list);
    console.log(toDelete);
    // for(let i = 0; i < list.length; i++) {
    //   if(list[i] === toDelete[i]) {
    //     console.log(list[i]);
    //   }
    // }
    // setList((prevList, toDelete) => {
    //   return prevList.filter((toDeleteItem, index) => {
    //     console.log(toDelete);
    //     return index !== toDelete;
    //   })
    // })
  };

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
          <input type="radio" name="newToDo" id="newToDo" />
          <input
            type="text"
            name="toDoText"
            id="toDoText"
            value={newToDo}
            onChange={handleChange}
            onKeyDown={addToDoItem}
            placeholder="Create a new todo..."
          />
        </section>

        <section id="toDoArea">
          <article id="toDoTable">
            {list.map((item, index) => {
              return (
                <ToDoItem
                  key={index}
                  id={index}
                  text={item}
                  onChecked={selectToDelete}
                  onDelete={deleteItem}
                />
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
