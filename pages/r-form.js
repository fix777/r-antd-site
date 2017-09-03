import * as React from "react";
import Layout from "./../comps/layout/layout";
import Demo from "./../demos/r-form/demo";
import Api from "./../demos/r-form/api";
import Anchor from "./../comps/anchor/anchor";
export default ({ url }) => (React.createElement(Layout, { comp: url.query.comp },
    React.createElement(Demo, null),
    React.createElement(Anchor, { title: "API", href: "#api" }),
    React.createElement(Api, null)));
