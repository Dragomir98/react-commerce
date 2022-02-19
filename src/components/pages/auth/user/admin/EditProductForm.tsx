import { FC } from "react";
import Button from "../../../../../UI/Button";
import Input from "../../../../../UI/Input";

const EditProductForm: FC = () => {
  return (
    <section className="max-w-full md:max-w-1/2 sm:max-w-3/4 m-auto">
      <h2 className="text-center text-3xl mt-10">Edit Product</h2>
      <form>
        <Input hideLabel={false} label="ID" name="id" type="text" />
        <Input hideLabel={false} label="Title" name="title" type="text" />
        <Input hideLabel={false} label="Price" name="price" type="number" />
        <Input
          hideLabel={false}
          label="Quantity"
          name="quantity"
          type="number"
        />
        <select name="category" id="category">
          <option value="technology">Technology</option>
          <option value="furniture">Furniture</option>
          <option value="bath">Bath</option>
          <option value="accessory">Accessory</option>
        </select>
        <Input hideLabel={false} label="Image" name="image" type="url" />
        <Button type="button" variant="primary" extraClasses="mt-5">
          Submit
        </Button>
      </form>
    </section>
  );
};

export default EditProductForm;
