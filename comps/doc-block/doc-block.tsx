import * as React from "react";
import { Row } from "antd";

import Anchor from "./../anchor/anchor";

const DocBlock = ({ id, title, children }: any) => (
  <Row className="doc-block_container">
    <Row className="doc-block_first-row">
      <Anchor
        id={id}
        title={title}
      />
    </Row>
    <Row>
      { children }
    </Row>
    <style>{`
      .doc-block_container + .doc-block_container {
        margin-top: 1rem;
      }

      .doc-block_container .ant-row + .ant-row {
        margin-top: .5rem;
      }

      .doc-block_first-row .anchor_title--wrapper {
        padding-top: 0;
      }
    `}</style>
  </Row>
);

export default DocBlock;
