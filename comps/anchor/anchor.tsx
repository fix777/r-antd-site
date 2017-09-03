import * as React from "react";

const Anchor = ({ title, id }: any) => (
  <a id={id} href={`#${id}`} className="anchor_title--wrapper">
    { title }
    <span>#</span>
  </a>
);

export default Anchor;
