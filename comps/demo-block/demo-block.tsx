import * as React from "react";
import { Row, Col } from "antd";

import Toggle from "./../toggle/toggle";

import Style from "./style";

export interface DemoBlockProps {
  demo: React.ReactNode;
  title?: string;
  description?: React.ReactNode;
  code: React.ReactNode;
}

const DemoBlock = ({ demo, title, description, code }: DemoBlockProps) => (
  <Row
    className="demo-block"
  >
    <Col className="demo-part" span={24}>
      { demo }
    </Col>
    <Col className="code-part" span={24}>
      <Toggle
        title={title}
        description={description}
        on={code}
      />
    </Col>
    <Style />
  </Row>
);

export default DemoBlock;
