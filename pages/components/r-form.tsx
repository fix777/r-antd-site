import * as React from "react";
import { Row, Col } from "antd"

import LayoutBase from "./../../comps/layout-base/layout-base";
import ComponentDoc from "./../../comps/component-doc/component-doc";
import Demo from "./../../demos/r-form/demo";
import ApiRForm from "./../../demos/r-form/api-r-form";
import ApiRFormItemProps from "./../../demos/r-form/api-r-form-item-props";
import ApiRFormFooter from "./../../demos/r-form/api-r-form-footer";
import Anchor from "./../../comps/anchor/anchor";

export default ({ url }: any) => (
  <LayoutBase
    nav="comps"
  >
    <ComponentDoc
      comp={url.query.comp}
    >
      <Demo />
      <Anchor
        id="api"
        title="API"
      />
      <ApiRForm />
      <ApiRFormItemProps />
      <ApiRFormFooter />
    </ComponentDoc>
  </LayoutBase>
);
