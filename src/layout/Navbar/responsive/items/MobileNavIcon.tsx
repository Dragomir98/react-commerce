import { FC, ReactNode } from "react";

interface Props {
  children?: ReactNode;
  icon: ReactNode;
}

const MobileNavIcon: FC<Props> = ({ children, icon, ...rest }) => {
  return (
    <div
      className={`text-alt-light dark:text-alt-dark text-xl cursor-pointer rounded-full transition ease-in-out duration-100 flex flex-row justify-between items-center w-full`}
      {...rest}
    >
      {children}
      {icon}
    </div>
  );
};

export default MobileNavIcon;
