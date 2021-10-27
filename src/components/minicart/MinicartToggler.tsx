import { FC } from "react";
import useDetectClickOut from "../../hooks/useDetectClickOut";
import { CartIcon } from "../../UI/Icons";
import CartCounter from "./CartCounter";
import Minicart from "./Minicart";

const MinicartToggler: FC = () => {
  const { show, triggerRef, nodeRef, setShow } = useDetectClickOut(false);

  const toggleMinicartHandler = () => {
    setShow(show);
  };

  return (
    <>
      <div
        className="flex items-center justify-center p-2 rounded-md cursor-pointer bg-card-light dark:bg-card-dark hover:bg-link-lightHover dark:hover:bg-body-dark"
        onClick={toggleMinicartHandler}
        ref={triggerRef}
      >
        <CartCounter onClick={toggleMinicartHandler} />
        <span className="text-primary-light dark:text-alt-dark hover:text-alt-light">
          <CartIcon />
        </span>
      </div>

      <Minicart
        toggleHandler={toggleMinicartHandler}
        showMinicart={show}
        distributedRef={nodeRef}
      />
    </>
  );
};

export default MinicartToggler;
