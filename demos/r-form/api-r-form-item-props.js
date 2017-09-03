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
        props: "itemSpan",
        description: "FormItem 的 ColSpan",
        type: "number",
        default: "8",
    },
    {
        props: "decorate",
        description: (React.createElement("span", null,
            "\u662F\u5426\u542F\u7528 getFieldDecorator \u4FEE\u9970\u00A0",
            React.createElement("a", { target: "_blank", href: "https://ant.design/components/form/#this.props.form.getFieldDecorator(id,-options)" }, "\u53C2\u8003 antd"),
            "\u3002\u00A0 \u53EA\u6709\u5F00\u542F\u540E\u7684 FormItem \u7684\u63A7\u4EF6\u503C\u53D1\u751F\u53D8\u5316\u65F6\u4F1A\u89E6\u53D1 onFormChange \u3002 \u6CE8\u610F\u9700\u8981\u5F00\u542F\u6B64\u9879\u7684 FormItem \u9700\u4F20\u5165\u552F\u4E00 id")),
        type: "boolean",
        default: "false",
    },
    {
        props: "decoratorOptions",
        description: (React.createElement("span", null,
            "\u542F\u7528 getFieldDecorator \u4FEE\u9970\u65F6\u7684\u989D\u5916\u53C2\u6570\u00A0",
            React.createElement("a", { target: "_blank", href: "https://ant.design/components/form/#getFieldDecorator(id,-options)-parameters" }, "\u53C2\u8003 antd"))),
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
export default () => (React.createElement(DocBlock, { id: "r-form-item-props", title: "RFormItemProps" },
    React.createElement(RTable, { pagination: false, columns: columns, dataSource: dataSource })));
