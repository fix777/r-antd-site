import * as React from "react";
import { Input, } from "antd";
import { RForm, } from "r-antd";
import Highlight from "react-highlight";
import DocBlock from "./../../comps/doc-block/doc-block";
import DemoBlock from "./../../comps/demo-block/demo-block";
const code = (React.createElement(Highlight, { className: "typescript" }, `
import React from "react";
import { render } from "react-dom";
import { RForm } from "r-antd";

const App = () => (
  <RForm
    header="This is a r-form."
    footer={{
      defaultActionAlign: "right",
      showClear: true,
      clearText: "清空",
      onClear: console.log,
      submitText: "搜索",
      onSubmit: console.log,
    }}
    onFormChange={console.log}
    formItems={[
      {
        // itemSpan: 24,
        label: "WHATEVER",
        id: "whatever",
        decorate: true,
        control: (
          <Input
            // style={{ width: "100%" }}
          />
        ),
      },
    ]}
  />
);

render(
  <App />,
  document.querySelector("#react-root")
);
`));
export default () => (React.createElement(DocBlock, { title: "代码演示", href: "#code" },
    React.createElement(DemoBlock, { demo: React.createElement(RForm, { header: "This is a r-form.", footer: {
                defaultActionAlign: "right",
                showClear: true,
                clearText: "清空",
                onClear: console.log,
                submitText: "搜索",
                onSubmit: console.log,
            }, onFormChange: console.log, formItems: [
                {
                    // itemSpan: 24,
                    label: "WHATEVER",
                    id: "whatever",
                    decorate: true,
                    control: (React.createElement(Input
                    // style={{ width: "100%" }}
                    , null)),
                },
            ] }), title: "水平表单", description: `
        最简单的水平形式的表单
      `, code: code })));
