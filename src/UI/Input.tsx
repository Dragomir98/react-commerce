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
        {...rest}
        className={`py-2 rounded-md text-center transition ease-in-out duration-100 border-double border-4 border-secondary-default ${inputClasses} focus:border-solid`}
      />
    </div>
  );
};

export default Input;
