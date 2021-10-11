import { ChangeEvent } from "react";
import Input from "../../UI/Input";

const ProductForm: React.FC<{
  quantity: number;
  onQuantityChange: (e: ChangeEvent<HTMLInputElement>) => void;
}> = (props) => {
  return (
    <div>
      <form className="flex flex-row items-center justify-between">
        <Input
          type="number"
          value={props.quantity}
          min={1}
          max={10}
          step={1}
          onChange={props.onQuantityChange}
        />
      </form>
    </div>
  );
};

export default ProductForm;
