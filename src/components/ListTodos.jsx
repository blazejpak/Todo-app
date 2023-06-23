import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

import { useContext } from "react";
import ContentContext from "../store/content-context";

import ListTodo from "./ListTodo";

const ListTodos = () => {
  const { todos, clearCompletedTodos, typeFilter, setTodos } =
    useContext(ContentContext);

  let itemsOfTodo;
  if (typeFilter === "all") {
    itemsOfTodo = todos.map((item, index) => (
      <ListTodo id={item.id} key={item.id} item={item} index={index} />
    ));
  } else if (typeFilter === "completed") {
    itemsOfTodo = todos
      .map((item, index) => (
        <ListTodo id={item.id} key={item.id} item={item} index={index} />
      ))
      .filter((item) => item.props.item.completed === true);
  } else if (typeFilter === "active") {
    itemsOfTodo = todos
      .map((item, index) => (
        <ListTodo id={item.id} key={item.id} item={item} index={index} />
      ))
      .filter((item) => item.props.item.completed === false);
  }

  const clearCompletedHandler = () => {
    clearCompletedTodos();
  };

  const dropTodoHandler = (result) => {
    const { source, destination } = result;

    if (!destination) return;

    const reorderedTodos = [...todos];

    const sourceIndex = source.index;
    const destinationIndex = destination.index;

    const [removedTodo] = reorderedTodos.splice(sourceIndex, 1);
    reorderedTodos.splice(destinationIndex, 0, removedTodo);

    return setTodos(reorderedTodos);
  };

  return (
    <section className=" lg-[440px] flex h-96 flex-col overflow-hidden rounded-md bg-white shadow-md dark:bg-[#25273D]">
      <DragDropContext onDragEnd={dropTodoHandler}>
        <Droppable droppableId="droppable-1">
          {(provided) => (
            <ul
              {...provided.droppableProps}
              ref={provided.innerRef}
              className="divide-gray-[#E3E4F1] flex h-full w-full flex-col  divide-y overflow-auto scrollbar scrollbar-track-gray-100 scrollbar-thumb-sky-700 scrollbar-thumb-rounded-md scrollbar-w-3 hover:scrollbar-thumb-sky-800 active:scrollbar-thumb-sky-900 dark:divide-gray-500/40 dark:scrollbar-track-[#25273D] dark:scrollbar-thumb-purple-700 hover:dark:scrollbar-thumb-purple-800 active:dark:scrollbar-thumb-purple-900"
            >
              {itemsOfTodo}
              {provided.placeholder}
            </ul>
          )}
        </Droppable>
      </DragDropContext>
      <div className="flex min-h-[52px] w-full items-center justify-between border-t border-[#E3E4F1] px-5 py-3 text-xs text-[#9495A5]  dark:border-gray-500/40 dark:text-[#5B5E7E] lg:text-sm">
        <h3>
          {todos.filter((todo) => todo.completed === false).length} items left
        </h3>
        <h3
          className="cursor-pointer transition-all duration-300 hover:scale-105"
          onClick={clearCompletedHandler}
        >
          Clear Completed
        </h3>
      </div>
    </section>
  );
};

export default ListTodos;
