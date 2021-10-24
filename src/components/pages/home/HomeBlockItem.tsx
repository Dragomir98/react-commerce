import { FC } from "react";

interface Props extends HTMLElement<HTMLDivElement> {}

const HomeBlockItem: FC<Props> = ({ children }) => {
  return (
    <div className="bg-primary-light dark:bg-card-dark px-5 py-3 rounded-md shadow-2xl">
      {children}
    </div>
  );
};

export default HomeBlockItem;
