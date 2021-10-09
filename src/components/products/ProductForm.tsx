import Button from "../../UI/Button";
import Input from "../../UI/Input";

const ProductForm: React.FC<{
  quantity: number;
  onIncrease: () => void;
  onDecrease: () => void;
}> = (props) => {
  const submitHandler = (e: React.SyntheticEvent) => {
    e.preventDefault();

    console.log("click");
  };

  return (
    <div className="my-4">
      <form
        onSubmit={submitHandler}
        className="flex flex-row justify-between w-full"
      >
        <Button variant="secondary" onClick={() => props.onDecrease()}>
          -
        </Button>
        {/* <input
          type="number"
          value={props.quantity}
          className="py-2 rounded-md text-center"
          min="1"
          max="25"
          step="1"
          readOnly
        /> */}
        <Input type="number" value={props.quantity} min={1} max={10} step={1} />
        <Button variant="secondary" onClick={() => props.onIncrease()}>
          +
        </Button>
      </form>
    </div>
  );
};

export default ProductForm;
