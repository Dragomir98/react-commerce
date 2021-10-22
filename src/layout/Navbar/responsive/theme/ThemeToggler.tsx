import { FC } from "react";
import useDarkMode from "../../../../hooks/useDarkMode";
import { MoonIcon, SunIcon } from "../../../../UI/Icons";

const ThemeToggler: FC = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  const themeToggleHandler = () => {
    toggleDarkMode();
  };

  return (
    <span
      className={`flex items-center justify-center cursor-pointer ml-3 transition-all duration-75 ease-in-out rounded-full py-1 px-1 md:px-2 ${
        isDarkMode
          ? "text-yellow-500 hover:text-yellow-300 bg-primary-light"
          : "text-green-500 hover:text-green-300 bg-primary-dark"
      }`}
      onClick={themeToggleHandler}
    >
      {isDarkMode ? <SunIcon /> : <MoonIcon />}
    </span>
  );
};

export default ThemeToggler;
