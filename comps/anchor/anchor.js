import * as React from "react";
const Anchor = ({ title, id }) => (React.createElement("a", { id: id, href: `#${id}`, className: "anchor_title--wrapper" },
    title,
    React.createElement("span", null, "#")));
export default Anchor;
