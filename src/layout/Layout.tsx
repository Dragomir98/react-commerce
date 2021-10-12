import Navbar from "./Navbar";

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className="container h-full">{children}</main>
    </>
  );
};

export default Layout;
