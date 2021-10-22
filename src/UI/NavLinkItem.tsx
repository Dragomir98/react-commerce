import { NavLink } from "react-router-dom";
import Link from "../models/Link";

interface Props extends Link {
  hasLabel?: boolean;
  label?: string;
  extraClasses?: string;
}

const NavLinkItem: React.FC<Props> = ({
  hasLabel = false,
  label,
  children,
  href,
  isExact = false,
  extraClasses = "",
  ...rest
}) => {
  return (
    <NavLink
      to={href}
      activeClassName="bg-link-lightHover dark:bg-link-darkHover"
      exact={isExact}
      className={`p-2 rounded-lg bg-secondary-light dark:bg-primary-dark transition ease-in-out duration-150 text-text-light dark:text-alt-dark hover:bg-link-lightHover dark:hover:bg-link-darkHover ${extraClasses}`}
      {...rest}
    >
      {hasLabel ? (
        <div className="flex justify-center items-center">
          <span className="font-semibold mr-1">{label}</span>
          {children}
        </div>
      ) : (
        children
      )}
    </NavLink>
  );
};

export default NavLinkItem;
