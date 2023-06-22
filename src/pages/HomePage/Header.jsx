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
    <header className="flex mx-auto w-80 justify-between items-center py-12">
      <h1 className="uppercase tracking-[0.5em] text-xl font-bold text-white ">
        todo
      </h1>
      {!isDarkTheme ? (
        <img
          src={Moon}
          alt="Moon Icon"
          onClick={changeThemeHandler}
          className="cursor-pointer hover:scale-105 transition-all duration-300"
        />
      ) : (
        <img
          src={Sun}
          alt="Sun Icon"
          onClick={changeThemeHandler}
          className="cursor-pointer hover:scale-105 duration-300"
        />
      )}
    </header>
  );
};

export default Header;
