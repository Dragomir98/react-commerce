import { FC } from "react";
import Select from "react-select";

interface SelectMenuProps {
  onChange: (selectedOption: string | null) => void;
  selectedOption: string | null;
}

const CategoryMenu: FC<SelectMenuProps> = ({ onChange, selectedOption }) => {
  const options: any = [
    { value: "furniture", label: "Furniture" },
    { value: "accessory", label: "Accessory" },
    { value: "cloth", label: "Cloth" },
    { value: "technology", label: "Technology" },
  ];

  return (
    <div className="mt-3 mb-1">
      <label htmlFor="category">Category</label>
      <Select
        id="category"
        name="category"
        options={options}
        className="text-text-light"
        value={selectedOption}
        onChange={onChange}
      />
    </div>
  );
};

export default CategoryMenu;
