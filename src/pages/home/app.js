import React from "react";

const Appa = ({ list }) => {
  return <div>{list.length && list.map((item) => <span>{item}</span>)}</div>;
};

export default Appa;
