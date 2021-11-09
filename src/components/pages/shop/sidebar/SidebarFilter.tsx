import { ChangeEvent, FC, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../../hooks/hooks";
import { productItemsSelector } from "../../../../store/features/products/productsSelectors";
import {
  getProducts,
  setProducts,
} from "../../../../store/features/products/productsSlice";
import Button from "../../../../UI/Button";
import { FilterIcon } from "../../../../UI/Icons";
import CategoryFilter from "./filters/CategoryFilter";
import FilterToggler from "./filters/FilterToggler";
import PriceFilter from "./filters/PriceFilter";

const sortPriceAsc = (priceArr: any[]) => {
  return priceArr.sort((a, b) => a - b);
};

const SidebarFilter: FC = () => {
  const [displayFilters, setDisplayFilters] = useState<boolean>(false);

  const products = useAppSelector(productItemsSelector);
  const categories: any[] = [...new Set(products.map((item) => item.category))];

  const prices: any[] = products.map((item) => item.price);
  const minPrice = sortPriceAsc(prices)[0];
  const maxPrice = sortPriceAsc(prices)[prices.length - 1];

  const [lowerPrice, setLowerPrice] = useState<number>(Math.floor(minPrice));
  const [upperPrice, setUpperPrice] = useState<number>(Math.floor(maxPrice));
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const dispatch = useAppDispatch();

  const displayFiltersHandler = () => {
    setDisplayFilters((prevState) => !prevState);
  };

  const changeCategoryHandler = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setSelectedCategory(e.target.value);
  };

  const changeMinPriceHandler = (e: ChangeEvent<HTMLInputElement>) => {
    if (+e.target.value < minPrice && +e.target.value > maxPrice) {
      console.log(`Cannot enter lower value than ${minPrice}`);
      return;
    }
    setLowerPrice(+e.target.value);
  };

  const changeMaxPriceHandler = (e: ChangeEvent<HTMLInputElement>) => {
    if (+e.target.value > maxPrice && +e.target.value < minPrice) {
      console.log(`Cannot enter upper value than ${maxPrice}`);
      return;
    }
    setUpperPrice(+e.target.value);
  };

  const filterHandler = () => {
    if (!selectedCategory) {
      dispatch(
        setProducts(
          products.filter(
            (item) => item.price <= upperPrice && item.price >= minPrice
          )
        )
      );
    } else {
      dispatch(
        setProducts(
          products.filter(
            (item) =>
              item.category === selectedCategory &&
              item.price <= upperPrice &&
              item.price >= minPrice
          )
        )
      );
    }
  };

  const resetFilterHandler = () => {
    setDisplayFilters(true);
    setLowerPrice(minPrice);
    setUpperPrice(maxPrice);
    setSelectedCategory("");
    dispatch(getProducts());
  };

  return (
    <aside className="w-full md:w-1/4 flex flex-col mb-2 md:mb-0">
      <FilterToggler
        displayFilters={displayFilters}
        displayFiltersHandler={displayFiltersHandler}
      />
      {displayFilters && (
        <>
          <div className="grid grid-cols-1 gap-0 sm:grid-cols-2 sm:gap-2 md:flex md:flex-col md:flex-wrap">
            <PriceFilter
              minPrice={lowerPrice}
              maxPrice={upperPrice}
              changeMin={changeMinPriceHandler}
              changeMax={changeMaxPriceHandler}
            />
            <CategoryFilter
              categories={categories}
              selectedOption={selectedCategory}
              onSelectChange={changeCategoryHandler}
            />
          </div>

          <div className="flex justify-between md:mt-2">
            <Button extraClasses="flex-grow mr-1" onClick={resetFilterHandler}>
              Reset
            </Button>
            <Button extraClasses="flex-grow ml-1" onClick={filterHandler}>
              Filter
            </Button>
          </div>
        </>
      )}
    </aside>
  );
};

export default SidebarFilter;
