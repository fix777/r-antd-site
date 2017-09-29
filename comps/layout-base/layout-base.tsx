import * as React from "react";
import Head from "next/head";
import { Layout, Icon, Row, Col, BackTop } from "antd";
import { RMenu } from "r-antd";

const { Content } = Layout;

export default ({ nav, css, children }: any) => (
  <div className="page_wrapper">
    <Head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width,initial-scale=1,shrink-to-fit=no" />
      <link rel="shortcut icon" href="/static/favicon.ico" />
      <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/antd/2.13.1/antd.min.css" />
      <link
        rel="stylesheet"
        href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.12.0/styles/github.min.css"
      />
      <link rel="stylesheet" href="/static/css/app.css" />
      {css && <link rel="stylesheet" href={`/static/css/${css}.css`} />}
    </Head>
    <header id="header" className="clearfix">
      <Row>
        <Col xs={24} sm={24} md={5} lg={4}>
          <a id="logo" href="/">
            <span className="logo">R-Antd</span>
          </a>
        </Col>
        <Col xs={0} sm={0} md={19} lg={20}>
          <RMenu
            id="nav"
            className="nav"
            mode="horizontal"
            defaultSelectedKeys={[nav]}
            dataSource={[
              {
                type: "menuitem",
                key: "comps",
                children: <a href="/components/r-form">Components</a>,
              },
              {
                type: "menuitem",
                key: "statement",
                children: <a href="/statement">Statement</a>,
              },
            ]}
          />
        </Col>
      </Row>
    </header>
    <div className="content_wrapper">{children}</div>
    <footer id="footer">
      <ul>
        <li>
          <h2>
            <Icon className="github" type="github" />GitHub
          </h2>
          <div>
            <a href="https://github.com/fix777/r-antd">Repository</a>
          </div>
        </li>
      </ul>
    </footer>
    <BackTop />
  </div>
);
