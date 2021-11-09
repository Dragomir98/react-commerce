import { ChangeEvent, FC, memo } from "react";
import "rc-slider/assets/index.css";
import FilterBlock from "../../../../../UI/FilterBlock";

interface Props {
  minPrice: number;
  maxPrice: number;
  changeMin: (e: ChangeEvent<HTMLInputElement>) => void;
  changeMax: (e: ChangeEvent<HTMLInputElement>) => void;
}

const PriceFilter: FC<Props> = ({
  minPrice,
  maxPrice,
  changeMin,
  changeMax,
}) => {
  return (
    <FilterBlock>
      <p className="font-semibold">Price Range:</p>
      <hr className="my-2 border-text-light dark:border-text-dark" />
      <div className="flex flex-col lg:flex-row flex-grow">
        <div className="mb-2">
          <label htmlFor="lowerPrice">Min: </label>
          <input
            type="number"
            id="lowerPrice"
            value={minPrice}
            onChange={changeMin}
            className="rounded-md text-text-light w-14 text-center"
          />
        </div>

        <div className="mb-2">
          <label htmlFor="upperPrice">Max: </label>
          <input
            type="number"
            id="upperPrice"
            value={maxPrice}
            onChange={changeMax}
            className="rounded-md text-text-light w-14 text-center"
          />
        </div>
      </div>
    </FilterBlock>
  );
};

export default memo(PriceFilter);
