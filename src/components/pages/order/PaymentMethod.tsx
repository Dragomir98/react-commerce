import { ChangeEvent, FC, HTMLProps } from "react";

interface Props extends HTMLProps<HTMLDivElement> {
  selectedOption?: string | null;
  onSelectChange?: (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
}

const PaymentMethod: FC<Props> = ({ selectedOption, onSelectChange }) => {
  const deliveryOptions = ["Cash on Delivery"];

  return (
    <div className="bg-link-lightHover text-alt-light p-5 rounded-md">
      <h2 className="text-center text-xl font-semibold">Payment method</h2>
      <hr className="my-2" />
      <form className="flex flex-col">
        {deliveryOptions.map((option, index) => (
          <label className="inline-flex items-center" key={index}>
            <input
              type="radio"
              name="radio"
              value={option}
              checked={selectedOption === option}
              onChange={onSelectChange}
            />
            <span className="ml-2">{option}</span>
          </label>
        ))}
      </form>
    </div>
  );
};

export default PaymentMethod;
