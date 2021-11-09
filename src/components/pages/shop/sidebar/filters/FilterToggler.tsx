import { FC } from "react";
import { CloseIcon, FilterIcon } from "../../../../../UI/Icons";

interface Props {
  displayFilters: boolean;
  displayFiltersHandler: () => void;
}

const FilterToggler: FC<Props> = ({
  displayFilters,
  displayFiltersHandler,
}) => {
  return (
    <div
      className={`cursor-pointer flex flex-row justify-between items-center px-4 py-2 mb-2 md:mb-4 rounded-md
    transition-all ease-in-out duration-100 ${
      displayFilters
        ? "bg-primary-light text-alt-light hover:bg-card-light hover:text-text-light dark:bg-card-light dark:text-alt-dark dark:hover:bg-card-dark dark:hover:text-text-dark"
        : "bg-card-light hover:bg-primary-light hover:text-alt-light dark:bg-card-dark dark:hover:bg-card-light dark:hover:text-alt-dark"
    }`}
      onClick={displayFiltersHandler}
    >
      <span className="font-semibold">Filters</span>
      <span>{displayFilters ? <CloseIcon /> : <FilterIcon />}</span>
    </div>
  );
};

export default FilterToggler;
