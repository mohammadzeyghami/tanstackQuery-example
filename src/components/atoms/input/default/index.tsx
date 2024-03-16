import { Input as AntInput, InputProps } from "antd";
const Input = ({ ...rest }: InputProps) => {
  return <AntInput {...rest} />;
};

export { Input };
