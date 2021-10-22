import Input from "../../../../../UI/Input";

const EditProductForm = () => {
  return (
    <form>
      <Input hideLabel={false} label="Product name" name="name" />
      <select name="category" id="">
        <option value="technology">Technology</option>
        <option value="bath">Bath</option>
        <option value="accessory">Accessory</option>
      </select>
      <Input hideLabel={false} label="Product name" name="name" type="number" />
    </form>
  );
};

export default EditProductForm;
