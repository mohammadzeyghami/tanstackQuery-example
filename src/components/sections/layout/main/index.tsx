import { Layout as AntLayout, LayoutProps } from "antd";
const Layout = ({ ...rest }: LayoutProps) => {
  return <AntLayout {...rest} />;
};

export { Layout };
