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
      className="flex h-12 items-center gap-3 rounded-md bg-white  px-5 py-3  shadow dark:bg-[#25273D] lg:h-16"
      onSubmit={handleSubmit}
    >
      <RoundCheckbox />
      <input
        type="text"
        value={value}
        className="w-auto bg-transparent text-base text-[#494C6B] outline-none placeholder:text-xs placeholder:tracking-tight placeholder:text-[#9495A5] dark:text-[#C8CBE7] lg:text-lg lg:placeholder:text-lg"
        placeholder="Create a new todo..."
        onChange={(e) => setValue(e.target.value)}
      />
    </form>
  );
};

export default Input;
