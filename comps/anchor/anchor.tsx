import * as React from "react";

const Anchor = ({ title, href }: any) => (
  <div className="anchor_title--wrapper">
    { title }
    <a href={href}>#</a>
    <style>{`
      .anchor_title--wrapper {
        padding: .75rem 0;
        font-size: 1rem;
        font-weight: bold;
        display: inline-block;
      }

      .anchor_title--wrapper a {
        display: none;
        padding: 0 .375rem;
      }

      .anchor_title--wrapper:hover a {
        display: inline-block;
      }
    `}</style>
  </div>
);

export default Anchor;
