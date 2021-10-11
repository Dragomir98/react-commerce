import { FC, ReactNode } from "react";

type Props = {
  extraClasses?: string;
  children: ReactNode;
};

const Card: FC<Props> = ({ children, extraClasses }) => {
  return (
    <div
      className={`p-5 rounded-lg bg-alt-default shadow-inner ${extraClasses}`}
    >
      {children}
    </div>
  );
};

export default Card;
