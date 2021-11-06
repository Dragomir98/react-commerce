import { ChangeEvent } from "react";
import Input from "../../UI/Input";

const ProductForm: React.FC<{
  quantity: number | undefined;
  onQuantityChange: (e: ChangeEvent<HTMLInputElement>) => void;
}> = (props) => {
  return (
    <div>
      <form className="flex flex-row items-center justify-between">
        <Input
          type="number"
          defaultValue={props.quantity}
          min={1}
          max={10}
          step={1}
          onChange={props.onQuantityChange}
          hideLabel={true}
        />
      </form>
    </div>
  );
};

export default ProductForm;
