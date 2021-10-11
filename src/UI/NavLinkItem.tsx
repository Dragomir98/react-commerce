import { NavLink } from "react-router-dom";
import LinkInterface from "../models/Link";

interface NavLinkInterface extends LinkInterface {
  hasLabel?: boolean;
  label?: string;
  extraClasses?: string;
}

const NavLinkItem: React.FC<NavLinkInterface> = ({
  hasLabel = false,
  label,
  children,
  href,
  isExact = false,
  extraClasses = "",
}) => {
  return (
    <NavLink
      to={href}
      activeClassName="bg-hover-link"
      exact={isExact}
      className={`p-2 rounded-lg bg-secondary-default transition ease-in-out duration-150 hover:bg-hover-link ${extraClasses}`}
    >
      {hasLabel ? (
        <div className="flex items-center">
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
