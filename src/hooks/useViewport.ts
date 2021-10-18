import { useEffect, useState } from "react";

const useViewport = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  useEffect(() => {
    const windowResizeHandler = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    };

    window.addEventListener("resize", windowResizeHandler);

    return () => window.removeEventListener("resize", windowResizeHandler);
  }, []);

  return {
    width,
    height,
  };
};

export default useViewport;
