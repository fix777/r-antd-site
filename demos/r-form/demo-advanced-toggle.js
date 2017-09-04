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
    footer={{
      defaultActionAlign: "right",
      showAdvancedToggle: true,
      onSubmit: console.log,
    }}
    onFormChange={console.log}
    defaultRenderFormItemCount={1}
    formItems={[
      {
        label: "Item 1",
        id: "item-1",
        decorate: true,
        control: (
          <Input
          />
        ),
      },
      {
        label: "Item 2",
        id: "item-2",
        decorate: true,
        control: (
          <Input
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
export default () => (React.createElement(DocBlock, { id: "code", title: "启用高级查询" },
    React.createElement(DemoBlock, { demo: React.createElement(RForm, { footer: {
                defaultActionAlign: "right",
                showAdvancedToggle: true,
                onSubmit: console.log,
            }, onFormChange: console.log, defaultRenderFormItemCount: 1, formItems: [
                {
                    label: "Item 1",
                    id: "item-1",
                    decorate: true,
                    control: (React.createElement(Input, null)),
                },
                {
                    label: "Item 2",
                    id: "item-2",
                    decorate: true,
                    control: (React.createElement(Input, null)),
                },
            ] }), title: "高级查询", description: `
        最简单的高级查询
      `, code: code })));
