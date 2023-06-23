import { Draggable } from "react-beautiful-dnd";

import React, { useContext } from "react";
import ContentContext from "../store/content-context";

import RoundCheckbox from "../UI/RoundCheckbox";
import Cross from "../assets/images/icon-cross.svg";

const ListTodo = ({ item, index, id }) => {
  const { deleteTodo, completedTodo, todos } = useContext(ContentContext);
  const deleteHandler = () => {
    deleteTodo(item.id);
  };

  const activeHandler = () => {
    completedTodo(item.id);
  };

  return (
    <Draggable
      key={id}
      draggableId={id}
      index={index}
      isDragDisabled={item.completed}
    >
      {(provided) => (
        <li
          className="min-h-[52px] w-full px-5 py-3 lg:min-h-[64px] "
          {...provided.dragHandleProps}
          {...provided.draggableProps}
          ref={provided.innerRef}
        >
          <div className="flex h-full items-center justify-center">
            <div className="w-5" onClick={activeHandler}>
              <RoundCheckbox
                active={item.completed}
                style="hover:bg-gradient-to-r hover:from-[#55DDFF] hover:to-[#C058F3]"
              />
            </div>
            <p
              className={`${
                item.completed
                  ? "text-[#D1D2DA] line-through dark:text-[#4D5067]"
                  : "dark:text-[#C8CBE7]"
              }  w-full pl-3 text-xs tracking-tighter first-letter:uppercase  lg:text-lg`}
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
      )}
    </Draggable>
  );
};

export default ListTodo;
