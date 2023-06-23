import { useContext } from "react";
import ContentContext from "../store/content-context";

const FilterTodos = () => {
  const { filterTodos, typeFilter } = useContext(ContentContext);

  return (
    <div className="flex h-12 w-full items-center justify-center gap-5 rounded bg-white text-sm font-bold text-[#9495A5] dark:bg-[#25273D] ">
      <p
        onClick={() => filterTodos("all")}
        className={`${
          typeFilter === "all" ? "text-[#3A7CFD]" : ""
        } cursor-pointer caret-transparent transition-all duration-300 hover:scale-105`}
      >
        All
      </p>
      <p
        onClick={() => filterTodos("active")}
        className={`${
          typeFilter === "active" ? "text-[#3A7CFD]" : ""
        } cursor-pointer caret-transparent transition-all duration-300 hover:scale-105`}
      >
        Active
      </p>
      <p
        onClick={() => filterTodos("completed")}
        className={`${
          typeFilter === "completed" ? "text-[#3A7CFD]" : ""
        } cursor-pointer caret-transparent transition-all duration-300 hover:scale-105`}
      >
        Completed
      </p>
    </div>
  );
};

export default FilterTodos;
