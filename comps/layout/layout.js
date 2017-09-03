import * as React from "react";
import Head from "next/head";
import { Layout, Breadcrumb, Icon } from "antd";
import { RMenu } from "r-antd";
import Style from "./layout-style";
const { Header, Sider, Content } = Layout;
export default ({ comp, children }) => (React.createElement(Layout, null,
    React.createElement(Head, null,
        React.createElement("link", { rel: 'stylesheet', href: '//cdnjs.cloudflare.com/ajax/libs/antd/2.12.6/antd.min.css' }),
        React.createElement("link", { rel: "stylesheet", href: "//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.12.0/styles/github.min.css" }),
        React.createElement("style", null, `
        .code {
          margin: 0 1px;
          background: #f7f7f7;
          padding: .2em .4em;
          border-radius: 3px;
          font-size: .9em;
          border: 1px solid #eee;
        }
      `)),
    React.createElement(Header, { className: "header" },
        React.createElement("div", { className: "logo" }, "R-Antd"),
        React.createElement(RMenu
        // theme="dark"
        , { 
            // theme="dark"
            mode: "horizontal", defaultSelectedKeys: ["doc"], style: { lineHeight: "64px" }, dataSource: [
                {
                    type: "menuitem",
                    key: "doc",
                    children: "Documentation",
                },
            ] })),
    React.createElement(Layout, null,
        React.createElement(Sider, { className: "sider" },
            React.createElement(RMenu, { theme: "dark", mode: "inline", defaultSelectedKeys: [comp], defaultOpenKeys: ["comp"], style: { height: "100%", borderRight: 0 }, onClick: console.log, dataSource: [
                    {
                        type: "submenu",
                        key: "comp",
                        title: React.createElement("span", null,
                            React.createElement(Icon, { type: "appstore-o" }),
                            "Component"),
                        children: [
                            {
                                type: "menuitem",
                                key: "r-form",
                                children: (React.createElement("a", { href: "/documentation/component/r-form" }, "RForm")),
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
                        ],
                    },
                ] })),
        React.createElement(Layout, { style: { padding: "0 24px 24px" } },
            React.createElement(Breadcrumb, { style: { margin: "12px 0" } },
                React.createElement(Breadcrumb.Item, null, "Documentation"),
                React.createElement(Breadcrumb.Item, null, "Component"),
                React.createElement(Breadcrumb.Item, null, comp)),
            React.createElement(Content, { className: "content" }, children))),
    React.createElement(Style, null)));
