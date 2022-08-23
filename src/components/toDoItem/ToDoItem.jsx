import React from "react";

const ToDoItem = (props) => {
  return (
    <div className="listItem" onClick={() => {
      props.onCheck(props.id);
    }}>
      <div className="checkbox">
        <label htmlFor="item">
        <input type="checkbox" name="check" id="check" />
      </label>
      </div>
      <li>{props.text}</li>
      
      {/* <img src="./images/icon-cross.svg" alt="" /> */}
    </div>
  );
};

export default ToDoItem;
