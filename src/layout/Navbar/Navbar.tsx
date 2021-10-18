import useViewport from "../../hooks/useViewport";
import DesktopNav from "./responsive/DesktopNav";
import MobileNav from "./responsive/MobileNav";

const Navbar: React.FC = () => {
  const { width } = useViewport();
  const breakpoint = 768;

  return width < breakpoint ? <MobileNav /> : <DesktopNav />;
};

export default Navbar;
