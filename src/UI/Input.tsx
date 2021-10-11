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
    <div>
      {!hideLabel && (
        <label htmlFor={name} className={labelClasses}>
          {label}
        </label>
      )}
      <input
        id={name}
        {...rest}
        className={`py-2 rounded-md text-center ${inputClasses}`}
      />
    </div>
  );
};

export default Input;
