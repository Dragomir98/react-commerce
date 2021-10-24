import { FC } from "react";

const AuthMenuItem: FC = ({ children }) => {
  return (
    <li className="flex justify-center text-center w-full cursor-pointer text-xl px-2 py-1 rounded-md text-text-dark dark:text-alt-dark hover:bg-link-lightHover hover:text-secondary-light dark:hover:bg-body-dark">
      {children}
    </li>
  );
};

export default AuthMenuItem;
