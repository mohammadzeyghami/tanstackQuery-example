import { Flex, FlexProps } from "antd";
const View = ({ children, ...rest }: FlexProps) => {
  return <Flex {...rest}>{children}</Flex>;
};

export { View };
