import * as React from "react";
import Head from "next/head";
import { Layout, Icon, Row, Col, BackTop, } from "antd";
import { RMenu } from "r-antd";
const { Content } = Layout;
export default ({ nav, css, children }) => (React.createElement("div", { className: "page_wrapper" },
    React.createElement(Head, null,
        React.createElement("meta", { charSet: "utf-8" }),
        React.createElement("meta", { name: "viewport", content: "width=device-width,initial-scale=1,shrink-to-fit=no" }),
        React.createElement("link", { rel: "shortcut icon", href: "/static/favicon.ico" }),
        React.createElement("link", { rel: 'stylesheet', href: '//cdnjs.cloudflare.com/ajax/libs/antd/2.12.6/antd.min.css' }),
        React.createElement("link", { rel: "stylesheet", href: "//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.12.0/styles/github.min.css" }),
        React.createElement("link", { rel: "stylesheet", href: "/static/css/app.css" }),
        css && React.createElement("link", { rel: "stylesheet", href: `/static/css/${css}.css` })),
    React.createElement("header", { id: "header", className: "clearfix" },
        React.createElement(Row, null,
            React.createElement(Col, { xs: 24, sm: 24, md: 5, lg: 4 },
                React.createElement("a", { id: "logo", href: "/" },
                    React.createElement("span", { className: "logo" }, "R-Antd"))),
            React.createElement(Col, { xs: 0, sm: 0, md: 19, lg: 20 },
                React.createElement(RMenu, { id: "nav", className: "nav", mode: "horizontal", defaultSelectedKeys: [nav], dataSource: [
                        {
                            type: "menuitem",
                            key: "comps",
                            children: (React.createElement("a", { href: "/components/r-form" }, "Components")),
                        },
                        {
                            type: "menuitem",
                            key: "statement",
                            children: (React.createElement("a", { href: "/statement" }, "Statement")),
                        },
                    ] })))),
    React.createElement("div", { className: "content_wrapper" }, children),
    React.createElement("footer", { id: "footer" },
        React.createElement("ul", null,
            React.createElement("li", null,
                React.createElement("h2", null,
                    React.createElement(Icon, { className: "github", type: "github" }),
                    "GitHub"),
                React.createElement("div", null,
                    React.createElement("a", { href: "https://github.com/fix777/r-antd" }, "Repository"))))),
    React.createElement(BackTop, null)));
