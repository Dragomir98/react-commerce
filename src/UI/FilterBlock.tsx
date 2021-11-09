import { FC } from "react";

const FilterBlock: FC = ({ children }) => {
  return (
    <div className="flex flex-col bg-card-light dark:bg-card-dark px-5 py-3 rounded-md mb-2 w-full">
      {children}
    </div>
  );
};

export default FilterBlock;
