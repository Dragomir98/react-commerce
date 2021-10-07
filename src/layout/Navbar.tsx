import NavLink from "./NavLink";

const Navbar: React.FC = () => {
  return (
    <nav className="primary-default">
      <ul className="p-5 list-none bg-primary-default flex flex-row justify-between text-alt-default">
        <NavLink href="#" name="Home" />
        <NavLink href="#" name="Shop" />
        <NavLink href="#" name="Wishlist" />
        <NavLink href="#" name="Cart" />
      </ul>
    </nav>
  );
};

export default Navbar;
