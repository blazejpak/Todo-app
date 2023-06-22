import { useContext } from "react";
import ContentContext from "../store/content-context";

const FilterTodos = () => {
  const { filterTodos, typeFilter } = useContext(ContentContext);

  return (
    <div className="flex h-12 w-full bg-white rounded gap-5 justify-center items-center text-sm text-[#9495A5] font-bold ">
      <p
        onClick={() => filterTodos("all")}
        className={`${
          typeFilter === "all" ? "text-[#3A7CFD]" : ""
        } cursor-pointer caret-transparent hover:scale-105 transition-all duration-300`}
      >
        All
      </p>
      <p
        onClick={() => filterTodos("active")}
        className={`${
          typeFilter === "active" ? "text-[#3A7CFD]" : ""
        } cursor-pointer caret-transparent hover:scale-105 transition-all duration-300`}
      >
        Active
      </p>
      <p
        onClick={() => filterTodos("completed")}
        className={`${
          typeFilter === "completed" ? "text-[#3A7CFD]" : ""
        } cursor-pointer caret-transparent hover:scale-105 transition-all duration-300`}
      >
        Completed
      </p>
    </div>
  );
};

export default FilterTodos;
