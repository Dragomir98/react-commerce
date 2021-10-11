import { FC, ReactNode } from "react";

type Props = {
  type?: "button" | "submit" | "reset" | undefined;
  variant?: string;
  extraClasses?: string;
  children?: ReactNode;
  onClick?: () => void;
};

const Button: FC<Props> = ({
  type = "button",
  variant = "primary",
  extraClasses,
  children,
  onClick,
}) => {
  let buttonVariant =
    "bg-primary-default text-alt-default hover:bg-secondary-default";

  if (variant === "secondary") {
    buttonVariant =
      "bg-secondary-default text-alt-default hover:bg-primary-default";
  }

  const styles: string = `py-2 px-4 rounded-lg transition ease-in-out duration-150 ${buttonVariant} ${extraClasses}`;

  return (
    <button type={type} onClick={onClick} className={styles}>
      {children}
    </button>
  );
};

export default Button;
