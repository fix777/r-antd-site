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
        tooltip: true,
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
        props: "formItems",
        description: "表单项",
        type: React.createElement("a", { href: "#form-item" }, "RFormItemProps[]"),
        default: "",
    },
    {
        props: "footer",
        description: "位于整个表单的正下方，可放置表单 Action 控件。如：查询，清空 按钮",
        type: React.createElement("span", null,
            "boolean | ",
            React.createElement("a", { href: "#r-form-footer" }, "RFormFooter")),
        default: "false",
    },
    {
        props: "onFormChange",
        description: React.createElement("span", null,
            "FormItem \u7684 ",
            React.createElement("code", { className: "code" }, "decorate: true"),
            " \u7684\u8868\u5355\u63A7\u4EF6\u503C\u53D1\u751F\u53D8\u5316\u65F6\u89E6\u53D1"),
        type: "(changedFields: any) => void",
        default: "",
    },
];
export default () => (React.createElement(DocBlock, { title: "RForm", href: "#r-form" },
    React.createElement(RTable, { pagination: false, columns: columns, dataSource: dataSource })));
