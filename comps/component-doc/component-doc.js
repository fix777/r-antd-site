import * as React from "react";
import { Row, Col, Icon } from "antd";
import { RMenu } from "r-antd";
export default ({ comp, children }) => (React.createElement(Row, null,
    React.createElement(Col, { xs: 24, sm: 24, md: 6, lg: 4 },
        React.createElement(RMenu, { mode: "inline", defaultSelectedKeys: [comp], defaultOpenKeys: ["comp"], style: { height: "100%", borderRight: 0 }, onClick: console.log, dataSource: [
                {
                    type: "submenu",
                    key: "comp",
                    title: (React.createElement("span", null,
                        React.createElement(Icon, { type: "appstore-o" }),
                        "Components")),
                    children: [
                        {
                            type: "menuitem",
                            key: "r-form",
                            children: React.createElement("a", { href: "/components/r-form" }, "RForm"),
                        },
                        {
                            type: "menuitem",
                            disabled: true,
                            key: "r-menu",
                            children: "RMenu",
                        },
                        {
                            type: "menuitem",
                            disabled: true,
                            key: "r-multi-select",
                            children: "RMultiSelect",
                        },
                        {
                            type: "menuitem",
                            disabled: true,
                            key: "r-select",
                            children: "RSelect",
                        },
                        {
                            type: "menuitem",
                            disabled: true,
                            key: "r-table",
                            children: "RTable",
                        },
                    ],
                },
            ] })),
    React.createElement(Col, { className: "content_right", xs: 24, sm: 24, md: 18, lg: 20 }, children)));
