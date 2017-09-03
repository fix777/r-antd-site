import * as React from "react";
import Head from "next/head";
import { Layout, Breadcrumb, Icon } from "antd";
import { RMenu } from "r-antd";

import Style from "./layout-style";

const { Header, Sider, Content } = Layout;

export default ({ comp, children }: any) => (
  <Layout>
    <Head>
      <link rel='stylesheet' href='//cdnjs.cloudflare.com/ajax/libs/antd/2.12.6/antd.min.css' />
      <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.12.0/styles/github.min.css" />
      <style>{`
        .code {
          margin: 0 1px;
          background: #f7f7f7;
          padding: .2em .4em;
          border-radius: 3px;
          font-size: .9em;
          border: 1px solid #eee;
        }
      `}</style>
      {/* <script src="//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.12.0/highlight.min.js"></script> */}
      {/* <script src="//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.12.0/languages/javascript.min.js"></script> */}
      {/* <script>hljs.initHighlightingOnLoad();</script> */}
    </Head>
    <Header className="header">
      <div className="logo">R-Antd</div>
      <RMenu
        // theme="dark"
        mode="horizontal"
        defaultSelectedKeys={["doc"]}
        style={{ lineHeight: "64px" }}
        dataSource={[
          {
            type: "menuitem",
            key: "doc",
            children: "Documentation",
          },
        ]}
      />
    </Header>
    <Layout>
      <Sider className="sider">
        <RMenu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={[comp]}
          defaultOpenKeys={["comp"]}
          style={{ height: "100%", borderRight: 0 }}
          onClick={console.log}
          dataSource={[
            {
              type: "submenu",
              key: "comp",
              title: <span><Icon type="appstore-o" />Component</span>,
              children: [
                {
                  type: "menuitem",
                  key: "r-form",
                  children: (
                    <a href="/documentation/component/r-form">RForm</a>
                  ),
                },
                {
                  type: "menuitem",
                  key: "r-menu",
                  children: "RMenu",
                },
                {
                  type: "menuitem",
                  key: "r-multi-select",
                  children: "RMultiSelect",
                },
                {
                  type: "menuitem",
                  key: "r-select",
                  children: "RSelect",
                },
                {
                  type: "menuitem",
                  key: "r-table",
                  children: "RTable",
                },
              ] as any,
            },
          ]}
        />
      </Sider>
      <Layout style={{ padding: "0 24px 24px" }}>
        <Breadcrumb style={{ margin: "12px 0" }}>
          <Breadcrumb.Item>Documentation</Breadcrumb.Item>
          <Breadcrumb.Item>Component</Breadcrumb.Item>
          <Breadcrumb.Item>{ comp }</Breadcrumb.Item>
        </Breadcrumb>
        <Content className="content">
          { children }
        </Content>
      </Layout>
    </Layout>
    <Style />
  </Layout>
);
