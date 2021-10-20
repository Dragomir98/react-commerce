import { useEffect, useRef, useState } from "react";

const useDetectClickOut = (initState: boolean) => {
  const triggerRef = useRef<any>(null);
  const nodeRef = useRef<any>(null);

  const [show, setShow] = useState(initState);

  const outsideClickHandler = (event: MouseEvent) => {
    if (triggerRef.current && triggerRef.current.contains(event.target)) {
      return setShow(!show);
    }

    if (nodeRef.current && !nodeRef.current.contains(event.target)) {
      return setShow(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", outsideClickHandler, true);
    return () => {
      document.removeEventListener("click", outsideClickHandler, true);
    };
  }, []);

  return {
    triggerRef,
    nodeRef,
    show,
    setShow,
  };
};

export default useDetectClickOut;
