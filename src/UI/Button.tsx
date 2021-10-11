import { ButtonHTMLAttributes, FC, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: string;
  extraClasses?: string;
  children?: ReactNode;
}

const Button: FC<ButtonProps> = ({
  variant = "primary",
  extraClasses,
  children,
  ...rest
}) => {
  let buttonVariant =
    "px-4 py-2 rounded-lg bg-primary-default text-alt-default hover:bg-secondary-default";

  if (variant === "secondary") {
    buttonVariant =
      "px-4 py-2 rounded-lg bg-secondary-default text-alt-default hover:bg-primary-default";
  }

  if (variant === "small") {
    buttonVariant =
      "bg-secondary-default text-alt-default hover:bg-primary-default";
  }

  const styles: string = `transition ease-in-out duration-150 ${buttonVariant} ${extraClasses}`;

  return (
    <button className={styles} {...rest}>
      {children}
    </button>
  );
};

export default Button;
