import { ChangeEventHandler, FC, FormEvent } from "react";

type Props = {
  type: string;
  id?: string;
  value?: string | ReadonlyArray<string> | number | undefined;
  hasLabel?: boolean;
  labelTitle?: string;
  extraClasses?: string;
  required?: boolean;
  readOnly?: boolean;
  min?: number;
  max?: number;
  step?: number;
  onChange?: ChangeEventHandler;
};

const Input: FC<Props> = ({
  type,
  id,
  value,
  hasLabel = false,
  labelTitle,
  extraClasses = "",
  required,
  min,
  max,
  step,
  readOnly,
  onChange,
}) => {
  return (
    <div>
      {hasLabel && <label htmlFor={id}>{labelTitle}</label>}
      <input
        type={type}
        id={id}
        value={value}
        className={`py-2 rounded-md text-center ${extraClasses}`}
        required={required}
        min={min}
        max={max}
        step={step}
        onChange={onChange}
        readOnly={readOnly}
      />
    </div>
  );
};

export default Input;
