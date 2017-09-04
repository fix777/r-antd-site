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
    props: "header",
    description: "位于整个表单的正上方，可放置表单标题",
    type: "ReactNode",
    default: "",
  },
  {
    props: "formItemGutter",
    description: "r-form 默认采用 antd 的栅格(Row, Col)进行布局，每个 FormItem 默认占 8 个 span(Col 共 24 个 span)，该参数指定相邻的2个 FormItem 的间隙。单位为 px",
    type: "number",
    default: 10,
  },
  {
    props: "defaultRenderFormItemCount",
    description: "默认渲染的表单项，用于启用高级查询。若传入的值大于 0 ，那么会按顺序截取传入的 formItems ，搭配 footer 的 showAdvancedToggle: true 来开启 展开/收起 操作按钮",
    type: "number",
    default: 0,
  },
  {
    props: "formItems",
    description: "表单项",
    type: <a href="#r-form-item-props">RFormItemProps[]</a>,
    default: "",
  },
  {
    props: "footer",
    description: "位于整个表单的正下方，可放置表单 Action 控件。如：查询，清空 按钮",
    type: <span>boolean | <a href="#r-form-footer">RFormFooter</a></span>,
    default: "false",
  },
  {
    props: "onFormChange",
    description: <span>FormItem 的 <code className="code">decorate: true</code> 的表单控件值发生变化时触发</span>,
    type: "(changedFields: any) => void",
    default: "",
  },
];

export default () => (
  <DocBlock
    id="r-form"
    title="RForm"
  >
    <RTable
      pagination={false}
      columns={columns}
      dataSource={dataSource}
    />
  </DocBlock>
);
