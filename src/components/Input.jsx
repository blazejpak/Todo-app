import React, { useState, useContext } from "react";
import ContentContext from "../store/content-context";

import RoundCheckbox from "../UI/RoundCheckbox";

const Input = () => {
  const { addTodo, todos } = useContext(ContentContext);

  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (value) {
      addTodo(value);
      setValue("");
    }
  };

  return (
    <form
      className="shadow h-12 flex bg-white rounded py-3 px-5  items-center gap-3 "
      onSubmit={handleSubmit}
    >
      <RoundCheckbox />
      <input
        type="text"
        value={value}
        className="w-auto bg-transparent placeholder:text-xs placeholder:tracking-tight text-base placeholder:text-[#9495A5] outline-none text-[#494C6B]"
        placeholder="Create a new todo..."
        onChange={(e) => setValue(e.target.value)}
      />
    </form>
  );
};

export default Input;
