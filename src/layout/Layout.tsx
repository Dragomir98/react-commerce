import { ToastContainer } from "react-toastify";
import Navbar from "./Navbar/Navbar";
import "react-toastify/dist/ReactToastify.css";

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Navbar />
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <main className="container mt-20 h-full p-5">{children}</main>
    </>
  );
};

export default Layout;
