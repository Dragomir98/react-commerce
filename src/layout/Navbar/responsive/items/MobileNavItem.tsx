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
  let classes: string = "hover:bg-secondary-default";

  if (variant === "text") {
    classes =
      "flex flex-row justify-between items-center hover:bg-secondary-default px-2 my-2";
  }

  return (
    <NavLink
      to={href}
      {...rest}
      activeClassName="bg-secondary-default"
      exact={isExact}
      className={`${extraClasses} text-alt-default cursor-pointer rounded-full p-1 transition ease-in-out duration-100 ${classes}`}
    >
      {children}
    </NavLink>
  );
};

export default MobileNavItem;
