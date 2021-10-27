import { FC, InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  name?: string;
  labelClasses?: string;
  inputClasses?: string;
  hideLabel?: boolean;
}

const Input: FC<InputProps> = ({
  name,
  label,
  labelClasses,
  inputClasses,
  hideLabel = true,
  ...rest
}) => {
  return (
    <div className="flex flex-col">
      {!hideLabel && (
        <label
          htmlFor={name}
          className={`font-semibold mb-1 mt-3 ${labelClasses}`}
        >
          {label}
        </label>
      )}
      <input
        id={name}
        className={`p-2 rounded-md ${
          hideLabel ? "text-center" : "text-left"
        } text-text-light transition ease-in-out duration-100 border-solid border-2 border-primary-light dark:border-primary-dark focus:outline-none focus:ring focus:border-secondary-light dark:focus:border-primary-dark ${inputClasses}`}
        {...rest}
      />
    </div>
  );
};

export default Input;
