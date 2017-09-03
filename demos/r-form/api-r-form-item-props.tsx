import * as React from "react";
import { RTable } from "r-antd";

import DocBlock from "./../../comps/doc-block/doc-block";

const columns = [
  {
    title: "参数",
    dataIndex: "props",
    width: 100,
  },
  {
    title: "说明",
    dataIndex: "description",
    width: 500,
    // tooltip: true,
  },
  {
    title: "类型",
    dataIndex: "type",
    width: 150,
  },
  {
    title: "默认值",
    dataIndex: "default",
    width: 100,
  },
];

const dataSource = [
  {
    props: "itemSpan",
    description: "FormItem 的 ColSpan",
    type: "number",
    default: "8",
  },
  {
    props: "decorate",
    description: (
      <span>
        是否启用 getFieldDecorator 修饰&nbsp;
        <a
          target="_blank"
          href="https://ant.design/components/form/#this.props.form.getFieldDecorator(id,-options)"
        >
          参考 antd
        </a>。&nbsp;
        只有开启后的 FormItem 的控件值发生变化时会触发 onFormChange 。
        注意需要开启此项的 FormItem 需传入唯一 id
      </span>
    ),
    type: "boolean",
    default: "false",
  },
  {
    props: "decoratorOptions",
    description: (
      <span>
        启用 getFieldDecorator 修饰时的额外参数&nbsp;
        <a
          target="_blank"
          href="https://ant.design/components/form/#getFieldDecorator(id,-options)-parameters"
        >
          参考 antd
        </a>
      </span>
    ),
    type: "GetFieldDecoratorOptions",
    default: "",
  },
  {
    props: "control",
    description: "表单控件",
    type: "ReactNode",
    default: "",
  },
];

export default () => (
  <DocBlock
    id="r-form-item-props"
    title="RFormItemProps"
  >
    <RTable
      pagination={false}
      columns={columns}
      dataSource={dataSource}
    />
  </DocBlock>
);
