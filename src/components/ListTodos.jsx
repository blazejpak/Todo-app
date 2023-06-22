import { useContext } from "react";
import ContentContext from "../store/content-context";

import ListTodo from "./ListTodo";

const ListTodos = () => {
  const { todos, clearCompletedTodos, typeFilter } = useContext(ContentContext);

  let itemsOfTodo;
  if (typeFilter === "all") {
    itemsOfTodo = todos.map((item) => <ListTodo key={item.id} item={item} />);
  } else if (typeFilter === "completed") {
    itemsOfTodo = todos
      .map((item) => <ListTodo key={item.id} item={item} />)
      .filter((item) => item.props.item.completed === true);
  } else if (typeFilter === "active") {
    itemsOfTodo = todos
      .map((item) => <ListTodo key={item.id} item={item} />)
      .filter((item) => item.props.item.completed === false);
  }

  const clearCompletedHandler = () => {
    clearCompletedTodos();
  };

  return (
    <section className="shadow-md h-96 bg-white rounded flex flex-col">
      <ul className="flex flex-col w-full  h-full divide-y divide-gray-[#E3E4F1] ">
        {itemsOfTodo}
        <div className="h-[1px] w-full bg-[#E3E4F1] "></div>
      </ul>
      <div className="w-full py-3 px-5 min-h-[52px] text-[#9495A5] text-xs flex justify-between">
        <p>{todos.length} items left</p>
        <p
          className="cursor-pointer hover:scale-105 transition-all duration-300"
          onClick={clearCompletedHandler}
        >
          Clear Completed
        </p>
      </div>
    </section>
  );
};

export default ListTodos;
