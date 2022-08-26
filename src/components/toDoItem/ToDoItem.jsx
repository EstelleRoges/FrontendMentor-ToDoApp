import { useState } from "react";

const ToDoItem = (props) => {
  const [done, isDone] = useState(false);
  const [mouse, isMouseThere] = useState(false);

  const doneTask = {
    color: "hsl(236, 9%, 61%)",
    textDecoration: "line-through",
  };

  const displayCross = () => {
    isMouseThere(true);
  };

  const hideCross = () => {
    isMouseThere(false);
  };

  return (
    <div
      className="listItem"
      onMouseEnter={displayCross}
      onMouseLeave={hideCross}
    >
      <div className={done ? "checkImage active" : "checkImage"}>
        <img src="images/icon-check.svg" alt="checked" />
      </div>
      <label htmlFor="item">
        <input
          type="checkbox"
          name="task"
          id="check"
          onClick={() => {
            props.onChecked(props.id);
            isDone(!done);
          }}
        />
      </label>
      <li style={done ? doneTask : null}>{props.text}</li>
      <img
        className={mouse ? "cross active" : "cross"}
        src="./images/icon-cross.svg"
        alt="cross"
        onClick={() => {
          props.onDelete(props.id);
        }}
      />
    </div>
  );
};

export default ToDoItem;
