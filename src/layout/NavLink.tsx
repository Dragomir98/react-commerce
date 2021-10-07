import Link from "../models/Link";

const NavLink: React.FC<Link> = (props) => {
  return (
    <li className="p-2 rounded-lg bg-secondary-default transition ease-in-out duration-150 hover:bg-hover-link">
      <a className="p-2" href={props.href}>
        {props.name}
      </a>
    </li>
  );
};

export default NavLink;
