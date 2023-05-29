import React from "react";
import { UserOutlined } from "@ant-design/icons";
import { Layout, Menu } from "antd";
import { Typography } from "antd";
import "./CabinetLayout.css";
import { useNavigate } from "react-router-dom";

const { Title } = Typography;

const { Sider, Content } = Layout;

type TCabinetLayoutProps = Readonly<{
  children: React.ReactElement;
  title: string;
}>;

const CabinetLayout = ({ children, title }: TCabinetLayoutProps) => {
  const navigate = useNavigate();

  return (
    <Layout className="cabinet-layout" hasSider>
      <Sider trigger={null} collapsible collapsed>
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={[
            {
              key: "1",
              icon: <UserOutlined />,
              label: "People",
              onClick: () => navigate("/"),
            },
          ]}
        />
      </Sider>
      <Layout>
        <Content className="content">
          <Title className="title">{title}</Title>
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default CabinetLayout;
