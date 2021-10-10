import { FC } from "react";

type Props = {
  variant?: string;
  message: string;
};

const Alert: FC<Props> = ({ variant = "info", message }) => {
  let variantColor = "";

  switch (variant) {
    case "info":
      variantColor = "bg-info";
      break;
    case "success":
      variantColor = "bg-success";
      break;
    case "pending":
      variantColor = "bg-pending";
      break;
    case "error":
      variantColor = "bg-error";
      break;
    default:
      variantColor = "";
  }

  return (
    <div
      className={`text-center font-semibold p-2 text-white rounded-lg ${variantColor}`}
    >
      {message}
    </div>
  );
};

export default Alert;
