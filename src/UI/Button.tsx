import { ButtonHTMLAttributes, FC, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: string;
  extraClasses?: string;
  children?: ReactNode;
  disabled?: boolean;
}

const Button: FC<ButtonProps> = ({
  variant = "primary",
  extraClasses,
  children,
  disabled,
  ...rest
}) => {
  let buttonVariant =
    "px-4 py-2 rounded-lg bg-primary-light dark:bg-primary-dark text-alt-light dark:text-alt-dark hover:bg-secondary-light hover:text-text-light dark:hover:bg-body-dark";

  if (variant === "secondary") {
    buttonVariant =
      "px-4 py-2 rounded-lg bg-body-light dark:bg-body-dark text-text-light dark:text-alt-dark hover:text-alt-light hover:bg-primary-light dark:hover:bg-primary-dark";
  }

  if (variant === "small") {
    buttonVariant =
      "bg-secondary-light dark:bg-secondary-dark text-alt-light dark:text-alt-dark hover:bg-primary-light dark:hover:bg-primary-dark";
  }

  const styles: string = `transition ease-in-out duration-150 font-semibold ${buttonVariant} ${extraClasses} ${
    disabled &&
    "text-text-dark bg-card-dark dark:text-text-light dark:bg-card-light pointer-events-none"
  }`;

  return (
    <button className={styles} {...rest} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
