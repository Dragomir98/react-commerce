import { ChangeEvent, FC, HTMLProps } from "react";
import FilterBlock from "../../../../../UI/FilterBlock";

interface Props extends HTMLProps<HTMLDivElement> {
  categories: string[];
  selectedOption?: string | null;
  onSelectChange?: (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
}

const CategoryFilter: FC<Props> = ({
  categories,
  selectedOption,
  onSelectChange,
}) => {
  return (
    <FilterBlock>
      <p className="font-semibold">Categories:</p>
      <hr className="my-2 border-text-light dark:border-text-dark" />
      <form className="flex flex-col">
        {categories.map((category, index) => (
          <label className="inline-flex items-center" key={index}>
            <input
              type="radio"
              name="radio"
              value={category}
              checked={selectedOption === category}
              onChange={onSelectChange}
            />
            <span className="ml-2">
              {category[0].toUpperCase().concat(category.substring(1))}
            </span>
          </label>
        ))}
      </form>
    </FilterBlock>
  );
};

export default CategoryFilter;
