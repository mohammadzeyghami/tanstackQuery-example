import { Content } from "antd/es/layout/layout";
import React, { Suspense } from "react";
import { Layout } from "antd";
export interface MainDashProps {
  footer?: React.ReactNode;
  children?: React.ReactNode;
  sidebar?: React.ReactNode;
  header?: React.ReactNode;
  rightBar?: React.ReactNode;
}

const MainDashLayout = ({
  // footer,
  children,
  sidebar,
  header,
  rightBar,
}: MainDashProps) => {
  const { Sider, Header } = Layout;
  return (
    <Layout>
      <Sider className=" !bg-white min-h-[100vh] fixed p-4 z-10 ">
        {sidebar}
      </Sider>
      <Layout>
        <Header className="bg-inherit w-[calc(100vw-420px)] fixed z-10 mx-auto p-4 ">
          {" "}
          {header}
        </Header>
        <Content className="w-full flex-1 min-h-[calc(100vh-120px)] mt-[60px] ">
          <Suspense fallback={<div>Loading ... </div>}>{children}</Suspense>
        </Content>
        {/* <Footer className="w-full flex-1">{footer}</Footer> */}
      </Layout>
      <Sider className=" !bg-white min-h-[100vh] fixed p-4 z-10">
        {rightBar}
      </Sider>
    </Layout>
  );
};

export { MainDashLayout };
