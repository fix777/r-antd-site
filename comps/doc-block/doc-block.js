import * as React from "react";
import { Row } from "antd";
import Anchor from "./../anchor/anchor";
const DocBlock = ({ id, title, children }) => (React.createElement(Row, { className: "doc-block_container" },
    React.createElement(Row, { className: "doc-block_first-row" },
        React.createElement(Anchor, { id: id, title: title })),
    React.createElement(Row, null, children),
    React.createElement("style", null, `
      .doc-block_container + .doc-block_container {
        margin-top: 1rem;
      }

      .doc-block_container .ant-row + .ant-row {
        margin-top: .5rem;
      }

      .doc-block_first-row .anchor_title--wrapper {
        padding-top: 0;
      }
    `)));
export default DocBlock;
