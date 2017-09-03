import * as React from "react";

import LayoutBase from "./../comps/layout-base/layout-base";

export default () => (
  <LayoutBase
    nav="statement"
    css="statement"
  >
    <div className="statement_wrapper">
      <h1>Statement</h1>
      <p>
        <code className="code">R-ANTD</code>&nbsp;
        基于蚂蚁金服{" 🐜 "}开源组件
        <code className="code">
          <a
            target="_blank"
            href="https://ant.design/"
          >
            Ant Design
          </a>
        </code>
        开发，其目的在于在降低 Ant Design 强大的灵活性，
        从而便于实现类似页面或组件的快速开发和复用。
      </p>
      <p>
        如果
        <code className="code">R-ANTD</code>
        对于
        <code className="code">
          <a
            target="_blank"
            href="https://ant.design/"
          >
            Ant Design
          </a>
        </code>
        的使用有任何不妥的地方，
        还请联系我
        <a
          target="_blank"
          href="https://github.com/fix777"
        >
          { ` fix777 <wangguoguo.lan@gmail.com> ` }
        </a>
        改正。
      </p>
      <p>
        本站布局风格基本模仿
        <code className="code">
          <a
            target="_blank"
            href="https://ant.design/"
          >
            Ant Design
          </a>
        </code>
        如有不妥，还请指出，谢谢！
      </p>
    </div>
  </LayoutBase>
);
