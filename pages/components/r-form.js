import * as React from "react";
import LayoutBase from "./../../comps/layout-base/layout-base";
import ComponentDoc from "./../../comps/component-doc/component-doc";
import Demo from "./../../demos/r-form/demo";
import ApiRForm from "./../../demos/r-form/api-r-form";
import ApiRFormItemProps from "./../../demos/r-form/api-r-form-item-props";
import ApiRFormFooter from "./../../demos/r-form/api-r-form-footer";
import Anchor from "./../../comps/anchor/anchor";
export default ({ url }) => (React.createElement(LayoutBase, { nav: "comps" },
    React.createElement(ComponentDoc, { comp: url.query.comp },
        React.createElement(Demo, null),
        React.createElement(Anchor, { id: "api", title: "API" }),
        React.createElement(ApiRForm, null),
        React.createElement(ApiRFormItemProps, null),
        React.createElement(ApiRFormFooter, null))));
