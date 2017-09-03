import * as React from "react";

import Layout from "./../comps/layout/layout";
import Demo from "./../demos/r-form/demo";
import Api from "./../demos/r-form/api";
import Anchor from "./../comps/anchor/anchor";

export default ({ url }: any) => (
  <Layout
    comp={url.query.comp}
  >
    <Demo />
    <Anchor
      title="API"
      href="#api"
    />
    <Api />
  </Layout>
);
