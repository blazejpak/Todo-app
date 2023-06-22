import React, { useContext } from "react";
import ContentContext from "../store/content-context";

import RoundCheckbox from "../UI/RoundCheckbox";
import Cross from "../assets/images/icon-cross.svg";

const ListTodo = ({ item }) => {
  const { deleteTodo, completedTodo } = useContext(ContentContext);

  const deleteHandler = () => {
    deleteTodo(item.id);
  };

  const activeHandler = () => {
    completedTodo(item.id);
  };

  return (
    <li className="w-full py-3 px-5 min-h-[52px] ">
      <div className="flex h-full items-center justify-center">
        <div className="w-5" onClick={activeHandler}>
          <RoundCheckbox
            active={item.completed}
            style="hover:bg-gradient-to-r hover:from-[#55DDFF] hover:to-[#C058F3]"
          />
        </div>
        <p
          className={`${
            item.completed ? "line-through text-[#D1D2DA]" : ""
          }  pl-3 w-full text-xs tracking-tighter `}
        >
          {item.task}
        </p>
        <img
          src={Cross}
          className="h-4 w-4 cursor-pointer"
          onClick={deleteHandler}
        />
      </div>
    </li>
  );
};

export default ListTodo;
