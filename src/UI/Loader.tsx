import { FC } from "react";

const Loader: FC = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="animate-spin rounded-full h-24 w-24 border-b-2 border-primary-light dark:border-alt-light"></div>
    </div>
  );
};

export default Loader;
