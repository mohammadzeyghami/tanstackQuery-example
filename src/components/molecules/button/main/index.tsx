import { Button as AntButton, ButtonProps } from "antd";
import { twMerge } from "tailwind-merge";
const ButtonMain = ({ className, ...rest }: ButtonProps) => {
  return (
    <AntButton
      className={twMerge(
        "!bg-red-500 !border-red-500 text-white hover:!text-white disabled:!text-white disabled:!bg-gray-600 disabled:!border-none",
        className
      )}
      {...rest}
    />
  );
};

export { ButtonMain };
