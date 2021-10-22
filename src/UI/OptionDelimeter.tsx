import { FC } from "react";

const OptionDelimeter: FC = () => {
  return (
    <div className="my-4 flex flex-row items-center">
      <hr className="h-0.5 w-full bg-black" />
      <span className="px-2 font-semibold text-center">OR</span>
      <hr className="h-0.5 w-full bg-black" />
    </div>
  );
};

export default OptionDelimeter;
