import React from "react";

const Tag = ({ data, backgroundColor, textColor }) => {
  return (
    <li>
      <div
        className="tag align-center"
        style={{ backgroundColor: backgroundColor, color: textColor }}
      >
        <p className="text-md">{data.text}</p>
        <p className="text-xs padding-top-xxs">{data.displayColor}</p>
      </div>
    </li>
  );
};

export default Tag;
