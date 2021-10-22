import { FC, HTMLAttributes, ReactNode } from "react";

interface Props extends HTMLAttributes<HTMLDivElement> {
  extraClasses?: string;
  children: ReactNode;
}

const Card: FC<Props> = ({ children, extraClasses }) => {
  return (
    <div
      className={`p-5 rounded-lg bg-alt-light dark:bg-card-dark shadow-defaultInner ${extraClasses}`}
    >
      {children}
    </div>
  );
};

export default Card;
