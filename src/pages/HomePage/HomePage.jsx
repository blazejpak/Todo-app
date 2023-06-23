import { useContext, useEffect } from "react";
import ContentContext from "../../store/content-context";

import Input from "../../components/Input";
import Header from "./Header";
import ListTodos from "../../components/ListTodos";
import FilterTodos from "../../components/FilterTodos";
import Footer from "./Footer";

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
    <div className="relative flex flex-col items-center">
      <Header />
      <main className="flex w-80 flex-col gap-4 lg:w-[540px] ">
        <Input />
        <ListTodos />
        <FilterTodos />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
