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
        props: "defaultActionAlign",
        description: "表单默认 Action 部分的 text-align",
        type: "left | center | right",
        default: "left",
    },
    {
        props: "defaultActionSpan",
        description: "表单默认 Action 部分的 ColSpan",
        type: "number",
        default: "24",
    },
    {
        props: "extraAction",
        description: "表单额外 Action 部分，会渲染在默认 Action 的左侧",
        type: "ReactNode",
        default: "",
    },
    {
        props: "showClear",
        description: "是否显示清空按钮",
        type: "boolean",
        default: "false",
    },
    {
        props: "clearText",
        description: "清空按钮的文本",
        type: "string",
        default: "Clear",
    },
    {
        props: "submitText",
        description: "提交按钮的文本",
        type: "string",
        default: "Submit",
    },
    {
        props: "showAdvancedToggle",
        description: "是否启用高级查询的展开/收起操作按钮",
        type: "boolean",
        default: "false",
    },
    {
        props: "advancedToggleTexts",
        description: "展开/收起操作按钮的文本",
        type: "[string, string]",
        default: '["Expand", "Collapse"]',
    },
    {
        props: "onClear",
        description: "点击清空按钮时的回调函数",
        type: "() => void",
        default: "",
    },
    {
        props: "onSubmit",
        description: "点击提交按钮时的回调函数",
        type: "() => void",
        default: "",
    },
    {
        props: "onAdvancedToggle",
        description: "点击展开/收起操作按钮的回调函数",
        type: "(prevRenderCount: number) => void",
        default: "",
    },
];
export default () => (React.createElement(DocBlock, { id: "r-form-footer", title: "RFormFooter" },
    React.createElement(RTable, { pagination: false, columns: columns, dataSource: dataSource })));
