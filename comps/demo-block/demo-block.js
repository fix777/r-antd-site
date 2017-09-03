import * as React from "react";
import { Row, Col } from "antd";
import Toggle from "./../toggle/toggle";
import Style from "./style";
const DemoBlock = ({ demo, title, description, code }) => (React.createElement(Row, { className: "demo-block" },
    React.createElement(Col, { className: "demo-part", span: 24 }, demo),
    React.createElement(Col, { className: "code-part", span: 24 },
        React.createElement(Toggle, { title: title, description: description, on: code })),
    React.createElement(Style, null)));
export default DemoBlock;
