import Navbar from "./Navbar/Navbar";

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className="container mt-20 h-full p-5 sm:p-0">{children}</main>
    </>
  );
};

export default Layout;
