import React from "react";
import Todoitem from "./Todoitem";

import styles from "./todolist.module.css";

const Todolist = ({ todos, setTodos }) => {
  return (
    <div className={styles.list}>
      {todos.map((item) => (
        <Todoitem key={item.name} item={item} todos={todos} setTodos={setTodos} />
      ))}
    </div>
  );
};

export default Todolist;
