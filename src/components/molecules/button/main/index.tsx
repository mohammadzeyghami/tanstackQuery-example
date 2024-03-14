import { Button as AntButton, ButtonProps } from "antd";
import { twMerge } from "tailwind-merge";
const ButtonMain = ({ className, ...rest }: ButtonProps) => {
  return (
    <AntButton
      className={twMerge(
        "!bg-blue-400 text-white hover:!text-white",
        className
      )}
      {...rest}
    />
  );
};

export { ButtonMain };
