import Button from "../../UI/Button";
import Input from "../../UI/Input";

const ProductForm: React.FC<{
  quantity: number;
  onIncrease: () => void;
  onDecrease: () => void;
  onAddtoCart: (quantity: number) => void;
}> = (props) => {
  return (
    <div className="">
      <form className="flex flex-row justify-between w-full">
        <Button variant="secondary" onClick={() => props.onDecrease()}>
          -
        </Button>
        <Input
          type="number"
          value={props.quantity}
          min={1}
          max={10}
          step={1}
          readOnly={true}
        />
        <Button variant="secondary" onClick={() => props.onIncrease()}>
          +
        </Button>
      </form>

      <div className="flex justify-around mt-2">
        <Button extraClasses="flex-grow mr-2">Cart</Button>
        <Button
          type="submit"
          extraClasses="flex-grow ml-2"
          onClick={() => props.onAddtoCart(props.quantity)}
        >
          Order
        </Button>
      </div>
    </div>
  );
};

export default ProductForm;
