import { useContext } from "react";
import ContentContext from "../../store/content-context";

import Moon from "../../assets/images/icon-moon.svg";
import Sun from "../../assets/images/icon-sun.svg";

const Header = () => {
  const { themeHandler, isDarkTheme } = useContext(ContentContext);

  const changeThemeHandler = () => {
    themeHandler((currTheme) => !currTheme);
  };

  return (
    <header className="mx-auto flex w-80 items-center justify-between pb-8 pt-12 lg:w-[540px]">
      <h1 className="text-xl font-bold uppercase tracking-[0.5em] text-white lg:text-[40px] ">
        todo
      </h1>
      {!isDarkTheme ? (
        <img
          src={Moon}
          alt="Moon Icon"
          onClick={changeThemeHandler}
          className="cursor-pointer transition-all duration-300 hover:scale-105"
        />
      ) : (
        <img
          src={Sun}
          alt="Sun Icon"
          onClick={changeThemeHandler}
          className="cursor-pointer duration-300 hover:scale-105"
        />
      )}
    </header>
  );
};

export default Header;
