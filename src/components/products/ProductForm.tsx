import Button from "../../UI/Button";

const ProductForm: React.FC = () => {
  const submitHandler = (e: React.SyntheticEvent) => {
    e.preventDefault();

    console.log("click");
  };

  return (
    <form onSubmit={submitHandler}>
      <input type="number" />
      <Button children="+" />
      <Button children="-" />
    </form>
  );
};

export default ProductForm;
