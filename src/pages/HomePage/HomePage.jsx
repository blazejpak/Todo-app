import { useContext, useEffect } from "react";
import ContentContext from "../../store/content-context";

import Input from "../../components/Input";
import Header from "./Header";
import ListTodos from "../../components/ListTodos";
import FilterTodos from "../../components/FilterTodos";

const HomePage = () => {
  const { themeHandler, isDarkTheme } = useContext(ContentContext);

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme:dark)")) {
      themeHandler(true);
    } else themeHandler(false);
  }, []);

  useEffect(() => {
    if (isDarkTheme === true) {
      document.documentElement.classList.add("dark");
    } else document.documentElement.classList.remove("dark");
  }, [isDarkTheme]);

  return (
    <div className="flex flex-col items-center ">
      <Header />
      <main className="flex flex-col w-80 gap-4 ">
        <Input />
        <ListTodos />
        <FilterTodos />
      </main>
      <footer></footer>
    </div>
  );
};

export default HomePage;
