import { FC, ReactNode } from "react";
import { NavLink } from "react-router-dom";
import Link from "../../../../models/Link";

interface Props extends Link {
  children: ReactNode;
  extraClasses?: string;
  variant?: string;
}

const MobileNavItem: FC<Props> = ({
  children,
  href,
  variant = "icon",
  extraClasses = "",
  isExact = false,
  ...rest
}) => {
  let classes: string = "hover:bg-link-lightHover dark:hover:bg-card-dark";

  if (variant === "text") {
    classes =
      "flex flex-row justify-between items-center hover:bg-link-lightHover dark:hover:bg-card-dark px-2 my-2";
  }

  return (
    <NavLink
      to={href}
      {...rest}
      activeClassName="bg-link-lightHover dark:bg-card-dark"
      exact={isExact}
      className={`${extraClasses} text-alt-light dark:text-alt-dark cursor-pointer rounded-full p-1 transition ease-in-out duration-100 ${classes}`}
    >
      {children}
    </NavLink>
  );
};

export default MobileNavItem;
